var calOptions = {
    defaultView: "week",
    taskView: false,
    template: {
        monthDayname: function (dayname) {
            return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        }
    },
    week: {
        startDayOfWeek: 1,
        daynames: ["sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        hourStart: 10,
        hourEnd: 24,
        timezones: [{
            timezoneOffset: null,
            displayLabel: "Zeitzone Browser",
            isReadOnly: true,
            usageStatistics: false
        }]
    },
    useDetailPopup: true,
    theme: {
        'common.backgroundColor': 'rgba(0,0,0,0.25)'
        /*
        'common.border': '1px solid #2a3137',
        'common.backgroundColor': 'rgba(0,0,0,0.25)',
        'week.timegridLeft.backgroundColor': 'rgba(255,255,225,0.25)',
        'week.dayname.borderTop': 'inherit',
        'week.dayname.borderBottom': 'inherit',
        'week.dayname.borderLeft': 'inherit',
        'week.vpanelSplitter.border': 'inherit',
        'week.daygrid.borderRight': 'inherit',
        'week.daygridLeft.borderRight': 'inherit',
        'week.timegridLeft.borderRight': 'inherit',
        'week.timegridHalfHour.borderBottom': 'inherit',
        'week.timegridHorizontalLine.borderBottom': 'inherit',*/
    },
    template: {
        popupDetailBody: function(schedule) {
            htmlResult = "";
            if (schedule.raw.ignore) {
                htmlResult += "<p class='event-ignore'>Kein YouTube Stream</p>"
            }
            if (schedule.raw.location) {
                htmlResult += "<a href='" + schedule.raw.location + "'>Zum Livestream</a><br>"
            }
            htmlResult += schedule.body;

            return htmlResult;
        }
    }
};
var calendar1 = new tui.Calendar('#calendar-1', calOptions);
var calendar2 = new tui.Calendar('#calendar-2', calOptions);
calendar2.setOptions({ week: { workweek: true } });

calendar1.createSchedules([
    
        {
            id: "76omfffcqnl6p81mi8j472875k",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Begrüßungsveranstaltung",
            body: `Hier wollen wir vor Allem einfach mal "Hallo" sagen. Außerdem werden wir euch einen groben Überblick über die kommenden zwei Wochen geben. Auf den Stream folgt dann noch ein Kennenlernen auf unserem Discord.`,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/QrXnnUp_Gs0"
                
            },
            start: "2020-10-20T11:00:00+02:00",
            end: "2020-10-20T11:45:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201020T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-20T14:00:00+02:00",
            end: "2020-10-20T16:00:00+02:00"
        },
    
        {
            id: "7ttukdrp38a6q7q3sjhqf242nu",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Spiele &amp; Interaktion",
            body: `Ein gemütlicher Stream um gemütlich etwas zu spielen um dabei etwas mit euch zu interagieren. Dieser Stream reiht sich dabei in die Reihe an "Kennenlern-Streams" ein, die wir als sinnvoll erachten um sowohl euch an die O-Phase zu gewöhnen als auch uns an die Streams.
Gemütlich! `,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-20T16:00:00+02:00",
            end: "2020-10-20T18:00:00+02:00"
        },
    
        {
            id: "67guuh8a6ki2vq2u79cuv1b5ur",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Minecraft Server Launch",
            body: `Benedikt weiht den MC Server ein.`,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/shvZKZfnwNA"
                
            },
            start: "2020-10-20T18:00:00+02:00",
            end: "2020-10-20T19:30:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201020T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-20T20:00:00+02:00",
            end: "2020-10-20T21:00:00+02:00"
        },
    
        {
            id: "2psn83p110vepa89crbv6boer0",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Einführung Programmiersprachen (FS)",
            body: `
Kurzguide zu Programmiersprachen im (Info-)Studium
Java, C, Haskell und Konsorten
Viele sinnvolle und einige unnütze Fakten 
 `,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.com/blob/ws2021/ophase-1603214880_2020-10-20.mp4"
                
            },
            start: "2020-10-20T20:00:00+02:00",
            end: "2020-10-20T21:00:00+02:00"
        },
    
        {
            id: "38jpv262qraegpbbsnlg2uecpn",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "How to 1. Semester",
            body: `Wo bin ich hier gelandet? Was muss ich alles beachten? Wer erinnert mich an Fristen? Wann macht die Mensa auf? Diese und weitere Fragen schwirren vermutlich gerade in euren Köpfen herum. Wir versuchen sie zu beantworten und, wie sonst in der O-Phase eigentlich auch, euch einen möglichst Problem- und Sorgenfreien Einstieg in das Abenteuer Studium zu geben. `,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/x51nSrRvszc"
                
            },
            start: "2020-10-21T10:00:00+02:00",
            end: "2020-10-21T12:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201021T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-21T14:00:00+02:00",
            end: "2020-10-21T16:00:00+02:00"
        },
    
        {
            id: "7419ba81bo8co7j7cbascikskm",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Ankündigung O-Rallye (FS)",
            body: ``,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-21T16:00:00+02:00",
            end: "2020-10-21T16:30:00+02:00"
        },
    
        {
            id: "5a0pn04pdtc4rcohof438emhk9",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Lasagne kochen",
            body: `Während eurem Studium werdet ihr eines schnell merken: Ihr habt regelmäßig Hunger. Um dem entgegenzukommen gibt es natürlich viele Möglichkeiten, aber die langfristig gesündeste und günstigste ist vermutlich selbst zu kochen. Vor Allem wenn man sich dabei mit Leuten zusammentun kann.
Lange Rede, kurzer Sinn: Wie der Titel schon sagt werden wir in diesem Stream versuchen (!) Lasagne zu kochen.`,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/IZ0I452orLY"
                
            },
            start: "2020-10-21T17:00:00+02:00",
            end: "2020-10-21T20:00:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201021T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-21T20:00:00+02:00",
            end: "2020-10-21T21:00:00+02:00"
        },
    
        {
            id: "3dggm78jadhatac7h2283nghna",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Vorstellung PSE-Projekte (FS)",
            body: ``,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-21T20:00:00+02:00",
            end: "2020-10-21T21:30:00+02:00"
        },
    
        {
            id: "01oaf7tui5j4mdv9csuv1csjf5",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Uni Orga Q&amp;A (Prüfungen etc.)",
            body: `Da euch wahrscheinlich schon brennend interessiert, wie das alles im Studium abläuft und wie sich der Alltag von der Schule unterscheidet, versuchen wir euch in diesem Stream möglichst professionell wirkende und im besten Fall auch hilfreiche Antworten zu geben. DIese basieren auf unseren zum Teil Jahre langen Erfahrungen, die mal mehr und mal weniger erfolgreich dem Studium zugewandt sind.`,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/P6EKiWgG-UA"
                
            },
            start: "2020-10-22T10:00:00+02:00",
            end: "2020-10-22T12:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201022T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-22T14:00:00+02:00",
            end: "2020-10-22T16:00:00+02:00"
        },
    
        {
            id: "472o6uf8jec53c73jcduuijfq8",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Talk: Worsch (GBI)",
            body: `<span><span>Wir reden mit Dr. Thomas Worsch.</span></span><br><br>Er wird auch dieses Jahr eure Vorlesung "Grundbegriffe der Informatik" (GBI) halten. Als der Einstieg in die Informatik auf Universitätsniveau, machen wir mit Herrn Worsch die große "Büchse der Pandora" des Informatikstudiums auf. Wir reden darüber was Informatik denn eigentlich überhaupt bedeutet. Was GBI für einen Grundstein für das Studium legt und wie es dies macht. Dazu <span>möchten wir noch k</span>onkret einige Fragen aufklären die sich sonst erst mit dem ersten Semester ergeben. Dazu gehört zum Beispiel:<br><ul><li>&nbsp; Was ist in der Uni schwerer als in der Schule? Wie komme ich damit klar?</li><li>&nbsp; Ist GBI schwer?</li><li>&nbsp; Wie ist eigentlich das Verhältnis zwischen Student_in und Professor_in / Dozent_in? Gibt es da Unterschiede?</li><li>&nbsp; Was kann ich an einer Universität machen außer in Vorlesungen zu gehen?<br></li></ul><span><span>Wir werden immer wieder einen Blick auf den Chat werfen und mit den späteren Teilen des Gesprächs auch verstärkt direkt auf diesen eingehen.</span></span><br><span><span></span></span><span><span><br>Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.</span></span>`,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/1gA0aLOpOaI"
                
            },
            start: "2020-10-22T16:05:00+02:00",
            end: "2020-10-22T18:05:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201022T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-22T20:00:00+02:00",
            end: "2020-10-22T21:00:00+02:00"
        },
    
        {
            id: "459hf5n7qru8aknk8tc77io28b",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Allgemeiner Talk zum Studium (FS)",
            body: `Allgemeiner Talk zum Studium
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-22T20:00:00+02:00",
            end: "2020-10-22T22:00:00+02:00"
        },
    
        {
            id: "6e5rfe2i53b5no33cnenrccdns",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Live Musik",
            body: `Robert holt das Keyboard raus. Chillstream.`,
            raw: {
                ignore: false,
                
                    location: "https://youtu.be/3QV1n9ZrwlY"
                
            },
            start: "2020-10-22T21:00:00+02:00",
            end: "2020-10-22T22:30:00+02:00"
        },
    
        {
            id: "6qk4gesjaqbetjlug8ljs137qf",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Wohnen in Karlsruhe Q&amp;A",
            body: `Wohnungssuche ist frustrierend. Wir rede über unterschiedliche Wohnungsformen, den Karlsruhe Wohnungsmarkt und seine unterschiedlichen Anbieter.<br><ul><li>Was ist günstig / teuer?</li><li>Studenten orientiert oder allgemein?</li><li>Was existiert neben HaDiKo und Studierendenwerk und will mich nicht über den Tisch ziehen?</li></ul>Dazu reden wir auch darüber was für einen "das richtige ist". Darüber wie man später umzieht, wenn man gerade nicht das Studium beginnt, eine WG gründet und auf seine realen Kosten kommt.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-23T10:00:00+02:00",
            end: "2020-10-23T11:30:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201023T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-23T14:00:00+02:00",
            end: "2020-10-23T16:00:00+02:00"
        },
    
        {
            id: "27o688jpj17vm3spgvrap8tucf",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Hacky Hour (FS)",
            body: ``,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-23T16:00:00+02:00",
            end: "2020-10-23T18:00:00+02:00"
        },
    
        {
            id: "7rj5re9amuk30t6lfb3rjai7do",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "LA mit Benedikt",
            body: `Das etwas andere (Spassige) Tutorium.


Mit Benedikt eurem Lieblings LA Tutor.
Content der sowohl Spaß macht als auch informativ ist und nicht einfach nur erklärt sondern auch "Feeling" vermittelt.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-23T16:00:00+02:00",
            end: "2020-10-23T18:00:00+02:00"
        },
    
        {
            id: "14ncn8k895bhio0582t0etk22t",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Nachruf für den Kleingruppen-Zuteilungsalgorithmus (FS)",
            body: ``,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-23T18:00:00+02:00",
            end: "2020-10-23T20:00:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201023T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-23T20:00:00+02:00",
            end: "2020-10-23T21:00:00+02:00"
        },
    
        {
            id: "3ue8qrkagaiamambus6o30ip8u",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Cocktails Machen &amp; Konsumieren",
            body: `Lust die Basics im Cocktails machen zu lernen? Aber keinen Bock sich selber zu blamieren. Dann schau zu wie das andere für euch machen. (Oder auch: Im Keller ist ein Haufen Alk vom letzten O-Phasen Cocktail Abend der weg muss.)`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-23T20:00:00+02:00",
            end: "2020-10-24T00:00:00+02:00"
        },
    
        {
            id: "6ijo0rdqr5jlg85rhi4knm5f7n",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "24h Stream",
            body: `Ja guckt nicht mich an! Ich schreibe hier nur die Texte zusammen. Scheinbar meinen ein paar Tutoren sich 24 Stunden für euch vor der Kamera zum Affen zu machen. Vorausgesetzt zwischendurch kippt niemand um oder eine Schicht Tutoren taucht nicht auf, passiert hier wohl allerlei. Wir spielen Spiele, reden frei über was uns im Bezug auf Uni durch den Kopf geht oder holen euch auch mal per Voice Chat in den Stream rein (Mama ich bin im Fernsehen!)`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-24T12:00:00+02:00",
            end: "2020-10-25T11:59:00+01:00"
        },
    
        {
            id: "3j3k0ih80mcmt74sedtc6ph7su",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Sandwich-Toasten nach Einsendungen (FS)",
            body: ``,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-24T18:00:00+02:00",
            end: "2020-10-24T20:00:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201024T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-24T20:00:00+02:00",
            end: "2020-10-24T21:00:00+02:00"
        },
    
        {
            id: "3kohd5jjkq6op18uoqo5lo8s4o",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Katerfrühstück",
            body: `Weil wir uns nach 24 Stunden streamen so an die Kamera gewöhnt haben, wollen wir sie auch beim Frühstück nicht missen. Voraussetzung für diesen Stream ist, dass sich Tutoren finden die dann schon wieder lebensfähig sind.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-25T12:00:00+01:00",
            end: "2020-10-25T13:30:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201025T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-25T20:00:00+01:00",
            end: "2020-10-25T21:00:00+01:00"
        },
    
        {
            id: "7hsqtoh9igcrjai8ai2r1r92io",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Frühstücksstream mit Adrian (AStA)",
            body: `<br>Wir stellen vor: Adrian Keller. "<i>Innen-Referent für Gremien, Fachschaften und politische Bildung und StuPa-Abgeordneter</i>" (Das haben wir von der AStA Website geklaut. Glaubt mal nicht, dass wir das selber mal eben aus den Ärmel schütteln). Bei der Menge an Wörtern, ahnt der eine oder andere vielleicht schon, dass es um Politik geht. Hochschulpolitik!<br><br>Immer gut gekleidet und mit einem Lächeln, das tauglich ist euch alles zu verkaufen, reden wir darüber was der AStA eigentlich so macht! Konkret geht es um das Unifest, warum ihr alle kostenlos Nextbike nutzen könnt, Hochschulgruppen, Unigremien und ja, auch über Politik  an Hochschulen.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-26T10:00:00+01:00",
            end: "2020-10-26T12:00:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201026T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-26T14:00:00+01:00",
            end: "2020-10-26T16:00:00+01:00"
        },
    
        {
            id: "48jiltme7k621vdqrgj5lf8edr",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Talk &amp; Chill: Leonid (Maddhe)",
            body: `<br>Normalerweise gibt es in der Mathefachschaft einmal in der Woche die Waffelstunde. Neben ganz viel leckeren Waffeln ist es jedem möglich in die Fachschaft zu kommen und in gemütlicher Stimmung Beratung zu erhalten oder sich die Wartezeit auf Altklausuren zu vers<span><span><span>üßen</span></span></span>.<br><br>Nach einem Semester auf Entzug holen wir dies nun endlich nach. Und damit das auch für euch spannend ist, haben wir einen ganz Besonderen Gast eingeladen. Leonid! Vor ein paar Jahren noch Student (Wie ihr!) und aktives Fachschaftsmitglied (Wie ihr hoffentlich auch bald!), arbeitet nun seit einiger Zeit als wissenschaftlicher Mitarbeiter an der Mathefakultät. Wir kuscheln uns aufs Sofa, holen das Waffeleisen raus und reden über was uns so in den Sinn kommt oder ihr uns fragt.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-26T18:00:00+01:00",
            end: "2020-10-26T20:00:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201026T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-26T20:00:00+01:00",
            end: "2020-10-26T21:00:00+01:00"
        },
    
        {
            id: "2sgvom88nukqj7akhj5aoqjjce",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Live Shader Programming",
            body: `Nachdem ihr seine kreative Seite ja schon beim Musik machen erleben durftet, zeigt euch Robert dieses Mal seine Skills im Shader programmieren. OMG der Mann ist so vielseitig <3`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-26T21:00:00+01:00",
            end: "2020-10-26T22:30:00+01:00"
        },
    
        {
            id: "262aneh52v181634vqkref8shj",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Talk: Sauer (Online Lehre / Mathe)",
            body: `<span>Wir reden mit Prof. Roman Sauer.<br><br>Die Vorlesung Lineare Algebra wird jedes Jahr im "Staffelstab" Prinzip in der Mathefakultät weitergegeben. Auch wenn er dieses Jahr nicht euer Dozent sein wird, war er dies vor 2 Jahren bei vielen eurer Tutoren. Vor allem hat er aber viel Freude daran neue Mittel für die Didaktik zu erproben. Wir wollen mit Ihm einen <i>kleinen</i> Überblick über die Lineare Algebra erlangen. Anschließend diskutieren wir mit Ihm seine Ansichten über Online Lehre. Welche Möglichkeiten bietet sich mit den Systemen am KIT, welche sind realistisch umsetzbar und was sind die Erfahrungen aus dem letzten Semester? Wir wollen unter diesem Aspekt den "Corona Studentenalltag" im Gegenspiel mit der Studentensicht diskutieren.<br><br>Wir werden immer wieder einen Blick auf den Chat werfen und zwischendurch / abschnittsweise diesen direkt in das Gespräch mit aufnehmen.<br><br>Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.</span>`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-27T10:00:00+01:00",
            end: "2020-10-27T12:00:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201027T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-27T14:00:00+01:00",
            end: "2020-10-27T16:00:00+01:00"
        },
    
        {
            id: "35knuubk3lajj79kpjemlains0",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Kochen in 3 Schwierigkeitsstufen",
            body: `Wir kochen. Aber weil wir uns nicht für einen Schwierigkeitsgrad entscheiden konnten gleich in drei verschiedenen.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-27T19:00:00+01:00",
            end: "2020-10-27T22:00:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201027T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-27T20:00:00+01:00",
            end: "2020-10-27T21:00:00+01:00"
        },
    
        {
            id: "09om7sgnvhblj1u2qiqhn6a2vp",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Was ist Fachschaft?",
            body: `Ihr habt vielleicht schon mitbekommen, dass die O-Phase im Allgemeinen von der Fachschaft organisiert und koordiniert wird. Aber wer oder was ist diese Fachschaft denn genau? Kann man da mitmachen? Das klären wir in diesem Stream.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-28T10:00:00+01:00",
            end: "2020-10-28T11:30:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201028T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-28T14:00:00+01:00",
            end: "2020-10-28T16:00:00+01:00"
        },
    
        {
            id: "1uk25ctth0a266e99hcs8mgter",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Leben in Karlsruhe",
            body: `Neben dem eigentlichen studieren seit ihr bestimmt auch auf das berüchtigte "Studentenleben" gespannt. In diesem Stream wollen wir unsere Erfahrungen und Tipps mit allem, was nicht direkt mit dem studieren zu tun hat, mit euch teilen.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-28T17:00:00+01:00",
            end: "2020-10-28T18:30:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201028T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-28T20:00:00+01:00",
            end: "2020-10-28T21:00:00+01:00"
        },
    
        {
            id: "1ie1en9oh289o1t2e0a7de7rh4",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Talk: Tichy",
            body: `
Wir reden mit Prof. Walter F. Tichy.

Er hat lange die Vorlesung Softwaretechnik 1 (2. Semester) gehalten. Neben dem fachlichen interessiert Ihn das Aufrechterhalten einer strukturierten Arbeitsweise unter Studenten. Wir reden mit Ihm über Organisation, Motivation und den Aufbau eines erfolgreichen Studienalltag.

Wir werden immer wieder einen Blick auf den Chat werfen, diesen aber größtenteils indirekt Einbinden.

Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-29T11:20:00+01:00",
            end: "2020-10-29T13:20:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201029T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-29T14:00:00+01:00",
            end: "2020-10-29T16:00:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201029T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true,
                
            },
            start: "2020-10-29T20:00:00+01:00",
            end: "2020-10-29T21:00:00+01:00"
        },
    
        {
            id: "5bv1h1io32m9uh1ec3rulhhll2",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "r/KaIT Browsen &amp; Unsinn",
            body: `Was wäre... nunja irgendetwas ohne Memes? Genau: voll doof. Weil Reddit eines der besten Mittel zum Prokrastinieren ist, stellen wir euch hier unter Anderem den KIT Subreddit vor.`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-29T21:00:00+01:00",
            end: "2020-10-29T22:00:00+01:00"
        },
    
        {
            id: "0tefgs0gc0jffth1104jns89b9",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Reste Q&amp;A",
            body: `2 Wochen O-Phase sind vorbei. Letzte Fragen bevor das Studium los geht?`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-30T10:00:00+01:00",
            end: "2020-10-30T11:15:00+01:00"
        },
    
        {
            id: "0eaiq87d5fbivqjaem4re1vhpt",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Behind the Scenes",
            body: `Wenn wir schon alles an Technik was wir in die Finger bekommen konnten zusammengekarrt haben, dann wollen wir euch das auch zeigen!`,
            raw: {
                ignore: false,
                
            },
            start: "2020-10-30T11:45:00+01:00",
            end: "2020-10-30T12:45:00+01:00"
        },
    
        {
            id: "2upuqkeik1ao4t78k1dt08kfe4",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Abschlussveranstaltung (FS)",
            body: ``,
            raw: {
                ignore: true,
                
                    location: "https://o-phase.live/"
                
            },
            start: "2020-10-30T14:00:00+01:00",
            end: "2020-10-30T15:00:00+01:00"
        },
    
])

calendar2.createSchedules([
    
        {
            id: "76omfffcqnl6p81mi8j472875k",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Begrüßungsveranstaltung",
            body: `Hier wollen wir vor Allem einfach mal "Hallo" sagen. Außerdem werden wir euch einen groben Überblick über die kommenden zwei Wochen geben. Auf den Stream folgt dann noch ein Kennenlernen auf unserem Discord.`,
            raw: {
                ignore: false
            },
            start: "2020-10-20T11:00:00+02:00",
            end: "2020-10-20T11:45:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201020T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-20T14:00:00+02:00",
            end: "2020-10-20T16:00:00+02:00"
        },
    
        {
            id: "7ttukdrp38a6q7q3sjhqf242nu",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Spiele &amp; Interaktion",
            body: `Ein gemütlicher Stream um gemütlich etwas zu spielen um dabei etwas mit euch zu interagieren. Dieser Stream reiht sich dabei in die Reihe an "Kennenlern-Streams" ein, die wir als sinnvoll erachten um sowohl euch an die O-Phase zu gewöhnen als auch uns an die Streams.
Gemütlich! `,
            raw: {
                ignore: false
            },
            start: "2020-10-20T16:00:00+02:00",
            end: "2020-10-20T18:00:00+02:00"
        },
    
        {
            id: "67guuh8a6ki2vq2u79cuv1b5ur",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Minecraft Server Launch",
            body: `Benedikt weiht den MC Server ein.`,
            raw: {
                ignore: false
            },
            start: "2020-10-20T18:00:00+02:00",
            end: "2020-10-20T19:30:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201020T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-20T20:00:00+02:00",
            end: "2020-10-20T21:00:00+02:00"
        },
    
        {
            id: "2psn83p110vepa89crbv6boer0",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Einführung Programmiersprachen (FS)",
            body: `
Kurzguide zu Programmiersprachen im (Info-)Studium
Java, C, Haskell und Konsorten
Viele sinnvolle und einige unnütze Fakten 
 `,
            raw: {
                ignore: true
            },
            start: "2020-10-20T20:00:00+02:00",
            end: "2020-10-20T21:00:00+02:00"
        },
    
        {
            id: "38jpv262qraegpbbsnlg2uecpn",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "How to 1. Semester",
            body: `Wo bin ich hier gelandet? Was muss ich alles beachten? Wer erinnert mich an Fristen? Wann macht die Mensa auf? Diese und weitere Fragen schwirren vermutlich gerade in euren Köpfen herum. Wir versuchen sie zu beantworten und, wie sonst in der O-Phase eigentlich auch, euch einen möglichst Problem- und Sorgenfreien Einstieg in das Abenteuer Studium zu geben. `,
            raw: {
                ignore: false
            },
            start: "2020-10-21T10:00:00+02:00",
            end: "2020-10-21T12:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201021T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-21T14:00:00+02:00",
            end: "2020-10-21T16:00:00+02:00"
        },
    
        {
            id: "7419ba81bo8co7j7cbascikskm",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Ankündigung O-Rallye (FS)",
            body: ``,
            raw: {
                ignore: true
            },
            start: "2020-10-21T16:00:00+02:00",
            end: "2020-10-21T16:30:00+02:00"
        },
    
        {
            id: "5a0pn04pdtc4rcohof438emhk9",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Lasagne kochen",
            body: `Während eurem Studium werdet ihr eines schnell merken: Ihr habt regelmäßig Hunger. Um dem entgegenzukommen gibt es natürlich viele Möglichkeiten, aber die langfristig gesündeste und günstigste ist vermutlich selbst zu kochen. Vor Allem wenn man sich dabei mit Leuten zusammentun kann.
Lange Rede, kurzer Sinn: Wie der Titel schon sagt werden wir in diesem Stream versuchen (!) Lasagne zu kochen.`,
            raw: {
                ignore: false
            },
            start: "2020-10-21T17:00:00+02:00",
            end: "2020-10-21T20:00:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201021T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-21T20:00:00+02:00",
            end: "2020-10-21T21:00:00+02:00"
        },
    
        {
            id: "3dggm78jadhatac7h2283nghna",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Vorstellung PSE-Projekte (FS)",
            body: ``,
            raw: {
                ignore: true
            },
            start: "2020-10-21T20:00:00+02:00",
            end: "2020-10-21T21:30:00+02:00"
        },
    
        {
            id: "01oaf7tui5j4mdv9csuv1csjf5",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Uni Orga Q&amp;A (Prüfungen etc.)",
            body: `Da euch wahrscheinlich schon brennend interessiert, wie das alles im Studium abläuft und wie sich der Alltag von der Schule unterscheidet, versuchen wir euch in diesem Stream möglichst professionell wirkende und im besten Fall auch hilfreiche Antworten zu geben. DIese basieren auf unseren zum Teil Jahre langen Erfahrungen, die mal mehr und mal weniger erfolgreich dem Studium zugewandt sind.`,
            raw: {
                ignore: false
            },
            start: "2020-10-22T10:00:00+02:00",
            end: "2020-10-22T12:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201022T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-22T14:00:00+02:00",
            end: "2020-10-22T16:00:00+02:00"
        },
    
        {
            id: "472o6uf8jec53c73jcduuijfq8",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Talk: Worsch (GBI)",
            body: `<span><span>Wir reden mit Dr. Thomas Worsch.</span></span><br><br>Er wird auch dieses Jahr eure Vorlesung "Grundbegriffe der Informatik" (GBI) halten. Als der Einstieg in die Informatik auf Universitätsniveau, machen wir mit Herrn Worsch die große "Büchse der Pandora" des Informatikstudiums auf. Wir reden darüber was Informatik denn eigentlich überhaupt bedeutet. Was GBI für einen Grundstein für das Studium legt und wie es dies macht. Dazu <span>möchten wir noch k</span>onkret einige Fragen aufklären die sich sonst erst mit dem ersten Semester ergeben. Dazu gehört zum Beispiel:<br><ul><li>&nbsp; Was ist in der Uni schwerer als in der Schule? Wie komme ich damit klar?</li><li>&nbsp; Ist GBI schwer?</li><li>&nbsp; Wie ist eigentlich das Verhältnis zwischen Student_in und Professor_in / Dozent_in? Gibt es da Unterschiede?</li><li>&nbsp; Was kann ich an einer Universität machen außer in Vorlesungen zu gehen?<br></li></ul><span><span>Wir werden immer wieder einen Blick auf den Chat werfen und mit den späteren Teilen des Gesprächs auch verstärkt direkt auf diesen eingehen.</span></span><br><span><span></span></span><span><span><br>Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.</span></span>`,
            raw: {
                ignore: false
            },
            start: "2020-10-22T16:05:00+02:00",
            end: "2020-10-22T18:05:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201022T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-22T20:00:00+02:00",
            end: "2020-10-22T21:00:00+02:00"
        },
    
        {
            id: "459hf5n7qru8aknk8tc77io28b",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Allgemeiner Talk zum Studium (FS)",
            body: `Allgemeiner Talk zum Studium
`,
            raw: {
                ignore: true
            },
            start: "2020-10-22T20:00:00+02:00",
            end: "2020-10-22T22:00:00+02:00"
        },
    
        {
            id: "6e5rfe2i53b5no33cnenrccdns",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Live Musik",
            body: `Robert holt das Keyboard raus. Chillstream.`,
            raw: {
                ignore: false
            },
            start: "2020-10-22T21:00:00+02:00",
            end: "2020-10-22T22:30:00+02:00"
        },
    
        {
            id: "6qk4gesjaqbetjlug8ljs137qf",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Wohnen in Karlsruhe Q&amp;A",
            body: `Wohnungssuche ist frustrierend. Wir rede über unterschiedliche Wohnungsformen, den Karlsruhe Wohnungsmarkt und seine unterschiedlichen Anbieter.<br><ul><li>Was ist günstig / teuer?</li><li>Studenten orientiert oder allgemein?</li><li>Was existiert neben HaDiKo und Studierendenwerk und will mich nicht über den Tisch ziehen?</li></ul>Dazu reden wir auch darüber was für einen "das richtige ist". Darüber wie man später umzieht, wenn man gerade nicht das Studium beginnt, eine WG gründet und auf seine realen Kosten kommt.`,
            raw: {
                ignore: false
            },
            start: "2020-10-23T10:00:00+02:00",
            end: "2020-10-23T11:30:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201023T120000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-23T14:00:00+02:00",
            end: "2020-10-23T16:00:00+02:00"
        },
    
        {
            id: "27o688jpj17vm3spgvrap8tucf",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Hacky Hour (FS)",
            body: ``,
            raw: {
                ignore: true
            },
            start: "2020-10-23T16:00:00+02:00",
            end: "2020-10-23T18:00:00+02:00"
        },
    
        {
            id: "7rj5re9amuk30t6lfb3rjai7do",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "LA mit Benedikt",
            body: `Das etwas andere (Spassige) Tutorium.


Mit Benedikt eurem Lieblings LA Tutor.
Content der sowohl Spaß macht als auch informativ ist und nicht einfach nur erklärt sondern auch "Feeling" vermittelt.`,
            raw: {
                ignore: false
            },
            start: "2020-10-23T16:00:00+02:00",
            end: "2020-10-23T18:00:00+02:00"
        },
    
        {
            id: "14ncn8k895bhio0582t0etk22t",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Nachruf für den Kleingruppen-Zuteilungsalgorithmus (FS)",
            body: ``,
            raw: {
                ignore: true
            },
            start: "2020-10-23T18:00:00+02:00",
            end: "2020-10-23T20:00:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201023T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-23T20:00:00+02:00",
            end: "2020-10-23T21:00:00+02:00"
        },
    
        {
            id: "3ue8qrkagaiamambus6o30ip8u",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Cocktails Machen &amp; Konsumieren",
            body: `Lust die Basics im Cocktails machen zu lernen? Aber keinen Bock sich selber zu blamieren. Dann schau zu wie das andere für euch machen. (Oder auch: Im Keller ist ein Haufen Alk vom letzten O-Phasen Cocktail Abend der weg muss.)`,
            raw: {
                ignore: false
            },
            start: "2020-10-23T20:00:00+02:00",
            end: "2020-10-24T00:00:00+02:00"
        },
    
        {
            id: "6ijo0rdqr5jlg85rhi4knm5f7n",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "24h Stream",
            body: `Ja guckt nicht mich an! Ich schreibe hier nur die Texte zusammen. Scheinbar meinen ein paar Tutoren sich 24 Stunden für euch vor der Kamera zum Affen zu machen. Vorausgesetzt zwischendurch kippt niemand um oder eine Schicht Tutoren taucht nicht auf, passiert hier wohl allerlei. Wir spielen Spiele, reden frei über was uns im Bezug auf Uni durch den Kopf geht oder holen euch auch mal per Voice Chat in den Stream rein (Mama ich bin im Fernsehen!)`,
            raw: {
                ignore: false
            },
            start: "2020-10-24T12:00:00+02:00",
            end: "2020-10-25T11:59:00+01:00"
        },
    
        {
            id: "3j3k0ih80mcmt74sedtc6ph7su",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Sandwich-Toasten nach Einsendungen (FS)",
            body: ``,
            raw: {
                ignore: true
            },
            start: "2020-10-24T18:00:00+02:00",
            end: "2020-10-24T20:00:00+02:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201024T180000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-24T20:00:00+02:00",
            end: "2020-10-24T21:00:00+02:00"
        },
    
        {
            id: "3kohd5jjkq6op18uoqo5lo8s4o",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Katerfrühstück",
            body: `Weil wir uns nach 24 Stunden streamen so an die Kamera gewöhnt haben, wollen wir sie auch beim Frühstück nicht missen. Voraussetzung für diesen Stream ist, dass sich Tutoren finden die dann schon wieder lebensfähig sind.`,
            raw: {
                ignore: false
            },
            start: "2020-10-25T12:00:00+01:00",
            end: "2020-10-25T13:30:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201025T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-25T20:00:00+01:00",
            end: "2020-10-25T21:00:00+01:00"
        },
    
        {
            id: "7hsqtoh9igcrjai8ai2r1r92io",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Frühstücksstream mit Adrian (AStA)",
            body: `<br>Wir stellen vor: Adrian Keller. "<i>Innen-Referent für Gremien, Fachschaften und politische Bildung und StuPa-Abgeordneter</i>" (Das haben wir von der AStA Website geklaut. Glaubt mal nicht, dass wir das selber mal eben aus den Ärmel schütteln). Bei der Menge an Wörtern, ahnt der eine oder andere vielleicht schon, dass es um Politik geht. Hochschulpolitik!<br><br>Immer gut gekleidet und mit einem Lächeln, das tauglich ist euch alles zu verkaufen, reden wir darüber was der AStA eigentlich so macht! Konkret geht es um das Unifest, warum ihr alle kostenlos Nextbike nutzen könnt, Hochschulgruppen, Unigremien und ja, auch über Politik  an Hochschulen.`,
            raw: {
                ignore: false
            },
            start: "2020-10-26T10:00:00+01:00",
            end: "2020-10-26T12:00:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201026T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-26T14:00:00+01:00",
            end: "2020-10-26T16:00:00+01:00"
        },
    
        {
            id: "48jiltme7k621vdqrgj5lf8edr",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Talk &amp; Chill: Leonid (Maddhe)",
            body: `<br>Normalerweise gibt es in der Mathefachschaft einmal in der Woche die Waffelstunde. Neben ganz viel leckeren Waffeln ist es jedem möglich in die Fachschaft zu kommen und in gemütlicher Stimmung Beratung zu erhalten oder sich die Wartezeit auf Altklausuren zu vers<span><span><span>üßen</span></span></span>.<br><br>Nach einem Semester auf Entzug holen wir dies nun endlich nach. Und damit das auch für euch spannend ist, haben wir einen ganz Besonderen Gast eingeladen. Leonid! Vor ein paar Jahren noch Student (Wie ihr!) und aktives Fachschaftsmitglied (Wie ihr hoffentlich auch bald!), arbeitet nun seit einiger Zeit als wissenschaftlicher Mitarbeiter an der Mathefakultät. Wir kuscheln uns aufs Sofa, holen das Waffeleisen raus und reden über was uns so in den Sinn kommt oder ihr uns fragt.`,
            raw: {
                ignore: false
            },
            start: "2020-10-26T18:00:00+01:00",
            end: "2020-10-26T20:00:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201026T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-26T20:00:00+01:00",
            end: "2020-10-26T21:00:00+01:00"
        },
    
        {
            id: "2sgvom88nukqj7akhj5aoqjjce",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Live Shader Programming",
            body: `Nachdem ihr seine kreative Seite ja schon beim Musik machen erleben durftet, zeigt euch Robert dieses Mal seine Skills im Shader programmieren. OMG der Mann ist so vielseitig <3`,
            raw: {
                ignore: false
            },
            start: "2020-10-26T21:00:00+01:00",
            end: "2020-10-26T22:30:00+01:00"
        },
    
        {
            id: "262aneh52v181634vqkref8shj",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Talk: Sauer (Online Lehre / Mathe)",
            body: `<span>Wir reden mit Prof. Roman Sauer.<br><br>Die Vorlesung Lineare Algebra wird jedes Jahr im "Staffelstab" Prinzip in der Mathefakultät weitergegeben. Auch wenn er dieses Jahr nicht euer Dozent sein wird, war er dies vor 2 Jahren bei vielen eurer Tutoren. Vor allem hat er aber viel Freude daran neue Mittel für die Didaktik zu erproben. Wir wollen mit Ihm einen <i>kleinen</i> Überblick über die Lineare Algebra erlangen. Anschließend diskutieren wir mit Ihm seine Ansichten über Online Lehre. Welche Möglichkeiten bietet sich mit den Systemen am KIT, welche sind realistisch umsetzbar und was sind die Erfahrungen aus dem letzten Semester? Wir wollen unter diesem Aspekt den "Corona Studentenalltag" im Gegenspiel mit der Studentensicht diskutieren.<br><br>Wir werden immer wieder einen Blick auf den Chat werfen und zwischendurch / abschnittsweise diesen direkt in das Gespräch mit aufnehmen.<br><br>Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.</span>`,
            raw: {
                ignore: false
            },
            start: "2020-10-27T10:00:00+01:00",
            end: "2020-10-27T12:00:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201027T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-27T14:00:00+01:00",
            end: "2020-10-27T16:00:00+01:00"
        },
    
        {
            id: "35knuubk3lajj79kpjemlains0",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Kochen in 3 Schwierigkeitsstufen",
            body: `Wir kochen. Aber weil wir uns nicht für einen Schwierigkeitsgrad entscheiden konnten gleich in drei verschiedenen.`,
            raw: {
                ignore: false
            },
            start: "2020-10-27T19:00:00+01:00",
            end: "2020-10-27T22:00:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201027T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-27T20:00:00+01:00",
            end: "2020-10-27T21:00:00+01:00"
        },
    
        {
            id: "09om7sgnvhblj1u2qiqhn6a2vp",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Was ist Fachschaft?",
            body: `Ihr habt vielleicht schon mitbekommen, dass die O-Phase im Allgemeinen von der Fachschaft organisiert und koordiniert wird. Aber wer oder was ist diese Fachschaft denn genau? Kann man da mitmachen? Das klären wir in diesem Stream.`,
            raw: {
                ignore: false
            },
            start: "2020-10-28T10:00:00+01:00",
            end: "2020-10-28T11:30:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201028T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-28T14:00:00+01:00",
            end: "2020-10-28T16:00:00+01:00"
        },
    
        {
            id: "1uk25ctth0a266e99hcs8mgter",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Leben in Karlsruhe",
            body: `Neben dem eigentlichen studieren seit ihr bestimmt auch auf das berüchtigte "Studentenleben" gespannt. In diesem Stream wollen wir unsere Erfahrungen und Tipps mit allem, was nicht direkt mit dem studieren zu tun hat, mit euch teilen.`,
            raw: {
                ignore: false
            },
            start: "2020-10-28T17:00:00+01:00",
            end: "2020-10-28T18:30:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201028T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-28T20:00:00+01:00",
            end: "2020-10-28T21:00:00+01:00"
        },
    
        {
            id: "1ie1en9oh289o1t2e0a7de7rh4",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Talk: Tichy",
            body: `
Wir reden mit Prof. Walter F. Tichy.

Er hat lange die Vorlesung Softwaretechnik 1 (2. Semester) gehalten. Neben dem fachlichen interessiert Ihn das Aufrechterhalten einer strukturierten Arbeitsweise unter Studenten. Wir reden mit Ihm über Organisation, Motivation und den Aufbau eines erfolgreichen Studienalltag.

Wir werden immer wieder einen Blick auf den Chat werfen, diesen aber größtenteils indirekt Einbinden.

Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.`,
            raw: {
                ignore: false
            },
            start: "2020-10-29T11:20:00+01:00",
            end: "2020-10-29T13:20:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201029T130000Z",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
`,
            raw: {
                ignore: true
            },
            start: "2020-10-29T14:00:00+01:00",
            end: "2020-10-29T16:00:00+01:00"
        },
    
        {
            id: "1bmevafn713o08c7hug7jof6h9_20201029T190000Z",
            calendarId: "1",
            bgColor: "#7986cb",

            category: "time",
            title: "Discord Fragestunde",
            body: `
Es sind täglich von 20-21Uhr Tutoren im Hilfe/SOS Channel um euch eure Fragen zu beantworten.
`,
            raw: {
                ignore: true
            },
            start: "2020-10-29T20:00:00+01:00",
            end: "2020-10-29T21:00:00+01:00"
        },
    
        {
            id: "5bv1h1io32m9uh1ec3rulhhll2",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "r/KaIT Browsen &amp; Unsinn",
            body: `Was wäre... nunja irgendetwas ohne Memes? Genau: voll doof. Weil Reddit eines der besten Mittel zum Prokrastinieren ist, stellen wir euch hier unter Anderem den KIT Subreddit vor.`,
            raw: {
                ignore: false
            },
            start: "2020-10-29T21:00:00+01:00",
            end: "2020-10-29T22:00:00+01:00"
        },
    
        {
            id: "0tefgs0gc0jffth1104jns89b9",
            calendarId: "1",
            bgColor: "#0297df",

            category: "time",
            title: "Reste Q&amp;A",
            body: `2 Wochen O-Phase sind vorbei. Letzte Fragen bevor das Studium los geht?`,
            raw: {
                ignore: false
            },
            start: "2020-10-30T10:00:00+01:00",
            end: "2020-10-30T11:15:00+01:00"
        },
    
        {
            id: "0eaiq87d5fbivqjaem4re1vhpt",
            calendarId: "1",
            bgColor: "#8e24aa",

            category: "time",
            title: "Behind the Scenes",
            body: `Wenn wir schon alles an Technik was wir in die Finger bekommen konnten zusammengekarrt haben, dann wollen wir euch das auch zeigen!`,
            raw: {
                ignore: false
            },
            start: "2020-10-30T11:45:00+01:00",
            end: "2020-10-30T12:45:00+01:00"
        },
    
        {
            id: "2upuqkeik1ao4t78k1dt08kfe4",
            calendarId: "1",
            bgColor: "#616161",

            category: "time",
            title: "Abschlussveranstaltung (FS)",
            body: ``,
            raw: {
                ignore: true
            },
            start: "2020-10-30T14:00:00+01:00",
            end: "2020-10-30T15:00:00+01:00"
        },
    
])

calendar1.setDate("2020-10-19")
calendar2.setDate("2020-10-26")