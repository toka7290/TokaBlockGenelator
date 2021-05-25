<template>
  <div
    class="value-element components_block_light_emission"
    title="このブロックが発する光の量を設定します。"
  >
    <div class="value-label">
      <p>発光量</p>
    </div>
    <div class="value-input type-unit">
      <label>
        <input
          type="number"
          min="0.0"
          max="1.0"
          name="components-block-light-emission"
          class="components-block-light-emission"
          value="0.0"
          step="0.1"
        />
        <span class="components-block-light-emission-eq">=0</span>
      </label>
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