var drink = "비타민 워터";
var lyrics = "";
var cans = 99;

lyrics = lyrics + "자판기에 " + drink +"가 " + cans + "캔 있습니다.<br>";

while (cans > 0) {
    lyrics = lyrics + cans + "캔 남은 " + drink + "<br>";
    lyrics = lyrics + "하나를 뽑아서 나눠주면,<br>";
    
    if (cans > 1) {
        lyrics = lyrics + "자판기에 " + drink + "가 " + (cans - 1) + "캔 있습니다.<br>";
    } else {
        lyrics = lyrics + "맙소사! 자판기에 " + drink + "가 바닥났군요!<br>";
    }
    
    cans = cans - 1;
}

document.write(lyrics);