<template>
  <div
    class="value-element event_responses_set_block_property"
    title="ブロックプロパティの値を変更します。"
  >
    <div class="value-label">
      <p>ブロックプロパティ</p>
    </div>
    <div class="value-input type-array-modal">
      <div class="array-list">
        <div
          class="array-data type-modal"
          v-for="(elem, index) in data"
          :key="index"
        >
          <label>
            <div class="array-num">{{ index }}</div>
            <input
              type="button"
              value="編集"
              class="modal-open"
              v-on:click="modalShow($event)"
            />
          </label>
          <div class="modal hide" v-on:click="modalClose($event)">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title">ブロックプロパティ</div>
                  <label class="modal-close-btn">
                    <input
                      type="button"
                      value="閉じる"
                      class="modal-close invisible-Control"
                    />
                    <div class="close-btn-icon" v-html="svgClose"></div>
                  </label>
                </div>
                <div class="modal-body">
                  <div class="value-element" title="値を設定するプロパティ名">
                    <div class="value-label">
                      <p>プロパティ名</p>
                    </div>
                    <label class="value-input">
                      <input
                        type="text"
                        name="event-responses-set-block-state"
                        class="event-responses-set-block-state"
                        list="blockState-name-list"
                        v-on:change="setBlockState($event, index)"
                      />
                    </label>
                  </div>
                  <div class="value-element" title="設定する値">
                    <div class="value-label">
                      <p>設定値(式)</p>
                    </div>
                    <label class="value-input">
                      <input
                        type="text"
                        name="event-responses-set-block-value"
                        class="event-responses-set-block-value"
                        v-on:change="setBlockValue($event, index)"
                      />
                    </label>
                  </div>
                </div>
                <div class="modal-footer">
                  <label
                    ><input type="button" value="Close" class="modal-close"
                  /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="array-list-control">
        <label class="add-array" title="変更するプロパティを追加します。">
          <input
            type="button"
            class="add-array-element invisible-Control"
            v-on:click="addProperty"
          />
          <div class="add-array-label">
            <div class="add-array-element-text">+ 追加</div>
          </div>
        </label>
        <label class="remove-array" title="変更するプロパティを消します。">
          <input
            type="button"
            class="remove-array-element invisible-Control"
            v-on:click="removeProperty"
          />
          <div class="remove-array-label">
            <div class="remove-array-element-text">- 削除</div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
export default {
  data() {
    return {
      svgClose,
      data: [
        {
          state: "",
          value: "",
        },
      ],
    };
  },
  props: ["group", "uuid"],
  methods: {
    modalShow(ev) {
      this.$showModal(ev);
    },
    modalClose(ev) {
      this.$closeModal(ev);
    },
    addProperty() {
      this.data = [
        ...this.data,
        {
          state: "",
          value: "",
        },
      ];
      this.onChangedValue();
    },
    removeProperty() {
      if (this.data.length > 1) {
        let tmp = this.data.map((val) => val);
        tmp.splice(tmp.length - 1, 1);
        this.data = tmp;
        this.onChangedValue();
      }
    },
    setBlockState(event, index) {
      let tmp = this.data.map((val) => val);
      tmp[index] = {
        ...tmp[index],
        state: event.target?.value,
      };
      this.data = tmp;
      this.onChangedValue();
    },
    setBlockValue(event, index) {
      let tmp = this.data.map((val) => val);
      tmp[index] = {
        ...tmp[index],
        value: event.target?.value,
      };
      this.data = tmp;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
  },
};
</script>