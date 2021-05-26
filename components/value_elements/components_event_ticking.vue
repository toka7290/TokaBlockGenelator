<template>
  <div
    class="value-element components_event_ticking"
    title="ティック毎に発生するイベントを定義します。"
  >
    <div class="value-label">
      <p>トリガ(ティック毎)</p>
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
              <div class="modal-title">トリガ(ティック毎)</div>
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
                title="トリガ―するイベント名を設定します。"
              >
                <div class="value-label">
                  <p>イベント</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="components-event-ticking-event"
                    class="components-event-ticking-event"
                    list="event-name-list"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="イベントをトリガする条件を設定します。"
              >
                <div class="value-label">
                  <p>条件</p>
                </div>
                <label class="value-input">
                  <input
                    type="text"
                    name="components-event-ticking-condition"
                    class="components-event-ticking-condition"
                  />
                </label>
              </div>
              <div
                class="value-element"
                title="イベントをトリガするターゲットを指定します。"
              >
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="components-event-ticking-target"
                    class="components-event-ticking-target"
                  >
                    <option value="default">default</option>
                    <option value="self">self</option>
                    <option value="holder">holder</option>
                    <option value="baby">baby</option>
                    <option value="other">other</option>
                    <option value="player">player</option>
                    <option value="target">target</option>
                    <option value="parent">parent</option>
                    <option value="block">block</option>
                    <option value="damager">damager</option>
                    <option value="item">item</option>
                  </select>
                </div>
              </div>
              <div
                class="value-element"
                title="イベントをトリガする範囲を設定します。"
              >
                <div class="value-label">
                  <p>範囲</p>
                </div>
                <div class="value-input type-2D">
                  <label>
                    <span>X=</span>
                    <input
                      type="number"
                      name=""
                      class="components-event-ticking-range-x"
                      value="0"
                      step="1"
                    />
                  </label>
                  <label>
                    <span>Z=</span>
                    <input
                      type="number"
                      name=""
                      class="components-event-ticking-range-z"
                      value="0"
                      step="1"
                    />
                  </label>
                </div>
              </div>
              <div class="value-element" title="ループするかどうか設定します。">
                <label class="value-checkbox">
                  <input
                    type="checkbox"
                    name="components-event-ticking-looping"
                    class="components-event-ticking-looping invisible-Control"
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
                    <p class="checkbox-body-text">ループ</p>
                  </div>
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