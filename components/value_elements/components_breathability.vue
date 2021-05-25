<template>
  <div
    class="value-element components_breathability"
    title="ブロックの通気性を設定します。"
  >
    <div class="value-label">
      <p>通気性</p>
    </div>
    <label class="value-input">
      <select name="components-breathability" class="components-breathability">
        <option value="solid">solid</option>
        <option value="air">air</option>
      </select>
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