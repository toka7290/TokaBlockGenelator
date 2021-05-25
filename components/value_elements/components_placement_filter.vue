<template>
  <div
    class="value-element components_placement_filter"
    title="ブロックが設置できる面とブロックを設定します。"
  >
    <div class="value-label">
      <p>配置フィルター</p>
    </div>
    <div class="value-input type-modal">
      <label><input type="button" value="編集" class="modal-open" /></label>
      <div class="modal hide" v-on:click="closeModal" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">コンディション</div>
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
                        name="placement-filter-conditions"
                        class="placement-filter-conditions"
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
                    <div class="value-element" title="設置できる面を設定します">
                      <div class="value-label">
                        <p>許可する面</p>
                      </div>
                      <div class="value-input type-array-select">
                        <div class="array-list">
                          <label class="array-data">
                            <div class="array-num">0</div>
                            <select
                              name="components-placement-filter-allowed-faces"
                              class="components-placement-filter-allowed-faces type-array-select"
                            >
                              <option value="up">上</option>
                              <option value="down">下</option>
                              <option value="north">北</option>
                              <option value="south">南</option>
                              <option value="east">東</option>
                              <option value="west">西</option>
                              <option value="side">側面</option>
                              <option value="all">全面</option>
                            </select>
                          </label>
                        </div>
                        <div class="array-list-control">
                          <label class="add-array" title="設定面を追加します。">
                            <input
                              type="button"
                              class="add-array-element invisible-Control"
                            />
                            <div class="add-array-label">
                              <div class="add-array-element-text">+ 追加</div>
                            </div>
                          </label>
                          <label
                            class="remove-array"
                            title="設定面を削除します。"
                          >
                            <input
                              type="button"
                              class="remove-array-element invisible-Control"
                            />
                            <div class="remove-array-label">
                              <div class="remove-array-element-text">
                                - 削除
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      class="value-element"
                      title="設置できるブロックを設定します。"
                    >
                      <div class="value-label">
                        <p>ブロック</p>
                      </div>
                      <div class="value-input type-array-string">
                        <div class="array-list">
                          <label class="array-data">
                            <div class="array-num">0</div>
                            <input
                              type="text"
                              name="components-placement-filter-block-filter"
                              class="components-placement-filter-block-filter type-array-string"
                            />
                          </label>
                        </div>
                        <div class="array-list-control">
                          <label
                            class="add-array"
                            title="ブロック入力欄を追加します。"
                          >
                            <input
                              type="button"
                              class="add-array-element invisible-Control"
                            />
                            <div class="add-array-label">
                              <div class="add-array-element-text">+ 追加</div>
                            </div>
                          </label>
                          <label
                            class="remove-array"
                            title="ブロック入力欄を消します。"
                          >
                            <input
                              type="button"
                              class="remove-array-element invisible-Control"
                            />
                            <div class="remove-array-label">
                              <div class="remove-array-element-text">
                                - 削除
                              </div>
                            </div>
                          </label>
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