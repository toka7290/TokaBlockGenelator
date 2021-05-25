<template>
  <div
    class="value-element event_responses_transform_item"
    title="アイテムを変換します。"
  >
    <div class="value-label">
      <p>アイテム変換</p>
    </div>
    <div class="value-input type-modal">
      <label><input type="button" value="編集" class="modal-open" /></label>
      <div class="modal hide" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">アイテム変換</div>
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
              <div class="value-element" title="変換するアイテムID">
                <div class="value-label">
                  <p>アイテムID</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="event-responses-transform-item-id"
                    class="event-responses-transform-item-id"
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