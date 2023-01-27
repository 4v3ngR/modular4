export const getImages = (lang) => {
  let imgRoot = 'default/';
  switch (lang) {
    case 0: // zh-CN
      imgRoot = 'default/';
      break;
    case 1: // zh-TW
      imgRoot = 'default/';
      break;
    case 2: // en-US
      imgRoot = 'default/';
      break;
    case 3: // es-ES
      imgRoot = 'default/';
      break;
    case 4: // ru-RU
      imgRoot = 'default/';
      break;
    case 5: // ko-KR
      imgRoot = 'default/';
      break;
    case 6: // fr-FR
      imgRoot = 'default/';
      break;
    case 7: // de-DE
      imgRoot = 'default/';
      break;
    case 8: // id-ID
      imgRoot = 'default/';
      break;
    case 9: // pl-PL
      imgRoot = 'default/';
      break;
    case 10: // it-IT
      imgRoot = 'default/';
      break;
    case 11: // ja-JP
      imgRoot = 'default/';
      break;
    case 12: // th-TH
      imgRoot = 'default/';
      break;
    case 13: // ar-EG
      imgRoot = 'default/';
      break;
    case 14: // vi-VN
      imgRoot = 'default/';
      break;
    case 15: // pt-PT
      imgRoot = 'default/';
      break;
    case 16: // nl-NL
      imgRoot = 'default/';
      break;
    case 17: // tr-TR
      imgRoot = 'default/';
      break;
    case 18: // uk-UA
      imgRoot = 'default/';
      break;
    case 19: // iw-IL
      imgRoot = 'default/';
      break;
    case 20: // pt-BR
      imgRoot = 'default/';
      break;
    case 21: // ro-RO
      imgRoot = 'default/';
      break;
    case 22: // cs-CZ
      imgRoot = 'default/';
      break;
    case 23: // el-GR
      imgRoot = 'default/';
      break;
    case 24: // sr-RS
      imgRoot = 'default/';
      break;
    case 25: // ca-ES
      imgRoot = 'default/';
      break;
    case 26: // fi-FI
      imgRoot = 'default/';
      break;
    case 27: // nb-NO
      imgRoot = 'default/';
      break;
    case 28: // da-DK
      imgRoot = 'default/';
      break;
    case 29: // sv-SE
      imgRoot = 'default/';
      break;
    case 30: // hu-HU
      imgRoot = 'default/';
      break;
    case 31: // ms-MY
      imgRoot = 'default/';
      break;
    case 32: // sk-SK
      imgRoot = 'default/';
      break;
    case 33: // sk-SK
      imgRoot = 'default/';
      break;
  }

  const img = (path) => `${imgRoot}${path}`;

  const range = (start, end, step = 1) => {
    if (undefined === end) { end = start; start = 0; step = 1; }

    const rv = [];
    for (let i = start; i < end; i+= step) {
      rv.push(i);
    }
    return rv;
  };

  return {
    BigNums: range(10).map(v => img(`Digits/large_${v}.png`)),
    MidNums: range(10).map(v => img(`Digits/mid_${v}.png`)),
    SmallNums: range(10).map(v => img(`Digits/small_${v}.png`)),
    WeekDays: range(1,7).map(v => img(`Date/weekdays_${v}.png`)),
    Weather: range(29).map(v => img(`Weather/${v}.png`)),
    WeatherHeading: img('Weather/heading.png'),
    WeatherLow: img('Weather/low.png'),
    WeatherHigh: img('Weather/high.png'),
    WeatherUnit: img('Weather/degrees.png'),
    Colon: img('Static/colon.png'),
    Negative: img('Static/negative.png'),
    Invalid: img('Static/invalid.png'),
    Calories: img('Icons/cals.png'),
    HeartRate: img('Icons/heartrate.png'),
    Percentage: img('Icons/percentage.png'),
    Steps: img('Icons/steps.png')
  };
}
