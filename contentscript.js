// pokemon showdown keyboard plugin
//
// planned:
//  -tabbing between battles
//  -global disable chat
//      or at least after a tab switch
//  -tier and team selection
//
// unsure:
//  -hovering
//  -forfeiting
//
keymap = {
    96: "toggle_focus",

    48: "home",
    49: "navtab1",
    50: "navtab2",
    51: "navtab3",
    52: "navtab4",
    53: "navtab5",
    61: "search",
    45: "forfeit",

    116: "cancel",
    121: "timer",
    32: "skip_turn",
    91: "enemy_hover",

    113: "first_move",
    119: "second_move",
    101: "third_move",
    114: "fourth_move",
    126: "mega_evo",

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
        if ($("textarea, input").is(":focus")) { $("form.chatbox textarea.textbox").blur().prop('disabled', true);  }
        else { $("form.chatbox textarea.textbox").prop('disabled', false).html("").focus(); }
    },

    "home": function() { $("div.tabbar a[href=\"/\"]")[0].click(); },
    "navtab1": function(k) { $("div.tabbar div.inner ul:nth-child(2) li:nth-child(1) a.button")[0].click(); },
    "navtab2": function(k) { $("div.tabbar div.inner ul:nth-child(2) li:nth-child(2) a.button")[0].click(); },
    "navtab3": function(k) { $("div.tabbar div.inner ul:nth-child(2) li:nth-child(3) a.button")[0].click(); },
    "navtab4": function(k) { $("div.tabbar div.inner ul:nth-child(2) li:nth-child(4) a.button")[0].click(); },
    "navtab5": function(k) { $("div.tabbar div.inner ul:nth-child(2) li:nth-child(5) a.button")[0].click(); },
    "search": function() { $("button[name='search']").click(); },

    "forfeit": function() { 
        $("div.tabbar a.closebutton[href='" + window.location.pathname + "']")[0].click();
        $("button[type=submit]:contains(Forfeit)").click();
    },
    "cancel": function() { $("div.controls button[name='undoChoice']:visible").click(); },
    "skip_turn": function() { $("div.battle-controls button[name='skipTurn']:visible").click(); },
    "timer": function() { $("div.controls button[name='setTimer']:visible").click(); },

    "first_move": function() { $("div.movemenu button:nth-child(1):visible").click(); },
    "second_move": function() { $("div.movemenu button:nth-child(2):visible").click(); },
    "third_move": function() { $("div.movemenu button:nth-child(3):visible").click(); },
    "fourth_move": function() { $("div.movemenu button:nth-child(4):visible").click(); },
    "mega_evo": function() { $("input[name='megaevo']:visible").click(); },

    "first_switch": function() { $("div.switchmenu button:nth-child(1):visible").click(); },
    "second_switch": function() { $("div.switchmenu button:nth-child(2):visible").click(); },
    "third_switch": function() { $("div.switchmenu button:nth-child(3):visible").click(); },
    "fourth_switch": function() { $("div.switchmenu button:nth-child(4):visible").click(); },
    "fifth_switch": function() { $("div.switchmenu button:nth-child(5):visible").click(); },
    "sixth_switch": function() { $("div.switchmenu button:nth-child(6):visible").click(); },

    "enemy_hover": function() { 
        if (state["enemy_hover"]) { state["enemy_hover"] = false; $("div.foehint div:nth-child(1)")[0].mouseout(); }
        else { state["enemy_hover"] = true; $("div.foehint div:nth-child(1)")[0].mouseover(); }
    },
};

state = {
    "text_focus": true,
    "enemy_hover": false
};

$(document).ready(function() {
    bind(keymap, true);
    textListener();
});

function textListener() {
    $(document).on('focus', 'input, textarea', function() { unbind(); bind(keymap_text, false); } );
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
