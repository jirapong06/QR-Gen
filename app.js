var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 300,
    height : 300
});

function makeCode () {		
     elText = document.getElementById("text");

    if (!elText.value) {
        alert("กรุณากรอก URL");
        elText.focus();
        return;
    }

    if (elText.value.startsWith("https://")) {
    } else if (elText.value.startsWith("http://")){
    } else {
        elText.value = "https://"+elText.value
    }

    qrcode.makeCode(elText.value);
}

$("#genBtn").click(function() {
    makeCode();
    $("#qrcode").attr("display","block")
})