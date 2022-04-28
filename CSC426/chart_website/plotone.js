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
  
  const other = [16.61904762, 19.3, 15.06666667, 15.3125, 16.1875,
         24.06666667, 25.31818182, 18.26415094, 17.04411765, 19.22727273,
         24.21052632, 16.83870968, 22.75      , 22.75      , 19.        ,
         19.        , 17.        , 15.        , 18.        , 13.        ,
         13.        , 13.        , 11.        , 13.        , 14.        ,
         14.25      , 43.57142857, 50.33333333, 28.66666667, 14.        ,
         43.5       , 23.375     , 21.23076923, 17.41176471, 20.94736842,
         28.38095238, 51.74074074, 19.        ]
  
  const labels = [1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,
    1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,
    2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
    2015,2016,2017,2018,2019,2020,2021,2022,2023];
  
  const ctx = document.getElementById("canvas").getContext("2d");
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
        display: false
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
  