'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { wordpressService } from '../services/wordpress'

export interface BlogPost {
  id: number | string
  title: string
  category: string
  date: string
  excerpt: string
  img: string
  readTime: string
  featured: boolean
  slug: string
}

const localFallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Como Reduzir Custos com Energia Solar na Indústria',
    category: 'Energia Solar',
    date: '10/06/2024',
    excerpt: 'Descubra estratégias práticas para maximizar a economia de energia em grandes plantas fabris com minigeração solar e payback acelerado.',
    img: '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
    readTime: '5 min',
    featured: true,
    slug: 'como-reduzir-custos-com-energia-solar'
  },
  {
    id: 2,
    title: 'Eficiência Energética: Principais Tendências Industriais',
    category: 'Eficiência',
    date: '02/06/2024',
    excerpt: 'Explore inovações tecnológicas como motores IE4/IE5 e inversores de frequência inteligentes que estão liderando a descarbonização industrial.',
    img: '/obras/Obras/Imagem6.png',
    readTime: '7 min',
    featured: false,
    slug: 'eficiencia-energetica-tendencias'
  },
  {
    id: 3,
    title: 'Mercado Livre de Energia: Guia Prático de Migração',
    category: 'Mercado Livre',
    date: '28/05/2024',
    excerpt: 'Entenda os requisitos regulatórios obrigatórios e as vantagens financeiras da portabilidade para o Ambiente de Contratação Livre (ACL).',
    img: '/obras/Obras/Imagem10.png',
    readTime: '6 min',
    featured: false,
    slug: 'mercado-livre-guia-migracao'
  }
];

interface BlogCardProps {
  post: BlogPost
  index: number
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      className="group glass-card rounded-2xl overflow-hidden border-white/5 hover:border-brand-blue/20 transition-all duration-500 flex flex-col justify-between h-[480px] relative"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-brand-blue text-brand-petrol text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Destaque
          </span>
        </div>
      )}

      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-petrol via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-gray-400 mb-3">
            <span className="text-brand-cyan uppercase font-semibold">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 mb-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-xs text-gray-400 font-normal line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-white/5">
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-brand-blue hover:text-brand-cyan transition-colors uppercase tracking-wider"
          >
            Ler Artigo Completo
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>(localFallbackPosts)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true)
        const wpPosts = await wordpressService.getPosts(1, 3)
        if (wpPosts && wpPosts.length > 0) {
          const formattedPosts: BlogPost[] = wpPosts.map((wp: any, idx: number) => ({
            id: wp.id,
            title: wp.title?.rendered || 'Sem título',
            category: wp._embedded?.['wp:term']?.[0]?.[0]?.name || 'Engenharia',
            date: new Date(wp.date).toLocaleDateString('pt-BR'),
            excerpt: wp.excerpt?.rendered?.replace(/<[^>]+>/g, '').slice(0, 140) + '...' || '',
            img: wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || localFallbackPosts[idx % 3].img,
            readTime: '5 min',
            featured: idx === 0,
            slug: wp.slug || '#'
          }))
          setPosts(formattedPosts)
        }
      } catch (err) {
        console.error('Erro ao buscar posts do WordPress. Mantendo fallback local.', err)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <section className="py-24 bg-brand-petrol border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00F0FF]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-semibold">
                Conteúdo &amp; Conhecimento
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              Artigos de Engenharia de Energia
            </h2>
          </div>

          <a
            href="/blog"
            className="px-6 py-3 rounded-lg border border-white/10 text-xs font-semibold font-mono tracking-wider uppercase text-white hover:bg-white/5 hover:border-brand-blue/30 transition-all flex items-center gap-2"
          >
            Ver Todos os Artigos
            <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[480px] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <BlogCard key={post.id} post={post} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
