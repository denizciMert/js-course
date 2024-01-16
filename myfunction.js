function sayiUret(ustLimit =49){
    return Math.ceil(Math.random()* ustLimit)
}

sayiUret()

var sayi1= sayiUret()
var sayi2= sayiUret()
var sayi3= sayiUret()
var sayi4= sayiUret()
var sayi5= sayiUret()
var sayi6= sayiUret()

console.log("Kolon: "+sayi1+", "+sayi2+", "+sayi3+", "+sayi4+", "+sayi5+", "+sayi6)

function sayiUret1(ustLimit =49, sayiAdet =6){
    
    for (var i = 1; i<= sayiAdet; i++) {
        console.log(Math.ceil(Math.random()* ustLimit));
        
    }
}

sayiUret1()

