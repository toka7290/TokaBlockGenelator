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
          v-on:change="onChangedValue"
        />
        <span>s</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["group", "uuid"],
  methods: {
    onChangedValue(event) {
      this.$store.commit("setComponentData", [
        this.uuid,
        this.group,
        event.target.value,
      ]);
    },
  },
};
</script>