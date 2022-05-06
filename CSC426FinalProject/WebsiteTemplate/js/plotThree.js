var ctxThree = document.getElementById('plotThree').getContext('2d');

new Chart(document.getElementById("plotThree"), {
    type: 'bar',
    data: {
        labels: ["2", "3", "4", "5", "6", "8", "10", "12", "16"],
        datasets: [
            {
                label: "Major Domestic",
                backgroundColor: 'red',
                data: [0, 32.24, 29.20, 15.74, 15.99, 13.34, 10.84, 0, 0]
            }, {
                label: "Major Import",
                backgroundColor: 'blue',
                data: [18.95, 30.03, 22.68, 18.16, 17.31, 13.98, 12.29, 11.11, 8.35]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'MPG by Cylinders'
        }
    }
});

window.onload = function () {
    window.myLine = new Chart(ctxThree, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
};