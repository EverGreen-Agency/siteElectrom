'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { wordpressService } from '../../services/wordpress';

interface Post {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  autor: string;
  categoria: string;
  imagem: string;
  slug: string;
}

const postsFallback: Post[] = [
  {
    id: 1,
    titulo: 'Como a Energia Solar está Transformando o Setor Industrial',
    resumo: 'Descubra como empresas estão reduzindo custos e impactos ambientais com sistemas fotovoltaicos.',
    data: '15/03/2024',
    autor: 'João Silva',
    categoria: 'energia-solar',
    imagem: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    slug: 'energia-solar-setor-industrial'
  },
  {
    id: 2,
    titulo: '5 Tendências em Eficiência Energética para 2024',
    resumo: 'Conheça as principais tendências que estão revolucionando a gestão de energia nas empresas.',
    data: '10/03/2024',
    autor: 'Maria Santos',
    categoria: 'eficiencia',
    imagem: '/obras/Obras/Imagem6.png',
    slug: 'tendencias-eficiencia-energetica-2024'
  },
  {
    id: 3,
    titulo: 'Sustentabilidade: O Futuro da Energia',
    resumo: 'Análise sobre como as práticas sustentáveis estão moldando o futuro do setor energético.',
    data: '05/03/2024',
    autor: 'Pedro Costa',
    categoria: 'sustentabilidade',
    imagem: '/obras/Obras/Imagem10.png',
    slug: 'sustentabilidade-futuro-energia'
  }
];

interface WordPressPost {
  id: number;
  date?: string;
  slug?: string;
  title?: {
    rendered?: string;
  };
  excerpt?: {
    rendered?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    'author'?: Array<{
      name: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

const mapWordPressPostToLocal = (wp: WordPressPost): Post => {
  let dataFormatada = 'Sem data';
  if (wp.date) {
    try {
      const dataObj = new Date(wp.date);
      dataFormatada = dataObj.toLocaleDateString('pt-BR');
    } catch {
      dataFormatada = wp.date;
    }
  }

  const imagem = wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg';
  const autor = wp._embedded?.['author']?.[0]?.name || 'ElectROM';

  let categoria = 'sustentabilidade';
  if (wp._embedded?.['wp:term'] && wp._embedded?.['wp:term']?.[0]) {
    const termos = wp._embedded?.['wp:term']?.[0];
    if (termos && termos.length > 0) {
      const slugsPermitidos = ['energia-solar', 'eficiencia', 'sustentabilidade', 'inovacao'];
      const termoEncontrado = termos.find((t: { slug: string }) => slugsPermitidos.includes(t.slug));
      categoria = termoEncontrado ? termoEncontrado.slug : termos[0].slug || 'sustentabilidade';
    }
  }

  const resumoCru = wp.excerpt?.rendered || '';
  const resumoLimpo = resumoCru.replace(/<[^>]*>/g, '').trim();

  return {
    id: wp.id,
    titulo: wp.title?.rendered || 'Sem Título',
    resumo: resumoLimpo || 'Leia mais sobre este assunto acessando a matéria completa.',
    data: dataFormatada,
    autor: autor,
    categoria: categoria,
    imagem: imagem,
    slug: wp.slug || ''
  };
};

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'energia-solar', nome: 'Energia Solar' },
    { id: 'eficiencia', nome: 'Eficiência' },
    { id: 'sustentabilidade', nome: 'Sustentabilidade' },
    { id: 'inovacao', nome: 'Inovação' }
  ];

  useEffect(() => {
    const carregarPosts = async () => {
      try {
        setLoading(true);
        const postsWP = await wordpressService.getPosts(1, 20);
        
        if (postsWP && postsWP.length > 0) {
          const postsMapeados = postsWP.map(mapWordPressPostToLocal);
          setPosts(postsMapeados);
          setError(null);
        } else {
          setPosts(postsFallback);
        }
      } catch (err) {
        console.error('Erro na conexão com o CMS WordPress:', err);
        setError('Não foi possível conectar ao CMS. Exibindo contingência local.');
        setPosts(postsFallback);
      } finally {
        setLoading(false);
      }
    };

    carregarPosts();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: 'Inscrição de Newsletter',
          email: newsletterEmail,
          telefone: '(11) 99999-9999', // Campo obrigatório simulado para newsletter
          assunto: 'Newsletter',
          mensagem: 'Usuário solicitou inscrição na newsletter do blog.',
        }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 5000);
      } else {
        setNewsletterStatus('error');
      }
    } catch (err) {
      console.error('Erro ao enviar newsletter:', err);
      setNewsletterStatus('error');
    }
  };

  const postsFiltrados = posts.filter(post => {
    const matchSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'todos' || post.categoria === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="bg-brand-dark min-h-screen text-white relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      {/* Decorative Aurora glow */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10 bg-brand-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Insights & Artigos
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black leading-tight text-white">
            Blog da Engenharia
          </h1>
          <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto">
            Notícias técnicas, inovações e artigos especializados sobre regulação e eficiência energética industrial.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 glass-card p-6 rounded-2xl border-white/5 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black/45 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue/60 text-white placeholder-gray-500 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none"
              />
              <FaSearch className="absolute left-3.5 top-3.5 text-gray-500" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setSelectedCategory(categoria.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === categoria.id
                      ? 'bg-brand-blue text-brand-petrol shadow-lg shadow-brand-blue/20'
                      : 'bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {categoria.nome}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Warning messages */}
        {error && (
          <div className="mb-8 p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-xl text-brand-gold text-xs flex items-center gap-2 max-w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>{error}</span>
          </div>
        )}

        {/* Grid de Posts / Skeleton Loading */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="glass-card rounded-2xl overflow-hidden border-white/5 h-[480px] animate-pulse flex flex-col justify-between p-6">
                <div className="w-full h-48 bg-white/5 rounded-xl mb-4" />
                <div className="space-y-3 flex-grow">
                  <div className="w-1/3 h-3 bg-white/5 rounded" />
                  <div className="w-3/4 h-5 bg-white/5 rounded" />
                  <div className="w-full h-12 bg-white/5 rounded" />
                </div>
                <div className="w-full h-8 bg-white/5 rounded mt-4" />
              </div>
            ))}
          </div>
        ) : postsFiltrados.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border-white/5">
            <p className="text-lg text-gray-400 font-light">Nenhuma publicação encontrada para a busca.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsFiltrados.map((post) => (
              <article 
                key={post.id} 
                className="group glass-card glass-card-hover rounded-2xl overflow-hidden border-white/5 flex flex-col justify-between h-[480px] relative transition-all duration-500"
              >
                <div>
                  {/* Post Image */}
                  <div className="relative h-48 md:h-52 overflow-hidden bg-brand-dark/40 border-b border-white/5">
                    <Image
                      src={post.imagem || '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg'}
                      alt={post.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                  </div>

                  {/* Post Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta */}
                    <div className="flex items-center text-[10px] font-mono text-gray-400 justify-between">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-brand-blue" />
                        {post.data}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaUser className="text-brand-blue" />
                        {post.autor}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 leading-tight">
                      <a href={`/blog/${post.slug}`} className="hover:text-brand-blue transition-colors">
                        {post.titulo}
                      </a>
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-300 font-light text-xs leading-relaxed line-clamp-3">
                      {post.resumo}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center text-[10px] font-mono text-brand-blue font-bold uppercase tracking-wider">
                    <FaTag className="mr-1 text-xs text-brand-cyan" />
                    {categorias.find(cat => cat.id === post.categoria)?.nome || 'Energia'}
                  </span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-brand-blue hover:text-brand-cyan font-bold font-mono text-xs tracking-wider uppercase transition-all duration-300 gap-1.5"
                  >
                    Ler Artigo
                    <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-20 glass-card rounded-3xl p-8 lg:p-12 border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white">
              Assine Nossas Atualizações Técnicas
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Receba análises regulatórias de energia, relatórios de viabilidade solar e novidades de descarbonização diretamente no seu e-mail corporativo.
            </p>

            <AnimatePresence mode="wait">
              {newsletterStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl text-[#10B981] text-sm"
                >
                  Inscrição efetuada com sucesso! Você receberá nosso próximo informativo.
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail corporativo"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/60 transition-all outline-none"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="px-6 py-3 rounded-lg bg-brand-blue text-brand-petrol font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-brand-blue/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {newsletterStatus === 'loading' ? 'Inscrevendo...' : 'Inscrever-se'}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;