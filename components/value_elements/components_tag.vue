<template>
  <div
    class="value-element components_tag"
    title="ブロックにタグを設定します。"
  >
    <div class="value-label">
      <p>タグ</p>
    </div>
    <div class="value-input type-array-string">
      <div class="array-list">
        <label class="array-data">
          <div class="array-num">0</div>
          <input
            type="text"
            name="components-tag"
            class="components-tag type-array-string"
          />
        </label>
      </div>
      <div class="array-list-control">
        <label class="add-array" title="タグ入力欄を追加します。">
          <input type="button" class="add-array-element invisible-Control" />
          <div class="add-array-label">
            <div class="add-array-element-text">+ タグを追加</div>
          </div>
        </label>
        <label class="remove-array" title="タグ入力欄を消します。">
          <input type="button" class="remove-array-element invisible-Control" />
          <div class="remove-array-label">
            <div class="remove-array-element-text">- タグを削除</div>
          </div>
        </label>
      </div>
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