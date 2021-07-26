<template>
  <div
    class="value-element components_breathability"
    title="ブロックの通気性を設定します。"
  >
    <div class="value-label">
      <p>通気性</p>
    </div>
    <label class="value-input">
      <select
        name="components-breathability"
        class="components-breathability"
        v-on:change="onChangedValue"
      >
        <option value="solid">solid</option>
        <option value="air">air</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  props: ["group", "uuid"],
  methods: {
    onChangedValue(event) {
      this.$store.commit("setComponentData", [this.uuid, event.target.value]);
    },
  },
};
</script>