<template>
  <div class="value-element event_responses_die" title="キルします。">
    <div class="value-label">
      <p>キルする</p>
    </div>
    <div class="value-input type-modal">
      <label><input type="button" value="編集" class="modal-open" /></label>
      <div class="modal hide" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">キルする</div>
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
              <div class="value-element" title="キルするターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-die-target"
                    class="event-responses-die-target"
                  >
                    <option value="default">default</option>
                    <option value="self">self</option>
                    <option value="holder">holder</option>
                    <option value="baby">baby</option>
                    <option value="other">other</option>
                    <option value="player">player</option>
                    <option value="target">target</option>
                    <option value="parent">parent</option>
                    <option value="block">block</option>
                    <option value="damager">damager</option>
                    <option value="item">item</option>
                  </select>
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