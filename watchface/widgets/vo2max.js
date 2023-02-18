export class VO2MaxWidget {
  constructor(x, y, w, h, Images) {
    this.vo2maxWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 32,
      y,
      type: hmUI.data_type.VO2MAX,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: Images.Percent,
      unit_tc: Images.Percent,
      unit_en: Images.Percent,
      invalid_image: Images.Invalid,
      padding: false,
      isCharacter: false
    });

    this.vo2maxImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 6,
      w: 32,
      h: 32,
      src: Images.VO2Max,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.vo2maxWidget) {
      hmUI.deleteWidget(this.vo2maxWidget);
      this.vo2maxWidget = null;
    }

    if (this.vo2maxImage) {
      hmUI.deleteWidget(this.vo2maxImage);
      this.vo2maxImage = null;
    }
  }

  show() {
    this.vo2maxWidget.setProperty(hmUI.prop.VISIBLE, true);
    this.vo2maxImage.setProperty(hmUI.prop.VISIBLE, true);
  }

  hide() {
    this.vo2maxWidget.setProperty(hmUI.prop.VISIBLE, false);
    this.vo2maxImage.setProperty(hmUI.prop.VISIBLE, false);
  }
}
