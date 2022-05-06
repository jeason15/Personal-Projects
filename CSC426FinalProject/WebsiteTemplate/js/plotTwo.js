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
const previousY = (ctxTwo) => ctxTwo.index === 0 ? ctxTwo.chart.scales.y.getPixelForValue(
    100) : ctxTwo.chart.getDatasetMeta(ctxTwo.datasetIndex).data[ctxTwo.index - 1].getProps(['y'],
        true).y;


var ctxTwo = document.getElementById("plottwo").getContext("2d");
var myChart = new Chart(ctxTwo, {
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
            },
            deferred: {
                xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
              }
        },
        animation: {
            x: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctxTwo) {
                    if (ctxTwo.type !== 'data' || ctxTwo.xStarted) {
                        return 0;
                    }
                    ctxTwo.xStarted = true;
                    return ctxTwo.index * delayBetweenPoints;
                }
            },
            y: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctxTwo) {
                    if (ctxTwo.type !== 'data' || ctxTwo.yStarted) {
                        return 0;
                    }
                    ctxTwo.yStarted = true;
                    return ctxTwo.index * delayBetweenPoints;
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