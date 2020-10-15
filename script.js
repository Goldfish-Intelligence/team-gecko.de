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
    }
};
var calendar1 = new tui.Calendar('#calendar-1', calOptions);
var calendar2 = new tui.Calendar('#calendar-2', calOptions);
calendar2.setOptions({week: {workweek: true}});

calendar1.createSchedules([
    
    {
        id: "76omfffcqnl6p81mi8j472875k",
        calendarId: "1",

        category: "time",
        title: "Begrüßungsveranstaltung",
        start: "2020-10-19T10:00:00+02:00",
        end: "2020-10-19T12:00:00+02:00"
    },
    
    {
        id: "7ttukdrp38a6q7q3sjhqf242nu",
        calendarId: "1",

        category: "time",
        title: "Spiele &amp; Interaktion",
        start: "2020-10-19T16:00:00+02:00",
        end: "2020-10-19T18:00:00+02:00"
    },
    
    {
        id: "4pgs92al3tjl983eose2u6d0br",
        calendarId: "1",

        category: "time",
        title: "Allgemeiner Q&amp;A",
        start: "2020-10-20T10:00:00+02:00",
        end: "2020-10-20T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201020T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-20T14:00:00+02:00",
        end: "2020-10-20T16:00:00+02:00"
    },
    
    {
        id: "5a0pn04pdtc4rcohof438emhk9",
        calendarId: "1",

        category: "time",
        title: "Lasagne kochen",
        start: "2020-10-20T16:00:00+02:00",
        end: "2020-10-20T19:00:00+02:00"
    },
    
    {
        id: "6qk4gesjaqbetjlug8ljs137qf",
        calendarId: "1",

        category: "time",
        title: "Wohnen in Karlsruhe Q&amp;A",
        start: "2020-10-21T10:00:00+02:00",
        end: "2020-10-21T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201021T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-21T14:00:00+02:00",
        end: "2020-10-21T16:00:00+02:00"
    },
    
    {
        id: "38jpv262qraegpbbsnlg2uecpn",
        calendarId: "1",

        category: "time",
        title: "How to 1. Semester",
        start: "2020-10-22T10:00:00+02:00",
        end: "2020-10-22T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201022T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-22T14:00:00+02:00",
        end: "2020-10-22T16:00:00+02:00"
    },
    
    {
        id: "472o6uf8jec53c73jcduuijfq8",
        calendarId: "1",

        category: "time",
        title: "Talk: Worsch (GBI)",
        start: "2020-10-22T16:00:00+02:00",
        end: "2020-10-22T18:00:00+02:00"
    },
    
    {
        id: "6e5rfe2i53b5no33cnenrccdns",
        calendarId: "1",

        category: "time",
        title: "Live Musik",
        start: "2020-10-22T21:00:00+02:00",
        end: "2020-10-22T22:30:00+02:00"
    },
    
    {
        id: "01oaf7tui5j4mdv9csuv1csjf5",
        calendarId: "1",

        category: "time",
        title: "Uni Orga Q&amp;A (Prüfungen etc.)",
        start: "2020-10-23T10:00:00+02:00",
        end: "2020-10-23T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201023T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-23T14:00:00+02:00",
        end: "2020-10-23T16:00:00+02:00"
    },
    
    {
        id: "7rj5re9amuk30t6lfb3rjai7do",
        calendarId: "1",

        category: "time",
        title: "LA mit Benedikt",
        start: "2020-10-23T16:00:00+02:00",
        end: "2020-10-23T17:30:00+02:00"
    },
    
    {
        id: "3ue8qrkagaiamambus6o30ip8u",
        calendarId: "1",

        category: "time",
        title: "Cocktails Machen &amp; Konsumieren",
        start: "2020-10-23T20:00:00+02:00",
        end: "2020-10-24T00:00:00+02:00"
    },
    
    {
        id: "6ijo0rdqr5jlg85rhi4knm5f7n",
        calendarId: "1",

        category: "time",
        title: "24h Stream",
        start: "2020-10-24T12:00:00+02:00",
        end: "2020-10-25T11:59:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201024T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-24T14:00:00+02:00",
        end: "2020-10-24T16:00:00+02:00"
    },
    
    {
        id: "3kohd5jjkq6op18uoqo5lo8s4o",
        calendarId: "1",

        category: "time",
        title: "Katerfrühstück",
        start: "2020-10-25T12:00:00+01:00",
        end: "2020-10-25T13:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201025T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-25T14:00:00+01:00",
        end: "2020-10-25T16:00:00+01:00"
    },
    
    {
        id: "7hsqtoh9igcrjai8ai2r1r92io",
        calendarId: "1",

        category: "time",
        title: "Frühstücksstream mit Adrian (AStA)",
        start: "2020-10-26T10:00:00+01:00",
        end: "2020-10-26T11:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201026T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-26T14:00:00+01:00",
        end: "2020-10-26T16:00:00+01:00"
    },
    
    {
        id: "48jiltme7k621vdqrgj5lf8edr",
        calendarId: "1",

        category: "time",
        title: "Talk &amp; Chill: Leonid (Maddhe)",
        start: "2020-10-26T18:00:00+01:00",
        end: "2020-10-26T20:00:00+01:00"
    },
    
    {
        id: "2sgvom88nukqj7akhj5aoqjjce",
        calendarId: "1",

        category: "time",
        title: "Live Shader Programming",
        start: "2020-10-26T21:00:00+01:00",
        end: "2020-10-26T22:30:00+01:00"
    },
    
    {
        id: "0eaiq87d5fbivqjaem4re1vhpt",
        calendarId: "1",

        category: "time",
        title: "Behind the Scenes",
        start: "2020-10-27T10:00:00+01:00",
        end: "2020-10-27T11:00:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201027T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-27T14:00:00+01:00",
        end: "2020-10-27T16:00:00+01:00"
    },
    
    {
        id: "262aneh52v181634vqkref8shj",
        calendarId: "1",

        category: "time",
        title: "Talk: Sauer (Online Lehre / Mathe)",
        start: "2020-10-27T16:00:00+01:00",
        end: "2020-10-27T18:00:00+01:00"
    },
    
    {
        id: "35knuubk3lajj79kpjemlains0",
        calendarId: "1",

        category: "time",
        title: "Kochen in 3 Schwierigkeitsstufen",
        start: "2020-10-27T19:00:00+01:00",
        end: "2020-10-27T22:00:00+01:00"
    },
    
    {
        id: "09om7sgnvhblj1u2qiqhn6a2vp",
        calendarId: "1",

        category: "time",
        title: "Was ist Fachschaft?",
        start: "2020-10-28T10:00:00+01:00",
        end: "2020-10-28T11:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201028T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-28T14:00:00+01:00",
        end: "2020-10-28T16:00:00+01:00"
    },
    
    {
        id: "1uk25ctth0a266e99hcs8mgter",
        calendarId: "1",

        category: "time",
        title: "Leben in Karlsruhe",
        start: "2020-10-29T10:00:00+01:00",
        end: "2020-10-29T11:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201029T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-29T14:00:00+01:00",
        end: "2020-10-29T16:00:00+01:00"
    },
    
    {
        id: "1ie1en9oh289o1t2e0a7de7rh4",
        calendarId: "1",

        category: "time",
        title: "Talk: Tichy",
        start: "2020-10-29T16:00:00+01:00",
        end: "2020-10-29T18:00:00+01:00"
    },
    
    {
        id: "5bv1h1io32m9uh1ec3rulhhll2",
        calendarId: "1",

        category: "time",
        title: "r/KaIT Browsen &amp; Unsinn",
        start: "2020-10-29T21:00:00+01:00",
        end: "2020-10-29T22:00:00+01:00"
    },
    
    {
        id: "0tefgs0gc0jffth1104jns89b9",
        calendarId: "1",

        category: "time",
        title: "Reste Q&amp;A",
        start: "2020-10-30T10:00:00+01:00",
        end: "2020-10-30T11:00:00+01:00"
    },
    
    {
        id: "71vob33rfmp26dpqslvleq7i5f",
        calendarId: "1",

        category: "time",
        title: "Cocktails Machen &amp; Konsumieren",
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
        start: "2020-10-19T10:00:00+02:00",
        end: "2020-10-19T12:00:00+02:00"
    },
    
    {
        id: "7ttukdrp38a6q7q3sjhqf242nu",
        calendarId: "1",

        category: "time",
        title: "Spiele &amp; Interaktion",
        start: "2020-10-19T16:00:00+02:00",
        end: "2020-10-19T18:00:00+02:00"
    },
    
    {
        id: "4pgs92al3tjl983eose2u6d0br",
        calendarId: "1",

        category: "time",
        title: "Allgemeiner Q&amp;A",
        start: "2020-10-20T10:00:00+02:00",
        end: "2020-10-20T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201020T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-20T14:00:00+02:00",
        end: "2020-10-20T16:00:00+02:00"
    },
    
    {
        id: "5a0pn04pdtc4rcohof438emhk9",
        calendarId: "1",

        category: "time",
        title: "Lasagne kochen",
        start: "2020-10-20T16:00:00+02:00",
        end: "2020-10-20T19:00:00+02:00"
    },
    
    {
        id: "6qk4gesjaqbetjlug8ljs137qf",
        calendarId: "1",

        category: "time",
        title: "Wohnen in Karlsruhe Q&amp;A",
        start: "2020-10-21T10:00:00+02:00",
        end: "2020-10-21T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201021T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-21T14:00:00+02:00",
        end: "2020-10-21T16:00:00+02:00"
    },
    
    {
        id: "38jpv262qraegpbbsnlg2uecpn",
        calendarId: "1",

        category: "time",
        title: "How to 1. Semester",
        start: "2020-10-22T10:00:00+02:00",
        end: "2020-10-22T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201022T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-22T14:00:00+02:00",
        end: "2020-10-22T16:00:00+02:00"
    },
    
    {
        id: "472o6uf8jec53c73jcduuijfq8",
        calendarId: "1",

        category: "time",
        title: "Talk: Worsch (GBI)",
        start: "2020-10-22T16:00:00+02:00",
        end: "2020-10-22T18:00:00+02:00"
    },
    
    {
        id: "6e5rfe2i53b5no33cnenrccdns",
        calendarId: "1",

        category: "time",
        title: "Live Musik",
        start: "2020-10-22T21:00:00+02:00",
        end: "2020-10-22T22:30:00+02:00"
    },
    
    {
        id: "01oaf7tui5j4mdv9csuv1csjf5",
        calendarId: "1",

        category: "time",
        title: "Uni Orga Q&amp;A (Prüfungen etc.)",
        start: "2020-10-23T10:00:00+02:00",
        end: "2020-10-23T11:00:00+02:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201023T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-23T14:00:00+02:00",
        end: "2020-10-23T16:00:00+02:00"
    },
    
    {
        id: "7rj5re9amuk30t6lfb3rjai7do",
        calendarId: "1",

        category: "time",
        title: "LA mit Benedikt",
        start: "2020-10-23T16:00:00+02:00",
        end: "2020-10-23T17:30:00+02:00"
    },
    
    {
        id: "3ue8qrkagaiamambus6o30ip8u",
        calendarId: "1",

        category: "time",
        title: "Cocktails Machen &amp; Konsumieren",
        start: "2020-10-23T20:00:00+02:00",
        end: "2020-10-24T00:00:00+02:00"
    },
    
    {
        id: "6ijo0rdqr5jlg85rhi4knm5f7n",
        calendarId: "1",

        category: "time",
        title: "24h Stream",
        start: "2020-10-24T12:00:00+02:00",
        end: "2020-10-25T11:59:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201024T120000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-24T14:00:00+02:00",
        end: "2020-10-24T16:00:00+02:00"
    },
    
    {
        id: "3kohd5jjkq6op18uoqo5lo8s4o",
        calendarId: "1",

        category: "time",
        title: "Katerfrühstück",
        start: "2020-10-25T12:00:00+01:00",
        end: "2020-10-25T13:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201025T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-25T14:00:00+01:00",
        end: "2020-10-25T16:00:00+01:00"
    },
    
    {
        id: "7hsqtoh9igcrjai8ai2r1r92io",
        calendarId: "1",

        category: "time",
        title: "Frühstücksstream mit Adrian (AStA)",
        start: "2020-10-26T10:00:00+01:00",
        end: "2020-10-26T11:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201026T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-26T14:00:00+01:00",
        end: "2020-10-26T16:00:00+01:00"
    },
    
    {
        id: "48jiltme7k621vdqrgj5lf8edr",
        calendarId: "1",

        category: "time",
        title: "Talk &amp; Chill: Leonid (Maddhe)",
        start: "2020-10-26T18:00:00+01:00",
        end: "2020-10-26T20:00:00+01:00"
    },
    
    {
        id: "2sgvom88nukqj7akhj5aoqjjce",
        calendarId: "1",

        category: "time",
        title: "Live Shader Programming",
        start: "2020-10-26T21:00:00+01:00",
        end: "2020-10-26T22:30:00+01:00"
    },
    
    {
        id: "0eaiq87d5fbivqjaem4re1vhpt",
        calendarId: "1",

        category: "time",
        title: "Behind the Scenes",
        start: "2020-10-27T10:00:00+01:00",
        end: "2020-10-27T11:00:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201027T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-27T14:00:00+01:00",
        end: "2020-10-27T16:00:00+01:00"
    },
    
    {
        id: "262aneh52v181634vqkref8shj",
        calendarId: "1",

        category: "time",
        title: "Talk: Sauer (Online Lehre / Mathe)",
        start: "2020-10-27T16:00:00+01:00",
        end: "2020-10-27T18:00:00+01:00"
    },
    
    {
        id: "35knuubk3lajj79kpjemlains0",
        calendarId: "1",

        category: "time",
        title: "Kochen in 3 Schwierigkeitsstufen",
        start: "2020-10-27T19:00:00+01:00",
        end: "2020-10-27T22:00:00+01:00"
    },
    
    {
        id: "09om7sgnvhblj1u2qiqhn6a2vp",
        calendarId: "1",

        category: "time",
        title: "Was ist Fachschaft?",
        start: "2020-10-28T10:00:00+01:00",
        end: "2020-10-28T11:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201028T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-28T14:00:00+01:00",
        end: "2020-10-28T16:00:00+01:00"
    },
    
    {
        id: "1uk25ctth0a266e99hcs8mgter",
        calendarId: "1",

        category: "time",
        title: "Leben in Karlsruhe",
        start: "2020-10-29T10:00:00+01:00",
        end: "2020-10-29T11:30:00+01:00"
    },
    
    {
        id: "3f7hkr8pbso23fhm2dja15gjb0_20201029T130000Z",
        calendarId: "1",

        category: "time",
        title: "FBI (FS)",
        start: "2020-10-29T14:00:00+01:00",
        end: "2020-10-29T16:00:00+01:00"
    },
    
    {
        id: "1ie1en9oh289o1t2e0a7de7rh4",
        calendarId: "1",

        category: "time",
        title: "Talk: Tichy",
        start: "2020-10-29T16:00:00+01:00",
        end: "2020-10-29T18:00:00+01:00"
    },
    
    {
        id: "5bv1h1io32m9uh1ec3rulhhll2",
        calendarId: "1",

        category: "time",
        title: "r/KaIT Browsen &amp; Unsinn",
        start: "2020-10-29T21:00:00+01:00",
        end: "2020-10-29T22:00:00+01:00"
    },
    
    {
        id: "0tefgs0gc0jffth1104jns89b9",
        calendarId: "1",

        category: "time",
        title: "Reste Q&amp;A",
        start: "2020-10-30T10:00:00+01:00",
        end: "2020-10-30T11:00:00+01:00"
    },
    
    {
        id: "71vob33rfmp26dpqslvleq7i5f",
        calendarId: "1",

        category: "time",
        title: "Cocktails Machen &amp; Konsumieren",
        start: "2020-10-30T20:00:00+01:00",
        end: "2020-10-31T00:00:00+01:00"
    },
    
])

calendar1.setDate("2020-10-19")
calendar2.setDate("2020-10-26")