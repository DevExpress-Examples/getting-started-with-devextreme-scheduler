$(function(){
    var scheduler = $("#scheduler").dxScheduler({
        dataSource: data,
        views: ["day", "week", "month", "timelineWeek"],
        currentView: "week",
        startDayHour: 10,
        currentDate: new Date(2021, 4, 25),
        height: 600,
        resources: [
            {
                fieldExpr: "priorityId",
                dataSource: priorities,
                label: "Priority"
            }
        ],
        groups: ["priorityId"],
        editing: {
            allowDragging: false,
            allowTimeZoneEditing: true
        },
        timeZone: "Europe/Berlin",
        // adaptivityEnabled: true,
    }).dxScheduler("instance");
});