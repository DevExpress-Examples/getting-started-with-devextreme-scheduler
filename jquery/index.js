$(function(){
    $("#scheduler").dxScheduler({
        dataSource: appointments,
        textExpr: "title",
        startDateExpr: "start",
        endDateExpr: "end",
        allDayExpr: "dayLong",
        currentDate: new Date(2021, 4, 25),
        recurrenceRuleExpr: "recurrence",
        views: [{
            type: "day",
            startDayHour: 10,
            endDayHour: 22
        }, {
            type: "week",
            startDayHour: 10,
            endDayHour: 22
        },
        "month"
        ],
        currentView: "week",
        editing: {
            allowDragging: false,
            allowTimeZoneEditing: true
        },
        timeZone: "Europe/Berlin",
        adaptivityEnabled: true
    });
});