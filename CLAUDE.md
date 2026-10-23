# Christmas Commerce

Landing pages e e-commerce de produtos de Natal. Responda ao usuário em português.

## Estrutura (monorepo pnpm + Turborepo, Next.js + Tailwind v4)

- `apps/store` — e-commerce. `apps/lp-<slug>` — cada landing page. Cada app é um projeto
  separado na Vercel (Root Directory = pasta do app); `vercel.json` usa `turbo-ignore` para só
  redeployar o que mudou.
- `packages/ui` — componentes e tokens de design compartilhados (`styles.css`, preencher a partir
  do `DESIGN.md`). `packages/tsconfig` — configs TypeScript.
- Nova landing: `pnpm new:landing <slug> "Título"` (copia `templates/landing`). Não crie apps à mão.
- Comandos: `pnpm dev`, `pnpm build`, `pnpm typecheck` (ou `pnpm --filter <app> <script>`).

## Skills — usar automaticamente, sem esperar o usuário pedir

As skills ficam em `.claude/skills/`. Invoque-as pelo Skill tool sempre que o pedido se encaixar:

- **awesome-design-md** — antes de criar a primeira página, ou quando o usuário falar em estilo,
  identidade visual, "parecido com o site X" ou sistema de design. Mantenha um único `DESIGN.md`
  do projeto e siga-o em todas as páginas para o site inteiro ficar consistente.
- **design-taste-frontend** (taste-skill) — sempre que criar, redesenhar, ajustar ou melhorar
  qualquer landing page, página de produto, vitrine, hero, checkout ou outra tela do site/loja.
- **web-design-guidelines** — depois de terminar ou alterar uma página, revise o código com ela
  (acessibilidade, UX, boas práticas) e corrija o que encontrar; e sempre que o usuário pedir
  revisão ou auditoria.
- **playwright-cli** — para abrir as páginas no navegador, testar fluxos (carrinho, checkout,
  formulários), conferir responsividade e tirar screenshots antes de dizer que algo está pronto.

Fluxo padrão para uma página nova: awesome-design-md (se ainda não houver `DESIGN.md`) →
design-taste-frontend → web-design-guidelines → playwright-cli.
