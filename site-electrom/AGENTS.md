# ElectROM Engenharia — Instruções do Repositório & Memória de Agente

> **Atenção Agente:** Esta pasta (`site-electrom`) contém a aplicação web Next.js 15 oficial e ativa do site da **ElectROM Engenharia**. Todo o desenvolvimento, novos posts, componentes e manutenção acontecem exclusivamente aqui.

---

## 1. Estrutura do App

```
site-electrom/
├── package.json           # Scripts: npm run dev, build, lint
├── public/                # Assets estáticos, imagens de obras e blog (/blog, /obras)
├── src/
│   ├── app/               # Rotas Next.js App Router (home, sobre, solucoes, cases, sustentabilidade, blog, contato)
│   │   ├── blog/          # Listagem do blog e páginas dinâmicas [slug]
│   ├── components/        # Componentes reutilizáveis (Navbar, Footer, Hero, TrustBar, etc.)
│   ├── data/              # Modelos de dados SRP (blogPosts.ts, solutions.ts, company.ts, cases.ts)
│   └── styles/            # globals.css (incluindo .blog-content-body para tipografia técnica)
```

---

## 2. Comandos Principais

- **Desenvolvimento Local:** `npm run dev` (disponível em `http://localhost:3000`)
- **Validação de Build:** `npm run build` (valida TypeScript, geração estática SSG e empacotamento)
- **Verificação de Linter:** `npm run lint`

---

## 3. Identidade da Empresa e Diretrizes Técnicas

- **Razão Social:** ElectROM Engenharia (Fundada em 1995, mais de 30 anos de atuação).
- **Core Business:** Engenharia elétrica de média e alta tensão, subestações e cabines primárias, usinas solares fotovoltaicas turn-key, sistemas de armazenamento BESS, migração para o Mercado Livre de Energia (ACL) e laudos de SPDA (NBR 5419) e NR-10.
- **Portfólio Comprovado:** Mais de 451 obras entregues, mais de 1.800 clientes atendidos e mais de 100 MWp de projetos homologados.

---

## 4. Design System & Padrões Visuais

- **Paleta de Cores:**
  - Fundo Principal: `bg-brand-petrol` (`#060c0a` / `#040807`)
  - Acentos Primários: `brand-blue` (`#7AA2E4`), `brand-cyan` (`#00F0FF`)
  - Acentos de Contraste: `white` (`#FFFFFF`), cinza suave (`#cbd5e1`, `#94a3b8`)
- **Efeitos de Interface:**
  - `blueprint-bg`: Grid técnico em linhas sutis.
  - `glass-card` / `glass-card-hover`: Cards com backdrop blur translúcido e bordas `border-white/5`.
  - `.blog-content-body`: Estilização tipográfica editorial para artigos técnicos (h2 com espaçamento amplo `mt-12 mb-5`, parágrafos `mb-6`, figuras inline `.blog-inline-figure` e tabelas responsivas).

---

## 5. Regras Editoriais do Blog

- **Imagens de Capa:** Cada artigo **deve ter uma capa 100% exclusiva e em alta resolução** (mínimo 1200x630, proporção 16:9), armazenada em `/public/blog/` ou `/public/obras/`. Nunca reutilizar a mesma capa em dois posts diferentes.
- **Imagens Inline:** Artigos longos devem conter figuras técnicas explicativas (`<figure class="blog-inline-figure">`) com diagramas, fotos de obras reais ou painéis elétricos acompanhadas de `<figcaption>`.
- **Compatibilidade de URLs:** Qualquer alteração de slug deve ser registrada em `aliasMap` dentro de `src/data/blogPosts.ts` para garantir redirecionamento transparente e integridade de SEO.
