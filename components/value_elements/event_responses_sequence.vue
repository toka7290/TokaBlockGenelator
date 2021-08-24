<template>
  <div
    class="value-element event_responses_sequence"
    title="シーケンスを設定します。"
  >
    <div class="value-label">
      <p>シーケンスを設定</p>
    </div>
    <div class="value-input type-modal">
      <label
        ><input
          type="button"
          value="編集"
          class="modal-open"
          v-on:click="modalShow($event)"
      /></label>
      <div class="modal hide" v-on:click="modalClose($event)">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">シーケンスを設定</div>
              <label class="modal-close-btn">
                <input
                  type="button"
                  value="閉じる"
                  class="modal-close invisible-Control"
                />
                <div class="close-btn-icon" v-html="svgClose"></div>
              </label>
            </div>
            <div class="modal-body">
              <div class="tabpanel">
                <div class="tab-navigation">
                  <div class="tab-body">
                    <label
                      class="tab-children invisible-Control"
                      v-for="(elem, tab_index) in data"
                      :key="tab_index"
                    >
                      <input
                        type="radio"
                        name="event-responses-sequence"
                        class="event-responses-sequence"
                        v-on:change="changeTab(tab_index)"
                        checked
                      />
                      <div class="tab-number">{{ tab_index }}</div>
                      <div class="tab-underBar"></div>
                    </label>
                  </div>
                  <div class="tab-controls">
                    <label class="add-tab" title="タブを追加します。">
                      <input
                        type="button"
                        class="add-tab-element invisible-Control"
                        v-on:click="addTab"
                      />
                      <div class="add-tab-label">
                        <div class="add-tab-label-text">+ 追加</div>
                      </div>
                    </label>
                    <label class="remove-tab" title="現在のタブを削除します。">
                      <input
                        type="button"
                        class="remove-tab-element invisible-Control"
                        v-on:click="removeTab"
                      />
                      <div class="remove-tab-label">
                        <div class="remove-tab-label-text">- 削除</div>
                      </div>
                    </label>
                  </div>
                </div>
                <div
                  class="tab-contents"
                  v-for="(elem, tab_index) in data"
                  :key="tab_index"
                  v-show="tab_index == selected_tab"
                >
                  <div class="tab-container selected">
                    <div class="editor-element-body">
                      <components
                        v-for="key in data[tab_index].components"
                        :key="key"
                        :is="$store.state.components[key].type"
                        :uuid="key"
                      ></components>
                    </div>
                    <div class="editor-element-footer element-control">
                      <div class="type-modal">
                        <label class="invisible-Control">
                          <input
                            type="button"
                            class="modal-open"
                            v-on:click="modalShow($event)"
                          />
                          <div class="element-control-text">
                            要素の追加・削除
                          </div>
                        </label>
                        <div class="modal hide" v-on:click="modalClose($event)">
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
                                  <div
                                    class="close-btn-icon"
                                    v-html="svgClose"
                                  ></div>
                                </label>
                              </div>
                              <div class="modal-body">
                                <div
                                  class="
                                    value-element
                                    event_responses_set_block_property
                                  "
                                  title="ブロックプロパティの値を変更します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_set_block_property"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        ブロックプロパティ
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_set_block
                                  "
                                  title="ブロックを設置します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_set_block"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        ブロック設置
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_set_block_at_pos
                                  "
                                  title="指定した座標にブロックを設置します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_set_block_at_pos"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        ブロック設置(座標指定)
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_spawn_loot
                                  "
                                  title="指定したルートテーブルのアイテムをスポーンさせます。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_spawn_loot"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        ルートをスポーン
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_add_mob_effect
                                  "
                                  title="エンティティにエフェクトを付与します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_add_mob_effect"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        エフェクト付与
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_remove_mob_effect
                                  "
                                  title="エンティティのエフェクトを削除します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_remove_mob_effect"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        エフェクト削除
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="value-element event_responses_damage"
                                  title="ダメージを与えます。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_damage"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">ダメージ</p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_decrement_stack
                                  "
                                  title="手持ちのアイテムを1つ減らします。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_decrement_stack"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        アイテムデクリメント
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="value-element event_responses_die"
                                  title="キルします。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_die"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">キルする</p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_play_effect
                                  "
                                  title="パーティクルを再生します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_play_effect"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        パーティクルを再生
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_play_sound
                                  "
                                  title="サウンドを再生します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_play_sound"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        サウンドを再生
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="value-element event_responses_teleport"
                                  title="ランダムにテレポートさせます。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_teleport"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        テレポート
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_transform_item
                                  "
                                  title="アイテムを変換します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_transform_item"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        アイテム変換
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="value-element event_responses_trigger"
                                  title="イベントをトリガーします。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_trigger"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        イベントトリガー
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_run_command
                                  "
                                  title="コマンドを実行します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_run_command"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        コマンド実行
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="value-element event_responses_swing"
                                  title="腕を振るアニメーションをします"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_swing"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        スウィング
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="value-element event_responses_sequence"
                                  title="シーケンスを設定します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_sequence"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        シーケンスを設定
                                      </p>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  class="
                                    value-element
                                    event_responses_randomize
                                  "
                                  title="ランダムに実行します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_randomize"
                                      class="
                                        element-control-switch
                                        invisible-Control
                                      "
                                      v-on:click="
                                        toggleValueEventElement(
                                          $event,
                                          tab_index
                                        )
                                      "
                                    />
                                    <div class="checkbox-body">
                                      <div class="checkbox-body-box">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          class="checkbox-body-checkMark"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="3"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        >
                                          <polyline
                                            points="20 6 9 17 4 12"
                                          ></polyline>
                                        </svg>
                                      </div>
                                      <p class="checkbox-body-text">
                                        ランダムに選択
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
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <label
              ><input type="button" value="Close" class="modal-close"
            /></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
import event_responses_set_block_property from "@/components/value_elements/event_responses_set_block_property.vue";
import event_responses_set_block from "@/components/value_elements/event_responses_set_block.vue";
import event_responses_set_block_at_pos from "@/components/value_elements/event_responses_set_block_at_pos.vue";
import event_responses_spawn_loot from "@/components/value_elements/event_responses_spawn_loot.vue";
import event_responses_add_mob_effect from "@/components/value_elements/event_responses_add_mob_effect.vue";
import event_responses_remove_mob_effect from "@/components/value_elements/event_responses_remove_mob_effect.vue";
import event_responses_damage from "@/components/value_elements/event_responses_damage.vue";
import event_responses_decrement_stack from "@/components/value_elements/event_responses_decrement_stack.vue";
import event_responses_die from "@/components/value_elements/event_responses_die.vue";
import event_responses_play_effect from "@/components/value_elements/event_responses_play_effect.vue";
import event_responses_play_sound from "@/components/value_elements/event_responses_play_sound.vue";
import event_responses_teleport from "@/components/value_elements/event_responses_teleport.vue";
import event_responses_transform_item from "@/components/value_elements/event_responses_transform_item.vue";
import event_responses_trigger from "@/components/value_elements/event_responses_trigger.vue";
import event_responses_run_command from "@/components/value_elements/event_responses_run_command.vue";
import event_responses_swing from "@/components/value_elements/event_responses_swing.vue";
import event_responses_sequence from "@/components/value_elements/event_responses_sequence.vue";
import event_responses_randomize from "@/components/value_elements/event_responses_randomize.vue";
export default {
  components: {
    event_responses_set_block_property,
    event_responses_set_block,
    event_responses_set_block_at_pos,
    event_responses_spawn_loot,
    event_responses_add_mob_effect,
    event_responses_remove_mob_effect,
    event_responses_damage,
    event_responses_decrement_stack,
    event_responses_die,
    event_responses_play_effect,
    event_responses_play_sound,
    event_responses_teleport,
    event_responses_transform_item,
    event_responses_trigger,
    event_responses_run_command,
    event_responses_swing,
    event_responses_sequence,
    event_responses_randomize,
  },
  data() {
    return {
      svgClose,
      selected_tab: 0,
      data: [
        {
          // components:["uuid","uuid"]
          components: [],
        },
      ],
    };
  },
  props: ["uuid"],
  methods: {
    modalShow(ev) {
      this.$showModal(ev);
    },
    modalClose(ev) {
      this.$closeModal(ev);
    },
    addTab() {
      this.data = [
        ...this.data,
        {
          components: [],
        },
      ];
      this.selected_tab++;
    },
    removeTab() {
      if (this.data.length > 1) {
        this.data = this.data.map((val) => val).splice(tmp.length - 1, 1);
        // 0のときしない
        this.selected_tab && this.selected_tab--;
      }
    },
    changeTab(tab_index) {
      this.selected_tab = tab_index;
    },
    toggleValueEventElement(event, tab_index) {
      /** @type {Element} */
      const target = event.target;
      if (target.checked) {
        const target_id = this.$getUuid_v4();
        this.data = this.data.map((val, i) =>
          i == tab_index
            ? {
                ...this.data[tab_index],
                components: [
                  ...this.data[tab_index].components.map((val) => val),
                  target_id,
                ],
              }
            : val
        );
        this.$store.commit("setComponentData", [this.uuid, this.data]);
        this.$store.commit("toggleChildEventComponent", [
          `${target.name}`,
          target_id,
          target.checked,
        ]);
      } else {
        for (
          let index = 0;
          index < this.data[tab_index].components.length;
          index++
        ) {
          const target_id = this.data[tab_index].components[index];
          if (this.$store.state.components[target_id].type == target.name) {
            // 削除
            let tmp = this.data.map((v) => v);
            let list = tmp[tab_index].components.map((v) => v);
            list.splice(index, 1);
            tmp.splice(tab_index, 1, { components: list });
            this.data = tmp;
            this.$store.commit("setComponentData", [this.uuid, this.data]);
            this.$store.commit("toggleChildEventComponent", [
              `${target.name}`,
              target_id,
              target.checked,
            ]);
            break;
          }
        }
      }
    },
  },
  beforeDestroy() {
    this.data.forEach((data) => {
      data.components.forEach((target_id) => {
        this.$store.commit("toggleChildEventComponent", [
          `all`,
          target_id,
          false,
        ]);
      });
    });
  },
};
</script>