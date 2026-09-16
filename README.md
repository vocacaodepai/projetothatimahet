# Site Dra. Thatiane Mahet — redesign

Site estático (HTML/CSS/JS puro, sem build) que substitui o WordPress atual (thatianemahet.com.br) por um layout moderno, mantendo a identidade da marca.

## Estrutura
- `index.html` — Home
- `sobre.html` — Sobre a Dra. Thatiane
- `consultorio.html` — Consultório (Barra da Tijuca)
- `blog.html` — Blog **Vocação de Mãe** (com filtro de categorias)
- `blog-artigo.html` — Template de artigo do blog
- `cursos.html` — Cursos para pais/gestantes e formações para profissionais
- `contato.html` — Contato, WhatsApp e formulário
- `css/style.css` — Design system (cores, tipografia, componentes)
- `js/main.js` — Menu mobile, animações de entrada, filtro de categorias, newsletter

## Paleta
Terracota/pêssego (`--coral-500`, `--peach-*`) + verde-petróleo (`--teal-*`) + dourado (`--gold-500`) sobre fundo creme — moderniza o visual clínico anterior sem perder o acolhimento.

## Pendências para publicar de verdade
1. **Logo e fotos reais**: as imagens atuais usam fotos de banco (Unsplash) como placeholder, pois não houve acesso autenticado ao Instagram/arquivos do WordPress da cliente. Substituir por:
   - Logo em `wp-content/uploads/.../logo-thatiane-mahet.png` (site atual)
   - Fotos profissionais da Dra. Thatiane e do consultório
2. **Conteúdo do blog**: os 9 posts são exemplos baseados nos títulos já publicados no site atual. Migrar o conteúdo completo dos artigos reais.
3. **Formulários**: o formulário de contato e a newsletter estão em modo demonstrativo (JS local). Conectar a um serviço real (ex.: Formspree, WhatsApp Business API, Mailchimp/RD Station).
4. **Domínio/hospedagem**: pode ser publicado em qualquer host estático (Vercel, Netlify, GitHub Pages) ou servir como referência de layout para reconstrução em WordPress/Elementor.

## Como visualizar
Abra `index.html` direto no navegador, ou rode um servidor local:
```
python3 -m http.server 8080
```
