<template id="blockState-status-block">
  <div class="blockState status-block-content">
    <div class="editor-element">
      <div class="editor-element-legend changeable">
        <label
          ><input
            type="text"
            name="blockState-name"
            class="blockState-name"
            placeholder="プロパティ名"
            v-model="name"
            v-on:change="onChangedValue"
        /></label>
        <div
          class="blockState remove-status-block"
          title="ブロック状態を削除します。"
        >
          <label class="invisible-Control">
            <input
              type="button"
              class="blockState-delete blockState"
              v-on:click="deleteBlockState"
            />
            <div class="remove-button-text">- 削除</div>
          </label>
        </div>
      </div>
      <div
        class="value-element switchable-content"
        title="ブロック状態の型を変更します。"
      >
        <div class="value-label">
          <label for="blockState-type">型</label>
        </div>
        <div class="value-input">
          <select
            name="blockState-type"
            class="blockState-type"
            v-model.number="val_type"
            v-on:change="onChangedType"
          >
            <option v-bind:value="0">Boolean</option>
            <option v-bind:value="1">Integer</option>
            <option v-bind:value="2">String</option>
          </select>
        </div>
      </div>
      <div class="switchable-element val_Boolean" v-show="val_type == 0">
        <div class="value-element" title="デフォルトの値を変更します。">
          <label class="value-checkbox">
            <input
              type="checkbox"
              class="blockState-boolean invisible-Control"
              :checked="datas[0]"
              @change="changeDatas"
            />
            <div class="checkbox-body">
              <div class="checkbox-body-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="checkbox-body-checkMark"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p class="checkbox-body-text">trueをデフォルトに</p>
            </div>
          </label>
        </div>
      </div>
      <div class="switchable-element val_Integer" v-show="val_type == 1">
        <div
          class="value-element"
          title="取りうる値を設定します。0番目の値はデフォルトの値になります。"
        >
          <div class="value-label">
            <label for="blockState-integer">取りうる値</label>
          </div>
          <div class="value-input type-array-integer">
            <div class="array-list">
              <label class="array-data" v-for="(elem, i) in datas" :key="i">
                <div class="array-num">{{ i }}</div>
                <input
                  type="number"
                  name="blockState-integer"
                  class="blockState-integer type-array-integer"
                  :value="datas[i]"
                  v-on:change="changeDatas($event, i)"
                />
              </label>
            </div>
            <div class="array-list-control">
              <label class="add-array" title="値入力欄を追加します。">
                <input
                  type="button"
                  class="add-array-element invisible-Control"
                  v-on:click="addData()"
                />
                <div class="add-array-label">
                  <div class="add-array-element-text">+ 値を追加</div>
                </div>
              </label>
              <label class="remove-array" title="値入力欄を消します。">
                <input
                  type="button"
                  class="remove-array-element invisible-Control"
                  v-on:click="removeData()"
                />
                <div class="remove-array-label">
                  <div class="remove-array-element-text">- 値を削除</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="switchable-element val_String" v-show="val_type == 2">
        <div
          class="value-element"
          title="取りうる値を設定します。0番目の値はデフォルトの値になります。"
        >
          <div class="value-label">
            <label for="blockState-string">取りうる値</label>
          </div>
          <div class="value-input type-array-string">
            <div class="array-list">
              <label class="array-data" v-for="(elem, i) in datas" :key="i">
                <div class="array-num">{{ i }}</div>
                <input
                  type="text"
                  name="blockState-string"
                  class="blockState-string type-array-string"
                  v-bind:value="datas[i]"
                  v-on:change="changeDatas($event, i)"
                />
              </label>
            </div>
            <div class="array-list-control">
              <label class="add-array" title="値入力欄を追加します。">
                <input
                  type="button"
                  class="add-array-element invisible-Control"
                  v-on:click="addData()"
                />
                <div class="add-array-label">
                  <div class="add-array-element-text">+ 値を追加</div>
                </div>
              </label>
              <label class="remove-array" title="値入力欄を消します。">
                <input
                  type="button"
                  class="remove-array-element invisible-Control"
                  v-on:click="removeData()"
                />
                <div class="remove-array-label">
                  <div class="remove-array-element-text">- 値を削除</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val_type: 0,
      name: "",
      datas: [false, true],
    };
  },
  props: ["number"],
  created() {
    this.onChangedValue();
  },
  methods: {
    deleteBlockState() {
      this.$store.commit("deleteStatusBlock", ["block_states", this.number]);
    },
    onChangedType() {
      let [...arr] = this.datas;
      switch (this.val_type) {
        case 1:
          arr.fill(0);
          break;
        case 2:
          arr.fill("");
          break;
        case 0:
        default:
          arr.splice(2);
          break;
      }
      this.datas = arr;
      this.onChangedValue();
    },
    addData() {
      if (this.val_type == 1) this.datas = [...this.datas, 0];
      else if (this.val_type == 2) this.datas = [...this.datas, ""];
    },
    removeData() {
      if (this.datas.length > 1) {
        let tmp = this.datas.map((val) => val);
        tmp.splice(tmp.length - 1, 1);
        this.datas = tmp;
      }
    },
    changeDatas(event, index = 0) {
      /** @type {Element} */
      const target = event.target;
      let [...arr] = this.datas;
      switch (this.val_type) {
        case 1:
          arr.splice(index, 1, Number(event.target.value));
          break;
        case 2:
          arr.splice(index, 1, event.target.value);
          break;
        case 0:
        default:
          arr = [target.checked, !target.checked];
          break;
      }
      console.log(arr);
      this.datas = arr;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setBlockStatus", [
        this.number,
        this.name,
        this.val_type,
        this.datas,
      ]);
    },
  },
};
</script>