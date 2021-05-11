<template>
    <header class="header">
      <div class="header-main">
        <div class="title-icon">
          <img src="img/icon.svg" alt="" height="32px" width="32px">
        </div>
        <div class="title">
          <h1>とかさんの Block Generator</h1>
          <p>version:1.1.0</p>
        </div>
        <div class="header-menu">
          <div class="header-menu-element import-file">
            <label for="input-file">Import</label>
            <div class="help-content top" id="help-content-1">
              <p>すでファイルがある場合はデータをインポートします。</p>
            </div>
          </div>
          <div class="header-menu-element" id="show-preview">
            <span>Preview</span>
            <div class="help-content top" id="help-content-3">
              <p>
                入力・編集したデータの実際の表示、json閲覧とダウンロード・コピーをします。
              </p>
            </div>
          </div>
          <div class="header-menu-element">
            <p id="show-help">help</p>
          </div>
          <div class="header-menu-element">
            <label for="open-about">About</label>
          </div>
        </div>
        <div class="header-menu-alt">
          <input type="file" name="input-file" id="input-file" accept=".json" class="invisible-Control">
          <label for="input-file" class="import-file">
            <img src="img/import.svg" alt="import" width="32px" height="32px">
            <p>Import</p>
          </label>
          <details class="open-more-info">
            <summary class="more-info-icon"><img src="img/more.svg" alt="more" width="32px" height="32px"></summary>
            <ul class="more-info">
              <li>
                <a href="https://tokamcwin10.blog.jp/" target="_blank" title="とかさんのホームページ" rel="noopener noreferrer"><img src="img/homepage.svg" alt="" width="32px" height="32px">
                  <p>Homepage</p>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/toka7290" target="_blank" title="Twitter" rel="noopener noreferrer"><img src="img/twitter.svg" alt="" width="32px" height="32px">
                  <p>Twitter</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/toka7290/TokaTools" target="_blank" title="Github" rel="noopener noreferrer"><img src="img/github.svg" alt="" width="32px" height="32px">
                  <p>GitHub</p>
                </a>
              </li>
              <li>
                <a href="https://tokamcwin10.blog.jp/article-37132278" target="_blank" title="Block.jsonの解説ページに飛びます。" rel="noopener noreferrer"><img src="img/help.svg" alt="" width="32px" height="32px">
                  <p>Block Help</p>
                </a>
              </li>
              <li>
                <input type="button" id="open-about" class="invisible-Control">
                <label class="open-about" for="open-about">
                  <img src="img/icon.svg" alt="" height="32px" width="32px">
                  <p>about</p>
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div id="page-help"></div>
      <div class="page-about about-hide">
        <div class="about-area">
          <div class="close-about">
            <input type="button" id="close-about-btn" class="invisible-Control">
            <label for="close-about-btn">
              <img src="img/close.svg" alt="" id="close-about-image" width="50px" height="50px">
            </label>
          </div>
          <div class="about-content">
            <img src="img/icon.svg" alt="" width="180px" height="180px">
            <div class="about-title">
              <h2>とかさんの Block Generator</h2>
              <p>version:1.1.0</p>
            </div>
            <div class="about-external-link">
              <a href="https://tokamcwin10.blog.jp/" target="_blank" title="とかさんのホームページ" rel="noopener noreferrer"><img src="img/homepage.svg" alt="" width="32px" height="32px"></a>
              <a href="https://twitter.com/toka7290" target="_blank" title="Twitter" rel="noopener noreferrer"><img src="img/twitter.svg" alt="" width="32px" height="32px"></a>
              <a href="https://github.com/toka7290/TokaTools" target="_blank" title="Github" rel="noopener noreferrer"><img src="img/github.svg" alt="" width="32px" height="32px"></a>
              <a href="https://tokamcwin10.blog.jp/article-37132278" target="_blank" title="Block.jsonの解説ページに飛びます。" rel="noopener noreferrer"><img src="img/help.svg" alt="" width="32px" height="32px"></a>
              <div id="page-share"><img src="img/share.svg" alt="" width="32px" height="32px"></div>
            </div>
            <div class="copyright">
              <p>Copyright (c) 2021 とかさん</p>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  head(){
    return {
      title: "とかさんの Block Generator",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1'
        },
        {
          name: 'keywords',
          content: 'とかさん,Minecraft,マインクラフト,block,ブロック,json,Generator,tool,ツール,Addon,アドオン'
        },
        {
          name: 'Description',
          content: 'Minecraft Bedrock Edition 向けのアドオン作成補助ツールです。block jsonを簡単に作ることができます。'
        },
        {
          name: 'theme-color',
          content: '#3870A9'
        },
        {
          property: 'og:url',
          content: 'https://toka7290.github.io/TokaTools/TokaBlockGenerator/'
        },
      ]
    }
  }
}
</script>