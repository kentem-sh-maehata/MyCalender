{
  let year = new Date().getFullYear()
  let month = new Date().getMonth()
  let today = new Date().toLocaleString()

  const tbody = document.querySelector("tbody")
  const next = document.getElementById("next")
  const prev = document.getElementById("prev")
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
      const n2 = new Date(year,month+1,0).getDay()  //当月最終曜日

      let date = 1
      for(let i=n2+1;i<7;i++){
        dates.push({
          date:date,
          isToday:false,
          isDisabled:true,
        })
        date ++
      }
      console.log(dates)
      return dates
  }


  function setCalender(year:number,month:number){
    while(tbody?.firstChild){ //ドットインストールから
      tbody.removeChild(tbody.firstChild)
    }
    const dates:object[] = []
    dates.push(...getCalender(year,month))
    
    let idx = 0
    for(let i=0;i<dates.length/7;i++){
      const tr = document.createElement("tr")
      for(let j=0;j<7;j++){
        const td = document.createElement("td")
        let dateObj:object= dates[idx]
        
        if("date" in dateObj)
          td.innerHTML=String(dateObj.date)
        if("isDisabled" in dateObj && dateObj.isDisabled)
          td.classList.add('disabled')

        tr.appendChild(td)

        idx++
      }
      tbody?.append(tr)
    }
  }
  //カレンダー作成の実行
  setCalender(year,month)

  next?.addEventListener('click',()=>{

    month ++
    if(month === 13){
      month = 1
      year ++
    }
    setCalender(year,month)
  })
  prev?.addEventListener('click',()=>{
    month --
    if(month === 0){
      month = 12
      year --
    }
    setCalender(year,month)
  })
}