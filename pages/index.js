import Image from "next/image";
import styles from "../styles/main.module.css";
import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block_name: "",
      description_is_experimental: false,
      description_register_to_creative_menu: false,
      components_loot: "",
      components_destroy_time: 0,
      components_explosion_resistance: 0,
      components_friction: 0.1,
      components_flame_odds: 0,
      components_burn_odds: 0,
      components_map_color: "",
      components_map_color_pick: "#000000",
      components_block_light_absorption: 0,
      components_block_light_emission: 0.0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="header_main">
            <Image
              src="/img/icon.webp"
              alt=""
              className={styles.title_icon}
              height={32}
              width={32}
            />
            <div className="title">
              <h1>とかさんのBlockGenerator</h1>
              <p>version:0.3.0</p>
            </div>
            <div className="header_menu">
              <div className="import_file">
                <label htmlFor="input_file">Import</label>
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
            <div className="header_menu_alt">
              <label htmlFor="input_file" className="import_file">
                <Image src="/img/import.svg" alt="" height={32} width={32} />
                <p>Import</p>
              </label>
              <div className="open_more_info">
                <Image src="/img/more.svg" alt="" height={32} width={32} />
                <ul className="more_info">
                  <li>
                    <a
                      href="http://tokamcwin10.blog.jp/"
                      target="_blank"
                      title="とかさんのホームページ"
                      rel="noopener"
                    >
                      <Image
                        src="/img/homepage.svg"
                        alt=""
                        height={32}
                        width={32}
                      />
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
                      <Image
                        src="/img/twitter.svg"
                        alt=""
                        height={32}
                        width={32}
                      />
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
                      <Image
                        src="/img/github.svg"
                        alt=""
                        height={32}
                        width={32}
                      />
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
                      <Image
                        src="/img/help.svg"
                        alt=""
                        height={32}
                        width={32}
                      />
                      <p>Block Help</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="page_about">
            <div className="close_about">
              <Image src="/img/close.svg" alt="" height={50} width={50} />
            </div>
            <div className="about_content">
              <Image src="/img/icon.webp" alt="" height={180} width={180} />
              <h2>とかさんのBlockGenelator</h2>
              <p>version:0.3.0</p>
              <div className="about_external_link">
                <a
                  href="http://tokamcwin10.blog.jp/"
                  target="_blank"
                  title="とかさんのホームページ"
                  rel="noopener"
                >
                  <Image
                    src="/img/homepage.svg"
                    alt=""
                    height={32}
                    width={32}
                  />
                </a>
                <a
                  href="https://twitter.com/toka7290"
                  target="_blank"
                  title="Twitter"
                  rel="noopener"
                >
                  <Image src="/img/twitter.svg" alt="" height={32} width={32} />
                </a>
                <a
                  href="https://github.com/toka7290/TokaBlockGenelator"
                  target="_blank"
                  title="Github"
                  rel="noopener"
                >
                  <Image src="/img/github.svg" alt="" height={32} width={32} />
                </a>
                <a
                  href="http://tokamcwin10.blog.jp/archives/37132278.html"
                  target="_blank"
                  title="Block.jsonの解説ページに飛びます。"
                  rel="noopener"
                >
                  <Image src="/img/help.svg" alt="" height={32} width={32} />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="content">
          <div className="editor">
            <form name="editor_main">
              <fieldset
                className="basic"
                title="このブロックのフォーマットバージョンを設定します。"
              >
                <legend>Definition</legend>
                <label htmlFor="format_version">フォーマットバージョン</label>
                <select name="format_version" id="format_version">
                  <option value="1.16.0">1.16.0</option>
                  <option value="1.12.0">1.12.0</option>
                </select>
              </fieldset>
              <fieldset className="description">
                <legend>Description</legend>
                <div title="このブロックのIDを設定します。'名前空間:ブロックID'の形式で書く必要があります。">
                  <label htmlFor="description_block_name">ブロックID</label>
                  <input
                    type="text"
                    name="block_name"
                    id="description_block_name"
                    onChange={this.handleInputChange}
                    value={this.state.block_name}
                  />
                </div>
                <div title="このチェックを有効にすると、試験的なゲームプレイでのみブロックが有効化されます。">
                  <label htmlFor="description_is_experimental">
                    試験的なゲームプレイのみ
                  </label>
                  <input
                    type="checkbox"
                    name="description_is_experimental"
                    id="description_is_experimental"
                    onChange={this.handleInputChange}
                    value={this.state.description_is_experimental}
                  />
                </div>
                <div title="このチェックを有効にすると、ブロックがクリエイティブインベントリに追加されます。">
                  <label htmlFor="description_register_to_creative_menu">
                    クリエイティブメニューに追加
                  </label>
                  <input
                    type="checkbox"
                    name="description_register_to_creative_menu"
                    id="description_register_to_creative_menu"
                    onChange={this.handleInputChange}
                    value={this.state.description_register_to_creative_menu}
                  />
                </div>
              </fieldset>
              <fieldset className="components">
                <legend>Components</legend>
                <div title="このブロックが破壊された時に落とすアイテムが記述されたルートテーブルを指定します。">
                  <label htmlFor="components_loot">ルートテーブル</label>
                  <input
                    type="text"
                    name="components_loot"
                    id="components_loot"
                    onChange={this.handleInputChange}
                    value={this.state.components_loot}
                  />
                </div>
                <div title="このブロックの破壊にかかる時間を設定します[秒]">
                  <label htmlFor="components_destroy_time">
                    破壊にかかる時間
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="components_destroy_time"
                    id="components_destroy_time"
                    value="1.0"
                    step="0.1"
                    onChange={this.handleInputChange}
                    value={this.state.components_destroy_time}
                  />
                  <p>s</p>
                </div>
                <div title="このブロックの爆発耐性を設定します。">
                  <label htmlFor="components_explosion_resistance">
                    爆発耐性
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="components_explosion_resistance"
                    id="components_explosion_resistance"
                    value="1.0"
                    step="0.1"
                    onChange={this.handleInputChange}
                    value={this.state.components_explosion_resistance}
                  />
                </div>
                <div title="このブロックの上をエンティティが移動するときの止まりにくさを設定します。">
                  <label htmlFor="components_friction">摩擦</label>
                  <input
                    type="number"
                    min="0.1"
                    name="components_friction"
                    id="components_friction"
                    value="0.1"
                    step="0.1"
                    onChange={this.handleInputChange}
                    value={this.state.components_friction}
                  />
                </div>
                <fieldset>
                  <legend>燃焼</legend>
                  <div title="ブロックの燃えやすさを設定します。">
                    <label htmlFor="components_flame_odds">発火性</label>
                    <input
                      type="number"
                      min="0"
                      name="components_flame_odds"
                      id="components_flame_odds"
                      value="0"
                      onChange={this.handleInputChange}
                      value={this.state.components_flame_odds}
                    />
                  </div>
                  <div title="ブロックが燃えた後消滅する確率を設定します。">
                    <label htmlFor="components_burn_odds">消失率</label>
                    <input
                      type="number"
                      min="0"
                      name="components_burn_odds"
                      id="components_burn_odds"
                      value="0"
                      disabled
                      onChange={this.handleInputChange}
                      value={this.state.components_burn_odds}
                    />
                    <p>%</p>
                  </div>
                </fieldset>
                <div title="このブロックの地図での色を設定します。#000000~#ffffffまで設定できます。">
                  <label htmlFor="components_map_color">
                    <label htmlFor="components_map_color_pick">地図の色</label>
                  </label>
                  <input
                    type="text"
                    name="components_map_color"
                    id="components_map_color"
                    onChange={this.handleInputChange}
                    value={this.state.components_map_color}
                  />
                  <input
                    type="color"
                    name="components_map_color_pick"
                    id="components_map_color_pick"
                    onChange={this.handleInputChange}
                    value={this.state.components_map_color_pick}
                  />
                </div>
                <div title="このブロックが吸収する光の量を設定します。">
                  <label htmlFor="components_block_light_absorption">
                    光の吸収
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="16"
                    name="components_block_light_absorption"
                    id="components_block_light_absorption"
                    value="0"
                    onChange={this.handleInputChange}
                    value={this.state.components_block_light_absorption}
                  />
                </div>
                <div title="このブロックが発する光の量を設定します。">
                  <label htmlFor="components_block_light_emission">
                    発光量
                  </label>
                  <input
                    type="number"
                    min="0.0"
                    max="1.0"
                    name="components_block_light_emission"
                    id="components_block_light_emission"
                    value="0.0"
                    step="0.1"
                    onChange={this.handleInputChange}
                    value={this.state.components_block_light_emission}
                  />
                  <p>
                    =<span id="components_block_light_emission_eq"></span>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="separator"></div>
          <div className="data_check">
            <div className="preview">
              <div className="preview_contlrol_bar">
                <p className="preview_contlrol_copy">Copy</p>
                <p className="preview_contlrol_download">Download</p>
              </div>
              <pre className="language-json">
                <code className="language-json"></code>
              </pre>
              <label>
                <textarea name="code_buffer" id="code_buffer"></textarea>
              </label>
            </div>
            <div className="issue">
              <div className="issue_contlrol_bar">
                <div className="issue_contlrol_label">
                  <Image
                    src="/img/chevron-up.svg"
                    alt="img"
                    className={styles.open}
                    height={24}
                    width={24}
                  />
                  <span>問題</span>
                </div>
                <div className="issue_contlrol_num">
                  <div className="issue_contlrol_warning">
                    <Image
                      src="/img/warning.svg"
                      alt=""
                      height={19}
                      width={19}
                    />
                    <span className="issue_warning_num">警告:0</span>
                  </div>
                  <div className="issue_contlrol_error">
                    <Image src="/img/error.svg" alt="" height={19} width={19} />
                    <span className="issue_error_num">エラー:0</span>
                  </div>
                </div>
              </div>
              <div className="issue_content">
                <ul className="issue_list"></ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Main;
// export default function Home() {
//   const [block_name, setBlock_name] = useState("");
//   const [
//     description_is_experimental,
//     setDescription_is_experimental,
//   ] = useState("");
//   const this.handleInputChange = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();
//   };
// }
