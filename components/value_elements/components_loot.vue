<template>
  <div
    class="value-element components_loot"
    title="このブロックが破壊された時に落とすアイテムが記述されたルートテーブルを指定します。"
  >
    <div class="value-label">
      <p>ルートテーブル</p>
    </div>
    <label class="value-input">
      <input
        type="text"
        name="components-loot"
        class="components-loot"
        v-on:change="onChangedValue"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ["uuid"],
  methods: {
    onChangedValue(event) {
      this.$store.commit("setComponentData", [this.uuid, event.target.value]);
    },
  },
};
</script>