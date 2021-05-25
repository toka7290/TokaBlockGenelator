<template>
  <div
    class="value-element components_block_light_absorption"
    title="このブロックが吸収する光の量を設定します。"
  >
    <div class="value-label">
      <p>光の吸収</p>
    </div>
    <label class="value-input">
      <input
        type="number"
        min="0"
        max="16"
        name="components-block-light-absorption"
        class="components-block-light-absorption"
        value="0"
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