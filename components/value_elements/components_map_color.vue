<template>
  <div
    class="value-element components_map_color"
    title="このブロックの地図での色を設定します。#000000~#ffffffまで設定できます。"
  >
    <div class="value-label">
      <p>地図の色</p>
    </div>
    <div class="value-input type-color">
      <label
        ><input
          type="text"
          name="components-map-color"
          class="components-map-color"
      /></label>
      <label
        ><svg aria-label="色選択" class="accessibility-label"></svg
        ><input
          type="color"
          name="components-map-color-pick"
          class="components-map-color-pick"
      /></label>
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