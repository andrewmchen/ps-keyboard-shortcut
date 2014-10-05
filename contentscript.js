// pokemon showdown keyboard plugin

actions = {
    "cancel": function() { $("div.controls button[name='undoChoice']").click(); },
    "timer": function() { $("div.controls button[name='setTimer']").click(); },

    "first_move": function() { $("div.movemenu button:nth-child(1)").click(); },
    "second_move": function() { $("div.movemenu button:nth-child(2)").click(); },
    "third_move": function() { $("div.movemenu button:nth-child(3)").click(); },
    "fourth_move": function() { $("div.movemenu button:nth-child(4)").click(); },

    "first_switch": function() { $("div.switchmenu button:nth-child(1)").click(); },
    "second_switch": function() { $("div.switchmenu button:nth-child(2)").click(); },
    "third_switch": function() { $("div.switchmenu button:nth-child(3)").click(); },
    "fourth_switch": function() { $("div.switchmenu button:nth-child(4)").click(); },
    "fifth_switch": function() { $("div.switchmenu button:nth-child(5)").click(); },
    "sixth_switch": function() { $("div.switchmenu button:nth-child(6)").click(); },

    "enemy_hover": function() { 
        if (state["enemy_hover"]) { state["enemy_hover"] = false; $("div.foehint div:nth-child(1)").mouseout(); }
        else { state["enemy_hover"] = true; $("div.foehint div:nth-child(1)").mouseover(); }
    },
};

state = {
    "enemy_hover": false
};

$(document).ready(function() {
    bind();
    textListener();
});

function textListener() {
    $(document).on('focus', 'textarea', function() { console.log("denis"); unbind(); } );
    $(document).on('blur', 'textarea', function() { bind(); } );
};

function bind() {
    $(document).on('keyup', 'body', function(e) {
        if (e.keyCode == 84) actions["cancel"]();
        else if (e.keyCode == 89) actions["timer"]();
        else if (e.keyCode == 219) actions["enemy_hover"]();
        
        else if (e.keyCode == 81) actions["first_move"]();
        else if (e.keyCode == 87) actions["second_move"]();
        else if (e.keyCode == 69) actions["third_move"]();
        else if (e.keyCode == 82) actions["fourth_move"]();
        
        else if (e.keyCode == 65) actions["first_switch"]();
        else if (e.keyCode == 83) actions["second_switch"]();
        else if (e.keyCode == 68) actions["third_switch"]();
        else if (e.keyCode == 70) actions["fourth_switch"]();
        else if (e.keyCode == 71) actions["fifth_switch"]();
        else if (e.keyCode == 72) actions["sixth_switch"]();
    });
};

function unbind() {
    $(document).off('keyup');
};
