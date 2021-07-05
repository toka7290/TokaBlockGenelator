<template>
  <div
    class="value-element event_responses_decrement_stack"
    title="手持ちのアイテムを1つ減らします。"
  >
    <div class="value-label">
      <p>アイテムデクリメント</p>
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
              <div class="modal-title">アイテムデクリメント</div>
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
                title="クリエイティブでもアイテムを減らすか設定します。"
              >
                <label class="value-checkbox">
                  <input
                    type="checkbox"
                    name="event-responses-decrement-stack-ignore-game-mode"
                    class="
                      event-responses-decrement-stack-ignore-game-mode
                      invisible-Control
                    "
                    v-on:change="setIgnoreGameMode"
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
                    <p class="checkbox-body-text">クリエイティブで有効</p>
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
      data: false,
    };
  },
  props: ["group", "uuid"],
  methods: {
    setIgnoreGameMode(event) {
      this.data = event.target.checked;
      this.onChangedValue();
    },
    onChangedValue() {
      this.$store.commit("setEventData", [this.uuid, this.group, this.data]);
    },
  },
};
</script>