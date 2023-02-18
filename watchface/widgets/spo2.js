export class SPO2Widget {
  constructor(x, y, w, h, Images) {
    this.spo2Widget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 26,
      y,
      type: hmUI.data_type.SPO2,
      font_array: Images.SmallNums,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: Images.Percent,
      unit_tc: Images.Percent,
      unit_en: Images.Percent,
      invalid_image: Images.Invalid,
      padding: false,
      isCharacter: false
    });

    this.spo2Image = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 6,
      w,
      h,
      src: Images.SPO2,
      show_level: hmUI.show_level.ONLY_NORMAL
    });
  }

  destroy() {
    if (this.spo2Widget) {
      hmUI.deleteWidget(this.spo2Widget);
      this.spo2Widget = null;
    }

    if (this.spo2Image) {
      hmUI.deleteWidget(this.spo2Image);
      this.spo2Image = null;
    }
  }

  show() {
    this.spo2Widget.setProperty(hmUI.prop.VISIBLE, true);
    this.spo2Image.setProperty(hmUI.prop.VISIBLE, true);
  }

  hide() {
    this.spo2Widget.setProperty(hmUI.prop.VISIBLE, false);
    this.spo2Image.setProperty(hmUI.prop.VISIBLE, false);
  }
}
