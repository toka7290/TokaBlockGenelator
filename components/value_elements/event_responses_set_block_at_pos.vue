<template>
  <div
    class="value-element event_responses_set_block_at_pos"
    title="指定した座標にブロックを設置します。"
  >
    <div class="value-label">
      <p>ブロック設置(座標指定)</p>
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
              <div class="modal-title">ブロック(座標指定)</div>
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
              <div class="value-element" title="設置するブロック">
                <div class="value-label">
                  <p>ブロック</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-set-block-at-pos-id"
                    class="event-responses-set-block-at-pos-id"
                  />
                </label>
              </div>
              <div class="value-element" title="設置する座標">
                <div class="value-label">
                  <p>座標</p>
                </div>
                <div class="value-input type-3D">
                  <label>
                    <span>X=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-set-block-at-pos-position-x"
                      value="0"
                      step="1"
                    />
                  </label>
                  <label>
                    <span>Y=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-set-block-at-pos-position-y"
                      value="0"
                      step="1"
                    />
                  </label>
                  <label>
                    <span>Z=</span>
                    <input
                      type="number"
                      name=""
                      class="event-responses-set-block-at-pos-position-z"
                      value="0"
                      step="1"
                    />
                  </label>
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