import worksData from './works-data.json';

export interface NotableWork {
  client: string;
  project: string;
  description: string;
  category: string;
}

export interface CityWorkItem {
  city: string;
  state: string;
  totalWorks: number;
  slug: string;
  categories: {
    Solar?: number;
    Elétrica?: number;
    Caldeiraria?: number;
    Outros?: number;
    'Gerenciamento de Obras'?: number;
  };
  notableWorks: NotableWork[];
  coords: [number, number];
}

export function slugifyCity(cityName: string): string {
  return cityName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export interface RawCityWork {
  city: string;
  state: string;
  totalWorks: number;
  categories: {
    Solar?: number;
    Elétrica?: number;
    Caldeiraria?: number;
    Outros?: number;
    'Gerenciamento de Obras'?: number;
  };
  notableWorks: NotableWork[];
  coords: [number, number];
}

/**
 * Retorna todas as cidades com obras mapeadas, enriquecidas com slug canônico
 */
export function getAllCitiesWithWorks(): CityWorkItem[] {
  return (worksData as RawCityWork[]).map((item) => ({
    ...item,
    slug: slugifyCity(item.city),
  }));
}

/**
 * Retorna as principais cidades em volume de projetos executados para estratégias de pSEO
 */
export function getTopCitiesForPSEO(limit = 20): CityWorkItem[] {
  const all = getAllCitiesWithWorks();
  return all
    .filter((c) => c.totalWorks >= 3)
    .sort((a, b) => b.totalWorks - a.totalWorks)
    .slice(0, limit);
}

/**
 * Busca uma cidade específica por slug
 */
export function getCityBySlug(slug: string): CityWorkItem | undefined {
  const all = getAllCitiesWithWorks();
  return all.find((c) => c.slug === slug);
}
