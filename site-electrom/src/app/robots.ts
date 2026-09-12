import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'Bytespider',
          'Meta-ExternalAgent',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://electrom.eng.br/sitemap.xml',
  };
}
