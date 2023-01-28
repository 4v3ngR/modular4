let currentWidget = null;
let headingImage = null;
let highImage = null;
let lowImage = null;
let highTempWidget = null;
let lowTempWidget = null;
let currentTempWidget = null;
let weatherClick = null;

export const createWeather = (x, y, w, h, Images) => {
  if (!currentWidget) {
    currentWidget = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
      x: x + 76,
      y: y + 44,
      image_array: Images.Weather,
      image_length: 29,
      type: hmUI.data_type.WEATHER_CURRENT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  if (!headingImage) {
    headingImage = hmUI.createWidget(hmUI.widget.IMG, {
      x: x + 8,
      y: y + 6,
      src: Images.WeatherHeading,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  if (!highImage) {
    highImage = hmUI.createWidget(hmUI.widget.IMG, {
      x: x + 8,
      y: y + 82,
      src: Images.WeatherHigh,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  if (!lowImage) {
    lowImage = hmUI.createWidget(hmUI.widget.IMG, {
      x: x + 103,
      y: y + 82,
      src: Images.WeatherLow,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  if (!highTempWidget) {
    highTempWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 38,
      y: y + 83,
      type: hmUI.data_type.WEATHER_HIGH,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: Images.WeatherUnit,
      unit_tc: Images.WeatherUnit,
      unit_en: Images.WeatherUnit,
      negative_image: Images.Negative,
      invalid_image: Images.Invalid,
      padding: false,
      isCharacter: false
    });
  }

  if (!lowTempWidget) {
    lowTempWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 128,
      y: y + 83,
      type: hmUI.data_type.WEATHER_LOW,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: Images.WeatherUnit,
      unit_tc: Images.WeatherUnit,
      unit_en: Images.WeatherUnit,
      negative_image: Images.Negative,
      invalid_image: Images.invalid,
      padding: false,
      isCharacter: false
    });
  }

  if (!currentTempWidget) {
    currentTempWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      x: x + 8,
      y: y + 48,
      type: hmUI.data_type.WEATHER_CURRENT,
      font_array: Images.SmallNums,
      align_h: hmUI.align.LEFT,
      h_space: 0,
      show_level: hmUI.show_level.ONLY_NORMAL,
      unit_sc: Images.WeatherUnit,
      unit_tc: Images.WeatherUnit,
      unit_en: Images.WeatherUnit,
      negative_image: Images.Negative,
      invalid_image: Images.Invalid,
      padding: false,
      isCharacter: false
    });
  }

  if (!weatherClick) {
    weatherClick = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x,
      y,
      w,
      h,
      type: hmUI.data_type.WEATHER_CURRENT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }
}

export const destroyWeather = () => {
  if (currentWidget) {
    hmUI.deleteWidget(currentWidget);
    currentWidget = null;
  }
  if (headingImage) {
    hmUI.deleteWidget(headingImage);
    headingImage = null;
  }
  if (highImage) {
    hmUI.deleteWidget(highImage);
    highImage = null;
  }
  if (lowImage) {
    hmUI.deleteWidget(lowImage);
    lowImage = null;
  }
  if (highTempWidget) {
    hmUI.deleteWidget(highTempWidget);
    highTempWidget = null;
  }
  if (lowTempWidget) {
    hmUI.deleteWidget(lowTempWidget);
    lowTempWidget = null;
  }
  if (currentTempWidget) {
    hmUI.deleteWidget(currentTempWidget);
    currentTempWidget = null;
  }
  if (weatherClick) {
    hmUI.deleteWidget(weatherClick);
    weatherClick = null;
  }
}
