'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { wordpressService } from '../services/wordpress'

const localFallbackPosts = [
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

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      className="group glass-card rounded-2xl overflow-hidden border-white/5 hover:border-brand-blue/20 transition-all duration-500 flex flex-col justify-between h-[480px] relative"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-brand-blue text-brand-petrol text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Destaque
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 md:h-52 overflow-hidden bg-brand-dark/40 border-b border-white/5">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-3.5">
          {/* Category and Read Time */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-brand-blue font-mono font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 font-mono flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 font-light text-xs leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
          <span className="text-gray-400 font-mono text-[10px]">{post.date}</span>
          <a
            href={`/blog/${post.slug}`}
            className="flex items-center text-brand-blue hover:text-brand-cyan font-bold font-mono text-xs tracking-wider uppercase transition-all duration-300 gap-1.5"
          >
            Ler Artigo
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

    </motion.article>
  )
}

export default function BlogPreview() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    const fetchPosts = async () => {
      try {
        const data = await wordpressService.getPosts(1, 3)
        if (active) {
          if (data && data.length > 0) {
            const mappedPosts = data.map((post, idx) => {
              const media = post._embedded?.['wp:featuredmedia']?.[0]
              return {
                id: post.id,
                title: post.title?.rendered || 'Sem Título',
                excerpt: post.excerpt?.rendered
                  ? post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 110) + '...'
                  : 'Sem descrição...',
                category: 'Engenharia',
                date: new Date(post.date).toLocaleDateString('pt-BR'),
                img: media?.source_url || '/obras/UsinaCipoGuacu/IMG_20190714_112159631_HDR.jpg',
                readTime: '5 min',
                featured: idx === 0,
                slug: post.slug
              }
            })
            setPosts(mappedPosts)
          } else {
            setPosts(localFallbackPosts)
          }
        }
      } catch (err) {
        console.error('Failed to load blog posts from WordPress API:', err)
        if (active) {
          setPosts(localFallbackPosts)
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    fetchPosts()
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="blog" className="w-full py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#7AA2E4]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">
              Insights Técnicos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black leading-tight text-white mb-4">
            Blog e Opinião
          </h2>
          <p className="text-gray-400 font-light text-base max-w-2xl mx-auto">
            Conteúdo técnico e insights especializados sobre regulação, eficiência industrial e inovação fotovoltaica.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            /* Loading Skeleton Cards */
            Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i} 
                className="glass-card rounded-2xl overflow-hidden border-white/5 h-[480px] animate-pulse flex flex-col justify-between p-6"
              >
                <div className="w-full h-48 bg-white/5 rounded-xl mb-4" />
                <div className="space-y-3 flex-grow">
                  <div className="w-1/3 h-3 bg-white/5 rounded" />
                  <div className="w-3/4 h-5 bg-white/5 rounded" />
                  <div className="w-full h-12 bg-white/5 rounded" />
                </div>
                <div className="w-full h-8 bg-white/5 rounded mt-4" />
              </div>
            ))
          ) : (
            posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))
          )}
        </div>

        {/* CTA button to all posts */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="/blog"
            className="px-8 py-4 rounded-lg bg-brand-blue text-brand-petrol font-bold tracking-wide shadow-lg hover:shadow-brand-blue/20 transition-all flex items-center gap-2.5 cursor-pointer w-fit mx-auto"
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(122, 162, 228, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Todos os Artigos
            <svg className="w-4 h-4 text-brand-petrol" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

