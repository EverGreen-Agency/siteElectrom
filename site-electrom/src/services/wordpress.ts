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

// Interceptor para adicionar informações de debug
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
    
    console.log('Fazendo requisição para:', {
      url: `${config.baseURL}${config.url}`,
      method: config.method,
      headers: config.headers,
      params: config.params
    });
    
    return config;
  },
  (error: AxiosError) => {
    console.error('Erro na configuração da requisição:', error);
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        if (error.code === 'ERR_NETWORK') {
            // Tenta novamente sem _embed
            const config = error.config;
            if (config?.params?._embed) {
                delete config.params._embed;
                try {
                    return await axios(config);
                } catch (retryError) {
                    console.error('Erro na segunda tentativa:', retryError);
                    throw retryError;
                }
            }
        }
        throw error;
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

  // Buscar um post específico
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

  // Buscar certificados
  async getCertificates(): Promise<Certificate[]> {
    try {
      console.log('Tentando buscar certificados...');
      
      // Tentar primeiro a rota padrão
      try {
        const response = await api.get('/certificado', {
          params: {
            per_page: 100,
            _embed: true
          }
        });
        console.log('Resposta da API:', response.data);
        return response.data;
      } catch {
        console.log('Tentando rota alternativa...');
        // Se falhar, tentar sem _embed
        const response = await api.get('/certificado', {
          params: {
            per_page: 100
          }
        });
        return response.data;
      }
    } catch (error) {
      const err = error as AxiosError;
      console.error('Erro detalhado:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
        headers: err.response?.headers,
        url: WORDPRESS_API_URL
      });
      return [];
    }
  },

  // Buscar parceiros cadastrados no WordPress Headless
  async getPartners(): Promise<Partner[]> {
    try {
      console.log('Buscando parceiros do WordPress...');
      const response = await api.get('/partners', {
        params: {
          per_page: 100,
          _embed: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar parceiros do WordPress:', error);
      return [];
    }
  },

  // Buscar posts de autoridade com paginação
  async getAutoridadePosts(page = 1, perPage = 10): Promise<AutoridadePost[]> {
    try {
      // Primeira tentativa com _embed
      const response = await api.get('/autoridade', {
        params: {
          page,
          per_page: perPage,
          _embed: true
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar posts de autoridade:', error);
      
      // Se falhar, tenta sem _embed
      try {
        const response = await api.get('/autoridade', {
          params: {
            page,
            per_page: perPage
          }
        });
        return response.data;
      } catch (retryError) {
        console.error('Erro na segunda tentativa:', retryError);
        return [];
      }
    }
  },

  // Buscar um post específico de autoridade
  async getAutoridadePost(id: number): Promise<AutoridadePost | null> {
    try {
      console.log(`Buscando post de autoridade ${id}...`);
      const response = await api.get(`/autoridade/${id}`, {
        params: {
          _embed: true
        }
      });
      console.log('Post de autoridade encontrado:', response.data.id);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar post de autoridade ${id}:`, error);
      return null;
    }
  },

  // Método para testar a conexão com a API
  async testAPI(): Promise<boolean> {
    try {
      const response = await api.get('');
      console.log('API WordPress disponível:', response.status === 200);
      return response.status === 200;
    } catch (error) {
      console.error('API WordPress não disponível:', error);
      return false;
    }
  }
}; 