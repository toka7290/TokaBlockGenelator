<template>
  <div
    class="value-element components_crafting_table"
    title="ブロックに作業台の機能を付けます。"
  >
    <div class="value-label">
      <p>作業台</p>
    </div>
    <div class="value-input type-modal">
      <label
        ><input
          type="button"
          value="編集"
          class="modal-open"
          v-on:click="showModal"
      /></label>
      <div class="modal hide" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">作業台</div>
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
              <div
                class="value-element"
                title="作業台のグリッドサイズを設定します。現在設定可能な値は3です。"
              >
                <div class="value-label">
                  <p>グリッドサイズ</p>
                </div>
                <label class="value-input">
                  <input
                    type="number"
                    min="0"
                    name="components-crafting-table-grid-size"
                    class="components-crafting-table-grid-size"
                    value="3"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="クラフティングタグを設定します。設定したタグを持つレシピのみ利用可能になります。"
              >
                <div class="value-label">
                  <p>クラフティングタグ</p>
                </div>
                <div class="value-input type-array-string">
                  <div class="array-list">
                    <label class="array-data">
                      <div class="array-num">0</div>
                      <input
                        type="text"
                        name="components-crafting-table-crafting-tags"
                        class="components-crafting-table-crafting-tags type-array-string"
                      />
                    </label>
                  </div>
                  <div class="array-list-control">
                    <label class="add-array" title="タグ入力欄を追加します。">
                      <input
                        type="button"
                        class="add-array-element invisible-Control"
                      />
                      <div class="add-array-label">
                        <div class="add-array-element-text">+ 追加</div>
                      </div>
                    </label>
                    <label class="remove-array" title="タグ入力欄を消します。">
                      <input
                        type="button"
                        class="remove-array-element invisible-Control"
                      />
                      <div class="remove-array-label">
                        <div class="remove-array-element-text">- 削除</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="value-element"
                title="画面中央上に表示されるテキストを設定します。"
              >
                <div class="value-label">
                  <p>表示テキスト</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="components-crafting-table-custom-description"
                    class="components-crafting-table-custom-description"
                  />
                </label>
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