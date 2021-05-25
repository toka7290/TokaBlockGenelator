<template>
  <div
    class="value-element event_responses_set_block"
    title="ブロックを設置します。"
  >
    <div class="value-label">
      <p>ブロック設置</p>
    </div>
    <label class="value-input">
      <input
        type="text"
        name="event-responses-set-block"
        class="event-responses-set-block"
      />
    </label>
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