import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ElectROM.eng.br';
  const routes = [
    '',
    '/sobre',
    '/solucoes',
    '/blog',
    '/contato',
    '/cases',
    '/sustentabilidade',
    '/legal',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
