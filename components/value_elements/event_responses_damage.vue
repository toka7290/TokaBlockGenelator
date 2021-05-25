<template>
  <div
    class="value-element event_responses_damage"
    title="ダメージを与えます。"
  >
    <div class="value-label">
      <p>ダメージ</p>
    </div>
    <div class="value-input type-modal">
      <label><input type="button" value="編集" class="modal-open" /></label>
      <div class="modal hide" v-on:click="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">ダメージ</div>
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
              <div class="value-element" title="与えるダメージのタイプ">
                <div class="value-label">
                  <p>ダメージタイプ</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-damage-type"
                    class="event-responses-damage-type"
                  >
                    <option value="all">all</option>
                    <option value="anvil">anvil</option>
                    <option value="block_explosion">block_explosion</option>
                    <option value="charging">charging</option>
                    <option value="contact">contact</option>
                    <option value="drowning">drowning</option>
                    <option value="entity_attack">entity_attack</option>
                    <option value="entity_explosion">entity_explosion</option>
                    <option value="fall">fall</option>
                    <option value="falling_block">falling_block</option>
                    <option value="fire">fire</option>
                    <option value="fire_tick">fire_tick</option>
                    <option value="fireworks">fireworks</option>
                    <option value="fly_into_wall">fly_into_wall</option>
                    <option value="freezing">freezing</option>
                    <option value="lava">lava</option>
                    <option value="lightning">lightning</option>
                    <option value="magic">magic</option>
                    <option value="magma">magma</option>
                    <option value="none">none</option>
                    <option value="override">override</option>
                    <option value="piston">piston</option>
                    <option value="projectile">projectile</option>
                    <option value="stalactite">stalactite</option>
                    <option value="stalagmite">stalagmite</option>
                    <option value="starve">starve</option>
                    <option value="suffocation">suffocation</option>
                    <option value="suicide">suicide</option>
                    <option value="temperature">temperature</option>
                    <option value="thorns">thorns</option>
                    <option value="void">void</option>
                    <option value="wither">wither</option>
                  </select>
                </div>
              </div>
              <div class="value-element" title="与えるダメージの量">
                <div class="value-label">
                  <p>ダメージ量</p>
                </div>
                <label class="value-input">
                  <input
                    type="number"
                    min="0"
                    name="event-responses-damage-amount"
                    class="event-responses-damage-amount"
                    value="0"
                    step="1"
                  />
                </label>
              </div>
              <div class="value-element" title="ダメージを与えるターゲット">
                <div class="value-label">
                  <p>ターゲット</p>
                </div>
                <div class="value-input">
                  <select
                    name="event-responses-damage-target"
                    class="event-responses-damage-target"
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