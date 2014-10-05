// pokemon showdown keyboard plugin
//

actions = 
{
    "first_move": function(){$("div.movemenu button:nth-child(1)").click();},
    "second_move": function(){$("div.movemenu button:nth-child(2)").click();},
    "third_move": function(){$("div.movemenu button:nth-child(3)").click();},
    "fourth_move": function(){$("div.movemenu button:nth-child(4)").click();}
}
$("*").keyup(function(e) {
    console.log(e);
    if (e.keyCode == 81) {
        actions["first_move"]()
    }
    if (e.keyCode == 87) {
        actions["second_move"]()
    }
    if (e.keyCode == 69) {
        actions["third_move"]()
    }
    if (e.keyCode == 82) {
        actions["fourth_move"]()
    }
})
