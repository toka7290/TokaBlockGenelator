<template>
  <div
    class="value-element components_explosion_resistance"
    title="このブロックの爆発耐性を設定します。"
  >
    <div class="value-label">
      <p>爆発耐性</p>
    </div>
    <label class="value-input">
      <input
        type="number"
        min="0"
        name="components-explosion-resistance"
        class="components-explosion-resistance"
        value="1.0"
        step="0.1"
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