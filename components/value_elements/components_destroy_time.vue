<template>
  <div
    class="value-element components_destroy_time"
    title="このブロックの破壊にかかる時間を設定します[秒]"
  >
    <div class="value-label">
      <p>破壊にかかる時間</p>
    </div>
    <div class="value-input type-unit">
      <label>
        <input
          type="number"
          min="0"
          name="components-destroy-time"
          class="components-destroy-time"
          value="1.0"
          step="0.1"
        />
        <span>s</span>
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