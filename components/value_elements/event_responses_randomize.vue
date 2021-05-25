<template>
  <div
    class="value-element event_responses_randomize"
    title="ランダムに実行します。"
  >
    <div class="value-label">
      <p>ランダムに選択</p>
    </div>
    <div class="value-input type-modal">
      <label><input type="button" value="編集" class="modal-open" /></label>
      <div class="modal hide" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">ランダムに選択</div>
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
                    <label class="tab-children invisible-Control">
                      <input
                        type="radio"
                        name="event-responses-randomize"
                        class="event-responses-randomize"
                        checked
                      />
                      <div class="tab-number">0</div>
                      <div class="tab-underBar"></div>
                    </label>
                  </div>
                  <div class="tab-controls">
                    <label class="add-tab" title="タブを追加します。">
                      <input
                        type="button"
                        class="add-tab-element invisible-Control"
                      />
                      <div class="add-tab-label">
                        <div class="add-tab-label-text">+ 追加</div>
                      </div>
                    </label>
                    <label class="remove-tab" title="現在のタブを削除します。">
                      <input
                        type="button"
                        class="remove-tab-element invisible-Control"
                      />
                      <div class="remove-tab-label">
                        <div class="remove-tab-label-text">- 削除</div>
                      </div>
                    </label>
                  </div>
                </div>
                <div class="tab-contents">
                  <div class="tab-container selected">
                    <div
                      class="value-element"
                      title="このグループが選択される重みを設定します。"
                    >
                      <div class="value-label">
                        <p>重み</p>
                      </div>
                      <label class="value-input">
                        <input
                          type="number"
                          min="0"
                          name="event-responses-randomize-weight"
                          class="event-responses-randomize-weight"
                          value="1"
                          step="1"
                        />
                      </label>
                    </div>
                    <div class="editor-element-body"></div>
                    <div class="editor-element-footer element-control">
                      <div class="type-modal">
                        <label class="invisible-Control">
                          <input type="button" class="modal-open" />
                          <div class="element-control-text">
                            要素の追加・削除
                          </div>
                        </label>
                        <div class="modal hide" v-on:click="closeModal">
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
                                  class="value-element event_responses_set_block_property"
                                  title="ブロックプロパティの値を変更します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_set_block_property"
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_set_block"
                                  title="ブロックを設置します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_set_block"
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_set_block_at_pos"
                                  title="指定した座標にブロックを設置します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_set_block_at_pos"
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_spawn_loot"
                                  title="指定したルートテーブルのアイテムをスポーンさせます。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_spawn_loot"
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_add_mob_effect"
                                  title="エンティティにエフェクトを付与します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_add_mob_effect"
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_remove_mob_effect"
                                  title="エンティティのエフェクトを削除します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_remove_mob_effect"
                                      class="element-control-switch invisible-Control"
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
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_decrement_stack"
                                  title="手持ちのアイテムを1つ減らします。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_decrement_stack"
                                      class="element-control-switch invisible-Control"
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
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_play_effect"
                                  title="パーティクルを再生します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_play_effect"
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_play_sound"
                                  title="サウンドを再生します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_play_sound"
                                      class="element-control-switch invisible-Control"
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
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_transform_item"
                                  title="アイテムを変換します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_transform_item"
                                      class="element-control-switch invisible-Control"
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
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_run_command"
                                  title="コマンドを実行します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_run_command"
                                      class="element-control-switch invisible-Control"
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
                                      class="element-control-switch invisible-Control"
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
                                      class="element-control-switch invisible-Control"
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
                                  class="value-element event_responses_randomize"
                                  title="ランダムに実行します。"
                                >
                                  <label class="value-checkbox">
                                    <input
                                      type="checkbox"
                                      name="event_responses_randomize"
                                      class="element-control-switch invisible-Control"
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
export default {
  methods: {
    onChangedValue(event) {
      /** @type {Element} */
      const target = event.target;
      const uuid = this.$getClassUUID(
        target.closest(".value-element.components_loot").classList
      );
      if (uuid == undefined) return;
      const index = this.$store.state.main_components.findIndex(
        (val) => val.id == uuid
      );
      this.$store.commit("setComponentData", [index, target.value]);
    },
  },
};
</script>