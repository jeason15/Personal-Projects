// //* Animated Plot from: https://www.chartjs.org/docs/3.0.2/samples/animations/progressive-line.html *//

// const ctx = document.getElementById("plottwo").getContext("2d");
//   ctx.canvas.height = 100;
//   //* From Data *//
  
//   const inputData = [1,2,3,4,5,6,7,8,9];
//   const inputData2 = [9,8,7,6,5,4,3,2,1];
  
//   const data = [];
//   const data2 = [];
  
//   let val = 0;
//   let val2 = 0;
  
//   for (let i = 1984; i < 2022; i++) {
//     val = inputData.at(i);
//     data.push({x: i, y: val});
//     val2 = inputData2.at(i);
//     data2.push({x: i, y: val2});
//   }

//   //* From Animation *//

//   const totalDuration = 10000;
//   const delayBetweenPoints = totalDuration / data.length;
//   const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
//   const animation = {
//     x: {
//       type: 'number',
//       easing: 'linear',
//       duration: delayBetweenPoints,
//       from: NaN, // the point is initially skipped
//       delay(ctx) {
//         if (ctx.type !== 'data' || ctx.xStarted) {
//           return 0;
//         }
//         ctx.xStarted = true;
//         return ctx.index * delayBetweenPoints;
//       }
//     },
//     y: {
//       type: 'number',
//       easing: 'linear',
//       duration: delayBetweenPoints,
//       from: previousY,
//       delay(ctx) {
//         if (ctx.type !== 'data' || ctx.yStarted) {
//           return 0;
//         }
//         ctx.yStarted = true;
//         return ctx.index * delayBetweenPoints;
//       }
//     }
//   };

// //* From Config *//

// const config = {
//     type: 'line',
//     data: {
//       datasets: [{
//         borderColor: "rgba(255,0,0)",
//         borderWidth: 1,
//         radius: 0,
//         data: data,
//       },
//       {
//         borderColor: "rgba(0,0,255)",
//         borderWidth: 1,
//         radius: 0,
//         data: data2,
//       }]
//     },
//     options: {
//       animation,
//       interaction: {
//         intersect: false
//       },
//       plugins: {
//         legend: false
//       },
//       scales: {
//         x: {
//           type: 'linear'
//         }
//       }
//     }
//   };

//   window.onload = function () {
//     window.myLine = new Chart(ctx, options);
//   };

var ctx = document.getElementById('plottwo').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

