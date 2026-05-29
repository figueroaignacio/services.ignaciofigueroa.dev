import type { MetadataRoute } from 'next';

const BASE_URL = 'https://tudominio.com'; // TODO: replace with real domain
const locales = ['es', 'en'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '#services', '#pricing', '#contact'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${route}`])
        ),
      },
    }))
  );
}
