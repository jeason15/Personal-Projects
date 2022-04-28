var ctx = document.getElementById("chart").getContext("2d");
var ctx2 = document.getElementById("chart2").getContext("2d");

var colors = {
  Oil: "black",
  Coal: "gray",
  "Fossil Fuels": "slategray",
  Electricity: "blue",
  Energy: "orange"
};

// the y-order of nodes, smaller = higher
var priority = {
  Oil: 1,
  'Narural Gas': 2,
  Coal: 3,
  'Fossil Fuels': 1,
  Electricity: 2,
  Energy: 1
};

var labels = {
  Oil: 'black gold (label changed)'
}

function getColor(name) {
  return colors[name] || "green";
}

var chart = new Chart(ctx, {
  type: "sankey",
  data: {
    datasets: [
      {
        data: [
          { from: "Oil", to: "Fossil Fuels", flow: 15 },
          { from: "Natural Gas", to: "Fossil Fuels", flow: 20 },
          { from: "Coal", to: "Fossil Fuels", flow: 25 },
          { from: "Coal", to: "Electricity", flow: 25 },
          { from: "Fossil Fuels", to: "Energy", flow: 60 },
          { from: "Electricity", to: "Energy", flow: 25 }
        ],
        priority,
        labels,
        colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
        borderWidth: 2,
        borderColor: 'black'
      }
    ]
  }
});

var colors2 = ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'];
var assigned = {};
function c2(name) {
  return assigned[name] || (assigned[name] = colors2[Object.keys(assigned).length % colors2.length]);
}
var chart2 = new Chart(ctx2, {
  type: "sankey",
  data: {
    datasets: [
      {
        data: [
          { from: "Brazil", to: "Portugal", flow: 5 },
          { from: "Brazil", to: "France", flow: 1 },
          { from: "Brazil", to: "Spain", flow: 1 },
          { from: "Morocco", to: "Japan", flow: 3 }
        ],
        colorFrom: (c) => c2(c.dataset.data[c.dataIndex].from),
        colorTo: (c) => c2(c.dataset.data[c.dataIndex].to),
        borderWidth: 0
      }
    ]
  }
});
