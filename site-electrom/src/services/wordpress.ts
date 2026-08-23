import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// URL da API do WordPress
const WORDPRESS_API_URL = 'https://wp.ElectROM.eng.br/wp-json/wp/v2';

// Configuração do axios
const api = axios.create({
    baseURL: WORDPRESS_API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Interceptor para adicionar headers e timestamp
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Garante que a URL não contenha 'certificado' para endpoints de autoridade
    if (config.url?.includes('autoridade')) {
      config.url = config.url.replace('/certificado/autoridade', '/autoridade');
    }
    
    // Adiciona timestamp para evitar cache
    const timestamp = new Date().getTime();
    config.params = {
      ...config.params,
      _: timestamp
    };
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.code === 'ERR_NETWORK') {
      const config = error.config;
      if (config?.params?._embed) {
        delete config.params._embed;
        try {
          return await axios(config);
        } catch {
          // Silent fallback
        }
      }
    }
    return Promise.reject(error);
  }
);

export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface AutoridadePost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  template: string;
  meta: {
    [key: string]: unknown;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          full?: {
            source_url: string;
          };
          medium?: {
            source_url: string;
          };
          thumbnail?: {
            source_url: string;
          };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
  yoast_head_json?: {
    title: string;
    description: string;
    og_title: string;
    og_description: string;
    og_image?: Array<{
      url: string;
      width: number;
      height: number;
    }>;
    twitter_card: string;
    schema: {
      [key: string]: unknown;
    };
  };
}

export interface Certificate {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    institution: string;
    issue_date: string;
    certificate_url: string;
    image_url: string;
  };
}

export interface Partner {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    partner_type?: string;
    partner_category?: string;
    website_url?: string;
    priority?: number;
    link_type?: string;
    description?: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export const wordpressService = {
  // Testar conexão com a API
  async testConnection(): Promise<boolean> {
    try {
      await api.get('');
      return true;
    } catch (error) {
      console.error('Erro ao testar conexão:', error);
      return false;
    }
  },

  // Buscar posts do blog
  async getPosts(page = 1, perPage = 10): Promise<Post[]> {
    try {
      const response = await api.get('/posts', {
        params: {
          page,
          per_page: perPage,
          _embed: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      return [];
    }
  },

  // Buscar um post específico por ID
  async getPost(id: number): Promise<Post | null> {
    try {
      const response = await api.get(`/posts/${id}`, {
        params: {
          _embed: true
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar post ${id}:`, error);
      return null;
    }
  },

  // Buscar um post específico por SLUG
  async getPostBySlug(slug: string): Promise<Post | null> {
    try {
      const response = await api.get('/posts', {
        params: {
          slug: slug,
          _embed: true
        }
      });
      if (Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0];
      }
      return null;
    } catch {
      // Falha silenciosa para fallback local imediato
      return null;
    }
  },

  // Buscar um post de autoridade por SLUG (compatibilidade)
  async getAutoridadePostBySlug(slug: string): Promise<AutoridadePost | null> {
    try {
      const response = await api.get('/autoridade', {
        params: {
          slug: slug,
          _embed: true
        }
      });
      if (Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0];
      }
      return null;
    } catch {
      // Falha silenciosa para fallback local imediato
      return null;
    }
  },

  // Buscar certificados
  async getCertificates(): Promise<Certificate[]> {
    try {
      const response = await api.get('/certificado', {
        params: {
          per_page: 100,
          _embed: true
        }
      });
      return response.data || [];
    } catch {
      return [];
    }
  },

  // Buscar parceiros cadastrados no WordPress Headless
  async getPartners(): Promise<Partner[]> {
    try {
      const response = await api.get('/partners', {
        params: {
          per_page: 100,
          _embed: true
        }
      });
      return response.data || [];
    } catch {
      return [];
    }
  },

  // Buscar posts de autoridade com paginação
  async getAutoridadePosts(page = 1, perPage = 10): Promise<AutoridadePost[]> {
    try {
      const response = await api.get('/autoridade', {
        params: {
          page,
          per_page: perPage,
          _embed: true
        }
      });
      return response.data || [];
    } catch {
      return [];
    }
  },

  // Buscar um post específico de autoridade
  async getAutoridadePost(id: number): Promise<AutoridadePost | null> {
    try {
      const response = await api.get(`/autoridade/${id}`, {
        params: {
          _embed: true
        }
      });
      return response.data || null;
    } catch {
      return null;
    }
  },

  // Método para testar a conexão com a API
  async testAPI(): Promise<boolean> {
    try {
      const response = await api.get('');
      return response.status === 200;
    } catch {
      return false;
    }
  }
}; 