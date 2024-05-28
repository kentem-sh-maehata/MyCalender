{
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const today = new Date().toLocaleString()
  console.log(today)

  function getCalenderHead(year,month){
    const dates:object[] = []
    const d = new Date(year, month, 0).getDate() //前月の最終日付
    const n = new Date(year, month, 1).getDay()  //今月1日の曜日

    for(let i=d-n+1;i<=d;i++){
      dates.push({
        date:i,
        isToday:false,
        isDisabled:true,
      })
    }
    console.log(dates)
    return dates
  }
  // getCalenderHead()

  function getCalenderBody(year,month){
    const dates:object[] = []
    const lastDate = new Date(year,month+1,0).getDate()

    for(let i=1;i<= lastDate; i++){
      dates.push({
        date:i,
        isToday: false,
        isDisabled: false,
      })
    }
    console.log(dates)
    return dates
  }
  // getCalenderBody()

  function getCalenderFoot(year,month){
    const dates:object[] = []
    const d = new Date(year,month+1,0).getDate() //当月最終日
    const n = new Date(year,month+1,0).getDay()  //当月最終曜日

    let date = 1
    for(let i=n+1;i<7;i++){
      dates.push({
        date:date,
        isToday:false,
        isDesabled:true,
      })
      date ++
    }
    console.log(dates)
    return dates
  }
  // getCalenderFoot()

  function getCalender(year,month){
    const dates:object[] = []
    dates.push(...getCalenderHead(year,month))
    dates.push(...getCalenderBody(year,month))
    dates.push(...getCalenderFoot(year,month))
    console.log(dates)
  }
  getCalender(year,month)
}