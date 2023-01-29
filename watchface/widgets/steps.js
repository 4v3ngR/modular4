let stepsWidget = null;
let stepsImage = null;

export const createSteps = (x, y, w, h, Images) => {
  if (!stepsWidget) {
    stepsWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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

    stepsWidget.addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.startApp({ appid: 1, url: 'SportListScreen', native: true });
      return true;
    });
  }

  if (!stepsImage) {
    stepsImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 2,
      src: Images.Steps,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    stepsImage.addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.startApp({ appid: 1, url: 'SportListScreen', native: true });
      return true;
    });
  }
}

export const destroySteps = () => {
  if (stepsWidget) {
    hmUI.deleteWidget(stepsWidget);
    stepsWidget = null;
  }

  if (stepsImage) {
    hmUI.deleteWidget(stepsImage);
    stepsImage = null;
  }
}
