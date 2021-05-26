<template>
  <div
    class="value-element components_material_instances"
    title="ブロックのマテリアルインスタンスを設定します。"
  >
    <div class="value-label">
      <p>マテリアルインスタンス</p>
    </div>
    <div class="value-input type-array-modal">
      <div class="array-list">
        <div class="array-data type-modal">
          <label>
            <div class="array-num">0</div>
            <input
              type="button"
              value="編集"
              class="modal-open"
              v-on:click="this.$showModal"
            />
          </label>
          <div class="modal hide" v-on:click="this.$closeModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title">マテリアル</div>
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
                    class="value-element"
                    title="このマテリアルを設定する面を指定します。"
                  >
                    <div class="value-label">
                      <p>設定面</p>
                    </div>
                    <label class="value-input">
                      <select
                        name="components-material-instances-face"
                        class="components-material-instances-face"
                      >
                        <option value="*">全面</option>
                        <option value="up">上</option>
                        <option value="down">下</option>
                        <option value="north">北</option>
                        <option value="south">南</option>
                        <option value="east">東</option>
                        <option value="west">西</option>
                      </select>
                    </label>
                  </div>
                  <div
                    class="value-element switchable-content"
                    title="マテリアルの定義を行うか他の面からの参照にするか選択します。"
                  >
                    <div class="value-label">
                      <p>指定方法</p>
                    </div>
                    <label class="value-input">
                      <select
                        name="components-material-instances-switch"
                        class="components-material-instances-switch"
                      >
                        <option value="val_definition">定義</option>
                        <option value="val_refer">面参照</option>
                      </select>
                    </label>
                  </div>
                  <div class="switchable-element val_definition">
                    <div
                      class="value-element"
                      title="テクスチャキーを指定します"
                    >
                      <div class="value-label">
                        <p>テクスチャ</p>
                      </div>
                      <label class="value-input">
                        <input
                          type="text"
                          name="components-material-instances-texture"
                          class="components-material-instances-texture"
                        />
                      </label>
                    </div>
                    <div
                      class="value-element"
                      title="テクスチャのマテリアルを設定します。"
                    >
                      <div class="value-label">
                        <p>マテリアル</p>
                      </div>
                      <label class="value-input">
                        <select
                          name="components-material-instances-material"
                          class="components-material-instances-material"
                        >
                          <option value="opaque">不透明</option>
                          <option value="alpha_test">透過</option>
                          <option value="blend">半透過</option>
                          <option value="double_sided">double_sided</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div class="switchable-element val_refer hide">
                    <div class="value-element" title="参照先の面を設定します。">
                      <div class="value-label">
                        <p>参照面</p>
                      </div>
                      <label class="value-input">
                        <select
                          name="components-material-instances-refer-face"
                          class="components-material-instances-refer-face"
                        >
                          <option value="*">全面</option>
                          <option value="up">上</option>
                          <option value="down">下</option>
                          <option value="north">北</option>
                          <option value="south">南</option>
                          <option value="east">東</option>
                          <option value="west">西</option>
                        </select>
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
      <div class="array-list-control">
        <label class="add-array" title="マテリアル設定を追加します。">
          <input type="button" class="add-array-element invisible-Control" />
          <div class="add-array-label">
            <div class="add-array-element-text">+ 追加</div>
          </div>
        </label>
        <label class="remove-array" title="マテリアル設定を消します。">
          <input type="button" class="remove-array-element invisible-Control" />
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
    };
  },
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