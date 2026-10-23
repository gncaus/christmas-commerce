---
version: 2
name: Ponteira
description: >-
  Sistema visual das lojas de Natal (landing pages e e-commerce): aconchegante e premium, feito para vender.
  Estrutura adaptada do "Airbnb-inspired" da biblioteca awesome-design-md (fotografia em primeiro lugar,
  cartões arredondados, um único acento para a ação, cartão de compra fixo ao lado da galeria e barra de
  compra fixa no celular), vestida com uma paleta de Natal quente: marfim, vinho, verde-pinheiro e dourado.
colors:
  marfim: "#FBF8F3"        # fundo da página
  linho: "#F4EEE6"         # faixas e superfícies secundárias
  papel: "#FFFFFF"         # cartões
  tinta: "#2B211D"         # texto principal (café escuro, nunca preto puro)
  texto: "#4A3F3A"         # texto corrido longo
  suave: "#6E625B"         # texto secundário, legendas
  linha: "#E6DDD2"         # bordas de 1px em cartões e campos
  vinho: "#8C1C2B"         # ação principal (CTA) e destaques de preço
  vinho-forte: "#6E1421"   # CTA pressionado / hover
  pinheiro: "#1F3A2E"      # faixas escuras, rodapé
  pinheiro-escuro: "#142820"
  dourado: "#B8893E"       # selos, ícones, detalhes de luz (não usar em texto pequeno sobre claro)
  dourado-claro: "#E2C27F" # texto de destaque sobre faixas escuras
typography:
  display: "Fraunces (Google Fonts), Georgia, serif — títulos, peso 500–600, tracking -0.02em"
  text: "Manrope (Google Fonts), Helvetica Neue, Arial, sans-serif — texto, UI, preços (tabular)"
radius:
  botao: "10px"
  cartao: "16px"
  foto: "20px"
  pill: "999px — chips, selos e seletores"
shadow:
  unica: "0 1px 2px rgba(43,33,29,.06), 0 8px 24px rgba(43,33,29,.08) — cartão de compra, cartões ao passar o mouse, barra fixa"
---

# Ponteira — sistema visual (v2, aconchegante premium)

## 1. Atmosfera

Uma loja de Natal que dá vontade de entrar: fotos quentes de casas decoradas, luz de pisca-pisca, presentes e
mesa posta. O fundo é marfim quente; as faixas escuras são verde-pinheiro, como uma sala à noite com a árvore
acesa. O vinho é o único acento de ação (botões de compra, preço promocional). O dourado aparece em selos,
ícones e detalhes de luz — é o brilho, não a interface.

Regra de ouro herdada do Airbnb: **a fotografia carrega o peso visual**; tipografia e interface ficam calmas e
claras para não competir com o produto.

## 2. Tipografia

| Papel | Família | Tamanho | Peso | Entrelinha |
| --- | --- | --- | --- | --- |
| Display (hero) | Fraunces | clamp(40px, 5.2vw, 72px) | 500 | 1.05 |
| Título de seção | Fraunces | clamp(30px, 3.4vw, 48px) | 500 | 1.1 |
| Título de cartão | Manrope | 18–20px | 700 | 1.3 |
| Texto | Manrope | 16–17px | 400 | 1.6 |
| Pequeno / legenda | Manrope | 13–14px | 500 | 1.45 |
| Preço destaque | Fraunces | clamp(32px, 3vw, 44px) | 600 | 1 | (tabular) |

## 3. Componentes

- **Botão principal:** vinho, texto branco, raio 10px, 52px de altura, Manrope 16/700. Pressionado: `scale(.97)` e vinho-forte.
- **Botão secundário:** fundo papel, borda 1px tinta, texto tinta.
- **Chip / selo:** pill, fundo linho ou papel, texto tinta 13/600; selo dourado para "Edição Natal", "Bordado incluso".
- **Cartão de produto:** foto 4:5 ou 1:1 com raio 16px, depois nome (18/700), descrição curta (suave) e preço; ao passar o mouse, a foto aproxima 4% e o cartão ganha a sombra única.
- **Cartão de compra:** papel, borda 1px linha, raio 20px, sombra única, padding 28px, fixo (sticky) ao lado da galeria no desktop.
- **Barra fixa no celular:** papel com sombra única, preço à esquerda e botão principal à direita; aparece depois do hero.
- **Barra de confiança:** linho, 4 itens com ícone dourado + texto curto (frete, parcelamento, Pix, troca).
- **Faixa de aviso (topo):** vinho, texto branco 14/600, uma frase com a condição mais forte (frete/prazo).
- **Perguntas:** `<details>` com borda inferior 1px linha, ícone + que gira 45°.
- **Rodapé:** pinheiro-escuro, texto marfim; créditos das imagens em `<details>`.

## 4. Layout

- Conteúdo até 1240px, margens 20px (celular) / 32px (tablet) / 48px (desktop).
- Seções com 96–120px de respiro no desktop, 64–72px no celular.
- Ritmo: marfim → linho → marfim → faixa pinheiro → marfim → rodapé pinheiro-escuro.
- O primeiro screen sempre mostra: o que é, a foto do produto, o preço, as condições e o botão de compra.

## 5. Imagens

Fotos reais, quentes, com luz de Natal. Enquanto não houver fotos próprias, fotos de banco gratuito (CC0 /
CC BY) como provisórias, sempre creditadas. Nada de ilustrações vetoriais no lugar do produto.

## 6. Movimento

Entradas suaves (opacity + 16px), zoom de 4% nas fotos ao passar o mouse, contagem regressiva para o Natal.
Tudo respeita `prefers-reduced-motion`.

## 7. Faça / Não faça

**Faça:** produto grande e preço visível na primeira tela; condições (frete, Pix, 10x, prazo) perto do botão;
fotos com cantos arredondados; uma única cor de ação.

**Não faça:** gravuras antigas como imagem principal; telas vazias; efeitos de rolagem longos; avaliações ou
números inventados; mais de duas famílias tipográficas.
