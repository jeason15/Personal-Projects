const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    red: {
      default: "rgba(255, 0, 0, 1)",
      half: "rgba(255, 0, 0, 0.5)",
      quarter: "rgba(255, 0, 0, 0.25)",
      zero: "rgba(255, 0, 0, 0)"
    },
    blue: {
      default: "rgba(0, 0, 255, 1)",
      half: "rgba(0, 0, 255, 0.5)",
      quarter: "rgba(0, 0, 255, 0.25)",
      zero: "rgba(0, 0, 255, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };
  
  const majorDomestic = [16.94926471, 17.11769352, 16.882283  , 16.52918782, 16.61408451,
         16.27389444, 15.81020734, 15.81311475, 15.92985318, 16.16161616,
         16.10594796, 15.5748503 , 16.05583756, 15.92458101, 16.06735751,
         16.296     , 16.18766756, 16.14136126, 15.68735084, 15.4893617 ,
         15.47203579, 15.71991247, 15.58636364, 15.85683761, 16.26326964,
         16.80306346, 17.77411168, 17.69230769, 17.91666667, 19.61290323,
         20.21957672, 21.33333333, 23.62318841, 22.94951923, 22.61330049,
         23.52038369, 24.728     , 23.15165877, 23.57142857];
  
  const majorImport = [20.44253859, 20.11058824, 19.63559322, 18.77200903, 18.64356436,
         18.3020595 , 18.3962704 , 18.03624733, 17.98863636, 17.87472527,
         17.62117647, 17.69655172, 18.38842975, 18.02061856, 18.05882353,
         18.03781513, 18.04935622, 18.09451796, 17.81227437, 17.65912763,
         17.58074074, 17.60056657, 17.33585477, 17.16360856, 17.37323944,
         17.67496542, 18.29676512, 19.18657718, 19.81282051, 21.02857143,
         21.35238095, 21.48802737, 21.99881797, 22.66398159, 22.532831  ,
         23.36633663, 23.29767442, 24.49761337, 26.36570743, 22.10126582]
  
  const other = [16.61904762, 19.3       , 15.06666667, 15.3125    , 16.1875    ,
         24.06666667, 25.31818182, 18.26415094, 17.04411765, 19.22727273,
         24.21052632, 16.83870968, 22.75      , 22.75      , 19.        ,
         19.        , 17.        , 15.        , 18.        , 13.        ,
         13.        , 13.        , 11.        , 13.        , 14.        ,
         14.25      , 43.57142857, 50.33333333, 28.66666667, 14.        ,
         43.5       , 23.375     , 21.23076923, 17.41176471, 20.94736842,
         28.38095238, 51.74074074, 19.        ]
  
  const labels = [1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,
    1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,
    2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,
    2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];
  
  const ctx = document.getElementById("plotone").getContext("2d");
  ctx.canvas.height = 100;
  
  gradientPurple = ctx.createLinearGradient(0, 25, 0, 300);
  gradientPurple.addColorStop(0, colors.purple.half);
  gradientPurple.addColorStop(0.35, colors.purple.quarter);
  gradientPurple.addColorStop(1, colors.purple.zero);
  
  gradientRed = ctx.createLinearGradient(0, 25, 0, 300);
  gradientRed.addColorStop(0, colors.red.half);
  gradientRed.addColorStop(0.35, colors.red.quarter);
  gradientRed.addColorStop(1, colors.red.zero);
  
  gradientBlue = ctx.createLinearGradient(0, 25, 0, 300);
  gradientBlue.addColorStop(0, colors.blue.half);
  gradientBlue.addColorStop(0.35, colors.blue.quarter);
  gradientBlue.addColorStop(1, colors.blue.zero);
  
  const options = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Major Domestic",
          fill: true,
          backgroundColor: gradientPurple,
          pointBackgroundColor: colors.purple.default,
          borderColor: colors.purple.default,
          data: majorDomestic,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3
        },
        {
          label: "Major Import",
          fill: true,
          backgroundColor: gradientRed,
          pointBackgroundColor: colors.red.default,
          borderColor: colors.red.default,
          data: majorImport,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3
        },
        {
          label: "Other",
          fill: true,
          backgroundColor: gradientBlue,
          pointBackgroundColor: colors.blue.default,
          borderColor: colors.blue.default,
          data: other,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3
        }
      ]
    },
    options: {
      layout: {
        padding: 10
      },
      responsive: true,
      legend: {
        display: true
      },
  
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              padding: 10,
              autoSkip: false,
              maxRotation: 60,
              minRotation: 60
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Mean MPG (City)",
              padding: 10
            },
            gridLines: {
              display: true,
              color: colors.indigo.quarter
            },
            ticks: {
              beginAtZero: false,
              max: 10,
              min: 60,
              padding: 10
            }
          }
        ]
      }
    },
  };
  
  window.onload = function () {
    window.myLine = new Chart(ctx, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
  };
  




//* Animated Line plot for number of vehicle models per manufacturer class for each year *//

const inputData = [1360, 1266, 841, 788, 710, 701, 627, 610, 613, 594, 538, 501, 394, 358, 386, 375, 373, 382, 419, 423, 447, 457,
    440, 468, 471, 457, 394, 377, 360, 372, 378, 402, 414, 416, 406, 417, 375, 422, 427];
const inputData2 = [583, 425, 354, 443, 404, 437, 429, 469, 440, 455, 425, 435, 363, 388, 425, 476, 466, 529, 554, 619, 675, 706,
    661, 654, 710, 723, 711, 745, 780, 805, 840, 877, 846, 869, 929, 909, 860, 838, 834, 79];
const years = [1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994,
    1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
    2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022];

const data = [];
const data2 = [];

let val = 0;
let val2 = 0;

for (let i = 0; i < 40; i++) {
    year = years.at(i)
    val = inputData.at(i);
    data.push({ x: year, y: val });
    val2 = inputData2.at(i);
    data2.push({ x: year, y: val2 });
}

const totalDuration = 5000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(
    100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'],
        true).y;


var ctx = document.getElementById("plottwo").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: "Major Domestic",
            borderColor: "rgba(255,0,0)",
            borderWidth: 1,
            radius: 0,
            data: data,
        },
        {
            label: "Major Import",
            borderColor: "rgba(0,0,255)",
            borderWidth: 1,
            radius: 0,
            data: data2,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255,99,132)'
                }
            }
        },
        animation: {
            x: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.xStarted) {
                        return 0;
                    }
                    ctx.xStarted = true;
                    return ctx.index * delayBetweenPoints;
                }
            },
            y: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.yStarted) {
                        return 0;
                    }
                    ctx.yStarted = true;
                    return ctx.index * delayBetweenPoints;
                }
            }
        },
        interaction: {
            intersect: false
        },
        plugins: {
            legend: true
        },
        scales: {
            x: {
                type: 'linear',
                //ticks: {
                //    callback: function(value, index, values) {
                //        return nums.toString(value);
                //    }
                //}
            }//,
            //y: {
            //    ticks: {
            //        callback: function(value, index, values) {
            //            return value + 'mpg'
            //        }
            //    }
            //}
        }
    }
});