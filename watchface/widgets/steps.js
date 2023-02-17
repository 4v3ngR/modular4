export class StepsWidget {
  constructor(x, y, w, h, Images) {
    this.stepsWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 36,
      y,
      type: hmUI.data_type.STEP,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      padding: false,
      isCharacter: false
    });

    this.stepsWidget.addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.startApp({ appid: 1, url: 'SportListScreen', native: true });
      return true;
    });

    this.stepsImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 2,
      src: Images.Steps,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.stepsImage.addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.startApp({ appid: 1, url: 'SportListScreen', native: true });
      return true;
    });
  }

  destroy() {
    if (this.stepsWidget) {
      hmUI.deleteWidget(this.stepsWidget);
      this.stepsWidget = null;
    }

    if (this.stepsImage) {
      hmUI.deleteWidget(this.stepsImage);
      this.stepsImage = null;
    }
  }

  show() {
    this.stepsWidget.setProperty(hmUI.prop.VISIBLE, true);
    this.stepsImage.setProperty(hmUI.prop.VISIBLE, true);
  }

  hide() {
    this.stepsWidget.setProperty(hmUI.prop.VISIBLE, false);
    this.stepsImage.setProperty(hmUI.prop.VISIBLE, false);
  }
}
