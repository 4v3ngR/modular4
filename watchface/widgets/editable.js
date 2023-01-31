import { TimeWidget } from './time';
import { DateWidget } from './date';
import { StepsWidget } from './steps';
import { CaloriesWidget } from './calories';
import { HeartrateWidget } from './heartrate';
import { BatteryWidget } from './battery';

export class EditableWidget {
  constructor(edit_id, x, y, w, h, Images, default_type) {
    const optionalTypes = [
      {
        type: hmUI.edit_type.STEP,
        preview: Images.EditablePreviewStep
      },
      {
        type: hmUI.edit_type.BATTERY,
        preview: Images.EditablePreviewBattery
      },
      {
        type: hmUI.edit_type.HEART,
        preview: Images.EditablePreviewHeart
      },
      {
        type: hmUI.edit_type.CAL,
        preview: Images.EditablePreviewCals
      },
      {
        type: hmUI.edit_type.PAI_DAILY,
        preview: Images.EditablePreviewPai
      },
      {
        type: hmUI.edit_type.DISTANCE,
        preview: Images.EditablePreviewDistance
      },
      {
        type: hmUI.edit_type.AQI,
        preview: Images.EditablePreviewAQI
      },
      {
        type: hmUI.edit_type.HUMIDITY,
        preview: Images.EditablePreviewHumidity
      },
      {
        type: hmUI.edit_type.ALTIMETER,
        preview: Images.EditablePreviewAltimeter
      },
      {
        type: hmUI.edit_type.STRESS,
        preview: Images.EditablePreviewStress
      },
      {
        type: hmUI.edit_type.WIND,
        preview: Images.EditablePreviewWind
      },
      {
        type: hmUI.edit_type.SPO2,
        preview: Images.EditablePreviewSPO2
      },
      {
        type: hmUI.edit_type.TRAINING_LOAD,
        preview: Images.EditablePreviewTrainingLoad
      },
      {
        type: hmUI.edit_type.VO2MAX,
        preview: Images.EditablePreviewVo2Max
      },
      {
        type: hmUI.edit_type.UVI,
        preview: Images.EditablePreviewUVI
      },
      {
        type: hmUI.edit_type.DATE,
        preview: Images.EditablePreviewDate
      },
      {
        type: hmUI.edit_type.WEEK,
        preview: Images.EditablePreviewWeek
      },
      {
        type: hmUI.edit_type.Weather,
        preview: Images.EditablePreviewWeather
      },
      {
        type: hmUI.edit_type.SUN,
        preview: Images.EditablePreviewSun
      },
    ];

    this.editGroup = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
      edit_id, x, y, w, h,
      default_type,
      optional_types: optionalTypes,
      count: optionalTypes.length,
      tips_BG: Images.EditableTipsBG[edit_id],
      tips_x: 0,
      tips_y: 0,
      tips_width: 38,
      tips_margin: 1
    });

    const editType = this.editGroup.getProperty(hmUI.prop.CURRENT_TYPE);

    switch (editType) {
      case hmUI.edit_type.STEP:
        break;
      case hmUI.edit_type.BATTERY:
        break;
      case hmUI.edit_type.HEART:
        break;
      case hmUI.edit_type.CAL:
        break;
      case hmUI.edit_type.PAI_DAILY:
        break;
      case hmUI.edit_type.DISTANCE:
        break;
      case hmUI.edit_type.AQI:
        break;
      case hmUI.edit_type.HUMIDITY:
        break;
      case hmUI.edit_type.ALTIMETER:
        break;
      case hmUI.edit_type.STRESS:
        break;
      case hmUI.edit_type.WIND:
        break;
      case hmUI.edit_type.SPO2:
        break;
      case hmUI.edit_type.TRAINING_LOAD:
        break;
      case hmUI.edit_type.VO2MAX:
        break;
      case hmUI.edit_type.UVI:
        break;
      case hmUI.edit_type.DATE:
        break;
      case hmUI.edit_type.WEEK:
        break;
      case hmUI.edit_type.WEATHER:
        break;
      case hmUI.edit_type.TEMPERATURE:
        break;
      case hmUI.edit_type.SUN:
        break;
      default:
        break
    }
  }

  destroy() {
    if (this.editGroup) {
      hmUI.deleteWidget(this.editGroup);
      this.editGroup = null;
    }
  }
}
