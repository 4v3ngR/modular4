import { getImages } from './includes/images';
import { createTime, destroyTime } from './widgets/time';
import { createWeather, destroyWeather } from './widgets/large/weather';
import { createDate, destroyDate } from './widgets/date';
import { createSteps, destroySteps } from './widgets/steps';
import { createCalories, destroyCalories } from './widgets/calories';
import { createHeartRate, destroyHeartRate } from './widgets/heartrate';
import { createBattery, destroyBattery } from './widgets/battery';

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
    destroyTime();
    destroyWeather();
    destroyDate();
    destroySteps();
    destroyCalories();
    destroyHeartRate();
    destroyBattery();
  },

  createWidgets(Images) {
    createTime(124 - 20 * !hmSetting.getTimeFormat(), 40, 200, 80, Images);
    createWeather(30, 140, 300, 120, Images);
    createDate(48, 51, Images);
    createSteps(40, 288, 80, 80, Images);
    createCalories(40, 332, 80, 80, Images);
    createHeartRate(200, 288, 80, 80, Images);
    createBattery(204, 332, 80, 80, Images);
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
