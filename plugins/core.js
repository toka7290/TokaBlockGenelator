export default ({}, inject) => {
  inject("getUuid_v4", getUuid_v4);
  inject("isUUID", isUUID);
  inject("getClassUUID", getClassUUID);
  inject("showModal", showModal);
  inject("closeModal", closeModal);
  inject("getComponentObject", getComponentObject);
  // inject("Issue", Issue);
};
// UUID生成
const getUuid_v4 = () => {
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }
  return chars.join("");
};
// UUIDチェック
const isUUID = (uuid = "") => {
  const s = uuid.match(
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
  );
  if (s === null) {
    return false;
  }
  return true;
};
const getClassUUID = (/**@type {DOMTokenList} */ classlist) => {
  return ((entry) => {
    for (const iterator of entry) {
      if (isUUID(iterator)) {
        return iterator;
      }
    }
  })(classlist.values());
};

function showModal(event) {
  /** @type {Element} */
  const parent = event.target;
  parent.parentElement.nextElementSibling.classList.remove("hide");
}
function closeModal(event) {
  /** @type {Element} */
  const parent = event.target;
  if (parent.className == "modal") {
    parent.classList.add("hide");
  } else if (parent.classList.contains("modal-close")) {
    parent.closest(".modal").classList.add("hide");
  }
}

function getComponentObject(format_version, component_ids) {
  let components = {};
  for (const target_id of component_ids) {
    let { type, data } = this.$store.getters.updateComponents[target_id];
    console.log(type, data);
    switch (type) {
      case "components_loot":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:loot"] = data;
            break;
          case "1.12.0":
            components["minecraft:loot"] = new Object();
            components["minecraft:loot"]["table"] = data;
            break;
          default:
            break;
        }
        break;
      case "components_display_name":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:display_name"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_tag":
        switch (format_version) {
          case "1.16.100":
            if (data)
              for (const tag of data) {
                components[`tag:${tag}`] = {};
              }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_placement_filter":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["minecraft:placement_filter"] = {};
              components["minecraft:placement_filter"]["conditions"] = data.map((condition) => {
                return {
                  allowed_faces: condition.faces,
                  block_filter: condition.filter,
                };
              });
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_preventsjumping":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:preventsjumping"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_unwalkable":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:unwalkable"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_map_color":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:map_color"] = data;
            break;
          case "1.12.0":
            components["minecraft:map_color"] = new Object();
            components["minecraft:map_color"]["color"] = data;
            break;
          default:
            break;
        }
        break;
      case "components_crafting_table":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:crafting_table"] = {};
            components["minecraft:crafting_table"]["grid_size"] = data?.grid_size;
            components["minecraft:crafting_table"]["crafting_tags"] = data?.tags;
            components["minecraft:crafting_table"]["custom_description"] = data?.custom_description;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_geometry":
        switch (format_version) {
          case "1.16.100":
            switch (data?.type) {
              case 0:
                components["minecraft:unit_cube"] = {};
                break;
              case 1:
                components["minecraft:geometry"] = data.geo;
                break;
              default:
                break;
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_material_instances":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["minecraft:material_instances"] = {};
              for (const instance of data) {
                switch (instance.type) {
                  case 0:
                    components["minecraft:material_instances"][`${instance.face}`] =
                      instance.refer_face;
                    break;
                  case 1:
                    components["minecraft:material_instances"][`${instance.face}`] = {
                      texture: instance.texture,
                      render_method: instance.material,
                    };
                    break;
                  default:
                    break;
                }
              }
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_entity_collision":
        switch (format_version) {
          case "1.16.100":
            if (data?.type) {
              components["minecraft:entity_collision"] = data?.simple;
            } else {
              components["minecraft:entity_collision"] = {
                origin: data?.origin,
                size: data?.size,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_pick_collision":
        switch (format_version) {
          case "1.16.100":
            if (data?.type) {
              components["minecraft:pick_collision"] = data?.simple;
            } else {
              components["minecraft:pick_collision"] = {
                origin: data?.origin,
                size: data?.size,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_rotation":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:rotation"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_breathability":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:breathability"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_block_light_absorption":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:block_light_absorption"] = data;
            break;
          case "1.12.0":
            components["minecraft:block_light_absorption"] = new Object();
            components["minecraft:block_light_absorption"]["value"] = data;
            break;
          default:
            break;
        }
        break;
      case "components_block_light_emission":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:block_light_emission"] = data;
            break;
          case "1.12.0":
            components["minecraft:block_light_emission"] = new Object();
            components["minecraft:block_light_emission"]["emission"] = data;
            break;
          default:
            break;
        }
        break;
      case "components_destroy_time":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:destroy_time"] = data;
            break;
          case "1.12.0":
            components["minecraft:destroy_time"] = new Object();
            components["minecraft:destroy_time"]["value"] = data;
            break;
          default:
            break;
        }
        break;
      case "components_explosion_resistance":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:explosion_resistance"] = data;
            break;
          case "1.12.0":
            components["minecraft:explosion_resistance"] = new Object();
            components["minecraft:explosion_resistance"]["value"] = data;
          default:
            break;
        }
        break;
      case "components_breakonpush":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:breakonpush"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_immovable":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:immovable"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_onlypistonpush":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:onlypistonpush"] = data;
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_friction":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
            components["minecraft:friction"] = data;
            break;
          case "1.12.0":
            components["minecraft:friction"] = new Object();
            components["minecraft:friction"]["value"] = data;
            break;
          default:
            break;
        }
        break;
      case "components_flammable":
        switch (format_version) {
          case "1.16.100":
          case "1.16.0":
          case "1.12.0":
            components["minecraft:flammable"] = { flame_odds: data?.flame, burn_odds: data?.burn };
            break;
          default:
            break;
        }
        break;
      case "components_event_on_fall_on":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_fall_on"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_on_interact":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_interact"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_on_placed":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_placed"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_on_player_placing":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_player_placing"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_on_step_on":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_step_on"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_on_step_off":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_step_off"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_on_player_destroyed":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:on_player_destroyed"] = {
              event: data?.event,
              condition: data?.condition != "" ? data?.condition : undefined,
              target: data?.target != "default" ? data?.target : undefined,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_ticking":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:ticking"] = {
              on_tick: {
                event: data?.event,
                condition: data?.condition != "" ? data?.condition : undefined,
                target: data?.target != "default" ? data?.target : undefined,
              },
              range: data?.range,
              looping: data?.loop,
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "components_event_random_ticking":
        switch (format_version) {
          case "1.16.100":
            components["minecraft:random_ticking"] = {
              on_tick: {
                event: data?.event,
                condition: data?.condition != "" ? data?.condition : undefined,
                target: data?.target != "default" ? data?.target : undefined,
              },
            };
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_set_block_property":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["set_block_property"] = {};
              data.forEach((property) => {
                components["set_block_property"] = {
                  ...components["set_block_property"],
                  [property?.state]: property?.value,
                };
              });
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_set_block":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["set_block"] = {
                block_type: data,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_set_block_at_pos":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["set_block"] = {
                block_type: data?.id,
                block_offset: data?.pos,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_spawn_loot":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["spawn_loot"] = {
                table: data,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_add_mob_effect":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["add_mob_effect"] = {
                effect: data?.effect_id,
                amplifier: data?.amplifier,
                duration: data?.duration,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_remove_mob_effect":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["remove_mob_effect"] = {
                effect: data?.id,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_damage":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["damage"] = {
                effect: data?.type,
                amount: data?.amount,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_decrement_stack":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["decrement_stack"] = {
                decrement_stack: data,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_die":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["die"] = {
                target: data,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_play_effect":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["play_effect"] = {
                effect: data?.id,
                data: data?.data,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_play_sound":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["play_sound"] = {
                sound: data?.id,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_teleport":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["teleport"] = {
                destination: data?.destination,
                max_range: data?.max_range,
                avoid_water: data?.avoid_water,
                land_on_block: data?.land_on_block,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_transform_item":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["transform_item"] = {
                transform: data,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_trigger":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["trigger"] = {
                event: data?.event,
                condition: data?.condition,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_run_command":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              components["run_command"] = {
                command: data?.command,
                target: data?.target,
              };
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_swing":
        switch (format_version) {
          case "1.16.100":
            components["swing"] = {};
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_sequence":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              data.forEach((sequence) => {
                components["sequence"] = [
                  ...components["sequence"],
                  getComponentObject(format_version, sequence),
                ];
              });
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
      case "event_responses_randomize":
        switch (format_version) {
          case "1.16.100":
            if (data) {
              data.forEach((sequence) => {
                components["sequence"] = [
                  ...components["sequence"],
                  {
                    ...getComponentObject(format_version, sequence.components),
                    weight: sequence.weight,
                  },
                ];
              });
            }
            break;
          case "1.16.0":
          case "1.12.0":
          default:
            break;
        }
        break;
    }
  }
  return components;
}

class JSONReplace {
  constructor() {
    this.replace_point = new Object();
  }
  /**
   *
   * @param {*} data
   * @returns {string}
   */
  register(data) {
    let key = null;
    if (Array.isArray(data)) {
      // 配列
      if (
        (Math.max.apply(
          null,
          data.map((val) => String(val).length)
        ) >= 5 &&
          data.length >= 6) ||
        data.join(",").length >= 80 ||
        data.some((val) => typeof val == "object") ||
        data.length == 0
      ) {
        // 5文字以上、6要素以上。80文字以上。オブジェクトアリ。空
        key = data;
      } else {
        key = getUuid_v4();
        this.replace_point[`"${key}"`] = data;
      }
    } else if (typeof data == "string") {
      // 文字列
      key = getUuid_v4();
      this.replace_point[`"${key}"`] = data.replace(/\\[^n\\]|\\$/g, "");
    } else {
      // それ以外
      key = data;
    }
    return key;
  }
  replaceAll(/**@type {String} */ string_json) {
    const keys = Object.keys(this.replace_point);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const data = this.replace_point[key];
      string_json = string_json.replace(
        key,
        (() => {
          if (Array.isArray(data))
            return JSON.stringify(data)
              .split(/^\[/)
              .join("[ ")
              .split(/,/)
              .join(", ")
              .split(/\]$/)
              .join(" ]");
          else if (typeof data == "string") return `"${data}"`;
        })()
      );
    }
    return string_json;
  }
}

class Issue {
  constructor() {
    this.error_list = new Array();
    this.warning_list = new Array();
    $(".stat-warning,.stat-error").removeClass("stat-warning stat-error");
  }
  setIssueList() {
    $("span.issue-error-num").text("エラー:" + this.error_list.length);
    $("span.issue-warning-num").text("警告:" + this.warning_list.length);
    if (this.warning_list.length <= 0 && this.error_list.length <= 0) {
      $("ul.issue-list").append("<li>問題はありません</li>");
    } else {
      this.error_list.forEach((val) => {
        $("ul.issue-list").append(
          $("<li>").append(
            $("<img>").attr({
              src: "~/assets/img/error.svg",
              alt: "",
              width: "19px",
              height: "19px",
            }),
            $("<p>").text(val[0])
          )
        );
        val[1].addClass("stat-error");
      });
      this.warning_list.forEach((val) => {
        $("ul.issue-list").append(
          $("<li>").append(
            $("<img>").attr({
              src: "~/assets/img/warning.svg",
              alt: "",
              width: "19px",
              height: "19px",
            }),
            $("<p>").text(val[0])
          )
        );
        val[1].addClass("stat-warning");
      });
    }
  }
  addWarning(issue_comment, issue_element) {
    this.warning_list.push([issue_comment, issue_element]);
  }
  addError(issue_comment, issue_element) {
    this.error_list.push([issue_comment, issue_element]);
  }
}
