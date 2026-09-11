# Nossa História — site de homenagem

Este projeto é um site estático feito somente com HTML, CSS e JavaScript. As fotos e a música foram deixadas de fora de propósito: você coloca os seus próprios arquivos nas pastas indicadas.

## Estrutura

```text
historia-que-escolheu-continuar/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── fotos/
    └── musica/
```

## Onde colocar cada foto

Coloque as imagens em `assets/fotos/` usando estes nomes:

- `hero.jpg` → foto principal do topo
- `primeiro-encontro.jpg` → foto dela no Uber / primeiro encontro de 13/05/2023
- `reencontro-dela.jpg` → foto dela de 01/09/2026
- `reencontro-meu.jpg` → sua foto de 01/09/2026
- `olhos.jpg` → foto dos olhos dela
- `foto-dela-01.jpg` → outra foto bonita dela
- `anos-80.jpg` → imagem criada por IA na estética dos anos 80
- `anos-60.jpg` → imagem criada por IA na estética dos anos 60

### Importante sobre qualidade

Você não precisa redimensionar as fotos manualmente. O CSS usa `object-fit` quando uma imagem real é colocada no lugar dos espaços. Para preservar a qualidade, prefira JPG/WEBP em boa resolução e não faça upload de uma captura de tela da foto.

## Música

Coloque o arquivo de áudio em:

```text
assets/musica/nossa-musica.mp3
```

Se o nome for diferente, abra `script.js` e altere:

```js
const MUSIC_FILE = "nossa-musica.mp3";
```

Para outro nome, por exemplo:

```js
const MUSIC_FILE = "nossa-musica.mp3";
```

## Como transformar os espaços em imagens

Os espaços no HTML já indicam exatamente qual arquivo deve entrar. Para exibir uma foto, substitua, por exemplo:

```html
<div class="photo-placeholder photo-portrait" data-photo="primeiro-encontro.jpg">
  <span>COLOQUE A FOTO DO PRIMEIRO ENCONTRO</span>
  <small>assets/fotos/primeiro-encontro.jpg</small>
</div>
```

por:

```html
<div class="photo-frame photo-portrait">
  <img src="assets/fotos/primeiro-encontro.jpg" alt="Primeiro encontro">
</div>
```

Você pode repetir isso para cada espaço.

## Como testar antes do GitHub

A maneira mais simples:

1. Abra a pasta do projeto.
2. Dê dois cliques em `index.html`.
3. O site abrirá no navegador.
4. Coloque as fotos.
5. Atualize a página e confira o resultado.

Para um teste mais fiel, recomendo usar o VS Code com a extensão Live Server, mas não é obrigatório.

## Como publicar no GitHub Pages

### 1. Crie sua conta

Entre no GitHub e crie uma conta ou faça login.

### 2. Crie um repositório

Clique em **New repository**.

Sugestão de nome:

```text
nossa-historia
```

Deixe o repositório público se quiser usar o GitHub Pages no plano gratuito.

### 3. Envie os arquivos

Dentro do repositório:

- clique em **Add file**
- clique em **Upload files**
- envie `index.html`, `style.css`, `script.js` e `README.md`
- envie também a pasta `assets` com as fotos e a música

A estrutura final precisa ficar assim:

```text
index.html
style.css
script.js
README.md
assets/
  fotos/
    hero.jpg
    primeiro-encontro.jpg
    reencontro-dela.jpg
    reencontro-meu.jpg
    olhos.jpg
    foto-dela-01.jpg
    anos-80.jpg
    anos-60.jpg
  musica/
    nossa-musica.mp3
```

### 4. Ative o GitHub Pages

No repositório, abra:

**Settings → Pages**

Em **Build and deployment**, selecione:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`

Salve.

Depois de alguns instantes o GitHub mostrará o endereço do site.

### 5. Seu endereço

Se seu usuário for `seunome` e o repositório for `nossa-historia`, o endereço será parecido com:

```text
https://seunome.github.io/nossa-historia/
```

## Observação sobre música

Alguns navegadores bloqueiam música tocando automaticamente quando a página abre. Por isso o projeto usa um botão de reprodução: ela clica e a música começa.

## Personalização

Os textos principais estão em `index.html`.

As cores, fontes, tamanhos e espaçamentos estão em `style.css`.

As interações, contador, música e easter eggs estão em `script.js`.

O contador está configurado para começar em:

```text
01/09/2026 00:00
```

Se vocês decidirem que a data oficial do relacionamento deve ser outra, basta alterar `START_DATE` no `script.js`.
