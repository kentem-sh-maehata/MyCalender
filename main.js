{
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var today = new Date().toLocaleString();
    console.log(today);
    function getCalender(year, month) {
        var dates = [];
        //head部分
        var d = new Date(year, month, 0).getDate(); //前月の最終日付
        var n = new Date(year, month, 1).getDay(); //今月1日の曜日
        for (var i = d - n + 1; i <= d; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }
        // body部分
        var lastDate = new Date(year, month + 1, 0).getDate();
        for (var i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false,
            });
        }
        //foot部分
        var n2 = new Date(year, month + 1, 0).getDay(); //当月最終曜日
        var date = 1;
        for (var i = n2 + 1; i < 7; i++) {
            dates.push({
                date: date,
                isToday: false,
                isDisabled: true,
            });
            date++;
        }
        console.log(dates);
        return dates;
    }
    function setCalender(year, month) {
        var dates = [];
        var tbody = document.querySelector("tbody");
        dates.push.apply(dates, getCalender(year, month));
        var idx = 0;
        for (var i = 0; i < dates.length / 7; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                var td = document.createElement("td");
                var dateObj = dates[idx];
                if ("date" in dateObj)
                    td.innerHTML = String(dateObj.date);
                if ("isDisabled" in dateObj && dateObj.isDisabled)
                    td.classList.add('disabled');
                tr.appendChild(td);
                idx++;
            }
            tbody === null || tbody === void 0 ? void 0 : tbody.append(tr);
        }
    }
    setCalender(year, month);
}
