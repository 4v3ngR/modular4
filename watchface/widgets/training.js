export class TrainingLoadWidget {
  constructor(x, y, w, h, Images) {
    this.trainingWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 32,
      y,
      type: hmUI.data_type.TRAINING_LOAD,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: Images.Invalid,
      unit_tc: Images.Invalid,
      unit_en: Images.Invalid,
      invalid_image: Images.Invalid,
      padding: false,
      isCharacter: false
    });

    this.trainingImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 6,
      w: 32,
      h,
      src: Images.TrainingLoad,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.trainingWidget) {
      hmUI.deleteWidget(this.trainingWidget);
      this.trainingWidget = null;
    }

    if (this.trainingImage) {
      hmUI.deleteWidget(this.trainingImage);
      this.trainingImage = null;
    }
  }

  show() {
    this.trainingWidget.setProperty(hmUI.prop.VISIBLE, true);
    this.trainingImage.setProperty(hmUI.prop.VISIBLE, true);
  }

  hide() {
    this.trainingWidget.setProperty(hmUI.prop.VISIBLE, false);
    this.trainingImage.setProperty(hmUI.prop.VISIBLE, false);
  }
}
