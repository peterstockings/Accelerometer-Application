var freqDiff = 100;
var plotUpdateDiff = 100;
var dataPointDiff = 5;

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

/* graphing data might look something like this... 
  var data = {
    plot: [0,10,-10,20,-11,5,-20,11,-3]
  };
  */

/* in this example we'll generate our test data 
     randomly by calling generateTestData() which 
     will return a random length array containing 
     random values between |y| and -|y|
  */

function generateTestData() {
    // generate random graphing data for our test
    var x = Math.floor((Math.random() * 50) + 10);
    var data = [];
    for (var i = 0; i < x; i++) {
        data[i] = {};
        data[i].date = i;
        var tmp = Math.floor((Math.random() * 20) + 1) - 10;
        data[i].plot = (tmp > 30) ? 30 : tmp; /* aiming for somewhere between -y and y */
    }
    return data;
}

function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}

function plotGraph(args) {
    var chartEl = args['chartEl'];
    var data = args['data'];

    var canvas = document.getElementById(chartEl);
    var context = canvas.getContext('2d');
    if (canvas && canvas.getContext) {

        var x = 10; /* start inside the grid so we can show the line endings */
        y = (canvas.height / 2);
        clearCanvas(context, canvas);
        context.beginPath();
        context.moveTo(x, y);

        var l = data.length;
        if (!l) return; /* nothing to plot */
        var xx = (canvas.width - x * 2) / l; /* scale horizontal plot based on the length of the data */
        /* note: canvas.width-x*2 places the end of the line the same distance from the right 
            hand-limit as the starting point of x...so we can see the line cap. */

        var str = '';
        for (var i = 0; i < l; i++) {
            var yy = data[i].plot;
            x += xx;
            y += yy;
            context.lineTo(x, y);

            /* collect the data so we can show the user what we're plotting */
            str += '' + (i > 0 ? ',' : '') + data[i].plot
        }

        /* pick a random color and line width for the graph plotter */
        var colrs = ['#ff0000', '#00ff00', '#0000ff', 'rgb(50,50,50)', 'rgb(200,200,200)', 'purple', 'orange', 'black'];
        var colr = colrs[Math.floor(Math.random() * colrs.length)];
        var w = Math.floor(Math.random() * 10) + 1;

        context.lineCap = 'round';
        context.lineWidth = w;
        context.strokeStyle = colr;
        context.stroke();

    } else {
        /* unsupported browser */
        alert("Couldn't get a reference to the HTML 5 canvas. Your browser doesn't appear to support this page.");
    }
};