export default {
  target: "static",
  head: {
    title: "とかさんの Block Generator",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1",
      },
      {
        name: "keywords",
        content:
          "とかさん,Minecraft,マインクラフト,block,ブロック,json,Generator,tool,ツール,Addon,アドオン",
      },
      {
        name: "Description",
        content:
          "Minecraft Bedrock Edition 向けのアドオン作成補助ツールです。block jsonを簡単に作ることができます。",
      },
      {
        name: "theme-color",
        content: "#3870A9",
      },
      {
        property: "og:url",
        content: "https://toka7290.github.io/TokaTools/TokaBlockGenerator/",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "とかさんの Block Generator" },
      { property: "og:title", content: "BlockGenerator" },
      {
        property: "og:description",
        content:
          "Minecraft Bedrock Edition 向けのアドオン作成補助ツールです。block jsonを簡単に作ることができます。",
      },
      {
        property: "og:image",
        content: "https://toka7290.github.io/TokaTools/TokaBlockGenerator/img/icon_2000.png",
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@toka7290" },
    ],
    link: [
      { rel: "apple-touch-icon", href: "/icon_apple-touch-icon.png" },
      { rel: "icon", href: "/icon.svg" },
    ],
    script: [
      {
        src: "/lib/jquery-3.6.0.min.js",
      },
      {
        src: "/lib/prism.js",
      },
    ],
  },
  css: [
    `@/assets/css/color.min.css`,
    `@/assets/css/phone.min.css`,
    `@/assets/css/prism.min.css`,
    `@/assets/css/style.min.css`,
  ],
  pwa: {
    icon: {
      source: "~/assets/img/icon.svg",
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  modules: ["@nuxtjs/svg"],
};
