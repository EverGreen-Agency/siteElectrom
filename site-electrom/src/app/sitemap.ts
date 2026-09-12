import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '../data/blogPosts';

function parseDate(dateStr: string): Date {
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) return d;
  }
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electrom.eng.br';
  
  const staticRoutes: Array<{
    route: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/solucoes', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/cases', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/sobre', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/sustentabilidade', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/blog', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/contato', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/legal', priority: 0.4, changeFrequency: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const blogPosts = getAllBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseDate(post.date),
    changeFrequency: 'monthly',
    priority: post.featured ? 0.85 : 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
