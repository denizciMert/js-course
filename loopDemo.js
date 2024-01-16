function sayiUret(ustLimit = 49, sayiAdet = 6, kolonAdet = 8) {

    for (var i = 1; i <= kolonAdet; i++) {
        console.log(i + ". Kolon Sayıları:")
        
        for (var j = 1; j <= sayiAdet; j++) {
            console.log(Math.ceil(Math.random() * ustLimit));
        }
    }
}

sayiUret(99,9,3)

//Dinamik sayısal loto