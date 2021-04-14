var decrypted1 = document.getElementById("decoded1");
var encrypted1 = document.getElementById("encoded1");

startdecrypt(decrypted1, encrypted1)
var intervalId = window.setInterval(function(){
    startdecrypt(decrypted1, encrypted1)
}, 9000);


function startdecrypt(decrypted, encrypted) {
    var originalText = decrypted.textContent.split('').reverse();
    var decryptedText = "";
    var i = 0;

    decrypted.textContent = "";

    var shuffleInterval = setInterval(function(){
        var shuffledText = '';
        var j = originalText.length;
        while(j--) shuffledText += String.fromCharCode((Math.random()*94+33) | 0);

        if(i++ % 10 === 0) decryptedText += originalText.pop();

        decrypted.textContent = decryptedText;
        encrypted.textContent = shuffledText;

        if(!shuffledText.length) clearInterval(shuffleInterval);
    },45);
}
