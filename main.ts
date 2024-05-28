{
  const year:number = new Date().getFullYear()
  const month:number = new Date().getMonth()
  const today = new Date().toLocaleString()
  console.log(today)

  function getCalender(year:number,month:number){
    const dates:object[] = []

    //head部分
    const d = new Date(year, month, 0).getDate() //前月の最終日付
    const n = new Date(year, month, 1).getDay()  //今月1日の曜日

    for(let i=d-n+1;i<=d;i++){
      dates.push({
        date:i,
        isToday:false,
        isDisabled:true,
      })
    }

    // body部分
    const lastDate = new Date(year,month+1,0).getDate()

    for(let i=1;i<= lastDate; i++){
      dates.push({
        date:i,
        isToday: false,
        isDisabled: false,
      })
    }

    //foot部分
    console.log(dates)
    return dates
  }

  function setCalender(){
    const dates:object[] = []
    dates.push(getCalender(year,month))
    console.log(dates)
    
    for(let i=0;i<dates.length/7;i++){
      const tr = document.createElement("tr")
      for(let j=0;j<7;j++){
        
      }
    }
  }
  getCalender(year,month)
}