const qrCode = new Html5Qrcode("qr-reader");

const onScanSuccess = (decodedText) => {
  const resultBox = document.getElementById("result-box");
  const resultText = document.getElementById("result-text");

  resultText.textContent = decodedText;
  resultBox.style.display = "block";
};

const onScanFailure = () => {
  // Optional: console.log("Scan failed");
};

qrCode.start(
  { facingMode: "environment" }, // Use back camera
  { fps: 10, qrbox: 250 },
  onScanSuccess,
  onScanFailure
);