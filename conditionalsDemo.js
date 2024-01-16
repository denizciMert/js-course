var sayı11=29999
var sayı12=3033
var sayı13=211
// en büyük sayıyı bul

var enBuyuk1= sayı11
if (enBuyuk1<sayı12) {
    enBuyuk1=sayı12
}if(enBuyuk1<sayı13){
    enBuyuk1=sayı13
}

console.log("En büyük sayı: "+enBuyuk1)

function enBuyukSayı(sayı1,sayı2,sayı3){
    var enBuyuk= sayı1
if (enBuyuk<sayı2) {
    enBuyuk=sayı2
}if(enBuyuk<sayı3){
    enBuyuk=sayı3
}
        console.log("En büyük sayı: "+ enBuyuk)
}

enBuyukSayı(11100,2022,333)