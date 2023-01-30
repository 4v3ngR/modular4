import { getImages } from './includes/images';
import { TimeWidget } from './widgets/time';
import { WeatherWidget } from './widgets/large/weather';
import { DateWidget } from './widgets/date';
import { StepsWidget } from './widgets/steps';
import { CaloriesWidget } from './widgets/calories';
import { HeartrateWidget } from './widgets/heartrate';
import { BatteryWidget } from './widgets/battery';

let timeWidget = null;
let weatherWidget = null;
let dateWidget = null;
let stepsWidget = null;
let caloriesWidget = null;
let heartrateWidget = null;
let batteryWidget = null;

WatchFace({
  initView() {
    const Images = getImages(hmSetting.getLanguage());
    const deviceInfo = hmSetting.getDeviceInfo();
    const screenType = hmSetting.getScreenType();

    // background
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: px(0),
      y: px(0),
      w: px(deviceInfo.width),
      h: px(deviceInfo.height),
      color: 0x000000
    });

    this.createWidgets(Images);
  },

  destroyWidgets() {
    timeWidget.destroy(); timeWidget = null;
    weatherWidget.destroy(); weatherWidget = null;
    dateWidget.destroy(); dateWidget = null;
    stepsWidget.destroy(); stepsWidget = null;
    caloriesWidget.destroy(); caloriesWidget = null;
    heartrateWidget.destroy(); heartrateWidget = null;
    batteryWidget.destroy(); batteryWidget = null;
  },

  createWidgets(Images) {
    timeWidget = new TimeWidget(124 - 20 * !hmSetting.getTimeFormat(), 40, 200, 80, Images);
    weatherWidget = new WeatherWidget(30, 140, 300, 120, Images);
    dateWidget = new DateWidget(48, 51, Images);
    stepsWidget = new StepsWidget(40, 288, 80, 80, Images);
    caloriesWidget = new CaloriesWidget(40, 332, 80, 80, Images);
    heartrateWidget = new HeartrateWidget(200, 288, 80, 80, Images);
    batteryWidget = new BatteryWidget(204, 332, 80, 80, Images);
  },

  onInit() {
    let timeFormat = hmSetting.getTimeFormat();
    let language = hmSetting.getLanguage();

    const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: (() => {
        const newTimeFormat = hmSetting.getTimeFormat();
        const newLanguage = hmSetting.getLanguage();
        if (newTimeFormat !== timeFormat || newLanguage !== language) {
          const Images = getImages(hmSetting.getLanguage());
          this.destroyWidgets();
          this.createWidgets(Images);
          timeFormat = newTimeFormat;
          language = newLanguage;
        }
      }),
      pause_call: (() => {
        console.log('ui pause');
      }),
    })
  },

  build() {
    try {
      this.initView();
    } catch (ex) {
      console.log("got ex " + ex.message);
    }
  },

  onDestroy() { },
})
