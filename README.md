# Galeria de Produtos 3D com AR

Este projeto é uma galeria de produtos 3D interativa desenvolvida em React. Ele permite visualizar modelos 3D com suporte a Realidade Aumentada (AR) diretamente no navegador, utilizando a biblioteca [`<model-viewer>`](https://modelviewer.dev/).

## Funcionalidades

* Galeria de produtos com imagem de capa e nome
* Visualização de modelos 3D em um modal interativo
* Suporte a Realidade Aumentada (AR) em dispositivos compatíveis
* Diferenciação entre modelos que devem ser fixados na parede (ex: quadros) e no chão (ex: esculturas)
* Totalmente responsivo e pronto para deploy

## Tecnologias Utilizadas

* React (Vite)
* Web Components `<model-viewer>`
* HTML/CSS (modularizado)

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/MarcosPrintes001/AR-Gallery.git
cd galeria-3d-ar

# Instale as dependências
npm install

# Rode localmente
npm run dev
```

## Deploy

Este projeto está preparado para deploy na [Vercel](https://vercel.com). Basta conectar o repositório e a plataforma detecta o Vite automaticamente.

## Estrutura do Projeto

```
/
├── public/
│   ├── models/           # Modelos .glb e .usdz
│   └── thumbnails/       # Imagens de capa dos produtos
├── src/
│   ├── components/
│   │   ├── Galeria.jsx
│   │   └── ModalViewer.jsx
│   ├── data/
│   │   └── produtos.json
│   ├── App.jsx
│   └── App.css
├── index.html
└── vite.config.js
```

## Como Adicionar Novos Produtos

Basta adicionar novos objetos ao arquivo `produtos.js` com os campos:

```js
{
  "nome": "Nome do Produto",
  "glb": "/models/modelo.glb",
  "usdz": "/models/modelo.usdz",
  "poster": "/thumbnails/imagem.jpg",
  "arWall": true
}
```

> `arWall`: define se o modelo deve aparecer fixado na parede (true) ou no chão (false).

## Licença

Este projeto é de uso privado ou educativo. Para uso comercial, adapte conforme as necessidades do seu cliente.

---

Desenvolvido com carinho por Marcos
