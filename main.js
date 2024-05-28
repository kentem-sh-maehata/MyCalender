{
    var year_1 = new Date().getFullYear();
    var month_1 = new Date().getMonth();
    var today = new Date().toLocaleString();
    var tbody_1 = document.querySelector("tbody");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
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
        while (tbody_1 === null || tbody_1 === void 0 ? void 0 : tbody_1.firstChild) { //ドットインストールから
            tbody_1.removeChild(tbody_1.firstChild);
        }
        var dates = [];
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
            tbody_1 === null || tbody_1 === void 0 ? void 0 : tbody_1.append(tr);
        }
    }
    //カレンダー作成の実行
    setCalender(year_1, month_1);
    next === null || next === void 0 ? void 0 : next.addEventListener('click', function () {
        month_1++;
        if (month_1 === 13) {
            month_1 = 1;
            year_1++;
        }
        setCalender(year_1, month_1);
    });
    prev === null || prev === void 0 ? void 0 : prev.addEventListener('click', function () {
        month_1--;
        if (month_1 === 0) {
            month_1 = 12;
            year_1--;
        }
        setCalender(year_1, month_1);
    });
}
