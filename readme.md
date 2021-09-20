# Webpack Start App

<img width="48" height="48" title="webpack" src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg">
<img width="48" height="48" title="babel" src="https://cdn.worldvectorlogo.com/logos/babel-10.svg">
<img width="48" height="48" title="sass" src="https://cdn.worldvectorlogo.com/logos/sass-1.svg">

## Code style

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Webpack 5

### Plugins

- [html-webpack-plugin][html-plugin]
- [css-minimizer-webpack-plugin][css-minimizer-webpack-plugin]
- [mini-css-extract-plugin][mini-css-extract-plugin]

[html-plugin]: https://webpack.js.org/plugins/html-webpack-plugin
[css-minimizer-webpack-plugin]: https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
[mini-css-extract-plugin]: https://webpack.js.org/plugins/mini-css-extract-plugin

### Loaders

- [babel-loader][babel-loader-link]
- [css-loader][css-loader-link]
- [postcss-loader][postcss-loader-link]
- [sass-loader][sass-loader-link]
- [style-loader][style-loader-link]

[babel-loader-link]: https://webpack.js.org/loaders/babel-loader
[css-loader-link]: https://webpack.js.org/loaders/css-loader
[postcss-loader-link]: https://webpack.js.org/loaders/postcss-loader
[sass-loader-link]: https://webpack.js.org/loaders/sass-loader
[style-loader-link]: https://webpack.js.org/loaders/style-loader

### Packages

- autoprefixer
- babel
- eslint
- husky
- jest
- prettier
- sass
- browserslist
  last 2 version
  &gt; 1%

## Quick Start

### Install

```bash
npm install or yarn install
```

### Commands

```bash
## Запуск тестов jest
yarn test
## Запуск тестов jest с watch
yarn test.watch
## Запуск создания сборки Production
yarn build
## Запуск разработки [Dev] сервер
yarn start
## Запуск сборки [Prod] сервер
yarn start.prod
## Проверка правил eslint
yarn eslint.check
## Автоисправление eslint
yarn eslint.fix
## Форматирование prettier
yarn format
```

## HTTP server

- localhost:3000 [dev]
- localhost:3001 [prod]

## Structure

```tree
├── build
│   ├── assets
│   ├── images
|   └── index.html
|
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   │── styles
│   │   ├── colors.scss
│   │   ├── fonts.scss
│   │   ├── includes.scss
│   │   └── style.scss
│   │── utils
│   │   └── utils.js
│   │── index.html
│   └── index.js
│
├── webpack
│   ├── babel.js
│   ├── css.js
|   ├── css.prod.js
│   ├── font.js
│   ├── image.js
│   └── sass.js
|
|── .browserslistrc
|── .editorconfig
|── .eslintignore
|── .eslintrc.json
|── .gitignore
|── .huskyrc.json
|── .lintstagedrc.json
|── .prettierrc.json
|── .stylelintrc.json
|── babel.config.js
|── http-server.js
|── webpack.common.js
|── webpack.dev.js
└── webpack.prod.js
```
