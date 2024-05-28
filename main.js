{
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var today = new Date().toLocaleString();
    console.log(today);
    function getCalenderHead(year, month) {
        var dates = [];
        var d = new Date(year, month, 0).getDate(); //前月の最終日付
        var n = new Date(year, month, 1).getDay(); //今月1日の曜日
        for (var i = d - n + 1; i <= d; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }
        console.log(dates);
        return dates;
    }
    // getCalenderHead()
    function getCalenderBody(year, month) {
        var dates = [];
        var lastDate = new Date(year, month + 1, 0).getDate();
        for (var i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false,
            });
        }
        console.log(dates);
        return dates;
    }
    // getCalenderBody()
    function getCalenderFoot(year, month) {
        var dates = [];
        var d = new Date(year, month + 1, 0).getDate(); //当月最終日
        var n = new Date(year, month + 1, 0).getDay(); //当月最終曜日
        var date = 1;
        for (var i = n + 1; i < 7; i++) {
            dates.push({
                date: date,
                isToday: false,
                isDesabled: true,
            });
            date++;
        }
        console.log(dates);
        return dates;
    }
    // getCalenderFoot()
    function getCalender(year, month) {
        var dates = [];
        dates.push.apply(dates, getCalenderHead(year, month));
        dates.push.apply(dates, getCalenderBody(year, month));
        dates.push.apply(dates, getCalenderFoot(year, month));
        console.log(dates);
    }
    getCalender(year, month);
}
