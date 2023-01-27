import { getImages } from './includes/images';
import { createTime, destroyTime } from './widgets/time';
import { createWeather } from './widgets/large/weather';
import { createDate } from './widgets/date';
import { createSteps } from './widgets/steps';
import { createCalories } from './widgets/calories';
import { createHeartRate } from './widgets/heartrate';
import { createBattery } from './widgets/battery';

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

    createTime(124, 40, 200, 80, Images);
    createWeather(30, 140, 300, 120, Images);
    createDate(48, 51, Images);
    createSteps(40, 288, 80, 80, Images);
    createCalories(40, 332, 80, 80, Images);
    createHeartRate(200, 288, 80, 80, Images);
    createBattery(204, 332, 80, 80, Images);
  },

  onInit() {
    let timeFormat = hmSetting.getTimeFormat();

    const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: (function () {
        if (hmSetting.getTimeFormat() !== timeFormat) {
          const Images = getImages(hmSetting.getLanguage());
          destroyTime();
          createTime(124, 40, 200, 80, Images);
          timeFormat = hmSetting.getTimeFormat();
        }
      }),
      pause_call: (function () {
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
