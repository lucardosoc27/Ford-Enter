# Comparação visual direta — quando o texto não está bastando

Depois de várias rodadas só com descrição em texto, a forma mais eficaz agora é deixar o Claude Code **ver a imagem de referência com os próprios olhos**, em vez de eu continuar traduzindo o print em frases. O Claude Code no terminal consegue abrir e analisar arquivos de imagem diretamente.

## Passo a passo

1. Salve o print que você já tem (o da página de Lançamento) dentro da pasta do projeto, com um nome simples, por exemplo:
   ```
   Desafio 4 HTML-CSS Luã Cardoso da Rocha/referencia-lancamento.png
   ```

2. No terminal, dentro da sessão do Claude Code, cole o prompt abaixo:

```
Analise a imagem referencia-lancamento.png, que está nesta mesma pasta —
ela mostra exatamente o layout que preciso que a página lancamento.html
tenha, especialmente a seção dos 3 carros com checkbox.

Compare essa imagem com o código atual de lancamento.html e ajuste o CSS
até o resultado bater visualmente com a referência, prestando atenção
especial em:
- Espaçamento entre os 3 cards de carro (nem grudado, nem muito espaçado)
- Posição do checkbox em relação ao texto do modelo/preço (checkbox à
  esquerda, texto à direita, os dois na mesma linha, abaixo da imagem)
- Cada checkbox precisa estar visualmente distinto dos outros dois

Depois de ajustar, descreva pra mim, com suas próprias palavras, as
diferenças que você identificou entre o que estava construído antes e a
imagem de referência — isso me ajuda a confirmar que você realmente "viu"
os detalhes certos.
```

3. Também dá pra usar esse mesmo truque **arrastando a imagem direto pra dentro da janela do terminal** (funciona em qualquer terminal Linux) em vez de salvar o arquivo na pasta — o Claude Code reconhece e anexa a imagem à mensagem automaticamente.

## Por que isso funciona melhor

Quando a instrução vem só em texto (mesmo bem detalhada, como nas rodadas anteriores), sempre sobra espaço pra interpretação errada — "checkbox do lado" pode significar coisas diferentes dependendo de quem lê. Quando o Claude Code **vê a imagem**, ele compara pixel a pixel, sem essa margem de erro. É a mesma lógica de "uma imagem vale mais que mil palavras", só que aplicada literalmente ao processo de debugar CSS.

## Dica pra manter isso no fluxo do projeto

Se quiser, pode criar uma pastinha `referencias/` dentro do projeto pra guardar prints de referência ao longo do processo, sempre que precisar desse tipo de ajuste fino visual — assim fica organizado e você pode reaproveitar depois.
