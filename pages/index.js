import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header class="header">
        <div class="header_main">
          <Image
            src="/img/icon.webp"
            alt=""
            class="title_icon"
            onerror="this.src='/img/icon_2000.png'"
          />
          <div class="title">
            <h1>とかさんのBlockGenerator</h1>
            <p>version:0.3.0</p>
          </div>
          <div class="header_menu">
            <div class="import_file">
              <label for="input_file">Import</label>
              <input
                type="file"
                name="input_file"
                id="input_file"
                accept=".json"
              />
            </div>
            <p id="show_preview">Preview</p>
            <p id="page_share">share</p>
            <p id="open_about">About</p>
          </div>
          <div class="header_menu_alt">
            <label for="input_file" class="import_file">
              <Image src="/img/import.svg" alt="" />
              <p>Import</p>
            </label>
            <div class="open_more_info">
              <Image src="/img/more.svg" alt="" />
              <ul class="more_info">
                <li>
                  <a
                    href="http://tokamcwin10.blog.jp/"
                    target="_blank"
                    title="とかさんのホームページ"
                    rel="noopener"
                  >
                    <Image src="/img/homepage.svg" alt="" />
                    <p>Homepage</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/toka7290"
                    target="_blank"
                    title="Twitter"
                    rel="noopener"
                  >
                    <Image src="/img/twitter.svg" alt="" />
                    <p>Twitter</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/toka7290/TokaBlockGenelator"
                    target="_blank"
                    title="Github"
                    rel="noopener"
                  >
                    <Image src="/img/github.svg" alt="" />
                    <p>GitHub</p>
                  </a>
                </li>
                <li>
                  <a
                    href="http://tokamcwin10.blog.jp/archives/37132278.html"
                    target="_blank"
                    title="Block.jsonの解説ページに飛びます。"
                    rel="noopener"
                  >
                    <Image src="/img/help.svg" alt="" />
                    <p>Block Help</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page_about">
          <div class="close_about">
            <Image src="/img/close.svg" alt="" />
          </div>
          <div class="about_content">
            <Image
              src="/img/icon.webp"
              alt=""
              onerror="this.src='/img/icon_2000.png'"
            />
            <h2>とかさんのBlockGenelator</h2>
            <p>version:0.3.0</p>
            <div class="about_external_link">
              <a
                href="http://tokamcwin10.blog.jp/"
                target="_blank"
                title="とかさんのホームページ"
                rel="noopener"
              >
                <Image src="/img/homepage.svg" alt="" />
              </a>
              <a
                href="https://twitter.com/toka7290"
                target="_blank"
                title="Twitter"
                rel="noopener"
              >
                <Image src="/img/twitter.svg" alt="" />
              </a>
              <a
                href="https://github.com/toka7290/TokaBlockGenelator"
                target="_blank"
                title="Github"
                rel="noopener"
              >
                <Image src="/img/github.svg" alt="" />
              </a>
              <a
                href="http://tokamcwin10.blog.jp/archives/37132278.html"
                target="_blank"
                title="Block.jsonの解説ページに飛びます。"
                rel="noopener"
              >
                <Image src="/img/help.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div class="content">
        <div class="editor">
          <form name="editor_main">
            <fieldset
              class="basic"
              title="このブロックのフォーマットバージョンを設定します。"
            >
              <label for="format_version">フォーマットバージョン</label>
              <select name="format_version" id="format_version">
                <option value="1.16.0">1.16.0</option>
                <option value="1.12.0">1.12.0</option>
              </select>
            </fieldset>
            <fieldset class="description">
              <legend>Description</legend>
              <div title="このブロックのIDを設定します。'名前空間:ブロックID'の形式で書く必要があります。">
                <label for="description_block_name">ブロックID</label>
                <input
                  type="text"
                  name="block_name"
                  id="description_block_name"
                />
              </div>
              <div title="このチェックを有効にすると、試験的なゲームプレイでのみブロックが有効化されます。">
                <label for="description_is_experimental">
                  試験的なゲームプレイのみ
                </label>
                <input
                  type="checkbox"
                  name="description_is_experimental"
                  id="description_is_experimental"
                />
              </div>
              <div title="このチェックを有効にすると、ブロックがクリエイティブインベントリに追加されます。">
                <label for="description_register_to_creative_menu">
                  クリエイティブメニューに追加
                </label>
                <input
                  type="checkbox"
                  name="description_register_to_creative_menu"
                  id="description_register_to_creative_menu"
                />
              </div>
            </fieldset>
            <fieldset class="components">
              <legend>Components</legend>
              <div title="このブロックが破壊された時に落とすアイテムが記述されたルートテーブルを指定します。">
                <label for="components_loot">ルートテーブル</label>
                <input
                  type="text"
                  name="components_loot"
                  id="components_loot"
                />
              </div>
              <div title="このブロックの破壊にかかる時間を設定します[秒]">
                <label for="components_destroy_time">破壊にかかる時間</label>
                <input
                  type="number"
                  min="0"
                  name="components_destroy_time"
                  id="components_destroy_time"
                  value="1.0"
                  step="0.1"
                />
                <p>s</p>
              </div>
              <div title="このブロックの爆発耐性を設定します。">
                <label for="components_explosion_resistance">爆発耐性</label>
                <input
                  type="number"
                  min="0"
                  name="components_explosion_resistance"
                  id="components_explosion_resistance"
                  value="1.0"
                  step="0.1"
                />
              </div>
              <div title="このブロックの上をエンティティが移動するときの止まりにくさを設定します。">
                <label for="components_friction">摩擦</label>
                <input
                  type="number"
                  min="0.1"
                  name="components_friction"
                  id="components_friction"
                  value="0.1"
                  step="0.1"
                />
              </div>
              <fieldset>
                <legend>燃焼</legend>
                <div title="ブロックの燃えやすさを設定します。">
                  <label for="components_flame_odds">発火性</label>
                  <input
                    type="number"
                    min="0"
                    name="components_flame_odds"
                    id="components_flame_odds"
                    value="0"
                  />
                </div>
                <div title="ブロックが燃えた後消滅する確率を設定します。">
                  <label for="components_burn_odds">消失率</label>
                  <input
                    type="number"
                    min="0"
                    name="components_burn_odds"
                    id="components_burn_odds"
                    value="0"
                    disabled
                  />
                  <p>%</p>
                </div>
              </fieldset>
              <div title="このブロックの地図での色を設定します。#000000~#ffffffまで設定できます。">
                <label for="components_map_color">
                  <label for="components_map_color_pick">地図の色</label>
                </label>
                <input
                  type="text"
                  name="components_map_color"
                  id="components_map_color"
                />
                <input
                  type="color"
                  name="components_map_color_pick"
                  id="components_map_color_pick"
                />
              </div>
              <div title="このブロックが吸収する光の量を設定します。">
                <label for="components_block_light_absorption">光の吸収</label>
                <input
                  type="number"
                  min="0"
                  max="16"
                  name="components_block_light_absorption"
                  id="components_block_light_absorption"
                  value="0"
                />
              </div>
              <div title="このブロックが発する光の量を設定します。">
                <label for="components_block_light_emission">発光量</label>
                <input
                  type="number"
                  min="0.0"
                  max="1.0"
                  name="components_block_light_emission"
                  id="components_block_light_emission"
                  value="0.0"
                  step="0.1"
                />
                <p>
                  =<span id="components_block_light_emission_eq"></span>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
        <div class="separator"></div>
        <div class="data_check">
          <div class="preview">
            <div class="preview_contlrol_bar">
              <p class="preview_contlrol_copy">Copy</p>
              <p class="preview_contlrol_download">Download</p>
            </div>
            <pre class="language-json">
              <code class="language-json"></code>
            </pre>
            <textarea name="code_buffer" id="code_buffer"></textarea>
          </div>
          <div class="issue">
            <div class="issue_contlrol_bar">
              <div class="issue_contlrol_label">
                <Image src="/img/chevron-up.svg" alt="img" class="open" />
                <span>問題</span>
              </div>
              <div class="issue_contlrol_num">
                <div class="issue_contlrol_warning">
                  <Image src="/img/warning.svg" alt="" />
                  <span class="issue_warning_num">警告:0</span>
                </div>
                <div class="issue_contlrol_error">
                  <Image src="/img/error.svg" alt="" />
                  <span class="issue_error_num">エラー:0</span>
                </div>
              </div>
            </div>
            <div class="issue_content">
              <ul class="issue_list"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
