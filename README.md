# Life by Mands — Portfolio

Portfolio de criadora de conteúdo. React + Vite, rotas com `HashRouter` (`/#/home`) para funcionar no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar

1. Suba o projeto para um repositório no GitHub (branch `main`).
2. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada push na `main` publica automaticamente em `https://<usuario>.github.io/<nome-do-repo>/#/home`.

## Estrutura

- `src/pages/` — uma página por rota (por enquanto só `Home`)
- `src/components/` — fundo xadrez, janela rosa, botão pixel e enfeites
- `src/styles/global.css` — cores e fontes do design (baseado no PDF Y2K)
