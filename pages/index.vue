<template>
  <div class="body">
    <header class="header">
      <div class="header-main">
        <div class="title-icon">
          <img src="~/assets/img/icon.svg" alt="" height="32px" width="32px" />
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
          <input
            type="file"
            name="input-file"
            id="input-file"
            accept=".json"
            class="invisible-Control"
          />
          <label for="input-file" class="import-file">
            <img
              src="~/assets/img/import.svg"
              alt="import"
              width="32px"
              height="32px"
            />
            <p>Import</p>
          </label>
          <details class="open-more-info">
            <summary class="more-info-icon">
              <img
                src="~/assets/img/more.svg"
                alt="more"
                width="32px"
                height="32px"
              />
            </summary>
            <ul class="more-info">
              <li>
                <a
                  href="https://tokamcwin10.blog.jp/"
                  target="_blank"
                  title="とかさんのホームページ"
                  rel="noopener noreferrer"
                  ><img
                    src="~/assets/img/homepage.svg"
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <p>Homepage</p>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/toka7290"
                  target="_blank"
                  title="Twitter"
                  rel="noopener noreferrer"
                  ><img
                    src="~/assets/img/twitter.svg"
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <p>Twitter</p>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/toka7290/TokaTools"
                  target="_blank"
                  title="Github"
                  rel="noopener noreferrer"
                  ><img
                    src="~/assets/img/github.svg"
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <p>GitHub</p>
                </a>
              </li>
              <li>
                <a
                  href="https://tokamcwin10.blog.jp/article-37132278"
                  target="_blank"
                  title="Block.jsonの解説ページに飛びます。"
                  rel="noopener noreferrer"
                  ><img
                    src="~/assets/img/help.svg"
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <p>Block Help</p>
                </a>
              </li>
              <li>
                <input
                  type="button"
                  id="open-about"
                  class="invisible-Control"
                />
                <label class="open-about" for="open-about">
                  <img
                    src="~/assets/img/icon.svg"
                    alt=""
                    height="32px"
                    width="32px"
                  />
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
            <input
              type="button"
              id="close-about-btn"
              class="invisible-Control"
            />
            <label for="close-about-btn">
              <img
                src="~/assets/img/close.svg"
                alt=""
                id="close-about-image"
                width="50px"
                height="50px"
              />
            </label>
          </div>
          <div class="about-content">
            <img
              src="~/assets/img/icon.svg"
              alt=""
              width="180px"
              height="180px"
            />
            <div class="about-title">
              <h2>とかさんの Block Generator</h2>
              <p>version:1.1.0</p>
            </div>
            <div class="about-external-link">
              <a
                href="https://tokamcwin10.blog.jp/"
                target="_blank"
                title="とかさんのホームページ"
                rel="noopener noreferrer"
                ><img
                  src="~/assets/img/homepage.svg"
                  alt=""
                  width="32px"
                  height="32px"
              /></a>
              <a
                href="https://twitter.com/toka7290"
                target="_blank"
                title="Twitter"
                rel="noopener noreferrer"
                ><img
                  src="~/assets/img/twitter.svg"
                  alt=""
                  width="32px"
                  height="32px"
              /></a>
              <a
                href="https://github.com/toka7290/TokaTools"
                target="_blank"
                title="Github"
                rel="noopener noreferrer"
                ><img
                  src="~/assets/img/github.svg"
                  alt=""
                  width="32px"
                  height="32px"
              /></a>
              <a
                href="https://tokamcwin10.blog.jp/article-37132278"
                target="_blank"
                title="Block.jsonの解説ページに飛びます。"
                rel="noopener noreferrer"
                ><img
                  src="~/assets/img/help.svg"
                  alt=""
                  width="32px"
                  height="32px"
              /></a>
              <div id="page-share">
                <img
                  src="~/assets/img/share.svg"
                  alt=""
                  width="32px"
                  height="32px"
                />
              </div>
            </div>
            <div class="copyright">
              <p>Copyright (c) 2021 とかさん</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="help-content bottom" id="help-content-2">
      <p>データを編集します</p>
      <p>エラー等は下にある[問題]タブから見ることができます。</p>
    </div>
    <div class="file-drop-zone hide">
      <div class="file-drop-zone-textarea">
        <img
          src="~/assets/img/import.svg"
          alt="import"
          width="50px"
          height="50px"
        />
        <p>ファイルをドロップして&NewLine;インポートします。</p>
      </div>
    </div>
    <div class="content">
      <div class="editor">
        <div class="editor-switcher">
          <div class="switcher-hamburger">
            <input
              type="checkbox"
              name="hamburger-opener"
              id="hamburger-opener"
              class="invisible-Control"
            />
            <label for="hamburger-opener" class="switch-element-body">
              <div class="switcher-select-mark"></div>
              <div class="switcher-icon">
                <img src="~/assets/img/menu.svg" alt="" />
              </div>
            </label>
          </div>
          <div class="switch-element">
            <input
              type="radio"
              name="editor-switch"
              id="editor-switch-main"
              value="main"
              class="invisible-Control"
              checked
            />
            <label for="editor-switch-main" class="switch-element-body">
              <div class="switcher-select-mark"></div>
              <div class="switcher-icon">
                <SVGMain />
              </div>
              <div class="switcher-editor-name">Main</div>
            </label>
          </div>
          <div class="switch-element editor-event">
            <input
              type="radio"
              name="editor-switch"
              id="editor-switch-event"
              value="event"
              class="invisible-Control"
            />
            <label for="editor-switch-event" class="switch-element-body">
              <div class="switcher-select-mark"></div>
              <div class="switcher-icon">
                <img src="~/assets/img/event.svg" alt="" />
              </div>
              <div class="switcher-editor-name">イベント</div>
            </label>
          </div>
          <div class="switch-element editor-permutations">
            <input
              type="radio"
              name="editor-switch"
              id="editor-switch-permutations"
              value="permutations"
              class="invisible-Control"
            />
            <label for="editor-switch-permutations" class="switch-element-body">
              <div class="switcher-select-mark"></div>
              <div class="switcher-icon">
                <img src="~/assets/img/permutation.svg" alt="" />
              </div>
              <div class="switcher-editor-name">パーミュテーション</div>
            </label>
          </div>
          <div class="switch-element editor-blockState">
            <input
              type="radio"
              name="editor-switch"
              id="editor-switch-blockState"
              value="blockState"
              class="invisible-Control"
            />
            <label for="editor-switch-blockState" class="switch-element-body">
              <div class="switcher-select-mark"></div>
              <div class="switcher-icon">
                <img src="~/assets/img/blockState.svg" alt="" />
              </div>
              <div class="switcher-editor-name">ブロック状態</div>
            </label>
          </div>
        </div>
        <form name="editor-main" id="editor-main" class="editor-main">
          <div class="editor-element">
            <div class="editor-element-legend">
              <p>Definition</p>
            </div>
            <div
              class="value-element"
              title="このブロック.jsonのフォーマットバージョンを設定します。"
            >
              <div class="value-label">
                <label for="format-version">フォーマットバージョン</label>
              </div>
              <div class="value-input">
                <select name="format-version" id="format-version">
                  <option value="1.16.100">1.16.100</option>
                  <option value="1.16.0">1.16.0</option>
                  <option value="1.12.0">1.12.0</option>
                </select>
              </div>
            </div>
          </div>
          <div class="editor-element">
            <div class="editor-element-legend">
              <p>Description</p>
            </div>
            <div
              class="value-element"
              title="このブロックのIDを設定します。'名前空間:ブロックID'の形式で書く必要があります。"
            >
              <div class="value-label">
                <label for="description-block-name">ブロックID</label>
              </div>
              <div class="value-input">
                <input
                  type="text"
                  name="block-name"
                  id="description-block-name"
                />
              </div>
            </div>
            <div
              class="value-element description_is_experimental unsupported"
              title="このチェックを有効にすると、試験的なゲームプレイでのみブロックが有効化されます。"
            >
              <label class="value-checkbox">
                <input
                  type="checkbox"
                  name="description-is-experimental"
                  id="description-is-experimental"
                  class="invisible-Control"
                />
                <div for="description-is-experimental" class="checkbox-body">
                  <div class="checkbox-body-box">
                    <SVGCheck />
                  </div>
                  <p class="checkbox-body-text">試験的なゲームプレイのみ</p>
                </div>
              </label>
            </div>
            <div
              class="value-element description_register_to_creative_menu unsupported"
              title="このチェックを有効にすると、ブロックがクリエイティブインベントリに追加されます。"
            >
              <label class="value-checkbox">
                <input
                  type="checkbox"
                  name="description-register-to-creative-menu"
                  id="description-register-to-creative-menu"
                  class="invisible-Control"
                />
                <div
                  for="description-register-to-creative-menu"
                  class="checkbox-body"
                >
                  <div class="checkbox-body-box">
                    <SVGCheck />
                  </div>
                  <p class="checkbox-body-text">クリエイティブメニューに追加</p>
                </div>
              </label>
            </div>
          </div>
          <div class="editor-element">
            <div class="editor-element-legend">
              <p>Components</p>
            </div>
            <div class="editor-element-body"></div>
            <div class="editor-element-footer element-control">
              <div class="type-modal">
                <label class="invisible-Control">
                  <input type="button" class="modal-open" />
                  <div class="element-control-text">要素の追加・削除</div>
                </label>
                <div class="modal hide">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <div class="modal-title">要素の追加・削除</div>
                        <label class="modal-close-btn">
                          <input
                            type="button"
                            value="閉じる"
                            class="modal-close invisible-Control"
                          />
                          <div class="close-btn-icon">
                            <img src="~/assets/img/close.svg" alt="" />
                          </div>
                        </label>
                      </div>
                      <div class="modal-body">
                        <div
                          class="value-element components_loot"
                          title="このブロックが破壊された時に落とすアイテムが記述されたルートテーブルを指定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_loot"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">ルートテーブル</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_display_name"
                          title="ブロックの画面に表示される名前を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_display_name"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">表示名</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_tag"
                          title="ブロックにタグを設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_tag"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">タグ</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_placement_filter"
                          title="ブロックが設置できる面とブロックを設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_placement_filter"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">配置フィルター</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_preventsjumping"
                          title="MOBがブロックを飛び越えることを禁止します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_preventsjumping"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">飛び越え禁止</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_unwalkable"
                          title="MOBがブロックを通り抜けるのを禁止します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_unwalkable"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">通り抜け禁止</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_map_color"
                          title="地図に表示されるブロックの色を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_map_color"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">地図の色</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_crafting_table"
                          title="ブロックに作業台の機能を付けます。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_crafting_table"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">作業台</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_geometry"
                          title="ブロックのジオメトリを設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_geometry"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">ジオメトリ</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_material_instances"
                          title="ブロックのマテリアルインスタンスを設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_material_instances"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                マテリアルインスタンス
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_entity_collision"
                          title="ブロックの物理的な衝突判定を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_entity_collision"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">衝突判定</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_pick_collision"
                          title="ブロックの選択時の判定を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_pick_collision"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">選択判定</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_rotation"
                          title="ブロックを回転させます。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_rotation"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">回転</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_breathability"
                          title="ブロックの通気性を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_breathability"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">通気性</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_block_light_absorption"
                          title="このブロックが吸収する光の量を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_block_light_absorption"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">光の吸収</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_block_light_emission"
                          title="このブロックが発する光の量を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_block_light_emission"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">発光量</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_destroy_time"
                          title="このブロックの破壊にかかる時間を設定します[秒]"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_destroy_time"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">破壊にかかる時間</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_explosion_resistance"
                          title="このブロックの爆発耐性を設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_explosion_resistance"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">爆発耐性</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_breakonpush"
                          title="ブロックをピストンで押すと破壊されるようにします。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_breakonpush"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">ピストンで破壊</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_immovable"
                          title="ブロックをピストンで押し引きできないようにします。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_immovable"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">ピストン押引不可</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_onlypistonpush"
                          title="ブロックをピストンで押込みしかできないようにします。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_onlypistonpush"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                ピストン押込みのみ
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_friction"
                          title="このブロックの上をエンティティが移動するときの止まりにくさを設定します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_friction"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">摩擦</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_flammable"
                          title="ブロックの燃焼に関する設定をします。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_flammable"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">燃焼</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_fall_on"
                          title="ブロックにエンティティが落ちてきた時のイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_fall_on"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(落ちてきた時)
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_interact"
                          title="ブロックにインタラクトした時のイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_interact"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(インタラクト)
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_placed"
                          title="ブロックが設置された時のイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_placed"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(置かれた時)
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_player_placing"
                          title="ブロックがプレイヤーによって置かれた時のイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_player_placing"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(プレイヤーが置いた時)
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_step_on"
                          title="ブロックでエンティティが歩き始めた時no"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_step_on"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">トリガ(踏んだ時)</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_step_off"
                          title="エンティティがブロックを離れた時のイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_step_off"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">トリガ(離れた時)</p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_on_player_destroyed"
                          title="プレイヤーによってブロックが破壊された時のイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_on_player_destroyed"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(破壊された時)
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_ticking"
                          title="ティック毎に発生するイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_ticking"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(ティック毎)
                              </p>
                            </div>
                          </label>
                        </div>
                        <div
                          class="value-element components_event_random_ticking"
                          title="ランダムテックごとに発生するイベントを定義します。"
                        >
                          <label class="value-checkbox">
                            <input
                              type="checkbox"
                              name="components_event_random_ticking"
                              class="element-control-switch invisible-Control"
                            />
                            <div class="checkbox-body">
                              <div class="checkbox-body-box">
                                <SVGCheck />
                              </div>
                              <p class="checkbox-body-text">
                                トリガ(ランダムティック)
                              </p>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <label
                          ><input
                            type="button"
                            value="Close"
                            class="modal-close"
                        /></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <form name="editor-event" id="editor-event" class="editor-event hide">
          <div class="event status-block">
            <div class="event status-block-controls">
              <div class="event status-block-header">
                <div class="event status-block-title">
                  <p>Event</p>
                </div>
                <div class="event status-block-controlBar">
                  <div
                    class="event add-status-block"
                    title="イベントを追加します。"
                  >
                    <label class="invisible-Control">
                      <input type="button" id="event-add" class="event" />
                      <div class="add-button-text">+ 追加</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="event status-block-body"></div>
          </div>
        </form>
        <form
          name="editor-permutations"
          id="editor-permutations"
          class="editor-permutations hide"
        >
          <div class="permutations block-tabPanel">
            <div class="permutations block-tab-controls">
              <div class="permutations block-tab-header">
                <div class="permutations block-tab-title">
                  <p>Permutations</p>
                </div>
                <div class="permutations block-tab-controlBar">
                  <div
                    class="permutations add-block-tab"
                    title="パーミュテーションを追加します。"
                  >
                    <label class="invisible-Control">
                      <input
                        type="button"
                        class="permutations add-block-tab-element"
                      />
                      <div class="add-button-text">+ 追加</div>
                    </label>
                  </div>
                  <div
                    class="permutations remove-block-tab"
                    title="パーミュテーションを削除します。"
                  >
                    <label class="invisible-Control">
                      <input
                        type="button"
                        class="permutations remove-block-tab-element"
                      />
                      <div class="remove-button-text">- 削除</div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="permutations block-tab-body"></div>
            </div>
            <div class="permutations block-tab-contents"></div>
          </div>
        </form>
        <form
          name="editor-blockState"
          id="editor-blockState"
          class="editor-blockState hide"
        >
          <div class="blockState status-block">
            <div class="blockState status-block-controls">
              <div class="blockState status-block-header">
                <div class="blockState status-block-title">
                  <p>BlockState</p>
                </div>
                <div class="blockState status-block-controlBar">
                  <div
                    class="blockState add-status-block"
                    title="ブロック状態を追加します。"
                  >
                    <label class="invisible-Control">
                      <input
                        type="button"
                        id="blockState-add"
                        class="blockState"
                      />
                      <div class="add-button-text">+ 追加</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="blockState status-block-body"></div>
          </div>
        </form>
      </div>
      <div class="separator"></div>
      <div class="data-check">
        <div class="preview">
          <div class="preview-control-bar">
            <div
              class="preview-control-child"
              title="jsonをクリップボードにコピーします。"
            >
              <input
                type="button"
                id="control-copy"
                class="invisible-Control"
              />
              <label for="control-copy" class="control-text">
                <p id="control-copy-text">Copy</p>
              </label>
            </div>
            <div
              class="preview-control-child"
              title="manifest.jsonをダウンロードします。"
            >
              <input
                type="button"
                id="control-download"
                class="invisible-Control"
              />
              <label for="control-download" class="control-text">
                <p>Download</p>
              </label>
            </div>
          </div>
          <div class="code-preview">
            <pre class="language-json">
              <code class="language-json"></code>
            </pre>
            <label>
              <img
                src="~/assets/img/blank.svg"
                alt=""
                width="19px"
                height="19px"
              />
              <textarea
                name="code-buffer"
                id="code-buffer"
                tabindex="-1"
              ></textarea>
            </label>
          </div>
        </div>
        <div class="issue">
          <input
            type="checkbox"
            name="issue-control"
            id="issue-control"
            class="invisible-Control"
          />
          <label for="issue-control" class="issue-status-bar">
            <div class="issue-status-label">
              <img
                src="~/assets/img/chevron-up.svg"
                alt=""
                width="19px"
                height="19px"
              />
              <span>問題</span>
            </div>
            <div class="issue-status-num">
              <div class="issue-status-error">
                <img
                  src="~/assets/img/error.svg"
                  alt=""
                  width="19px"
                  height="19px"
                />
                <span class="issue-error-num">エラー:0</span>
              </div>
              <div class="issue-status-warning">
                <img
                  src="~/assets/img/warning.svg"
                  alt=""
                  width="19px"
                  height="19px"
                />
                <span class="issue-warning-num">警告:0</span>
              </div>
            </div>
          </label>
          <div class="issue-content" style="display: none">
            <ul class="issue-list"></ul>
          </div>
        </div>
      </div>
    </div>
    <div class="unsupported">
      <p>ご利用のブラウザ(Internet Explorer)では利用できません。</p>
      <p>
        <a
          href="microsoft-edge:https://toka7290.github.io/TokaTools/TokaBlockGenerator/"
          target="_blank"
          rel="noopener noreferrer"
          >Edge</a
        >,Chrome,Firefox,Safariをご利用ください
      </p>
    </div>
  </div>
</template>

<script>
import SVGCheck from "~/assets/img/check.svg?inline";
import SVGMain from "~/assets/img/main.svg?inline";
export default {
  comments: [SVGCheck, SVGMain],
  modules: ["@nuxtjs/svg"],
};
</script>