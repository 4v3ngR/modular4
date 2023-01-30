export class WeatherWidget {
  constructor(x, y, w, h, Images) {
    this.currentWidget = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
      x: x + 76,
      y: y + 44,
      image_array: Images.Weather,
      image_length: 29,
      type: hmUI.data_type.WEATHER_CURRENT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.headingImage = hmUI.createWidget(hmUI.widget.IMG, {
      x: x + 8,
      y: y + 6,
      src: Images.WeatherHeading,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.highImage = hmUI.createWidget(hmUI.widget.IMG, {
      x: x + 8,
      y: y + 82,
      src: Images.WeatherHigh,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.lowImage = hmUI.createWidget(hmUI.widget.IMG, {
      x: x + 103,
      y: y + 82,
      src: Images.WeatherLow,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.highTempWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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

    this.lowTempWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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

    this.currentTempWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
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

    this.weatherClick = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x,
      y,
      w,
      h,
      type: hmUI.data_type.WEATHER_CURRENT,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });
  }

  destroy() {
    if (this.currentWidget) {
      hmUI.deleteWidget(this.currentWidget);
      this.currentWidget = null;
    }
    if (this.headingImage) {
      hmUI.deleteWidget(this.headingImage);
      this.headingImage = null;
    }
    if (this.highImage) {
      hmUI.deleteWidget(this.highImage);
      this.highImage = null;
    }
    if (this.lowImage) {
      hmUI.deleteWidget(this.lowImage);
      this.lowImage = null;
    }
    if (this.highTempWidget) {
      hmUI.deleteWidget(this.highTempWidget);
      this.highTempWidget = null;
    }
    if (this.lowTempWidget) {
      hmUI.deleteWidget(this.lowTempWidget);
      this.lowTempWidget = null;
    }
    if (this.currentTempWidget) {
      hmUI.deleteWidget(this.currentTempWidget);
      this.currentTempWidget = null;
    }
    if (this.weatherClick) {
      hmUI.deleteWidget(this.weatherClick);
      this.weatherClick = null;
    }
  }
}
