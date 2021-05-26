<template>
  <div
    class="value-element event_responses_set_block_property"
    title="ブロックプロパティの値を変更します。"
  >
    <div class="value-label">
      <p>ブロックプロパティ</p>
    </div>
    <div class="value-input type-array-modal">
      <div class="array-list">
        <div class="array-data type-modal">
          <label>
            <div class="array-num">0</div>
            <input
              type="button"
              value="編集"
              class="modal-open"
              v-on:click="this.$showModal"
            />
          </label>
          <div class="modal hide" v-on:click="this.$closeModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title">ブロックプロパティ</div>
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
                  <div class="value-element" title="値を設定するプロパティ名">
                    <div class="value-label">
                      <p>プロパティ名</p>
                    </div>
                    <label class="value-input">
                      <input
                        type="text"
                        name="event-responses-set-block-state"
                        class="event-responses-set-block-state"
                        list="blockState-name-list"
                      />
                    </label>
                  </div>
                  <div class="value-element" title="設定する値">
                    <div class="value-label">
                      <p>設定値(式)</p>
                    </div>
                    <label class="value-input">
                      <input
                        type="text"
                        name="event-responses-set-block-value"
                        class="event-responses-set-block-value"
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
      <div class="array-list-control">
        <label class="add-array" title="変更するプロパティを追加します。">
          <input type="button" class="add-array-element invisible-Control" />
          <div class="add-array-label">
            <div class="add-array-element-text">+ 追加</div>
          </div>
        </label>
        <label class="remove-array" title="変更するプロパティを消します。">
          <input type="button" class="remove-array-element invisible-Control" />
          <div class="remove-array-label">
            <div class="remove-array-element-text">- 削除</div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
export default {
  data() {
    return {
      svgClose,
    };
  },
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