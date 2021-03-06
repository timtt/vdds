var xValues = [], yValues = [];
var randomDataValuesCount = 10;
var duration = 5000;
var idx = 0;
var intervalRadomData = null;

var chartName = "#chart5minRPM";

$(document).ready(function () {
    for (idx = -300; idx < 0; idx++) {
        xValues.push(idx);
        yValues.push(0);
    }

    $(chartName).wijlinechart({
        showChartLabels: false,
        width: 670,
        height: 380,
        shadow: false,
        animation: {
            enabled: false
        },
        legend: { visible: false },
        hint: { enable: false },
        axis:
        {
            y: { min: 0, max: 10, autoMin:false, autoMax: false }
        },
        seriesList: [
            {
                data: {
                    x: xValues,
                    y: yValues
                },
                markers: {
                    visible: true,
                    type: "circle"
                }
            }
        ],
        seriesStyles: [{ "stroke-width": "3", stroke: "#00a6dd"}]
    });

    intervalRadomData = setInterval(function () {
        $(chartName).wijlinechart("addSeriesPoint", 0, { x: idx++, y: createRandomValue() }, true);
        $(chartName).wijlinechart("redraw", 0);
    }, duration);
});


function createRandomValue() {
    var val = Math.round(Math.random() * 100);
    return val;
}

function dispose() {
    if (intervalRadomData) {
        clearInterval(intervalRadomData);
        intervalRadomData = null;
    }
}
