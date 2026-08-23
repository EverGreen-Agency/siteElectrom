import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaArrowLeft, 
  FaArrowRight, 
  FaTag, 
  FaBolt, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaListUl 
} from 'react-icons/fa';
import { wordpressService, Post as WPPost } from '../../../services/wordpress';
import { 
  getBlogPostBySlug, 
  getRelatedBlogPosts, 
  getAllBlogPosts, 
  BlogPostItem 
} from '../../../data/blogPosts';
import ArticleShareBar from '../../../components/ArticleShareBar';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const localPosts = getAllBlogPosts();
  return localPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const localPost = getBlogPostBySlug(slug);

  if (localPost) {
    return {
      title: `${localPost.title} | ElectROM Engenharia`,
      description: localPost.excerpt,
      alternates: {
        canonical: `https://electrom.eng.br/blog/${slug}`,
      },
      openGraph: {
        title: `${localPost.title} | ElectROM Engenharia`,
        description: localPost.excerpt,
        url: `https://electrom.eng.br/blog/${slug}`,
        siteName: 'ElectROM Engenharia',
        locale: 'pt_BR',
        type: 'article',
        images: [
          {
            url: localPost.image,
            width: 1200,
            height: 630,
            alt: localPost.title,
          },
        ],
      },
    };
  }

  // Tentar no WordPress
  try {
    const wpPost = await wordpressService.getPostBySlug(slug);
    if (wpPost) {
      const wpTitle = (wpPost.title?.rendered || 'Artigo Técnico').replace(/&amp;/g, '&');
      const wpExcerpt = wpPost.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim() || 'Artigo técnico especializado.';
      return {
        title: `${wpTitle} | ElectROM Engenharia`,
        description: wpExcerpt,
        alternates: {
          canonical: `https://electrom.eng.br/blog/${slug}`,
        },
      };
    }
  } catch {
    // Silent
  }

  return {
    title: 'Artigo | ElectROM Engenharia',
    description: 'Artigo técnico e análises sobre engenharia elétrica e energia solar.',
  };
}

async function fetchPost(slug: string): Promise<BlogPostItem | null> {
  // 1. Tentar primeiro na base técnica local
  const localItem = getBlogPostBySlug(slug);
  if (localItem) {
    return localItem;
  }

  // 2. Buscar no WordPress CMS
  try {
    const wpPost = await wordpressService.getPostBySlug(slug);
    if (wpPost) {
      const wpTitle = wpPost.title?.rendered || 'Sem título';
      const wpContent = wpPost.content?.rendered || '';
      const wpDate = wpPost.date ? new Date(wpPost.date).toLocaleDateString('pt-BR') : 'Recente';

      const embedded = wpPost._embedded as unknown as {
        'wp:featuredmedia'?: Array<{ source_url?: string }>;
        'author'?: Array<{ name?: string }>;
        'wp:term'?: Array<Array<{ name?: string }>>;
      } | undefined;

      const wpImg = embedded?.['wp:featuredmedia']?.[0]?.source_url || '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg';
      const wpAuthor = embedded?.['author']?.[0]?.name || 'Equipe ElectROM';
      const wpCategoryName = embedded?.['wp:term']?.[0]?.[0]?.name || 'Engenharia de Energias';

      let excerptText = '';
      if ('excerpt' in wpPost && wpPost.excerpt?.rendered) {
        excerptText = wpPost.excerpt.rendered.replace(/<[^>]+>/g, '').trim();
      } else if (wpContent) {
        excerptText = wpContent.replace(/<[^>]+>/g, '').slice(0, 160) + '...';
      }

      return {
        id: wpPost.id,
        slug: slug,
        title: wpTitle.replace(/&amp;/g, '&'),
        excerpt: excerptText,
        content: wpContent,
        date: wpDate,
        readTime: '6 min de leitura',
        author: {
          name: wpAuthor,
          role: 'Especialista em Engenharia | ElectROM',
          avatar: '/ElectROM - Horizontal.png'
        },
        category: {
          id: 'artigo-tecnico',
          name: wpCategoryName
        },
        image: wpImg,
        tags: ['Engenharia Elétrica', 'Energia Industrial', 'ElectROM'],
        featured: false
      };
    }
  } catch {
    // Silent fallback
  }

  return null;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-petrol text-white relative overflow-hidden flex items-center justify-center py-20 px-6">
        <div className="absolute inset-0 blueprint-bg opacity-20 pointer-events-none" />
        <div className="max-w-xl mx-auto text-center relative z-10 space-y-6 glass-card p-10 rounded-3xl border-white/5">
          <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 text-brand-blue flex items-center justify-center mx-auto text-2xl">
            <FaBolt />
          </div>
          <h1 className="text-3xl font-display font-bold text-white">Artigo Não Encontrado</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            O artigo técnico que você tentou acessar não foi localizado ou foi renomeado.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/blog"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-blue text-brand-petrol font-bold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 hover:brightness-110 transition-all"
            >
              <FaArrowLeft />
              Ver Todos os Artigos
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs tracking-wider uppercase hover:bg-white/10 transition-all"
            >
              Ir para Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedBlogPosts(slug, post.category.id, 3);

  return (
    <div className="min-h-screen bg-brand-petrol text-white relative overflow-hidden">
      {/* Background Grid & Aurora */}
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />
      <div className="absolute top-[5%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[160px] opacity-10 bg-brand-blue pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[180px] opacity-10 bg-brand-cyan pointer-events-none" />

      {/* Hero / Header Container */}
      <header className="relative z-10 pt-12 pb-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-blue transition-colors group"
            >
              <FaArrowLeft className="text-[10px] group-hover:-translate-x-1 transition-transform" />
              <span>Voltar ao Blog</span>
            </Link>

            <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-brand-cyan truncate max-w-[200px] sm:max-w-xs">{post.category.name}</span>
            </div>
          </div>

          {/* Category Badge & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-mono font-semibold uppercase tracking-wider">
              <FaTag className="text-[10px] text-brand-cyan" />
              {post.category.name}
            </span>

            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-brand-blue" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-brand-cyan" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Excerpt / Lead */}
          {post.excerpt && (
            <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-4xl border-l-2 border-brand-blue/60 pl-4 py-1 mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Interactive Author & Share Bar */}
          <ArticleShareBar
            title={post.title}
            slug={post.slug}
            author={post.author}
          />
        </div>
      </header>

      {/* Featured Banner Image */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-8">
        <div className="relative h-[280px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 group">
          <Image
            src={post.image || '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg'}
            alt={post.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-black/20" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>ElectROM Engenharia © Arquivo Técnico</span>
            <span className="hidden sm:inline-block">Infraestrutura Elétrica de Alta Performance</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body (8 cols) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Key Takeaways Box (if available) */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border-l-4 border-brand-cyan border-white/5 space-y-4">
                <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs uppercase tracking-widest font-bold">
                  <FaBolt />
                  Destaques &amp; Conclusões Principais
                </div>
                <ul className="space-y-3">
                  {post.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-200 font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0 shadow-[0_0_6px_#00F0FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics Highlight Cards (if available) */}
            {post.metrics && post.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {post.metrics.map((metric, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-xl border-white/5 text-center sm:text-left space-y-1">
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-2xl sm:text-3xl font-display font-black text-brand-cyan">{metric.value}</div>
                    <div className="text-[11px] text-gray-400 font-light leading-tight">{metric.description}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Article Content Render */}
            <article className="prose-electrom text-gray-200 font-light leading-relaxed space-y-6 text-base md:text-lg">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blog-content-body"
              />
            </article>

            {/* In-Article Call to Action Card */}
            <div className="glass-card rounded-2xl p-8 border border-brand-blue/20 bg-gradient-to-br from-brand-dark/90 via-brand-petrol to-brand-dark relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-[11px] font-mono font-bold uppercase">
                <FaBolt />
                Diagnóstico de Engenharia
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Sua empresa quer avaliar a viabilidade deste projeto?
              </h3>
              <p className="text-gray-300 text-sm font-light leading-relaxed max-w-xl">
                Nossos engenheiros especialistas analisam sua fatura de energia e realizam uma simulação técnica completa sem custo inicial.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="px-6 py-3 rounded-xl bg-brand-blue text-brand-petrol font-bold font-mono text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2"
                >
                  Solicitar Avaliação Técnica
                  <FaArrowRight className="text-xs" />
                </Link>
                <a
                  href="https://wa.me/5511999620930?text=Ol%C3%A1,%20gostaria%20de%20um%20diagn%C3%B3stico%20t%C3%A9cnico%20baseado%20no%20artigo%20do%20blog."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366]/40 text-[#25D366] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <FaWhatsapp className="text-sm" />
                  WhatsApp Direto
                </a>
              </div>
            </div>

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-gray-400 mr-2 flex items-center gap-1.5">
                  <FaTag className="text-brand-blue text-xs" /> Tags do Artigo:
                </span>
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 font-mono hover:border-brand-blue/30 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Profile Box */}
            <div className="glass-card rounded-2xl p-6 border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-brand-blue/30 p-2 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.avatar || '/ElectROM - Horizontal.png'}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="text-center sm:text-left space-y-1 flex-1">
                <div className="text-base font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-brand-blue font-mono">{post.author.role}</div>
                <p className="text-xs text-gray-400 font-light leading-relaxed pt-1">
                  Corpo de engenharia especializado em infraestrutura de média e baixa tensão, subestações, conformidade regulatória e transição para matrizes renováveis.
                </p>
              </div>
            </div>

          </main>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Table of Contents (if present) */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="glass-card rounded-2xl p-6 border-white/5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-blue font-bold pb-2 border-b border-white/5">
                  <FaListUl />
                  Sumário do Artigo
                </div>
                <nav className="space-y-2 text-xs font-mono">
                  {post.tableOfContents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className="block text-gray-400 hover:text-brand-cyan transition-colors py-1 pl-2 border-l border-white/5 hover:border-brand-cyan"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Technical Consultation CTA Card */}
            <div className="glass-card rounded-2xl p-6 border border-brand-cyan/20 bg-gradient-to-b from-brand-dark/95 to-brand-petrol text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mx-auto text-xl">
                <FaPhoneAlt />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-display font-bold text-white">Consultoria Especializada</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Fale com um engenheiro eletricista sênior sobre a infraestrutura da sua indústria.
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <Link
                  href="/contato"
                  className="w-full py-3 rounded-xl bg-brand-cyan text-brand-petrol font-bold font-mono text-xs uppercase tracking-wider block hover:brightness-110 transition-all shadow-md shadow-brand-cyan/20"
                >
                  Agendar Reunião Técnica
                </Link>
                <a
                  href="tel:+5511999620930"
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-mono text-xs uppercase tracking-wider block hover:bg-white/10 transition-all"
                >
                  (11) 99962-0930
                </a>
              </div>
            </div>

            {/* Related Articles Card */}
            {relatedPosts.length > 0 && (
              <div className="glass-card rounded-2xl p-6 border-white/5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold pb-2 border-b border-white/5">
                  Artigos Recomendados
                </div>
                <div className="space-y-4">
                  {relatedPosts.map((relPost) => (
                    <Link
                      key={relPost.id}
                      href={`/blog/${relPost.slug}`}
                      className="group flex gap-3 items-center"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-brand-dark/80 flex-shrink-0 border border-white/5">
                        <Image
                          src={relPost.image || '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg'}
                          alt={relPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-mono text-brand-cyan uppercase font-semibold block truncate">
                          {relPost.category.name}
                        </span>
                        <h5 className="text-xs font-bold text-white group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                          {relPost.title}
                        </h5>
                        <span className="text-[10px] text-gray-500 font-mono block mt-0.5">
                          {relPost.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>
      </div>

      {/* Related Posts Bottom Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/5 py-16 relative z-10 bg-brand-dark/40">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-blue font-mono text-[10px] uppercase tracking-widest mb-3">
                  <FaBolt className="text-brand-cyan" />
                  Continue Lendo
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                  Artigos Técnicos Relacionados
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-mono text-brand-blue hover:text-brand-cyan font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                Ver Todo o Acervo
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.id}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden border-white/5 flex flex-col justify-between h-[420px] group"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-brand-dark">
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                        <span className="text-brand-cyan uppercase font-semibold">{rPost.category.name}</span>
                        <span>•</span>
                        <span>{rPost.date}</span>
                      </div>

                      <h4 className="text-sm md:text-base font-bold text-white group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blog/${rPost.slug}`}>
                          {rPost.title}
                        </Link>
                      </h4>

                      <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed">
                        {rPost.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-white/5 mt-2 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500">{rPost.readTime}</span>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="text-xs font-mono font-bold text-brand-blue hover:text-brand-cyan uppercase flex items-center gap-1.5 transition-colors"
                    >
                      Ler Artigo
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
