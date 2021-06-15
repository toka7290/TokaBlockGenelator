<template>
  <div
    class="value-element components_entity_collision"
    title="ブロックの物理的な衝突判定を設定します。"
  >
    <div class="value-label">
      <p>衝突判定</p>
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
              <div class="modal-title">衝突判定</div>
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
                title="判定の指定方法を選択します。"
              >
                <div class="value-label">
                  <p>指定方法</p>
                </div>
                <label class="value-input">
                  <select
                    name="components-entity-collision-switch"
                    class="components-entity-collision-switch"
                    @change="changeVal"
                  >
                    <option value="val_simple">簡易</option>
                    <option value="val_details">詳細</option>
                  </select>
                </label>
              </div>
              <div class="switchable-element val_simple" v-show="val_type == 0">
                <div class="value-element" title="判定の有無を設定します。">
                  <label class="value-checkbox">
                    <input
                      type="checkbox"
                      name="components-entity-collision-simple"
                      class="
                        components-entity-collision-simple
                        invisible-Control
                      "
                      v-on:change="setCollisionSimple"
                      checked
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
                      <p class="checkbox-body-text">判定の有無</p>
                    </div>
                  </label>
                </div>
              </div>
              <div
                class="switchable-element val_details"
                v-show="val_type == 1"
              >
                <div class="value-element" title="判定の原点を指定します。">
                  <div class="value-label">
                    <p>原点</p>
                  </div>
                  <div class="value-input type-3D">
                    <label>
                      <span>X=</span>
                      <input
                        type="number"
                        name=""
                        class="components-entity-collision-origin-x"
                        value="0"
                        step="1"
                        min="-8"
                        max="8"
                        v-on:change="setAxisValue($event, 'origin', 0)"
                      />
                    </label>
                    <label>
                      <span>Y=</span>
                      <input
                        type="number"
                        name=""
                        class="components-entity-collision-origin-y"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                        v-on:change="setAxisValue($event, 'origin', 1)"
                      />
                    </label>
                    <label>
                      <span>Z=</span>
                      <input
                        type="number"
                        name=""
                        class="components-entity-collision-origin-z"
                        value="0"
                        step="1"
                        min="-8"
                        max="8"
                        v-on:change="setAxisValue($event, 'origin', 2)"
                      />
                    </label>
                  </div>
                </div>
                <div
                  class="value-element"
                  title="判定の原点からの大きさを指定します。"
                >
                  <div class="value-label">
                    <p>大きさ</p>
                  </div>
                  <div class="value-input type-3D">
                    <label>
                      <span>X=</span>
                      <input
                        type="number"
                        name=""
                        class="components-entity-collision-size-x"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                        v-on:change="setAxisValue($event, 'size', 0)"
                      />
                    </label>
                    <label>
                      <span>Y=</span>
                      <input
                        type="number"
                        name=""
                        class="components-entity-collision-size-y"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                        v-on:change="setAxisValue($event, 'size', 1)"
                      />
                    </label>
                    <label>
                      <span>Z=</span>
                      <input
                        type="number"
                        name=""
                        class="components-entity-collision-size-z"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                        v-on:change="setAxisValue($event, 'size', 2)"
                      />
                    </label>
                  </div>
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
        simple: true,
        origin: [0, 0, 0],
        size: [0, 0, 0],
      },
    };
  },
  props: ["group", "uuid"],
  methods: {
    setCollisionSimple(event) {
      this.data = {
        ...this.data,
        simple: event.target.checked,
      };
      this.onChangedValue();
    },
    setAxisValue(
      event,
      /**@type {("origin"|"size")} */ axis_type,
      /**@type {(0|1|2)} */ axis
    ) {
      let tmp = this.data[`${axis_type}`].map((val) => val);
      tmp.splice(axis, 1, Number(event.target.value));
      this.data = {
        ...this.data,
        [axis_type]: tmp,
      };
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setComponentData", [
        this.uuid,
        this.group,
        this.data,
      ]);
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