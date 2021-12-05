<p align="center">
  <a href="https://niexq.github.io/dumi-template-simple">
    <img width="100" src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/react-logo.png">
  </a>
</p>

<h1 align="center">dumi-template-simple 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/dumi-template-simple.svg" />
  <a href="https://github.com/niexq/dumi-template-simple#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/niexq/dumi-template-simple/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://standardjs.com" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" />
  </a>
  <a href="https://github.com/niexq/dumi-template-simple/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/niexq/dumi-template-simple" />
  </a>
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
  </a>
  <a href="https://github.com/umijs/dumi">
    <img src="https://img.shields.io/badge/docs%20by-dumi-blue" alt="dumi">
  </a>
</p>

> 基于 dumi-template 为组件开发场景而生的文档模板

简体中文 | [English](./README.en-US.md)

### 🏠 [主页预览](https://niexq.github.io/dumi-template-simple)

![](https://raw.githubusercontent.com/niexq/picbed/main/picgo/dumi-template-simple-zh-CN.gif)

## 📒 目录介绍

```
├── docs                   文档存放路径
│   ├── index.md           首页展示
│   └── **.**              网站目录文档
├── src                    组件主目录
│   ├── index.ts           组件注册
│   └── FirstDemo          组件开发
├── .editorconfig          编辑器配置
├── .eslintrc.js           eslint 配置
├── .fatherrc.ts           father 配置
├── .prettierrc.js         prettier 配置
├── .stylelintrc.js        stylelint 配置
├── .umirc.ts              dumi 配置
├── LICENSE                LICENSE
└── tsconfig.json          typescript 配置
```

## 📦 安装

```bash
  yarn add dumi-template-simple  # or npm i dumi-template-simple -S
```

## 🔨 使用

```tsx | pure
import React from 'react';
import { FirstDemo } from 'dumi-template-simple';

export default () => <FirstDemo title="First Demo" />;
```

## 🦧 作者

- Github: [@niexq](https://github.com/niexq)

## 🤝 贡献

欢迎投稿、问题和功能请求！<br />随时检查 [issues](https://github.com/niexq/dumi-template-simple/issues).

## ❤️ 表达您的支持

如果这个项目对你有帮助，请给一个 ⭐️！

## 📝 License

这个项目是 [MIT](https://github.com/niexq/dumi-template-simple/blob/main/LICENSE) licensed.

## 🐳 灵感来源

[dumi-template](https://github.com/umijs/dumi-template)

## 🌐 浏览器兼容性

| <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/edge-logo.png" alt="IE / Edge" width="24px" height="24px" /><br/> Edge | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/ie-logo.png" alt="Safari" width="24px" height="24px" /><br/>Internet Explorer | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/android-logo.png" alt="Safari" width="24px" height="24px" /><br/>WebView Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/chrome-logo.png" alt="Chrome" width="24px" height="24px" /><br/>Chrome Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/firefox-logo.png" alt="Firefox" width="24px" height="24px" /><br/>Firefox Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/opera-logo.png" alt="Opera" width="24px" height="24px" /><br/>Opera Android | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/safari-logo.png" alt="Safari" width="24px" height="24px" /><br/>Safari iOS | <img src="https://raw.githubusercontent.com/niexq/picbed/main/picgo/samsung-logo.png" alt="Samsung" width="24px" height="24px" /><br/>Samsung Internet |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 64 | 79 | 69 | ❌ | 51 | 13.1 | 64 | 64 | 79 | 47 | 13.4 | 9.0 |
