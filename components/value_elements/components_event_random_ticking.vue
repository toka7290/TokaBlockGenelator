<template>
  <div
    class="value-element components_event_random_ticking"
    title="ランダムテックごとに発生するイベントを定義します。"
  >
    <div class="value-label">
      <p>トリガ(ランダムティック)</p>
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
              <div class="modal-title">トリガ(ランダムティック)</div>
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
                    name="components-event-random-ticking-event"
                    class="components-event-random-ticking-event"
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
                    name="components-event-random-ticking-condition"
                    class="components-event-random-ticking-condition"
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
                    name="components-event-random-ticking-target"
                    class="components-event-random-ticking-target"
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