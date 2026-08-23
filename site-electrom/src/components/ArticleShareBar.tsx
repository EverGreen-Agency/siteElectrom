'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaUser, 
  FaShareAlt, 
  FaWhatsapp, 
  FaLinkedin, 
  FaTwitter, 
  FaLink, 
  FaCheck 
} from 'react-icons/fa';

interface ArticleShareBarProps {
  title: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export default function ArticleShareBar({ title, slug, author }: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(`https://electrom.eng.br/blog/${slug}`);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(currentUrl || window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {
      // Fallback
    }
  };

  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${currentUrl}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-brand-dark/90 border border-brand-blue/30 p-1.5 flex items-center justify-center overflow-hidden flex-shrink-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              width={48}
              height={48}
              className="object-contain"
            />
          ) : (
            <FaUser className="text-brand-blue text-lg" />
          )}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{author.name}</div>
          <div className="text-xs text-gray-400 font-light">{author.role}</div>
        </div>
      </div>

      {/* Social Share Buttons */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-gray-400 mr-2 flex items-center gap-1.5">
          <FaShareAlt className="text-brand-blue" /> Compartilhar:
        </span>
        
        <a
          href={shareUrls.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no WhatsApp"
          className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center text-sm transition-all"
        >
          <FaWhatsapp />
        </a>

        <a
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no LinkedIn"
          className="w-9 h-9 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/30 text-[#0077B5] hover:bg-[#0077B5] hover:text-white flex items-center justify-center text-sm transition-all"
        >
          <FaLinkedin />
        </a>

        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no X (Twitter)"
          className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/15 hover:text-white flex items-center justify-center text-sm transition-all"
        >
          <FaTwitter />
        </a>

        <button
          onClick={handleCopyLink}
          aria-label="Copiar link do artigo"
          className="relative px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-blue/40 text-gray-300 hover:text-white flex items-center gap-1.5 text-xs font-mono transition-all cursor-pointer"
        >
          {copied ? <FaCheck className="text-brand-cyan" /> : <FaLink />}
          <span>{copied ? 'Copiado!' : 'Copiar'}</span>
        </button>
      </div>
    </div>
  );
}
