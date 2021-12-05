import { defineConfig } from 'dumi';

const repo = 'dumi-template-simple';

export default defineConfig({
  title: repo,
  favicon:'https://raw.githubusercontent.com/niexq/picbed/main/picgo/react-logo.png',
  logo: 'https://raw.githubusercontent.com/niexq/picbed/main/picgo/react-logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/niexq/dumi-template-simple',
    },
  ],
  // more config: https://d.umijs.org/config
});
