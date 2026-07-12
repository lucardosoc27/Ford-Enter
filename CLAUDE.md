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
- **Main (hero):** imagem grande da Ford Ranger, **centralizada** logo abaixo do header. A proporção está errada hoje — muito larga e curta, parecendo uma faixa/banner achatado. Aumentar a **altura** da imagem (não a largura, que já está boa em 70-80% da página), deixando ela com uma proporção mais equilibrada, menos "esticada pros lados". Se estiver usando `object-fit: cover` com uma altura fixa baixa, aumentar esse valor de altura; se a altura estiver em `auto`, verificar se algum CSS está forçando ela a ficar baixa demais. A imagem inteira deve ser **clicável**, envolvida numa tag `<a href="lancamento.html">`, levando o usuário para a página de Lançamento — exatamente como o link "aqui" e o item "Lançamento" do menu já fazem. Isso é uma exigência explícita do PDF original ("a segunda página... deve ser exibida após o usuário clicar no item de menu Lançamento ou na imagem do produto"). Abaixo da imagem, um texto pequeno centralizado: "Está é a nova Ranger Ford 2022. Verifique novidades **aqui**" — onde a palavra "aqui" é um link (`<a>`) que também leva para `lancamento.html`. A imagem e o texto abaixo dela compartilham o mesmo container/largura centralizada, mantendo o texto alinhado ao centro da imagem. Ao passar o mouse sobre a imagem, aplicar o **mesmo efeito de zoom** usado no menu (`transform: scale(1.05)`, mesma transição) — sem borda ou contorno azul no hover.
- **Footer:** fundo **azul** (`#1b357e` ou `#1351d8`), inspirado na estrutura do rodapé da Starbucks (wordmark grande + ícones + links de política + copyright, tudo centralizado, com uma logo pequena isolada num canto). Estrutura, de cima para baixo, tudo centralizado:
  1. Wordmark **"FORD BRASIL"** em maiúsculo, fonte grande e em negrito, cor branca — é texto estilizado, não a imagem da logo.
  2. Linha com **5 ícones** de redes sociais lado a lado, brancos, cada um como link `<a>` funcional abrindo em nova aba (`target="_blank"` + `rel="noopener noreferrer"`):
     - Facebook: `https://www.facebook.com/FordBrasil/?locale=pt_BR`
     - YouTube: `https://www.youtube.com/fordbrasil`
     - Instagram: `https://www.instagram.com/fordbrasil/`
     - LinkedIn: `https://www.linkedin.com/company/ford-brasil/` (ícone já disponível em `img/`, confirmar nome exato com `ls`)
     - TikTok: `https://www.tiktok.com/@fordbrasil` (ícone já disponível em `img/`, confirmar nome exato com `ls`)
  3. Dois links de texto sublinhado lado a lado, brancos, estilo da referência: "Política de Privacidade" e "Direitos do Titular" (podem apontar para `#`, sem página de destino real).
  4. Texto de copyright: `Copyright © 2026 Ford Motor Company - Todos os direitos reservados.`
  5. No **canto inferior direito** do bloco do footer — mesmo tamanho (largura/altura) da logo que está no header — a logomarca redonda/oval da Ford, **sem nenhum fundo branco visível ao redor dela**. Posicionar verticalmente **próxima ao centro da altura do footer** — a última tentativa ainda deixou ela baixa demais, então suba mais um pouco: se estiver usando `position: absolute` com `bottom`, aumente o valor (teste `2rem`–`2.5rem` em vez do valor atual). Se possível, prefira resolver via flexbox (`align-items: center` no container do footer) em vez de valores fixos de `bottom`, já que isso centraliza automaticamente sem precisar ficar ajustando números — garantindo que a logo fique bem visível junto com o resto do conteúdo do rodapé, sem exigir scroll adicional.

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
  - Acompanhar de breve texto descrevendo o produto.
- **Meio:** três "cards" de carro lado a lado, com espaçamento bem visível entre eles (`gap` generoso no container flex/grid, ex: `2rem` ou mais) e uma separação clara entre um card e outro (borda sutil ao redor de cada card, ou fundo levemente diferenciado) — os 3 precisam parecer blocos independentes, nunca grudados um no outro. Cada card, de cima para baixo:
  1. Imagem do carro, em tamanho compacto (não ocupar a largura toda).
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
Acessada pelo item de menu "Contato" na página principal.

- **Main:** formulário (`<form>`) com os seguintes campos:
  - Nome do usuário
  - E-mail para contato
  - Telefone
  - Tipo do contato (elogio, reclamação ou solicitação — usar `<select>` ou grupo de `<input type="radio">`)
  - Mensagem (`<textarea>`)
  - Botão "Enviar"
- **Transições visuais (opcional, mas recomendado):** ao passar o cursor sobre o botão "Enviar", ele deve aumentar de tamanho e mudar de cor (`:hover` + `transition` no CSS).
- Mesmo header e footer das outras páginas, mantendo consistência visual.

## Critérios de avaliação do professor (checar antes de finalizar)
- Utilização apropriada de classes e pseudoclasses ✅ obrigatório
- Utilização de tabelas — a seção de comparação de modelos cobre esse requisito
- Utilização de formulários ✅ obrigatório — página de Contato
- Utilização de design responsivo e fontes externas ✅ obrigatório
- Inclusão de vídeo ✅ obrigatório
