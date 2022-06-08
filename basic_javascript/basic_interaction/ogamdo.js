var num = 1;
var poem = "13인의아해가도로로질주하오.<br>(길은막다른골목길이적당하오.)<br><br>";

while (num < 14) {
    poem = poem + "제" + num + "의아해가무섭다고그리오.<br>"
    
    if(num == 10) {
        poem = poem + "<br>";
    }
    
    if(num == 13) {
        poem = poem + num + "인의아해는무서운아해와무서워하는아해와그렇게뿐이모였소.<br>";
    }
    
    num++;
}

poem = poem + "(다른사정은없는것이차라리나았소)";

document.write(poem);