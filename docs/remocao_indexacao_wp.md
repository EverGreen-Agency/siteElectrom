# Guia de Remoção de Indexação do Subdomínio WordPress (wp.electrom.eng.br)

## 1. Contexto Técnico e Embasamento Teórico

Ao adotar uma arquitetura de **CMS Headless** (onde o Next.js serve como o front-end público no domínio principal `electrom.eng.br` e o WordPress atua apenas como repositório de dados no subdomínio `wp.electrom.eng.br`), surge um problema clássico de SEO: a **duplicação de conteúdo indexado**.

Se os robôs de busca (como Googlebot) indexarem ambos os domínios, eles encontrarão as mesmas postagens e mídias. Isso viola as diretrizes de qualidade do Google, resultando em:
1. **Canibalização de Palavras-Chave:** O subdomínio administrativo concorre com o site principal nas buscas.
2. **Penalização por Conteúdo Duplicado:** O algoritmo de busca diminui a autoridade (PageRank) do domínio principal ao detectar cópias exatas do conteúdo.
3. **Vazamento de Link Juice:** Os robôs gastam orçamento de rastreamento (crawl budget) no painel de administração em vez das páginas de conversão de clientes.

Para resolver a raiz do problema de forma definitiva e segura, **não basta** ajustar o site Next.js. É necessário configurar as diretivas de indexação diretamente no servidor web e no CMS que responde pelo subdomínio `wp.electrom.eng.br`.

---

## 2. Soluções e Configurações Recomendadas

O administrador de infraestrutura da Electrom deve aplicar as duas camadas de proteção a seguir no servidor onde o WordPress (`wp.electrom.eng.br`) está hospedado.

### Camada 1: Arquivo `robots.txt` no WordPress (Bloqueio de Rastreamento)

Crie ou edite o arquivo `robots.txt` localizado na raiz do diretório público de instalação do WordPress no subdomínio `wp.electrom.eng.br` (ex: `/var/www/html/wp/robots.txt`):

```text
User-agent: *
Disallow: /
```

*Nota: Esta diretiva instrui formalmente todos os robôs de busca a não rastrearem nenhuma pasta do subdomínio.*

### Camada 2: Cabeçalho HTTP `X-Robots-Tag` (Prevenção Absoluta de Indexação)

Mesmo bloqueadas no robots, imagens ou páginas indexadas no passado podem continuar aparecendo nas buscas. A forma mais segura recomendada pelo Google para evitar indexação é retornar o cabeçalho HTTP `X-Robots-Tag: noindex, nofollow, noarchive`.

#### Opção A: Se o servidor do WordPress rodar Apache (`.htaccess`)
Adicione as seguintes linhas no arquivo `.htaccess` na raiz do WordPress:

```apache
# Bloquear indexação de todo o subdomínio wp.electrom.eng.br
<IfModule mod_headers.c>
    Header set X-Robots-Tag "noindex, nofollow, noarchive"
</IfModule>
```

#### Opção B: Se o servidor do WordPress rodar Nginx
Adicione a seguinte diretiva no bloco `server` de configuração do subdomínio `wp.electrom.eng.br`:

```nginx
server {
    server_name wp.electrom.eng.br;
    
    # Adiciona a tag de noindex em todas as respostas HTTP
    add_header X-Robots-Tag "noindex, nofollow, noarchive" always;
    
    # Restante da configuração do site...
}
```

#### Opção C: Diretamente via PHP/WordPress (Fallback)
Se não for possível alterar as configurações do servidor web, adicione este gancho no arquivo `functions.php` do tema ativo no WordPress:

```php
// Forçar cabeçalho HTTP noindex para todas as páginas do WordPress
add_action('send_headers', 'electrom_force_noindex_header');
function electrom_force_noindex_header() {
    header('X-Robots-Tag: noindex, nofollow, noarchive', true);
}
```

---

## 3. Verificação

Após aplicar uma das configurações no subdomínio, execute a seguinte consulta via terminal para testar se os cabeçalhos estão sendo enviados corretamente:

```bash
curl -I https://wp.electrom.eng.br/
```

Certifique-se de que a resposta HTTP contém a linha:
`X-Robots-Tag: noindex, nofollow, noarchive`
