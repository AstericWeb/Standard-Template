// var decrypted1 = document.getElementById("decoded1");
// var encrypted1 = document.getElementById("encoded1");
// var decrypted2 = document.getElementById("decoded2");
// var encrypted2 = document.getElementById("encoded2");
// var decrypted3 = document.getElementById("decoded3");
// var encrypted3 = document.getElementById("encoded3");

// for (var i = 0; i < 3; i++) {
//     startdecrypt(decrypted1, encrypted1)
//     startdecrypt(decrypted2, encrypted2)
//     startdecrypt(decrypted3, encrypted3)
// } 

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
    },0.2);
}