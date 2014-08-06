var freqDiff = 100;
var plotUpdateDiff = 100;
var dataPointDiff = 5;

//X padding for plot
var xPadding = 5;
var yPadding = 10;

//Functions to change the Frequency of data aquisition
function increaseFrequency() {
    document.getElementById("frequencyInput").value = parseInt(document.getElementById("frequencyInput").value.slice(0, -2)) + freqDiff + "ms";
}

function decreaseFrequency() {
    document.getElementById("frequencyInput").value = parseInt(document.getElementById("frequencyInput").value.slice(0, -2)) - freqDiff + "ms";
}
//Freguency of plot update
function increasePlotUpdate() {
    document.getElementById("plotUpdateInput").value = parseInt(document.getElementById("plotUpdateInput").value.slice(0, -2)) + freqDiff + "ms";
}

function decreasePlotUpdate() {
    document.getElementById("plotUpdateInput").value = parseInt(document.getElementById("plotUpdateInput").value.slice(0, -2)) - freqDiff + "ms";
}

//Number of points plotted
function increaseDataPoints() {
    document.getElementById("dataPointCount").value = parseInt(document.getElementById("dataPointCount").value.slice(0, -2)) + dataPointDiff + " points";
}

function decreaseDataPoints() {
    document.getElementById("dataPointCount").value = parseInt(document.getElementById("dataPointCount").value.slice(0, -7)) - dataPointDiff + " points";
}

function addDataToTable(timeStamp, Xacceleration, Yacceleration, Zacceleration) {
    var table = document.getElementById("resultsTable");
    var row = document.createElement('tr');
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    cell1.align = "center";
    cell2.align = "center";
    cell3.align = "center";
    cell4.align = "center";
    cell1.innerHTML = timeStamp;
    cell2.innerHTML = Xacceleration;
    cell3.innerHTML = Yacceleration;
    cell4.innerHTML = Zacceleration;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);
}



function generateTestData() {
    // generate random graphing data for our test
    var x = Math.floor((Math.random() * 50) + 10);
    var data = [];
    for (var i = 0; i < x; i++) {
        var tmp = Math.floor((Math.random() * 20) + 1) - 10;
        data[i] = (tmp > 30) ? 30 : tmp; /* aiming for somewhere between -y and y */
    }
    return data;
}

function clearCanvas() {
    var canvas = document.getElementById('chart');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}

function plotGraph() {
    var dataX = generateTestData();
    var dataY = generateTestData();
    var dataZ = generateTestData();

    var tempsX = [50, 95, 85, 78, 92, 95, 79, 10, 5, 3, 4, 2, 1, 0, 100];
    var tempsY = [70, 20, 55, 45, 45, 65, 90, 5];
    var tempsZ = [20, 30, 40, 20, 30, 40];

    var canvas = document.getElementById('chart');
    var context = canvas.getContext('2d');
    HEIGHT = canvas.height;
    WIDTH = canvas.width;
    context.lineCap = 'round';
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(0, HEIGHT - (tempsX[0]));
    j = 0;
    xDiffPlot = Math.floor(WIDTH / tempsX.length);
    for (var i in tempsX) {
        context.lineTo(j * xDiffPlot, HEIGHT - (tempsX[j]));
        context.stroke();
        j++;
    }

    context.beginPath();
    context.strokeStyle = "green";
    context.moveTo(0, HEIGHT - (tempsY[0]));
    j = 0;
    xDiffPlot = Math.floor(WIDTH / tempsY.length);
    for (var i in tempsY) {
        context.lineTo(j * xDiffPlot, HEIGHT - (tempsY[j]));
        context.stroke();
        j++;
    }

    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(0, HEIGHT - (tempsZ[0]));
    j = 0;
    xDiffPlot = Math.floor(WIDTH / tempsZ.length);
    for (var i in tempsZ) {
        context.lineTo(j * xDiffPlot, HEIGHT - (tempsZ[j]));
        context.stroke();
        j++;
    }
}