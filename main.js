{
    var year_1 = new Date().getFullYear();
    var month_1 = new Date().getMonth();
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
        console.log(dates);
        return dates;
    }
    // getCalenderHead()
    // function getCalenderBody(year,month){
    //   const dates:object[] = []
    //   const lastDate = new Date(year,month+1,0).getDate()
    //   for(let i=1;i<= lastDate; i++){
    //     dates.push({
    //       date:i,
    //       isToday: false,
    //       isDisabled: false,
    //     })
    //   }
    //   console.log(dates)
    //   return dates
    // }
    // // getCalenderBody()
    // function getCalenderFoot(year,month){
    //   const dates:object[] = []
    //   const d = new Date(year,month+1,0).getDate() //当月最終日
    //   const n = new Date(year,month+1,0).getDay()  //当月最終曜日
    //   let date = 1
    //   for(let i=n+1;i<7;i++){
    //     dates.push({
    //       date:date,
    //       isToday:false,
    //       isDisabled:true,
    //     })
    //     date ++
    //   }
    //   console.log(dates)
    //   return dates
    // }
    // getCalenderFoot()
    function setCalender() {
        var dates = [];
        dates.push(getCalender(year_1, month_1));
        console.log(dates);
        for (var i = 0; i < dates.length / 7; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
            }
        }
    }
    getCalender(year_1, month_1);
}
