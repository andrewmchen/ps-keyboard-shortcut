// pokemon showdown keyboard plugin
//

$(document).ready(function() {
    bind();
}

function bind() {
    console.log("extension loaded");
    $(document).keyup(function(e) {
        if (e.keyCode == 81) {
            $("div.movemenu button:nth-child(1)").click();
        }
        if (e.keyCode == 87) {
            $("div.movemenu button:nth-child(2)").click();
        }
        if (e.keyCode == 69) {
            $("div.movemenu button:nth-child(3)").click();
        }
        if (e.keyCode == 82) {
            $("div.movemenu button:nth-child(4)").click();
        }
    })
}
