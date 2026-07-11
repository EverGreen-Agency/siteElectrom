# ⚡ Instrução Criativa: Site da Electrom Engenharia

> Criar um site digital de alto impacto para posicionar a Electrom como referência em **Engenharia das Energias**, refletindo sua autoridade técnica, sustentabilidade, eficiência e legado de 25+ anos no setor elétrico e solar. O site deve unir beleza, fluidez, interatividade e storytelling para elevar sua presença digital a nível premium.

teste de fork

---

## 🎯 Objetivo Estratégico

* Comunicar expertise e legado
* Mostrar autoridade e impacto com projetos reais
* Gerar diagnósticos e novos leads
* Educar e nutrir decisores empresariais
* Consolidar a marca como “Engenharia das Energias”

---

## 🧱 Estrutura (Sitemap)

* `/` → Home: Visão geral, diferenciais, CTA direto - OK 
* `/sobre` → Legado, valores, histórico - OK
* `/solucoes` → Energia Solar, Eficiência, Projetos Elétricos, Consultoria - OK 
* `/cases` → Antes/depois, segmentos atendidos, impacto - OK
* `/blog` → Insights sobre energia (CMS: WordPress headless futuramente)
* `/contato` → Fale com especialista, WhatsApp, formulário - OK
* `/sustentabilidade` → Impacto ambiental, ODS, ESG - OK
* `/legal` → Termos e política - OK

---

## 🧠 Stack & Tech

* **Base:** Next.js + TailwindCSS + Framer Motion
* **Hospedagem:** Vercel (deploy automatizado)
* **Blog Futuro:** WordPress Headless (API REST/GraphQL)
* **Formulários e Leads:** Email via Resend, dados via Upstash/Firebase

---

## 🎨 Estilo e Animação

* Scroll horizontal em seções chave (ex: "Linha do tempo", "Cases")
* Microinterações em hover e scroll reveal
* Transições suaves com framer-motion
* Parallax em banners
* Modo escuro opcional
* Botões com sombra inteligente, bordas arredondadas, tipografia elegante (Satoshi/Inter)

---

## 🧩 Componentes Interativos

* `<Navbar />` sticky com transição ao scroll
* `<HeroSection />` com headline animada e CTA
* `<ScrollHorizontalPanel />` para cases e histórico
* `<ServiceCard />` com hover detalhado
* `<CaseCarousel />` antes/depois com indicadores de economia
* `<ContactForm />` com validação e integração API
* `<BlogPreview />` preparado para consumo via API WP futura
* `<Footer />` institucional com link único de proposta

---

## 🧭 Navegação & Experiência

* Experiência narrativa, fluida e com ritmo visual
* Design responsivo (mobile-first)
* Padrões de acessibilidade (WCAG)
* SEO técnico com next-seo, OG tags dinâmicas e sitemap.xml

---

## 🪄 Início da Execução

1. Criar layout em Next.js com estrutura modular de componentes
2. Implementar hero interativo com CTA para diagnóstico
3. Wireframe animado das soluções principais
4. Estrutura prévia de blog/headless WP para integração futura

**Este site é a nova identidade digital da engenharia de energia no Brasil.**


# Tecnologias Sugestivas
- Next,js
- React
- Tailwind CSS

## Hospedagem/Infraestrutura:
- Vercel
- Usaremos Wordpress como CMS para conteúdo do Blog via REST API, plugins: Enable CORS, API REST