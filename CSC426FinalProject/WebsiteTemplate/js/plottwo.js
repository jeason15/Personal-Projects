//* Animated Plot from: https://www.chartjs.org/docs/3.0.2/samples/animations/progressive-line.html *//

const inputData = [1,2,3,4,5,6,7,8,9];
const inputData2 = [9,8,7,6,5,4,3,2,1];

const data = [];
const data2 = [];

let val = 0;
let val2 = 0;

for (let i = 1984; i < 2022; i++) {
  val = inputData.at(i);
  data.push({x: i, y: val});
  val2 = inputData2.at(i);
  data2.push({x: i, y: val2});
}

const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(
  100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], 
  true).y;


var ctx = document.getElementById("plottwo").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
    data: {
      datasets: [{
        borderColor: "rgba(255,0,0)",
        borderWidth: 1,
        radius: 0,
        data: data,
      },
      {
        borderColor: "rgba(0,0,255)",
        borderWidth: 1,
        radius: 0,
        data: data2,
      }]
    },
    options: {
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
        legend: false
      },
      scales: {
        x: {
          type: 'linear'
        }
      }
    }
  });
