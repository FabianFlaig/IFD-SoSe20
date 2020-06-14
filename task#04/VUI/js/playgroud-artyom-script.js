window.addEventListener("load", function () {
    var artyom = new Artyom();

    artyom.addCommands({
        indexes: ["Hallo *"],
        smart: true,
        action: function (i, wildcard) {
            artyom.say("Hallo");
        }
    });

    artyom.addCommands({
        indexes: ["Hallo"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Hallo ");
        }
    });

    artyom.addCommands({
        indexes: ["Wie lautet dein Name"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Mein Name is mia");
        }
    });

    artyom.addCommands({
        indexes: ["Hey mia "],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("hallo meister");
        }
    });

    artyom.addCommands({
        indexes: ["Wie sind die Stückzahlen heute"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die stückzahl heute beträgt 2940");
        }
    });

    artyom.addCommands({
        indexes: ["Wie waren die Stückzahlen gestern"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die stückzahl von gestern beträgt 5230");
        }
    });

    
    artyom.addCommands({
        indexes: ["Wie waren die Stückzahlen letzte woche"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die stückzahl von letzter woche beträgt 25840");
        }
    });

    artyom.addCommands({
        indexes: ["Wie waren die Stückzahlen letztem monat"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die stückzahl von letztem monat beträgt 836704");
        }
    });

    artyom.addCommands({
        indexes: ["Wie hoch ist der Ausschuss heute"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Der Ausschuss heute beträgt 73");
        }
    });

    artyom.addCommands({
        indexes: ["Wie hoch war der ausschuss gestern"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Der ausschuss von gestern beträgt 30");
        }
    });

    
    artyom.addCommands({
        indexes: ["Wie hoch war der auschuss letzte woche"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Der ausschuss von letzter woche beträgt 275");
        }
    });

    artyom.addCommands({
        indexes: ["Wie hoch war der ausschuss von letztem monat"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Der ausschuss von letztem monat beträgt 1275");
        }
    });

    artyom.addCommands({
        indexes: ["Wie viele Krankmeldungen gibt es heute"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("heute gibt es keine krankmeldungen");
        }
    });

    artyom.addCommands({
        indexes: ["Wie viele krankmeldungen gab es gestern"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("gestern gab es keine krankmeldungen");
        }
    });

    artyom.addCommands({
        indexes: ["Wie viele krankmeldungen gab es letzte woche"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("letzte woche gab es 2 krankmeldungen");
        }
    });

    artyom.addCommands({
        indexes: ["Wie viele krankmeldungen gab es letztes monat"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("letzten monat gab es 6 krankmeldungen");
        }
    });
    artyom.addCommands({
        indexes: ["Wie hoch sind die verschleißkosten heute"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die verschleißkosten heute betragen 152 euro");
        }
    });

    artyom.addCommands({
        indexes: ["Wie hoch waren die verschleißkosten heute"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die verschleißkosten gestern betragen 145 euro");
        }
    });

    artyom.addCommands({
        indexes: ["Wie hoch waren die verschleißkosten letzte woche"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die verschleißkosten letzte woche betragen 837 euro");
        }
    });

    artyom.addCommands({
        indexes: ["Wie hoch waren die verschleißkosten letzten monat"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Die verschleißkosten letzten monat betragen 5287 euro");
        }
    });

    artyom.addCommands({
        indexes: ["sende das an johnny"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("ok möchtest du noch eine nachricht hinzufügen?");
        }
    });

    artyom.addCommands({
        indexes: ["sende das an sabine"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("ok möchtest du noch eine nachricht hinzufügen?");
        }
    });

    artyom.addCommands({
        indexes: ["nein"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("ok nachricht gesendet");
        }
    });

    artyom.addCommands({
        indexes: ["ja *"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("ok nachricht gesendet");
        }
    });


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map