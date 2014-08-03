var freqDiff = 100;

function increaseFrequency() {
    document.getElementById("frequencyInput").value = parseInt(document.getElementById("frequencyInput").value.slice(0, -2)) + freqDiff + "ms";
}

function decreaseFrequency() {
    document.getElementById("frequencyInput").value = parseInt(document.getElementById("frequencyInput").value.slice(0, -2)) - freqDiff + "ms";
}