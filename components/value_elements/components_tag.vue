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
        <label class="array-data" v-for="(elem, i) in lists" :key="i">
          <div class="array-num">{{ i }}</div>
          <input
            type="text"
            name="components-tag"
            class="components-tag type-array-string"
            v-on:change="setTags($event, i)"
          />
        </label>
      </div>
      <div class="array-list-control">
        <label class="add-array" title="タグ入力欄を追加します。">
          <input
            type="button"
            class="add-array-element invisible-Control"
            v-on:click="addArrayList"
          />
          <div class="add-array-label">
            <div class="add-array-element-text">+ タグを追加</div>
          </div>
        </label>
        <label class="remove-array" title="タグ入力欄を消します。">
          <input
            type="button"
            class="remove-array-element invisible-Control"
            v-on:click="removeArrayList"
          />
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
  data() {
    return {
      lists: [],
    };
  },
  props: ["uuid"],
  methods: {
    addArrayList() {
      this.lists = [...this.lists, ""];
    },
    removeArrayList() {
      if (this.lists.length > 1) {
        let tmp = this.lists.map((val) => val);
        tmp.splice(tmp.length - 1, 1);
        this.lists = tmp;
      }
    },
    setTags(event, index) {
      let tmp = this.lists.map((val) => val);
      tmp.splice(index, 1, event.target.value);
      this.lists = tmp;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.lists]);
    },
  },
};
</script>