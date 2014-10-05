// pokemon showdown keyboard plugin

keymap = {
    96: "toggle_focus",

    126: "forfeit",

    116: "cancel",
    121: "timer",
    219: "enemy_hover",

    113: "first_move",
    119: "second_move",
    101: "third_move",
    114: "fourth_move",
    109: "mega_evo",

    97: "first_switch",
    115: "second_switch",
    100: "third_switch",
    102: "fourth_switch",
    103: "fifth_switch",
    104: "sixth_switch"
};

keymap_text = {
    96: "toggle_focus",
};

actions = {
    "toggle_focus": function() {
        if ($("textarea, input").is(":focus")) { $("form.chatbox textarea.textbox").blur(); }
        else { $("form.chatbox textarea.textbox").html("").focus(); }
    },

    "forfeit": function() { $("div.tabbar a[href='" + window.location.pathname + "']").click(); },

    "cancel": function() { $("div.controls button[name='undoChoice']").click(); },
    "timer": function() { $("div.controls button[name='setTimer']").click(); },

    "first_move": function() { $("div.movemenu button:nth-child(1)").click(); },
    "second_move": function() { $("div.movemenu button:nth-child(2)").click(); },
    "third_move": function() { $("div.movemenu button:nth-child(3)").click(); },
    "fourth_move": function() { $("div.movemenu button:nth-child(4)").click(); },
    "mega_evo": function() { $("input[name='megaevo']").click(); },

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
    "text_focus": true,
    "enemy_hover": false
};

$(document).ready(function() {
    console.log("plugin loaded");
    textListener();
});

function textListener() {
    $(document).on('focus', 'input, textarea', function() { console.log("focused"); unbind(); bind(keymap_text, false); } );
    $(document).on('blur', 'input, textarea', function() { unbind(); bind(keymap, true); } );
};

function urlListener() {
    $(window).hashchange( function() {
        if (window.location.path.substring(1, 7) == "battle") true;
    });
}

function bind(kmap, ignore) {
    $(document).on('keypress', 'body', function(e) {
        if (ignore) e.preventDefault();
        var cmd = kmap[e.keyCode];
        console.log(cmd);
        if (cmd) actions[cmd]();
    });
};

function unbind() {
    $(document).off('keypress', 'body');
};
