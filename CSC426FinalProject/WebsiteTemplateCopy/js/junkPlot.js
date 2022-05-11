//* Interactive plot for the mpg of each manufacturer class by year. *//

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
  
  const majorDomestic = [3.56242647, 3.48672986, 3.57312723, 3.60913706, 3.6871831 ,
    3.73466476, 3.85279107, 3.92901639, 3.83768352, 3.80454545,
    3.90018587, 4.049501  , 3.84035533, 3.82541899, 3.76171875,
    3.82249322, 3.7541779 , 3.78522427, 3.83660287, 3.91985816,
    3.98836689, 3.91925602, 4.02022727, 4.00641026, 3.98089172,
    4.03960613, 3.76751269, 4.0064    , 3.99692737, 3.83415301,
    3.6458221 , 3.59717949, 3.37729592, 3.43476071, 3.44040921,
    3.4969697 , 3.57110482, 3.70224439, 3.72920792];
  
  const majorImport = [2.23584906, 2.23404255, 2.25310734, 2.39977427, 2.34579208,
    2.40640732, 2.36293706, 2.46012793, 2.53840909, 2.59362637,
    2.69623529, 2.74735632, 2.64049587, 2.73324742, 2.72004717,
    2.74547368, 2.78232759, 2.79639469, 2.84141049, 2.97977346,
    2.9997037 , 3.05963173, 3.23282905, 3.35458716, 3.40014104,
    3.36445367, 3.35682138, 3.29717362, 3.25469755, 3.15394243,
    3.19087635, 3.09804822, 3.0170441 , 2.93352736, 2.87209555,
    2.83530726, 2.89029586, 2.88567901, 2.84269377, 2.66708861]
  
  const labels = [4,4.25,4.5,4.75,5,5.25,5.5,5.75,6,6.25,6.5,6.75];
  
  const ctxThree = document.getElementById("plotThree").getContext("2d");
  ctxThree.canvas.height = 100;
  
  gradientPurple = ctxThree.createLinearGradient(0, 25, 0, 300);
  gradientPurple.addColorStop(0, colors.purple.half);
  gradientPurple.addColorStop(0.35, colors.purple.quarter);
  gradientPurple.addColorStop(1, colors.purple.zero);
  
  gradientRed = ctxThree.createLinearGradient(0, 25, 0, 300);
  gradientRed.addColorStop(0, colors.red.half);
  gradientRed.addColorStop(0.35, colors.red.quarter);
  gradientRed.addColorStop(1, colors.red.zero);
  
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
    window.myLine = new Chart(ctxThree, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
  };