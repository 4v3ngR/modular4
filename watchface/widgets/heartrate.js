let hrWidget = null;
let hrImage = null;
let hrClick = null;

export const createHeartRate = (x, y, w, h, Images) => {
  if (!hrWidget) {
    hrWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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
  }

  if (!hrImage) {
    hrImage = hmUI.createWidget(hmUI.widget.IMG, {
      x,
      y: y + 7,
      src: Images.HeartRate,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  if (!hrClick) {
    hrClick = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x,
      y,
      w,
      h,
      type: hmUI.data_type.HEART,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }
}

export const destroyHeartRate = () => {
  if (hrWidget) {
    hmUI.deleteWidget(hrWidget);
    hrWidget = null;
  }

  if (hrImage) {
    hmUI.deleteWidget(hrImage);
    hrImage = null;
  }

  if (hrClick) {
    hmUI.deleteWidget(hrClick);
    hrClick = null;
  }
}
