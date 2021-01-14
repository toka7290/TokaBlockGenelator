import Head from "next/head";
import "../css/color.css";
import "../css/style.css";
import "../css/prism.css";
import "../css/phone.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>とかさんのBlockGenerator</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="keywords"
          content="とかさん,Minecraft,マインクラフト,block,ブロック,json,Generator,tool,ツール,Addon,アドオン"
        />
        <meta
          name="Description"
          content="Minecraft Bedrock Edition 向けのアドオン作成補助ツールです。block jsonを簡単に作ることができます。"
        />
        <meta http-equiv="content-language" content="ja" />
        <meta name="theme-color" content="#60ad5e" />
        <meta
          property="og:url"
          content="https://toka7290.github.io/TokaBlockGenelator/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="とかさんのBlockGenerator" />
        <meta property="og:title" content="BlockGenerator" />
        <meta
          property="og:description"
          content="Minecraft Bedrock Edition 向けのアドオン作成補助ツールです。block jsonを簡単に作ることができます。"
        />
        <meta
          property="og:image"
          content="https://toka7290.github.io/TokaBlockGenelator/img/icon_2000.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@toka7290" />
        <link rel="apple-touch-icon" href="/img/icon_apple-touch-icon.png" />
        <link rel="icon" href="/img/icon.webp" />
        <link rel="manifest" href="/json/webapp.webmanifest" />
        <script src="/lib/jquery-3.5.1.min.js" defer></script>
        <script src="/lib/prism.js" defer></script>
        <script type="text/javascript" src="/js/main.js" defer></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
