<template>
  <div
    class="value-element components_geometry"
    title="ブロックのジオメトリを設定します。"
  >
    <div class="value-label">
      <p>ジオメトリ</p>
    </div>
    <div class="value-input type-modal">
      <label
        ><input
          type="button"
          value="編集"
          class="modal-open"
          v-on:click="this.$showModal"
      /></label>
      <div class="modal hide" v-on:click="this.$closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">ジオメトリ</div>
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
              <div
                class="value-element switchable-content"
                title="形状を立方体にするかジオメトリを指定するか選択します。"
              >
                <div class="value-label">
                  <p>形状</p>
                </div>
                <label class="value-input">
                  <select
                    name="components-geometry-switch"
                    class="components-geometry-switch"
                    @change="changeVal"
                  >
                    <option value="val_cube">立方体</option>
                    <option value="val_geometry">ジオメトリを指定</option>
                  </select>
                </label>
              </div>
              <div
                class="switchable-element val_cube"
                v-show="val_type == 0"
              ></div>
              <div
                class="switchable-element val_geometry"
                v-show="val_type == 1"
              >
                <div
                  class="value-element"
                  title="使用するジオメトリ名を設定します。"
                >
                  <div class="value-label">
                    <p>ジオメトリ</p>
                  </div>
                  <label class="value-input">
                    <input
                      type="text"
                      name="components-geometry"
                      class="components-geometry"
                      v-on:change="setGeometry"
                    />
                  </label>
                </div>
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
</template>

<script>
import svgClose from "~/assets/img/close.svg?raw";
export default {
  data() {
    return {
      svgClose,
      val_type: 0,
      data: {
        type: 0,
        geo: "",
      },
    };
  },
  props: ["uuid"],
  created() {
    this.onChangedValue();
  },
  methods: {
    setGeometry(event) {
      if (this.val_type == 1) {
        this.data = {
          ...this.data,
          geo: event.target.value,
        };
        this.onChangedValue();
      }
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [this.uuid, this.data]);
    },
    changeVal(event) {
      /** @type {Element} */
      const target = event.target;
      this.val_type = Number(target.selectedIndex);
      this.data = {
        ...this.data,
        type: this.val_type,
      };
      this.onChangedValue();
    },
  },
};
</script>