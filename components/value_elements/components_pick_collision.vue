<template>
  <div
    class="value-element components_pick_collision"
    title="ブロックの選択時の判定を設定します。"
  >
    <div class="value-label">
      <p>選択判定</p>
    </div>
    <div class="value-input type-modal">
      <label
        ><input
          type="button"
          value="編集"
          class="modal-open"
          v-on:click="showModal"
      /></label>
      <div class="modal hide" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">選択判定</div>
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
                    name="components-pick-collision-switch"
                    class="components-pick-collision-switch"
                  >
                    <option value="val_simple">簡易</option>
                    <option value="val_details">詳細</option>
                  </select>
                </label>
              </div>
              <div class="switchable-element val_simple">
                <div class="value-element" title="判定の有無を設定します。">
                  <label class="value-checkbox">
                    <input
                      type="checkbox"
                      name="components-pick-collision-simple"
                      class="components-pick-collision-simple invisible-Control"
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
              <div class="switchable-element val_details hide">
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
                        class="components-pick-collision-origin-x"
                        value="0"
                        step="1"
                        min="-8"
                        max="8"
                      />
                    </label>
                    <label>
                      <span>Y=</span>
                      <input
                        type="number"
                        name=""
                        class="components-pick-collision-origin-y"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                      />
                    </label>
                    <label>
                      <span>Z=</span>
                      <input
                        type="number"
                        name=""
                        class="components-pick-collision-origin-z"
                        value="0"
                        step="1"
                        min="-8"
                        max="8"
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
                        class="components-pick-collision-size-x"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                      />
                    </label>
                    <label>
                      <span>Y=</span>
                      <input
                        type="number"
                        name=""
                        class="components-pick-collision-size-y"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
                      />
                    </label>
                    <label>
                      <span>Z=</span>
                      <input
                        type="number"
                        name=""
                        class="components-pick-collision-size-z"
                        value="0"
                        step="1"
                        min="0"
                        max="16"
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