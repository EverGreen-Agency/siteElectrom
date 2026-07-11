# 🔗 Integração WordPress - Gestão de Parceiros

## 📋 Visão Geral

A integração WordPress permitirá que a equipe da Electrom gerencie os parceiros através de uma interface amigável, sem necessidade de alterar código. Os dados serão consumidos via REST API do WordPress.

---

## 🏗️ Arquitetura da Integração

### **Frontend (Next.js)**
```
├── usePartners Hook → Consome WordPress REST API
├── PartnersCarousel → Renderiza dados dinâmicos  
├── Fallback Local → JSON como backup
└── Cache Strategy → SWR ou React Query
```

### **Backend (WordPress)**
```
├── Custom Post Type: "Partners"
├── REST API Endpoints
├── Media Library → Logos dos parceiros
└── Admin Dashboard → Interface de gestão
```

---

## 🛠️ Implementação WordPress

### **1. Custom Post Type - Partners**
```php
// functions.php
function create_partners_post_type() {
    register_post_type('partners', array(
        'labels' => array(
            'name' => 'Parceiros',
            'singular_name' => 'Parceiro'
        ),
        'public' => true,
        'show_in_rest' => true, // Habilita REST API
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-groups'
    ));
}
add_action('init', 'create_partners_post_type');
```

### **2. Custom Fields (ACF ou Meta Boxes)**
- **Partner Type:** Strategic, Regular, Supporter
- **Partner Category:** Technology, Solar, Institutional  
- **Website URL:** Link externo
- **Priority:** 1, 2, 3 (ordenação)
- **Link Type:** External, Internal, Modal, None
- **Description:** Texto descritivo

### **3. REST API Endpoints**
```
GET /wp-json/wp/v2/partners
GET /wp-json/wp/v2/partners/{id}
POST /wp-json/wp/v2/partners (autenticado)
PUT /wp-json/wp/v2/partners/{id} (autenticado)
DELETE /wp-json/wp/v2/partners/{id} (autenticado)
```

---

## 🔧 Configuração Técnica

### **1. Plugins WordPress Necessários**
```
✅ Advanced Custom Fields (ACF)
✅ Enable CORS for REST API
✅ JWT Authentication for WP REST API (se autenticação necessária)
✅ WordPress REST API Cache (performance)
```

### **2. Variáveis de Ambiente (.env.local)**
```env
NEXT_PUBLIC_WP_API_URL=https://blog.electrom.com.br/wp-json/wp/v2
WP_API_USERNAME=admin_user
WP_API_PASSWORD=secure_password
NEXT_PUBLIC_ENABLE_CMS=true
```

### **3. Hook usePartners Atualizado**
```javascript
const { partners, loading, error } = usePartners({
  useCMS: process.env.NEXT_PUBLIC_ENABLE_CMS === 'true',
  filterByCategory: 'technology',
  sortByPriority: true
});
```

---

## 📊 Fluxo de Dados

### **Desenvolvimento/Staging**
```
JSON Local → usePartners → PartnersCarousel
```

### **Produção com WordPress**
```
WordPress CMS → REST API → usePartners → PartnersCarousel
       ↓
   (Fallback)
   JSON Local
```

---

## 🎯 Vantagens da Abordagem Híbrida

### **✅ Para Desenvolvimento**
- **Rapidez:** Não depende de WordPress configurado
- **Controle:** Dados versionados no Git
- **Simplicidade:** Alterações diretas no JSON

### **✅ Para Produção**
- **Flexibilidade:** Equipe de marketing atualiza facilmente
- **Gestão de Mídia:** Upload de logos pelo WordPress
- **Backup Automático:** Fallback para JSON local
- **SEO:** Dados estruturados do WordPress

---

## 🚀 Cronograma de Implementação

### **Fase 1: Atual**
- [x] Estrutura JSON local
- [x] Componente PartnersCarousel  
- [x] Hook usePartners preparado

### **Fase 2: WordPress Setup**
- [ ] Configurar WordPress como headless CMS
- [ ] Criar Custom Post Type "Partners"
- [ ] Configurar campos customizados (ACF)
- [ ] Habilitar CORS e REST API

### **Fase 3: Integração**
- [ ] Implementar fetchFromWordPress()
- [ ] Adicionar cache/SWR para performance
- [ ] Configurar fallback robusto
- [ ] Testes de integração

### **Fase 4: Deploy & Treinamento**
- [ ] Deploy em produção
- [ ] Migrar dados JSON → WordPress
- [ ] Treinar equipe para uso do CMS
- [ ] Documentação de usuário

---

## 🔐 Considerações de Segurança

- **CORS:** Configurado apenas para domínios da Electrom
- **Rate Limiting:** Evitar spam na API
- **Autenticação:** JWT para operações de escrita
- **Validação:** Sanitização de dados de entrada

---

## 📱 Interface de Gestão (WordPress Admin)

### **Tela de Listagem**
```
[+ Novo Parceiro]  [🔍 Buscar]  [📁 Filtros]

┌─────────────────────────────────────────────────┐
│ 🏢 WEG                     [Strategic] [⭐ 1]   │
│ 🔗 https://weg.net         [Technology]  [✏️]   │
├─────────────────────────────────────────────────┤
│ 🏢 Schneider Electric      [Strategic] [⭐ 1]   │
│ 🔗 https://se.com          [Technology]  [✏️]   │
└─────────────────────────────────────────────────┘
```

### **Tela de Edição**
```
📝 Editar Parceiro

Nome: [WEG                    ]
Tipo: [Strategic ▼]
Categoria: [Technology ▼]
Prioridade: [1 ▼]
Link: [https://weg.net        ]
Tipo de Link: [External ▼]
Logo: [📁 Escolher arquivo] weg-logo.png
Descrição: [Líder mundial em motores...]

[💾 Salvar] [👁️ Visualizar] [🗑️ Excluir]
```

---

**🎯 Resultado:** Sistema híbrido que funciona offline/desenvolvimento com JSON e online/produção com WordPress, oferecendo máxima flexibilidade e facilidade de gestão.** 