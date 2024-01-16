var not=49

if (not<0 || not>100) {
    console.log("Geçersiz Girdi!")
} else if(not>=50){
    console.log("Geçtiniz!")
} else if(not>=30){
    console.log("Şartlı Geçtiniz!")
}else {
    console.log("Kaldınız!")
}

var sayı1=4
var sayı2=5
var sayı3=4

if(sayı1==sayı2&&sayı1==sayı3){
    console.log("Sayılar eşit.")
}else if(sayı1==sayı2||sayı1==sayı3){
    console.log("Sayılardan biri eşit değil.")
}else{
    console.log("Sayılar eşit değil.")
}