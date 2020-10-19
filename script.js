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
        hourEnd: 22,
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
    }
};
var calendar1 = new tui.Calendar('#calendar-1', calOptions);
var calendar2 = new tui.Calendar('#calendar-2', calOptions);
calendar2.setOptions({ week: { workweek: true } });

calendar1.createSchedules([
    
        {
            id: "76omfffcqnl6p81mi8j472875k",
            calendarId: "1",

            category: "time",
            title: "Begrüßungsveranstaltung",
            body: `Hier wollen wir vor Allem einfach mal &#34;Hallo&#34; sagen. Außerdem werden wir euch einen groben Überblick über die kommenden zwei Wochen geben. Auf den Stream folgt dann noch ein Kennenlernen auf unserem Discord.`,
            start: "2020-10-20T11:00:00+02:00",
            end: "2020-10-20T11:45:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201020T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-20T14:00:00+02:00",
            end: "2020-10-20T16:00:00+02:00"
        },
    
        {
            id: "7ttukdrp38a6q7q3sjhqf242nu",
            calendarId: "1",

            category: "time",
            title: "Spiele &amp; Interaktion",
            body: `Ein gemütlicher Stream um gemütlich etwas zu spielen um dabei etwas mit euch zu interagieren. Dieser Stream reiht sich dabei in die Reihe an &#34;Kennenlern-Streams&#34; ein, die wir als sinnvoll erachten um sowohl euch an die O-Phase zu gewöhnen als auch uns an die Streams.
Gemütlich! `,
            start: "2020-10-20T16:00:00+02:00",
            end: "2020-10-20T18:00:00+02:00"
        },
    
        {
            id: "38jpv262qraegpbbsnlg2uecpn",
            calendarId: "1",

            category: "time",
            title: "How to 1. Semester",
            body: `Wo bin ich hier gelandet? Was muss ich alles beachten? Wer erinnert mich an Fristen? Wann macht die Mensa auf? Diese und weitere Fragen schwirren vermutlich gerade in euren Köpfen herum. Wir versuchen sie zu beantworten und, wie sonst in der O-Phase eigentlich auch, euch einen möglichst Problem- und Sorgenfreien Einstieg in das Abenteuer Studium zu geben. `,
            start: "2020-10-21T10:00:00+02:00",
            end: "2020-10-21T11:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201021T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-21T14:00:00+02:00",
            end: "2020-10-21T16:00:00+02:00"
        },
    
        {
            id: "5a0pn04pdtc4rcohof438emhk9",
            calendarId: "1",

            category: "time",
            title: "Lasagne kochen",
            body: `Während eurem Studium werdet ihr eines schnell merken: Ihr habt regelmäßig Hunger. Um dem entgegenzukommen gibt es natürlich viele Möglichkeiten, aber die langfristig gesündeste und günstigste ist vermutlich selbst zu kochen. Vor Allem wenn man sich dabei mit Leuten zusammentun kann.
Lange Rede, kurzer Sinn: Wie der Titel schon sagt werden wir in diesem Stream versuchen (!) Lasagne zu kochen.`,
            start: "2020-10-21T16:00:00+02:00",
            end: "2020-10-21T19:00:00+02:00"
        },
    
        {
            id: "01oaf7tui5j4mdv9csuv1csjf5",
            calendarId: "1",

            category: "time",
            title: "Uni Orga Q&amp;A (Prüfungen etc.)",
            body: `Da euch wahrscheinlich schon brennend interessiert, wie das alles im Studium abläuft und wie sich der Alltag von der Schule unterscheidet, versuchen wir euch in diesem Stream möglichst professionell wirkende und im besten Fall auch hilfreiche Antworten zu geben. DIese basieren auf unseren zum Teil Jahre langen Erfahrungen, die mal mehr und mal weniger erfolgreich dem Studium zugewandt sind.`,
            start: "2020-10-22T10:00:00+02:00",
            end: "2020-10-22T11:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201022T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-22T14:00:00+02:00",
            end: "2020-10-22T16:00:00+02:00"
        },
    
        {
            id: "472o6uf8jec53c73jcduuijfq8",
            calendarId: "1",

            category: "time",
            title: "Talk: Worsch (GBI)",
            body: `&lt;span&gt;&lt;span&gt;Wir reden mit Dr. Thomas Worsch.&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;br&gt;&lt;br&gt;Er wird auch dieses Jahr eure Vorlesung &#34;Grundbegriffe der Informatik&#34; (GBI) halten. Als der Einstieg in die Informatik auf Universitätsniveau, machen wir mit Herrn Worsch die große &#34;Büchse der Pandora&#34; des Informatikstudiums auf. Wir reden darüber was Informatik denn eigentlich überhaupt bedeutet. Was GBI für einen Grundstein für das Studium legt und wie es dies macht. Dazu &lt;span&gt;möchten wir noch k&lt;/span&gt;onkret einige Fragen aufklären die sich sonst erst mit dem ersten Semester ergeben. Dazu gehört zum Beispiel:&lt;br&gt;&amp;nbsp; - Was ist in der Uni schwerer als in der Schule? Wie komme ich damit klar?&lt;br&gt;&amp;nbsp; - Ist GBI schwer?&lt;br&gt;&amp;nbsp; - Wie ist eigentlich das Verhältnis zwischen Student_in und Professor_in / Dozent_in? Gibt es da Unterschiede?&lt;br&gt;&amp;nbsp; - Was kann ich an einer Universität machen außer in Vorlesungen zu gehen?&lt;span&gt;&lt;span&gt;&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;span&gt;&lt;span&gt;&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&lt;span&gt;Wir werden immer wieder einen Blick auf den Chat werfen und mit den späteren Teilen des Gesprächs auch verstärkt direkt auf diesen eingehen.&lt;/span&gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&lt;span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span&gt;&lt;span&gt;&lt;br&gt;Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.&lt;/span&gt;&lt;/span&gt;`,
            start: "2020-10-22T16:00:00+02:00",
            end: "2020-10-22T18:00:00+02:00"
        },
    
        {
            id: "6e5rfe2i53b5no33cnenrccdns",
            calendarId: "1",

            category: "time",
            title: "Live Musik",
            body: `Robert holt das Keyboard raus. Chillstream.`,
            start: "2020-10-22T21:00:00+02:00",
            end: "2020-10-22T22:30:00+02:00"
        },
    
        {
            id: "6qk4gesjaqbetjlug8ljs137qf",
            calendarId: "1",

            category: "time",
            title: "Wohnen in Karlsruhe Q&amp;A",
            body: `&lt;br&gt;Wohnungssuche ist frustrierend. Wir rede über unterschiedliche Wohnungsformen, den Karlsruhe Wohnungsmarkt und seine unterschiedlichen Anbieter.&lt;br&gt;&lt;ul&gt;&lt;li&gt;Was ist günstig / teuer?&lt;/li&gt;&lt;li&gt;Studenten orientiert oder allgemein?&lt;/li&gt;&lt;li&gt;Was existiert neben HaDiKo und Studierendenwerk und will mich nicht über den Tisch ziehen?&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;Dazu reden wir auch darüber was für einen &#34;das richtige ist&#34;. Darüber wie man später umzieht, wenn man gerade nicht das Studium beginnt, eine WG gründet und auf seine realen Kosten kommt.`,
            start: "2020-10-23T10:00:00+02:00",
            end: "2020-10-23T11:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201023T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-23T14:00:00+02:00",
            end: "2020-10-23T16:00:00+02:00"
        },
    
        {
            id: "7rj5re9amuk30t6lfb3rjai7do",
            calendarId: "1",

            category: "time",
            title: "LA mit Benedikt",
            body: `
Das etwas andere (Spassige) Tutorium.

Mit Benedikt eurem Lieblings LA Tutor.`,
            start: "2020-10-23T16:00:00+02:00",
            end: "2020-10-23T17:30:00+02:00"
        },
    
        {
            id: "3ue8qrkagaiamambus6o30ip8u",
            calendarId: "1",

            category: "time",
            title: "Cocktails Machen &amp; Konsumieren",
            body: `Lust die Basics im Cocktails machen zu lernen? Aber keinen Bock sich selber zu blamieren. Dann schau zu wie das andere für euch machen. (Oder auch: Im Keller ist ein Haufen Alk vom letzten O-Phasen Cocktail Abend der weg muss.)`,
            start: "2020-10-23T20:00:00+02:00",
            end: "2020-10-24T00:00:00+02:00"
        },
    
        {
            id: "6ijo0rdqr5jlg85rhi4knm5f7n",
            calendarId: "1",

            category: "time",
            title: "24h Stream",
            body: `Ja guckt nicht mich an! Ich schreibe hier nur die Texte zusammen. Scheinbar meinen ein paar Tutoren sich 24 Stunden für euch vor der Kamera zum Affen zu machen. Vorausgesetzt zwischendurch kippt niemand um oder eine Schicht Tutoren taucht nicht auf, passiert hier wohl allerlei. Wir spielen Spiele, reden frei über was uns im Bezug auf Uni durch den Kopf geht oder holen euch auch mal per Voice Chat in den Stream rein (Mama ich bin im Fernsehen!)`,
            start: "2020-10-24T12:00:00+02:00",
            end: "2020-10-25T11:59:00+01:00"
        },
    
        {
            id: "3kohd5jjkq6op18uoqo5lo8s4o",
            calendarId: "1",

            category: "time",
            title: "Katerfrühstück",
            body: `Weil wir uns nach 24 Stunden streamen so an die Kamera gewöhnt haben, wollen wir sie auch beim Frühstück nicht missen. Voraussetzung für diesen Stream ist, dass sich Tutoren finden die dann schon wieder lebensfähig sind.`,
            start: "2020-10-25T12:00:00+01:00",
            end: "2020-10-25T13:30:00+01:00"
        },
    
        {
            id: "7hsqtoh9igcrjai8ai2r1r92io",
            calendarId: "1",

            category: "time",
            title: "Frühstücksstream mit Adrian (AStA)",
            body: `
Wir stellen vor: Adrian Keller. &#34;Innen-Referent für Gremien, Fachschaften und politische Bildung und StuPa-Abgeordneter&#34; (Das haben wir von der AStA Website geklaut. Glaubt mal nicht, dass wir das selber mal eben aus den Ärmel schütteln). Bei der Menge an Wörtern, ahnt der eine oder andere vielleicht schon, dass es um Politik geht. Hochschulpolitik!

Immer gut gekleidet und mit einem Lächeln, das tauglich ist euch alles zu verkaufen, reden wir darüber was der AStA eigentlich so macht! Konkret geht es um das Unifest, warum ihr alle kostenlos Nextbike nutzen könnt, Hochschulgruppen, Unigremien und ja, auch über Politik  an Hochschulen.`,
            start: "2020-10-26T10:00:00+01:00",
            end: "2020-10-26T11:30:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201026T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-26T14:00:00+01:00",
            end: "2020-10-26T16:00:00+01:00"
        },
    
        {
            id: "48jiltme7k621vdqrgj5lf8edr",
            calendarId: "1",

            category: "time",
            title: "Talk &amp; Chill: Leonid (Maddhe)",
            body: `&lt;br&gt;Normalerweise gibt es in der Mathefachschaft einmal in der Woche die Waffelstunde. Neben ganz viel leckeren Waffeln ist es jedem möglich in die Fachschaft zu kommen und in gemütlicher Stimmung Beratung zu erhalten oder sich die Wartezeit auf Altklausuren zu vers&lt;span&gt;&lt;span&gt;&lt;span&gt;üßen&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;.&lt;br&gt;&lt;br&gt;Nach einem Semester auf Entzug holen wir dies nun endlich nach. Und damit das auch für euch spannend ist, haben wir einen ganz Besonderen Gast eingeladen. Leonid! Vor ein paar Jahren noch Student (Wie ihr!) und aktives Fachschaftsmitglied (Wie ihr hoffentlich auch bald!), arbeitet nun seit einiger Zeit als wissenschaftlicher Mitarbeiter an der Mathefakultät. Wir kuscheln uns aufs Sofa, holen das Waffeleisen raus und reden über was uns so in den Sinn kommt oder ihr uns fragt.`,
            start: "2020-10-26T18:00:00+01:00",
            end: "2020-10-26T20:00:00+01:00"
        },
    
        {
            id: "2sgvom88nukqj7akhj5aoqjjce",
            calendarId: "1",

            category: "time",
            title: "Live Shader Programming",
            body: `Nachdem ihr seine kreative Seite ja schon beim Musik machen erleben durftet, zeigt euch Robert dieses Mal seine Skills im Shader programmieren. OMG der Mann ist so vielseitig &lt;3`,
            start: "2020-10-26T21:00:00+01:00",
            end: "2020-10-26T22:30:00+01:00"
        },
    
        {
            id: "262aneh52v181634vqkref8shj",
            calendarId: "1",

            category: "time",
            title: "Talk: Sauer (Online Lehre / Mathe)",
            body: `&lt;span&gt;&lt;br&gt;Wir reden mit Prof. Roman Sauer.&lt;br&gt;&lt;br&gt;Die Vorlesung Lineare Algebra wird jedes Jahr im &#34;Staffelstab&#34; Prinzip in der Mathefakultät weitergegeben. Auch wenn er dieses Jahr nicht euer Dozent sein wird, war er dies vor 2 Jahren bei vielen eurer Tutoren. Vor allem hat er aber viel Freude daran neue Mittel für die Didaktik zu erproben. Wir wollen mit Ihm einen &lt;i&gt;kleinen&lt;/i&gt; Überblick über die Lineare Algebra erlangen. Anschließend diskutieren wir mit Ihm seine Ansichten über Online Lehre. Welche Möglichkeiten bietet sich mit den Systemen am KIT, welche sind realistisch umsetzbar und was sind die Erfahrungen aus dem letzten Semester? Wir wollen unter diesem Aspekt den &#34;Corona Studentenalltag&#34; im Gegenspiel mit der Studentensicht diskutieren.&lt;br&gt;&lt;br&gt;Wir werden immer wieder einen Blick auf den Chat werfen und zwischendurch / abschnittsweise diesen direkt in das Gespräch mit aufnehmen.&lt;br&gt;&lt;br&gt;Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.&lt;/span&gt;`,
            start: "2020-10-27T10:00:00+01:00",
            end: "2020-10-27T12:00:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201027T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-27T14:00:00+01:00",
            end: "2020-10-27T16:00:00+01:00"
        },
    
        {
            id: "35knuubk3lajj79kpjemlains0",
            calendarId: "1",

            category: "time",
            title: "Kochen in 3 Schwierigkeitsstufen",
            body: `Wir kochen. Aber weil wir uns nicht für einen Schwierigkeitsgrad entscheiden konnten gleich in drei verschiedenen.`,
            start: "2020-10-27T19:00:00+01:00",
            end: "2020-10-27T22:00:00+01:00"
        },
    
        {
            id: "09om7sgnvhblj1u2qiqhn6a2vp",
            calendarId: "1",

            category: "time",
            title: "Was ist Fachschaft?",
            body: `Ihr habt vielleicht schon mitbekommen, dass die O-Phase im Allgemeinen von der Fachschaft organisiert und koordiniert wird. Aber wer oder was ist diese Fachschaft denn genau? Kann man da mitmachen? Das klären wir in diesem Stream.`,
            start: "2020-10-28T10:00:00+01:00",
            end: "2020-10-28T11:30:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201028T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-28T14:00:00+01:00",
            end: "2020-10-28T16:00:00+01:00"
        },
    
        {
            id: "1uk25ctth0a266e99hcs8mgter",
            calendarId: "1",

            category: "time",
            title: "Leben in Karlsruhe",
            body: `Neben dem eigentlichen studieren seit ihr bestimmt auch auf das berüchtigte &#34;Studentenleben&#34; gespannt. In diesem Stream wollen wir unsere Erfahrungen und Tipps mit allem, was nicht direkt mit dem studieren zu tun hat, mit euch teilen.`,
            start: "2020-10-28T17:00:00+01:00",
            end: "2020-10-28T18:30:00+01:00"
        },
    
        {
            id: "1ie1en9oh289o1t2e0a7de7rh4",
            calendarId: "1",

            category: "time",
            title: "Talk: Tichy",
            body: `
Wir reden mit Prof. Walter F. Tichy.

Er hat lange die Vorlesung Softwaretechnik 1 (2. Semester) gehalten. Neben dem fachlichen interessiert Ihn das Aufrechterhalten einer strukturierten Arbeitsweise unter Studenten. Wir reden mit Ihm über Organisation, Motivation und den Aufbau eines erfolgreichen Studienalltag.

Wir werden immer wieder einen Blick auf den Chat werfen, diesen aber größtenteils indirekt Einbinden.

Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.`,
            start: "2020-10-29T11:20:00+01:00",
            end: "2020-10-29T13:20:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201029T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-29T14:00:00+01:00",
            end: "2020-10-29T16:00:00+01:00"
        },
    
        {
            id: "5bv1h1io32m9uh1ec3rulhhll2",
            calendarId: "1",

            category: "time",
            title: "r/KaIT Browsen &amp; Unsinn",
            body: `Was wäre... nunja irgendetwas ohne Memes? Genau: voll doof. Weil Reddit eines der besten Mittel zum Prokrastinieren ist, stellen wir euch hier unter Anderem den KIT Subreddit vor.`,
            start: "2020-10-29T21:00:00+01:00",
            end: "2020-10-29T22:00:00+01:00"
        },
    
        {
            id: "0tefgs0gc0jffth1104jns89b9",
            calendarId: "1",

            category: "time",
            title: "Reste Q&amp;A",
            body: `2 Wochen O-Phase sind vorbei. Letzte Fragen bevor das Studium los geht?`,
            start: "2020-10-30T10:00:00+01:00",
            end: "2020-10-30T11:00:00+01:00"
        },
    
        {
            id: "0eaiq87d5fbivqjaem4re1vhpt",
            calendarId: "1",

            category: "time",
            title: "Behind the Scenes",
            body: `Wenn wir schon alles an Technik was wir in die Finger bekommen konnten zusammengekarrt haben, dann wollen wir euch das auch zeigen!`,
            start: "2020-10-30T14:00:00+01:00",
            end: "2020-10-30T15:00:00+01:00"
        },
    
        {
            id: "71vob33rfmp26dpqslvleq7i5f",
            calendarId: "1",

            category: "time",
            title: "Cocktails Machen &amp; Konsumieren",
            body: `Lust die Basics im Cocktails machen zu lernen? Aber keinen Bock sich selber zu blamieren. Dann schau zu wie das andere für euch machen. (Oder auch: Im Keller ist immer noch ein Haufen Alk vom letzten O-Phasen Cocktail Abend der weg muss.)  `,
            start: "2020-10-30T20:00:00+01:00",
            end: "2020-10-31T00:00:00+01:00"
        },
    
])

calendar2.createSchedules([
    
        {
            id: "76omfffcqnl6p81mi8j472875k",
            calendarId: "1",

            category: "time",
            title: "Begrüßungsveranstaltung",
            body: `Hier wollen wir vor Allem einfach mal &#34;Hallo&#34; sagen. Außerdem werden wir euch einen groben Überblick über die kommenden zwei Wochen geben. Auf den Stream folgt dann noch ein Kennenlernen auf unserem Discord.`,
            start: "2020-10-20T11:00:00+02:00",
            end: "2020-10-20T11:45:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201020T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-20T14:00:00+02:00",
            end: "2020-10-20T16:00:00+02:00"
        },
    
        {
            id: "7ttukdrp38a6q7q3sjhqf242nu",
            calendarId: "1",

            category: "time",
            title: "Spiele &amp; Interaktion",
            body: `Ein gemütlicher Stream um gemütlich etwas zu spielen um dabei etwas mit euch zu interagieren. Dieser Stream reiht sich dabei in die Reihe an &#34;Kennenlern-Streams&#34; ein, die wir als sinnvoll erachten um sowohl euch an die O-Phase zu gewöhnen als auch uns an die Streams.
Gemütlich! `,
            start: "2020-10-20T16:00:00+02:00",
            end: "2020-10-20T18:00:00+02:00"
        },
    
        {
            id: "38jpv262qraegpbbsnlg2uecpn",
            calendarId: "1",

            category: "time",
            title: "How to 1. Semester",
            body: `Wo bin ich hier gelandet? Was muss ich alles beachten? Wer erinnert mich an Fristen? Wann macht die Mensa auf? Diese und weitere Fragen schwirren vermutlich gerade in euren Köpfen herum. Wir versuchen sie zu beantworten und, wie sonst in der O-Phase eigentlich auch, euch einen möglichst Problem- und Sorgenfreien Einstieg in das Abenteuer Studium zu geben. `,
            start: "2020-10-21T10:00:00+02:00",
            end: "2020-10-21T11:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201021T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-21T14:00:00+02:00",
            end: "2020-10-21T16:00:00+02:00"
        },
    
        {
            id: "5a0pn04pdtc4rcohof438emhk9",
            calendarId: "1",

            category: "time",
            title: "Lasagne kochen",
            body: `Während eurem Studium werdet ihr eines schnell merken: Ihr habt regelmäßig Hunger. Um dem entgegenzukommen gibt es natürlich viele Möglichkeiten, aber die langfristig gesündeste und günstigste ist vermutlich selbst zu kochen. Vor Allem wenn man sich dabei mit Leuten zusammentun kann.
Lange Rede, kurzer Sinn: Wie der Titel schon sagt werden wir in diesem Stream versuchen (!) Lasagne zu kochen.`,
            start: "2020-10-21T16:00:00+02:00",
            end: "2020-10-21T19:00:00+02:00"
        },
    
        {
            id: "01oaf7tui5j4mdv9csuv1csjf5",
            calendarId: "1",

            category: "time",
            title: "Uni Orga Q&amp;A (Prüfungen etc.)",
            body: `Da euch wahrscheinlich schon brennend interessiert, wie das alles im Studium abläuft und wie sich der Alltag von der Schule unterscheidet, versuchen wir euch in diesem Stream möglichst professionell wirkende und im besten Fall auch hilfreiche Antworten zu geben. DIese basieren auf unseren zum Teil Jahre langen Erfahrungen, die mal mehr und mal weniger erfolgreich dem Studium zugewandt sind.`,
            start: "2020-10-22T10:00:00+02:00",
            end: "2020-10-22T11:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201022T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-22T14:00:00+02:00",
            end: "2020-10-22T16:00:00+02:00"
        },
    
        {
            id: "472o6uf8jec53c73jcduuijfq8",
            calendarId: "1",

            category: "time",
            title: "Talk: Worsch (GBI)",
            body: `&lt;span&gt;&lt;span&gt;Wir reden mit Dr. Thomas Worsch.&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;br&gt;&lt;br&gt;Er wird auch dieses Jahr eure Vorlesung &#34;Grundbegriffe der Informatik&#34; (GBI) halten. Als der Einstieg in die Informatik auf Universitätsniveau, machen wir mit Herrn Worsch die große &#34;Büchse der Pandora&#34; des Informatikstudiums auf. Wir reden darüber was Informatik denn eigentlich überhaupt bedeutet. Was GBI für einen Grundstein für das Studium legt und wie es dies macht. Dazu &lt;span&gt;möchten wir noch k&lt;/span&gt;onkret einige Fragen aufklären die sich sonst erst mit dem ersten Semester ergeben. Dazu gehört zum Beispiel:&lt;br&gt;&amp;nbsp; - Was ist in der Uni schwerer als in der Schule? Wie komme ich damit klar?&lt;br&gt;&amp;nbsp; - Ist GBI schwer?&lt;br&gt;&amp;nbsp; - Wie ist eigentlich das Verhältnis zwischen Student_in und Professor_in / Dozent_in? Gibt es da Unterschiede?&lt;br&gt;&amp;nbsp; - Was kann ich an einer Universität machen außer in Vorlesungen zu gehen?&lt;span&gt;&lt;span&gt;&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;span&gt;&lt;span&gt;&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&lt;span&gt;Wir werden immer wieder einen Blick auf den Chat werfen und mit den späteren Teilen des Gesprächs auch verstärkt direkt auf diesen eingehen.&lt;/span&gt;&lt;/span&gt;&lt;br&gt;&lt;span&gt;&lt;span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span&gt;&lt;span&gt;&lt;br&gt;Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.&lt;/span&gt;&lt;/span&gt;`,
            start: "2020-10-22T16:00:00+02:00",
            end: "2020-10-22T18:00:00+02:00"
        },
    
        {
            id: "6e5rfe2i53b5no33cnenrccdns",
            calendarId: "1",

            category: "time",
            title: "Live Musik",
            body: `Robert holt das Keyboard raus. Chillstream.`,
            start: "2020-10-22T21:00:00+02:00",
            end: "2020-10-22T22:30:00+02:00"
        },
    
        {
            id: "6qk4gesjaqbetjlug8ljs137qf",
            calendarId: "1",

            category: "time",
            title: "Wohnen in Karlsruhe Q&amp;A",
            body: `&lt;br&gt;Wohnungssuche ist frustrierend. Wir rede über unterschiedliche Wohnungsformen, den Karlsruhe Wohnungsmarkt und seine unterschiedlichen Anbieter.&lt;br&gt;&lt;ul&gt;&lt;li&gt;Was ist günstig / teuer?&lt;/li&gt;&lt;li&gt;Studenten orientiert oder allgemein?&lt;/li&gt;&lt;li&gt;Was existiert neben HaDiKo und Studierendenwerk und will mich nicht über den Tisch ziehen?&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;Dazu reden wir auch darüber was für einen &#34;das richtige ist&#34;. Darüber wie man später umzieht, wenn man gerade nicht das Studium beginnt, eine WG gründet und auf seine realen Kosten kommt.`,
            start: "2020-10-23T10:00:00+02:00",
            end: "2020-10-23T11:00:00+02:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201023T120000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-23T14:00:00+02:00",
            end: "2020-10-23T16:00:00+02:00"
        },
    
        {
            id: "7rj5re9amuk30t6lfb3rjai7do",
            calendarId: "1",

            category: "time",
            title: "LA mit Benedikt",
            body: `
Das etwas andere (Spassige) Tutorium.

Mit Benedikt eurem Lieblings LA Tutor.`,
            start: "2020-10-23T16:00:00+02:00",
            end: "2020-10-23T17:30:00+02:00"
        },
    
        {
            id: "3ue8qrkagaiamambus6o30ip8u",
            calendarId: "1",

            category: "time",
            title: "Cocktails Machen &amp; Konsumieren",
            body: `Lust die Basics im Cocktails machen zu lernen? Aber keinen Bock sich selber zu blamieren. Dann schau zu wie das andere für euch machen. (Oder auch: Im Keller ist ein Haufen Alk vom letzten O-Phasen Cocktail Abend der weg muss.)`,
            start: "2020-10-23T20:00:00+02:00",
            end: "2020-10-24T00:00:00+02:00"
        },
    
        {
            id: "6ijo0rdqr5jlg85rhi4knm5f7n",
            calendarId: "1",

            category: "time",
            title: "24h Stream",
            body: `Ja guckt nicht mich an! Ich schreibe hier nur die Texte zusammen. Scheinbar meinen ein paar Tutoren sich 24 Stunden für euch vor der Kamera zum Affen zu machen. Vorausgesetzt zwischendurch kippt niemand um oder eine Schicht Tutoren taucht nicht auf, passiert hier wohl allerlei. Wir spielen Spiele, reden frei über was uns im Bezug auf Uni durch den Kopf geht oder holen euch auch mal per Voice Chat in den Stream rein (Mama ich bin im Fernsehen!)`,
            start: "2020-10-24T12:00:00+02:00",
            end: "2020-10-25T11:59:00+01:00"
        },
    
        {
            id: "3kohd5jjkq6op18uoqo5lo8s4o",
            calendarId: "1",

            category: "time",
            title: "Katerfrühstück",
            body: `Weil wir uns nach 24 Stunden streamen so an die Kamera gewöhnt haben, wollen wir sie auch beim Frühstück nicht missen. Voraussetzung für diesen Stream ist, dass sich Tutoren finden die dann schon wieder lebensfähig sind.`,
            start: "2020-10-25T12:00:00+01:00",
            end: "2020-10-25T13:30:00+01:00"
        },
    
        {
            id: "7hsqtoh9igcrjai8ai2r1r92io",
            calendarId: "1",

            category: "time",
            title: "Frühstücksstream mit Adrian (AStA)",
            body: `
Wir stellen vor: Adrian Keller. &#34;Innen-Referent für Gremien, Fachschaften und politische Bildung und StuPa-Abgeordneter&#34; (Das haben wir von der AStA Website geklaut. Glaubt mal nicht, dass wir das selber mal eben aus den Ärmel schütteln). Bei der Menge an Wörtern, ahnt der eine oder andere vielleicht schon, dass es um Politik geht. Hochschulpolitik!

Immer gut gekleidet und mit einem Lächeln, das tauglich ist euch alles zu verkaufen, reden wir darüber was der AStA eigentlich so macht! Konkret geht es um das Unifest, warum ihr alle kostenlos Nextbike nutzen könnt, Hochschulgruppen, Unigremien und ja, auch über Politik  an Hochschulen.`,
            start: "2020-10-26T10:00:00+01:00",
            end: "2020-10-26T11:30:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201026T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-26T14:00:00+01:00",
            end: "2020-10-26T16:00:00+01:00"
        },
    
        {
            id: "48jiltme7k621vdqrgj5lf8edr",
            calendarId: "1",

            category: "time",
            title: "Talk &amp; Chill: Leonid (Maddhe)",
            body: `&lt;br&gt;Normalerweise gibt es in der Mathefachschaft einmal in der Woche die Waffelstunde. Neben ganz viel leckeren Waffeln ist es jedem möglich in die Fachschaft zu kommen und in gemütlicher Stimmung Beratung zu erhalten oder sich die Wartezeit auf Altklausuren zu vers&lt;span&gt;&lt;span&gt;&lt;span&gt;üßen&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;.&lt;br&gt;&lt;br&gt;Nach einem Semester auf Entzug holen wir dies nun endlich nach. Und damit das auch für euch spannend ist, haben wir einen ganz Besonderen Gast eingeladen. Leonid! Vor ein paar Jahren noch Student (Wie ihr!) und aktives Fachschaftsmitglied (Wie ihr hoffentlich auch bald!), arbeitet nun seit einiger Zeit als wissenschaftlicher Mitarbeiter an der Mathefakultät. Wir kuscheln uns aufs Sofa, holen das Waffeleisen raus und reden über was uns so in den Sinn kommt oder ihr uns fragt.`,
            start: "2020-10-26T18:00:00+01:00",
            end: "2020-10-26T20:00:00+01:00"
        },
    
        {
            id: "2sgvom88nukqj7akhj5aoqjjce",
            calendarId: "1",

            category: "time",
            title: "Live Shader Programming",
            body: `Nachdem ihr seine kreative Seite ja schon beim Musik machen erleben durftet, zeigt euch Robert dieses Mal seine Skills im Shader programmieren. OMG der Mann ist so vielseitig &lt;3`,
            start: "2020-10-26T21:00:00+01:00",
            end: "2020-10-26T22:30:00+01:00"
        },
    
        {
            id: "262aneh52v181634vqkref8shj",
            calendarId: "1",

            category: "time",
            title: "Talk: Sauer (Online Lehre / Mathe)",
            body: `&lt;span&gt;&lt;br&gt;Wir reden mit Prof. Roman Sauer.&lt;br&gt;&lt;br&gt;Die Vorlesung Lineare Algebra wird jedes Jahr im &#34;Staffelstab&#34; Prinzip in der Mathefakultät weitergegeben. Auch wenn er dieses Jahr nicht euer Dozent sein wird, war er dies vor 2 Jahren bei vielen eurer Tutoren. Vor allem hat er aber viel Freude daran neue Mittel für die Didaktik zu erproben. Wir wollen mit Ihm einen &lt;i&gt;kleinen&lt;/i&gt; Überblick über die Lineare Algebra erlangen. Anschließend diskutieren wir mit Ihm seine Ansichten über Online Lehre. Welche Möglichkeiten bietet sich mit den Systemen am KIT, welche sind realistisch umsetzbar und was sind die Erfahrungen aus dem letzten Semester? Wir wollen unter diesem Aspekt den &#34;Corona Studentenalltag&#34; im Gegenspiel mit der Studentensicht diskutieren.&lt;br&gt;&lt;br&gt;Wir werden immer wieder einen Blick auf den Chat werfen und zwischendurch / abschnittsweise diesen direkt in das Gespräch mit aufnehmen.&lt;br&gt;&lt;br&gt;Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.&lt;/span&gt;`,
            start: "2020-10-27T10:00:00+01:00",
            end: "2020-10-27T12:00:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201027T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe M.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-27T14:00:00+01:00",
            end: "2020-10-27T16:00:00+01:00"
        },
    
        {
            id: "35knuubk3lajj79kpjemlains0",
            calendarId: "1",

            category: "time",
            title: "Kochen in 3 Schwierigkeitsstufen",
            body: `Wir kochen. Aber weil wir uns nicht für einen Schwierigkeitsgrad entscheiden konnten gleich in drei verschiedenen.`,
            start: "2020-10-27T19:00:00+01:00",
            end: "2020-10-27T22:00:00+01:00"
        },
    
        {
            id: "09om7sgnvhblj1u2qiqhn6a2vp",
            calendarId: "1",

            category: "time",
            title: "Was ist Fachschaft?",
            body: `Ihr habt vielleicht schon mitbekommen, dass die O-Phase im Allgemeinen von der Fachschaft organisiert und koordiniert wird. Aber wer oder was ist diese Fachschaft denn genau? Kann man da mitmachen? Das klären wir in diesem Stream.`,
            start: "2020-10-28T10:00:00+01:00",
            end: "2020-10-28T11:30:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201028T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Mathe B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-28T14:00:00+01:00",
            end: "2020-10-28T16:00:00+01:00"
        },
    
        {
            id: "1uk25ctth0a266e99hcs8mgter",
            calendarId: "1",

            category: "time",
            title: "Leben in Karlsruhe",
            body: `Neben dem eigentlichen studieren seit ihr bestimmt auch auf das berüchtigte &#34;Studentenleben&#34; gespannt. In diesem Stream wollen wir unsere Erfahrungen und Tipps mit allem, was nicht direkt mit dem studieren zu tun hat, mit euch teilen.`,
            start: "2020-10-28T17:00:00+01:00",
            end: "2020-10-28T18:30:00+01:00"
        },
    
        {
            id: "1ie1en9oh289o1t2e0a7de7rh4",
            calendarId: "1",

            category: "time",
            title: "Talk: Tichy",
            body: `
Wir reden mit Prof. Walter F. Tichy.

Er hat lange die Vorlesung Softwaretechnik 1 (2. Semester) gehalten. Neben dem fachlichen interessiert Ihn das Aufrechterhalten einer strukturierten Arbeitsweise unter Studenten. Wir reden mit Ihm über Organisation, Motivation und den Aufbau eines erfolgreichen Studienalltag.

Wir werden immer wieder einen Blick auf den Chat werfen, diesen aber größtenteils indirekt Einbinden.

Diese Ereignis wird auch über den Kanal der Fachschaft übertragen.`,
            start: "2020-10-29T11:20:00+01:00",
            end: "2020-10-29T13:20:00+01:00"
        },
    
        {
            id: "3f7hkr8pbso23fhm2dja15gjb0_20201029T130000Z",
            calendarId: "1",

            category: "time",
            title: "FBI (FS)",
            body: `Fachbereichsinformation, Info B.Sc.

Livestream der Fachschaft
//ignore`,
            start: "2020-10-29T14:00:00+01:00",
            end: "2020-10-29T16:00:00+01:00"
        },
    
        {
            id: "5bv1h1io32m9uh1ec3rulhhll2",
            calendarId: "1",

            category: "time",
            title: "r/KaIT Browsen &amp; Unsinn",
            body: `Was wäre... nunja irgendetwas ohne Memes? Genau: voll doof. Weil Reddit eines der besten Mittel zum Prokrastinieren ist, stellen wir euch hier unter Anderem den KIT Subreddit vor.`,
            start: "2020-10-29T21:00:00+01:00",
            end: "2020-10-29T22:00:00+01:00"
        },
    
        {
            id: "0tefgs0gc0jffth1104jns89b9",
            calendarId: "1",

            category: "time",
            title: "Reste Q&amp;A",
            body: `2 Wochen O-Phase sind vorbei. Letzte Fragen bevor das Studium los geht?`,
            start: "2020-10-30T10:00:00+01:00",
            end: "2020-10-30T11:00:00+01:00"
        },
    
        {
            id: "0eaiq87d5fbivqjaem4re1vhpt",
            calendarId: "1",

            category: "time",
            title: "Behind the Scenes",
            body: `Wenn wir schon alles an Technik was wir in die Finger bekommen konnten zusammengekarrt haben, dann wollen wir euch das auch zeigen!`,
            start: "2020-10-30T14:00:00+01:00",
            end: "2020-10-30T15:00:00+01:00"
        },
    
        {
            id: "71vob33rfmp26dpqslvleq7i5f",
            calendarId: "1",

            category: "time",
            title: "Cocktails Machen &amp; Konsumieren",
            body: `Lust die Basics im Cocktails machen zu lernen? Aber keinen Bock sich selber zu blamieren. Dann schau zu wie das andere für euch machen. (Oder auch: Im Keller ist immer noch ein Haufen Alk vom letzten O-Phasen Cocktail Abend der weg muss.)  `,
            start: "2020-10-30T20:00:00+01:00",
            end: "2020-10-31T00:00:00+01:00"
        },
    
])

calendar1.setDate("2020-10-19")
calendar2.setDate("2020-10-26")