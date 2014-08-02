function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
        'Acceleration Y: ' + acceleration.y + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' +
        'Timestamp: ' + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};



function setUpAccelerometer() {
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}