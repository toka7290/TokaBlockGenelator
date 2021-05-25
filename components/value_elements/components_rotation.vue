<template>
  <div
    class="value-element components_rotation"
    title="ブロックを回転させます。"
  >
    <div class="value-label">
      <p>回転</p>
    </div>
    <div class="value-input type-3D">
      <label>
        <span>X=</span>
        <input
          type="number"
          name=""
          class="components-rotation-x"
          value="0"
          step="90"
        />
      </label>
      <label>
        <span>Y=</span>
        <input
          type="number"
          name=""
          class="components-rotation-y"
          value="0"
          step="90"
        />
      </label>
      <label>
        <span>Z=</span>
        <input
          type="number"
          name=""
          class="components-rotation-z"
          value="0"
          step="90"
        />
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