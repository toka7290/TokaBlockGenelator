<template>
  <div
    class="value-element components_friction"
    title="このブロックの上をエンティティが移動するときの止まりにくさを設定します。"
  >
    <div class="value-label">
      <p>摩擦</p>
    </div>
    <label class="value-input">
      <input
        type="number"
        min="0.1"
        name="components-friction"
        class="components-friction"
        value="0.1"
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