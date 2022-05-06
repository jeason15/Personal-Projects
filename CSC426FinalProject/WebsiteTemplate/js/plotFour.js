

var ctxFour = document.getElementById('plotFour').getContext('2d');

new Chart(document.getElementById("plotFour"), {
    type: 'doughnut',
    data: {
        labels: ['Toyota', 'Ford', 'Chevrolet', 'Honda', 'Nissan', 'Jeep', 'Hyundai', 'Kia', 'Ram', 'Subaru'],
        datasets: [
            {
                label: "Number of Models",
                backgroundColor: ['rgba(235,10,30)', 'rgba(19,81,216)', 'rgba(209,173,87)', 'rgba(204,0,0)',
                    'rgba(0,0,0)', 'rgba(72,95,43)', 'rgba(0,48,130)', 'rgba(126,128,131)', 'rgba(151,38,38)', 'rgba(0,72,144)'],
                data: [1933099, 1804824, 1422031, 1308476, 919090, 768713, 726715, 677494, 647329, 598480]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Vehicle Sales 2022 by Manufacturer (top 10)"
        }
    }
});


window.onload = function () {
    window.myLine = new Chart(ctxFour, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
};