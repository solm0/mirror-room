navigator.mediaDevices.getUserMedia({
    video: {
        width: { exact: 1 },
        height: { exact: 1 }
    }
})
.then(function (stream) {
    // Set stream for the first video element
    document.getElementById('webcam1').srcObject = stream.clone();

    // Set stream for the second video element
    document.getElementById('webcam2').srcObject = stream.clone();

    // Set stream for the third video element
    document.getElementById('webcam3').srcObject = stream.clone();
})

.catch(function (error) {
    console.error('Error accessing webcam:', error);
});

