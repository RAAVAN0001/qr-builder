
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");
var newValue = "HERE YOU GO :)";
var oldValue = document.getElementById("heading");

imgBox.style.display = "none";

function generatorQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        imgBox.style.display = "block";

    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}


qrText.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        generatorQR();
        changeHeading();
    }
    else if (event.key === "Backspace" && qrText.value === "") {
        document.getElementById("heading").innerHTML = "ENTER YOUR TEXT";
    }
});



function changeHeading() {
    if (oldValue) {
        oldValue.innerHTML = newValue;
    }

}
