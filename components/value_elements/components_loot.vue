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
  methods: {
    onChangedValue(event) {
      /** @type {Element} */
      const target = event.target;
      const uuid = ((entry) => {
        for (const iterator of entry) {
          if (this.isUUID(iterator)) {
            return iterator;
          }
        }
      })(target.closest(".value-element.components_loot").classList.values());
      if (uuid == undefined) return;
      console.log(uuid);
      this.$emit("datas", target.value);
    },
  },
};
</script>