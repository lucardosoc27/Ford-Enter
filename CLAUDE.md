# CLAUDE.md — Desafio 4: HTML e CSS (Site Ford)

Este arquivo é lido automaticamente pelo Claude Code no início de cada sessão nesta pasta. Contém as regras fixas do projeto — nunca as ignore, mesmo que a conversa mude de assunto ao longo da sessão.

## Sobre o projeto
Site institucional fictício da Ford para lançamento de um veículo. Desafio acadêmico (Desafio 4 — HTML e CSS) do curso de Desenvolvimento de Sistemas, SENAI. Aluno: Luã Cardoso da Rocha.

## Estrutura de pastas (já existe — não recriar)
```
Desafio 4 HTML-CSS Luã Cardoso da Rocha/
├── CLAUDE.md
├── PROMPT_INICIAL.md
├── index.html            (a criar — página Home)
├── lancamento.html       (a criar — página Lançamento)
├── contato.html          (a criar — página Contato)
├── style.css             (a criar)
└── anexo_desafio_htmlcss/
    ├── css/
    │   └── reset.css     (já existe — usar como base, não recriar um reset do zero)
    └── img/               (já existe — SEMPRE rodar `ls` aqui antes de referenciar qualquer imagem)
```

## Regras fixas (nunca esquecer)
- HTML semântico obrigatório em TODAS as páginas: `<header>`, `<nav>`, `<main>`, `<footer>`, e `<section>`/`<article>` onde fizer sentido. Não usar `<div>` genérica quando existe tag semântica equivalente — o professor deixou isso explícito como requisito.
- Usar o `reset.css` que já existe em `anexo_desafio_htmlcss/css/` como base (linkar no `<head>`), não recriar um reset novo.
- Antes de referenciar qualquer imagem no HTML, rodar `ls anexo_desafio_htmlcss/img/` para confirmar os nomes reais dos arquivos — nunca inventar nome de arquivo.
- Paleta de cores do projeto: `#1b357e` (azul escuro) e `#1351d8` (azul mais vibrante).
- Fonte externa via Google Fonts é obrigatória (consta nos critérios de avaliação).
- Usar classes e pseudoclasses (`:hover`, `:focus`, `:nth-child` etc.) na estilização — é critério de avaliação explícito, não decoração opcional.
- Site responsivo: sempre validar em largura mobile (~375px) e desktop (~1440px).
- Rodapé sempre fixo na base da página, mesmo quando o conteúdo é curto e não empurra ele pra baixo (sticky footer via flexbox/grid no `body`).
- O menu de navegação ("Home", "Lançamento", "Contato") deve estar presente e funcional em TODAS as páginas, linkando corretamente entre `index.html`, `lancamento.html` e `contato.html`.
- **Header e footer devem ser IDÊNTICOS nas três páginas** (`index.html`, `lancamento.html`, `contato.html`) — mesma estrutura, mesmas cores, mesmo footer no estilo Starbucks (wordmark + ícones + links + copyright + logo no canto). Qualquer ajuste futuro no header/footer da Home deve ser replicado nas outras duas páginas também, para manter consistência visual em todo o site.
- **Faixa superior cinza acima do header (inspirada no site oficial da Ford):** adicionar uma faixa fina, de cor cinza claro (algo como `#f2f2f2`), **acima** do header branco existente — sem alterar nada do header branco em si (logo + menu continuam exatamente como estão, só ganham essa faixa nova em cima). Dentro dessa faixa: um ícone de localização (Font Awesome, `fa-solid fa-location-dot`) + o texto "Concessionárias", alinhados à **direita**, como um link (`href="#"`, já que não existe página de concessionárias no escopo do projeto — é só um elemento visual/decorativo inspirado no site real). Essa faixa precisa aparecer nas três páginas, igual ao restante do header.
- **Layout "boxed" (encaixotado) para header, footer e faixa de Concessionárias — inspirado no site oficial da Ford:** hoje esses elementos esticam 100% da largura da tela ("full-bleed"). O site oficial da Ford usa um layout diferente: header e footer ficam **contidos numa largura máxima, centralizados**, deixando uma margem visível nas laterais em telas grandes (onde aparece o fundo da página, não a cor do header/footer). Aplicar isso em `.cabecalho`, `.rodape` e na nova faixa de Concessionárias: `max-width: 1600px` + `margin: 0 auto` (a cor de fundo de cada um continua só dentro dessa largura, não mais na tela inteira). Os três elementos (faixa cinza, header branco, footer) devem compartilhar a mesma largura máxima, para as bordas ficarem alinhadas verticalmente entre si. Em telas pequenas (mobile, dentro da media query já existente), não é necessário manter esse efeito — pode continuar ocupando a largura toda, já que não há espaço sobrando pra mostrar a margem de qualquer forma.
- Usar `vw`, `vh` e `rem` misturados com `px` no CSS — NÃO usar um único tipo de unidade em 100% do código. Exemplos de bom uso: `rem` para fontes e espaçamentos, `vh` para seções que devem preencher a tela (ex: banner do topo), `px` para detalhes pequenos como bordas. Evitar exagero de `vw`/`vh` em texto corrido, já que isso pode deixar a fonte ilegível em telas extremas.
- **Fundo das páginas (`body`):** trocar o branco puro por um tom sutil e profissional que combine com o azul do header/footer — algo como `#F4F6FA` (cinza-azulado bem claro, quase imperceptível). NÃO é para ser chamativo — é um site institucional de uma empresa séria, então o efeito deve ser discreto, quase subliminar, só dando mais unidade visual ao conjunto do site. **Importante:** essa mudança é no fundo geral da página (`body`), NÃO no header — o header precisa continuar branco puro (`#FFFFFF`), porque isso já foi resolvido especificamente para eliminar o problema do "quadrado branco" ao redor da logo. Não reverter essa parte.

## Fluxo de trabalho com Git (checkpoints antes de mudanças arriscadas)
Antes de aplicar mudanças visuais maiores (tipo cor de fundo, tamanho de imagem), sempre criar um checkpoint no Git primeiro, para poder reverter facilmente se o resultado não agradar:
1. Verificar se a pasta já é um repositório Git (`git status`). Se não for, rodar `git init` primeiro.
2. Rodar `git add .` e `git commit -m "checkpoint antes de [descrição da mudança]"` ANTES de aplicar qualquer mudança visual pedida nesta sessão.
3. Aplicar as mudanças normalmente.
4. Informar ao usuário, ao final, como reverter caso não goste: `git diff` para ver o que mudou, ou `git checkout -- .` para descartar mudanças não commitadas, ou `git reset --hard HEAD~1` para voltar ao commit anterior por completo.

## Nível de complexidade do código
Luã é estudante iniciante (curso técnico, ainda aprendendo). O código deve refletir isso:
- Evitar padrões muito avançados ou "profissionais demais" (ex: metodologias de nomenclatura CSS complexas como BEM, CSS Grid com areas nomeadas extensas, funções JavaScript avançadas caso alguma seja necessária).
- Priorizar CSS direto e legível: seletores de classe simples, propriedades básicas (flexbox é ok, grid simples é ok — nada muito elaborado).
- Comentários no código explicando o que cada bloco faz, no nível de quem está aprendendo (não assumir conhecimento avançado de quem for ler depois).
- **Isso NÃO é desculpa para pular tags semânticas.** Tags semânticas (`header`, `nav`, `main`, `footer`, `section`, `article`) são obrigatórias e não-negociáveis, mesmo mantendo o restante do código simples — é literalmente um critério de avaliação do professor, não um recurso "avançado" a ser evitado.

## Páginas do site (as 3 completas — nada foi descartado)

### 1. `index.html` — Home
Layout confirmado e validado visualmente por Luã — seguir à risca, sem inventar variações:

- **Header:** fundo **branco** (não azul) — isso evita o contraste feio de "quadrado branco" ao redor da logo da Ford, já que a imagem da logo tem fundo branco embutido. Logomarca da Ford alinhada à **esquerda**. Menu de navegação ("Home", "Lançamento", "Contato") **centralizado** no topo, com o texto na cor azul do projeto (`#1b357e` ou `#1351d8`) — nunca branco, já que o fundo agora é branco. No hover de cada item do menu, aplicar um leve efeito de "zoom" (`transform: scale(1.05)` + `transition: transform 0.25s ease`).
- **Main (hero):** imagem grande da Ford Ranger, **centralizada** logo abaixo do header, ocupando **entre 90-95% da largura da página, com `max-width` entre 1600px e 1800px** (aumento significativo em relação ao valor anterior de 85%/1400px, aproximando do visual de referência de um projeto similar que o aluno viu). O texto abaixo continua com seu próprio `max-width: 450px` independente, então ele não cresce junto com a imagem — esse é o efeito desejado. **Voltar para altura natural/proporcional** (`height: auto`, sem `object-fit: cover` forçando uma altura fixa) — a tentativa anterior de aumentar a altura artificialmente não ficou boa visualmente e foi descartada; a imagem deve escalar mantendo sua proporção original, sem distorcer nem esticar. A imagem inteira deve ser **clicável**, envolvida numa tag `<a href="lancamento.html">`, levando o usuário para a página de Lançamento — exatamente como o link "aqui" e o item "Lançamento" do menu já fazem. Isso é uma exigência explícita do PDF original ("a segunda página... deve ser exibida após o usuário clicar no item de menu Lançamento ou na imagem do produto"). Abaixo da imagem, um texto pequeno centralizado: "Está é a nova Ranger Ford 2022. Verifique novidades **aqui**" — onde a palavra "aqui" é um link (`<a>`) que também leva para `lancamento.html`. A imagem e o texto abaixo dela compartilham o mesmo container/largura centralizada (`.destaque-conteudo`), mas como o texto tem seu próprio `max-width` menor, ele não cresce junto com a imagem. Ao passar o mouse sobre a imagem, aplicar o **mesmo efeito de zoom** usado no menu (`transform: scale(1.05)`, mesma transição) — sem borda ou contorno azul no hover.
- **Footer:** inspirado na estrutura do rodapé da Starbucks (wordmark grande + ícones + links de política + copyright, tudo centralizado, com uma logo pequena isolada num canto), **e também inspirado no site oficial da Ford para as cores em duas camadas**. Composto por dois blocos empilhados:
  1. **Bloco novo, no topo do footer:** faixa com campo de busca (`<input type="search">` com ícone de lupa, placeholder "Pesquisar"), fundo num azul-marinho intermediário — algo como `#0f1a5c` (mais escuro que o `#1351d8` do projeto, mas mais claro que o bloco de baixo). Esse campo pode ser só decorativo (sem funcionalidade de busca real, já que o site não tem página de resultados).
  2. **Bloco existente, embaixo (não alterar a estrutura, só a cor de fundo):** trocar o fundo de `#1b357e` para um azul quase preto, algo como `#0a0e23`, mantendo TUDO mais exatamente como já está — wordmark, ícones, links, copyright e logo continuam nos mesmos lugares, com o mesmo texto e mesmas cores de conteúdo (branco). Só o fundo escurece.
  Estrutura do bloco existente (não mexer), de cima para baixo, tudo centralizado:
  a. Wordmark **"FORD BRASIL"** em maiúsculo, fonte grande e em negrito, cor branca — é texto estilizado, não a imagem da logo.
  b. Linha com **5 ícones** de redes sociais lado a lado, brancos, cada um como link `<a>` funcional abrindo em nova aba (`target="_blank"` + `rel="noopener noreferrer"`):
     - Facebook: `https://www.facebook.com/FordBrasil/?locale=pt_BR`
     - YouTube: `https://www.youtube.com/fordbrasil`
     - Instagram: `https://www.instagram.com/fordbrasil/`
     - LinkedIn: `https://www.linkedin.com/company/ford-brasil/` (ícone já disponível em `img/`, confirmar nome exato com `ls`)
     - TikTok: `https://www.tiktok.com/@fordbrasil` (ícone já disponível em `img/`, confirmar nome exato com `ls`)
  c. Dois links de texto sublinhado lado a lado, brancos, estilo da referência: "Política de Privacidade" e "Direitos do Titular" (podem apontar para `#`, sem página de destino real).
  d. Texto de copyright: `Copyright © 2026 Ford Motor Company - Todos os direitos reservados.`
  e. No **canto inferior direito** do bloco do footer — mesmo tamanho (largura/altura) da logo que está no header — a logomarca redonda/oval da Ford, **sem nenhum fundo branco visível ao redor dela**. Posicionar verticalmente **próxima ao centro da altura do footer** — a última tentativa ainda deixou ela baixa demais, então suba mais um pouco: se estiver usando `position: absolute` com `bottom`, aumente o valor (teste `2rem`–`2.5rem` em vez do valor atual). Se possível, prefira resolver via flexbox (`align-items: center` no container do footer) em vez de valores fixos de `bottom`, já que isso centraliza automaticamente sem precisar ficar ajustando números — garantindo que a logo fique bem visível junto com o resto do conteúdo do rodapé, sem exigir scroll adicional.

  **Sobre remover o fundo branco da logo (sem badge, sem disfarce):** seguir esta ordem de tentativas até uma funcionar:
  1. Rodar `ls anexo_desafio_htmlcss/img/` e verificar se existe uma versão da logo em PNG **transparente** — se existir, usar essa em vez da versão com fundo branco (solução ideal, resolve o problema na raiz).
  2. Se só existir a versão com fundo branco e a margem branca ao redor do oval azul for fina e regular, usar `clip-path: ellipse(48% 48% at 50% 50%)` (ajustar os valores conforme necessário) na tag `<img>` para recortar exatamente o contorno do oval, eliminando a margem branca sem precisar de imagem nova.
  3. Se o `clip-path` não ficar limpo, como último recurso testar `mix-blend-mode: multiply` no CSS da imagem — isso faz áreas brancas da imagem "somem" contra o fundo azul do footer, mostrando a cor de fundo através delas.

### 2. `lancamento.html` — Lançamento
Acessada pelo item de menu "Lançamento" ou clicando na imagem do produto na Home.

- **Header e footer:** idênticos aos da Home (ver seção 1 acima) — reaproveitar o mesmo HTML/CSS, não recriar do zero nem deixar uma versão desatualizada.
- **Topo:** vídeo promocional do veículo via `<iframe>` do YouTube (não existe arquivo de vídeo local em `img/`, então não usar tag `<video>`). URL base: `https://www.youtube.com/watch?v=vQsryuNmsL0` → embed: `https://www.youtube.com/embed/vQsryuNmsL0`.
  - **Autoplay obrigatório:** o vídeo deve começar a tocar automaticamente assim que o usuário chega na página. Adicionar `?autoplay=1&mute=1` na URL do embed. O `mute=1` é obrigatório junto com autoplay — navegadores modernos bloqueiam autoplay com som, então sem isso o autoplay simplesmente não funciona. O usuário pode dar unmute manualmente pelos controles do player depois.
  - **Corrigir proporção do vídeo:** hoje o vídeo aparece com barras pretas nas laterais (efeito "pilarbox"), sinal de que o container não está na proporção correta. Usar a técnica de aspect-ratio 16:9 (via `aspect-ratio: 16 / 9` no CSS do container do iframe, com `width: 100%` e `height: 100%` no próprio iframe) para o vídeo preencher o espaço sem sobrar faixas pretas.
  - **Largura do vídeo:** manter a mesma largura de container que já está funcionando hoje (não esticar para a largura total da página) — só corrigir a proporção interna (item acima) para eliminar as barras pretas dentro dessa mesma largura.
  - **Texto descritivo (usar exatamente este, não gerar um novo):** "A nova Ford Ranger chegou para reforçar a linha de picapes robustas da Ford. Com motorização a diesel, tração 4x4 e três versões diferentes, ela atende desde o uso profissional até quem busca aventura fora de estrada."
- **Meio:** três "cards" de carro lado a lado, com espaçamento bem visível entre eles (`gap` generoso no container flex/grid, ex: `2rem` ou mais) e uma separação clara entre um card e outro (borda sutil ao redor de cada card, ou fundo levemente diferenciado) — os 3 precisam parecer blocos independentes, nunca grudados um no outro. Cada card, de cima para baixo:
  1. Imagem do carro, em tamanho compacto (não ocupar a largura toda). **Fundo branco da foto destacando contra o fundo do card/página:** aplicar `mix-blend-mode: multiply` nas 3 imagens, exatamente a mesma técnica que já resolveu esse problema na imagem do carro da página de Contato — deve funcionar bem aqui também, já que é o mesmo tipo de fundo de estúdio branco/claro. Testar visualmente cada uma das 3 (podem ter tons de fundo ligeiramente diferentes entre si) e ajustar se alguma ficar diferente das outras.
  2. Logo abaixo da imagem, uma linha com **checkbox à esquerda** + **texto à direita** (título do modelo numa linha, preço na linha de baixo):
     - Título: `"XL Cabine Simples 2.2 Diesel 4X4 MT 2022"` (sem numeração antes do nome).
     - Preço: `"Preço Sugerido: R$ 183.850"`.
  Cada checkbox precisa ter tamanho e contraste suficientes para ficar claramente distinto dos outros dois — nunca dando a impressão de ser um único checkbox compartilhado entre os 3 carros.

  Usar exatamente estes três modelos, na mesma ordem em que os carros aparecem na página:

| Ordem | Modelo | Preço sugerido |
|---|---|---|
| 1º carro | XL Cabine Simples 2.2 Diesel 4X4 MT 2022 | R$ 183.850 |
| 2º carro | XLS 2.2 Diesel 4X4 AT 2022 | R$ 220.690 |
| 3º carro | Storm 3.2 Diesel 4X4 AT 2022 | R$ 222.790 |

- **Base:** botão "Comparar Carros" abaixo dos três cards (sem necessidade de funcionalidade real ao clicar, é só visual).

  **Estado visual do checkbox marcado:** quando o usuário clica e marca um checkbox, precisa ficar visualmente óbvio que ele foi marcado — bom contraste de cor, tamanho adequado para ser percebido rapidamente (o padrão do navegador às vezes é pequeno/discreto demais). Se o checkbox padrão do navegador não ficar claro o suficiente, usar a propriedade CSS `accent-color` (com a cor azul do projeto) para estilizar de forma simples, sem precisar recriar o checkbox do zero com JavaScript.

### 3. `contato.html` — Contato
Acessada pelo item de menu "Contato" na página principal. Layout em **duas colunas**, replicando o protótipo original do PDF (Figura 3):

- **Título "Fale Conosco":** centralizado horizontalmente, ocupando a largura inteira da página (não só a coluna direita) — deve ficar acima das duas colunas, não dentro de uma delas.
- **Coluna esquerda:** imagem do carro **XLS 2.2 Diesel 4X4 AT 2022** — reaproveitar exatamente o mesmo arquivo de imagem já usado no 2º card da página de Lançamento. **Fundo branco da imagem ficando destacado contra o fundo da página (`#F4F6FA`):** testar `mix-blend-mode: multiply` no CSS dessa imagem — como o fundo da foto provavelmente é branco/claro sólido (fundo de estúdio), esse blend mode tende a "apagar" visualmente esse branco contra o fundo claro da página, deixando só o carro aparente (mesma técnica que já funcionou bem pra resolver o problema do fundo branco da logo). Testar visualmente o resultado; se não ficar limpo o suficiente, reportar o que aconteceu. Sem `border-radius`, sem sombra, sem moldura — o objetivo continua sendo o visual de "flutuando". Aumentar um pouco o tamanho da imagem em relação ao que está hoje, pra ficar mais proporcional ao bloco do formulário ao lado.
- **Coluna direita:**
  - Um heading **"Sobre Você"** logo acima do campo de nome, seguindo a hierarquia de tamanho da página (menor que o título principal "Fale Conosco", maior que os labels dos campos).
  - Formulário (`<form>`) com os seguintes campos:
    - Nome do usuário
    - E-mail para contato
    - Telefone
    - Tipo do contato — **usar obrigatoriamente um `<select>`** (não radio buttons) com as opções: `Elogio`, `Reclamação`, `Solicitação`. É literalmente um campo de seleção com seta, que abre as opções ao clicar — isso é o que o professor pediu.
    - Mensagem (`<textarea>`)
    - Botão "Enviar"
  - **Campos do formulário mais arredondados:** aumentar o `border-radius` dos campos de texto/select/textarea (hoje está em `4px`, deixar algo entre `8px` e `12px`) para um visual mais suave, menos "quadrado".
  - **Bloco do formulário um pouco mais baixo:** adicionar um pouco mais de espaço acima do formulário (margin-top ou padding-top no container da coluna direita), pra ele não ficar colado no topo da seção.
- **Botão "Enviar":** alinhar à **direita** da coluna do formulário (hoje está alinhado à esquerda — trocar `align-self: flex-start` por `align-self: flex-end`, ou o equivalente), e deixar ele um pouco mais **largo/esticado** horizontalmente (aumentar o `padding` lateral, ex: de `2rem` para `3rem`, ou definir um `min-width`).
- **Transições visuais (opcional, mas recomendado):** ao passar o cursor sobre o botão "Enviar", ele deve aumentar de tamanho e mudar de cor (`:hover` + `transition` no CSS).
- Mesmo header e footer das outras páginas, mantendo consistência visual.

## Critérios de avaliação do professor (checar antes de finalizar)
- Utilização apropriada de classes e pseudoclasses ✅ obrigatório
- Utilização de tabelas — a seção de comparação de modelos cobre esse requisito
- Utilização de formulários ✅ obrigatório — página de Contato
- Utilização de design responsivo e fontes externas ✅ obrigatório
- Inclusão de vídeo ✅ obrigatório
