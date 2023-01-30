export class HeartrateWidget {
  constructor(x, y, w, h, Images) {
    this.hrWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 27,
      y,
      type: hmUI.data_type.HEART,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      invalid_image: Images.Invalid,
      padding: false,
      isCharacter: false
    });

    this.hrImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 7,
      src: Images.HeartRate,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.hrClick = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x,
      y,
      w,
      h,
      type: hmUI.data_type.HEART,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.hrWidget) {
      hmUI.deleteWidget(this.hrWidget);
      this.hrWidget = null;
    }

    if (this.hrImage) {
      hmUI.deleteWidget(this.hrImage);
      this.hrImage = null;
    }

    if (this.hrClick) {
      hmUI.deleteWidget(this.hrClick);
      this.hrClick = null;
    }
  }
}
