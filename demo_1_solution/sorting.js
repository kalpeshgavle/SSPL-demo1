getItem = JSON.parse(localStorage.getItem('finalData'))
const tableData = document.getElementById("tableData")
realDate = new Date();
checkDate = `${realDate.getFullYear()}-${((realDate.getMonth() + 1) < 10) ? `0${realDate.getMonth() + 1}` : realDate.getMonth() + 1}-${realDate.getDate()}`
checkHour = `${((realDate.getHours()) < 10 ? `0${realDate.getHours()}` : realDate.getHours())}:${((realDate.getMinutes() + 1) < 10 ? `0${realDate.getMinutes() + 1}` : realDate.getMinutes() + 1)
    } `;
tableData.innerHTML = ""

// for showing Deleted data
// function expiredData() {
//     expiredTable.innerHTML = ""
//     TodayTable.innerHTML = ""
//     UpcomingTable.innerHTML = ""
//     RunningTable.innerHTML = ""
//     tableData.remove("tableData")
//     const expiredData = getItem.filter((value) => {
//         return ((value.isdate < checkDate) || (value.isdate == checkDate && value.to_time < checkHour));
//     })
//     if (expiredData.length <= 0) {
//         alert("Appointments Not Found...")
//     }
//     for (let i = 0; i < expiredData.length; i++) {
//         const row = document.createElement("tr")
//         row.innerHTML = `
//          <td>${i + 1}</td>
//         <td>${expiredData[i].name}</td> 
//         <td>${expiredData[i].mail}</td>
//         <td>${expiredData[i].isdate}</td>
//         <td>${expiredData[i].from_time}</td>
//         <td>${expiredData[i].to_time}</td>
//         <td>${expiredData[i].desciption}</td>
//        `
//         expiredTable.appendChild(row)
//         row.className = "table-danger"
//     }
//     return false
// }

// for showing todays data
// function TodayData() {
//     expiredTable.innerHTML = "";
//     TodayTable.innerHTML = ""
//     UpcomingTable.innerHTML = ""
//     RunningTable.innerHTML = ""
//     tableData.remove("tableData")
//     const TodayData = getItem.filter((value) => {
//         return ((value.isdate == checkDate && value.from_time >= checkHour && value.to_time >= checkHour));
//     })
//     if (TodayData.length <= 0) {
//         alert("Appointments Not Found...")
//     }
//     for (let i = 0; i < TodayData.length; i++) {
//         const row = document.createElement("tr")
//         row.innerHTML = `
//          <td>${i + 1}</td>
//         <td>${TodayData[i].name}</td> 
//         <td>${TodayData[i].mail}</td>
//         <td>${TodayData[i].isdate}</td>
//         <td>${TodayData[i].from_time}</td>
//         <td>${TodayData[i].to_time}</td>
//         <td>${TodayData[i].desciption}</td>
//        `
//         TodayTable.appendChild(row)
//         row.className = "table-success"
//     }
//     return false
// }

// for showing running data
// function RunningData() {
//     expiredTable.innerHTML = ""
//     TodayTable.innerHTML = ""
//     RunningTable.innerHTML = ""
//     UpcomingTable.innerHTML = ""

//     tableData.remove("tableData")
//     const RunningData = getItem.filter((value) => {
//         return ((value.isdate == checkDate && value.from_time < checkHour && value.to_time >= checkHour));
//     })
//     if (RunningData.length <= 0) {
//         alert("Appointments Not Found...")
//     }
//     for (let i = 0; i < RunningData.length; i++) {
//         const row = document.createElement("tr")
//         row.innerHTML = `
//          <td>${i + 1}</td>
//         <td>${RunningData[i].name}</td> 
//         <td>${RunningData[i].mail}</td>
//         <td>${RunningData[i].isdate}</td>
//         <td>${RunningData[i].from_time}</td>
//         <td>${RunningData[i].to_time}</td>
//         <td>${RunningData[i].desciption}</td>
//        `
//         RunningTable.appendChild(row)
//         row.className = "table-warning"
//     }
//     return false
// }

// for showing upcoming data
// function UpcomingData() {
//     expiredTable.innerHTML = ""
//     TodayTable.innerHTML = ""
//     RunningTable.innerHTML = ""
//     UpcomingTable.innerHTML = ""
//     tableData.remove("tableData")
//     const UpcomingData = getItem.filter((value) => {
//         return ((value.isdate > checkDate));
//     })
//     if (UpcomingData.length <= 0) {
//         alert("Appointments Not Found...")
//     }
//     for (let i = 0; i < UpcomingData.length; i++) {
//         const row = document.createElement("tr")
//         row.innerHTML = `
//          <td>${i + 1}</td>
//         <td>${UpcomingData[i].name}</td> 
//         <td>${UpcomingData[i].mail}</td>
//         <td>${UpcomingData[i].isdate}</td>
//         <td>${UpcomingData[i].from_time}</td>
//         <td>${UpcomingData[i].to_time}</td>
//         <td>${UpcomingData[i].desciption}</td>
//        `
//         UpcomingTable.appendChild(row)
//         row.className = "table-primary"
//     }
//     return false
// }

function userData(status) {
    const rowColor = {
        expire: "table-danger",
        today: "table-success",
        running: "table-warning",
        upcoming: "table-primary",
    }

    tableData.innerHTML = ""
    const filterdData = getItem.filter((value) => {
        return filterCondtion(status, value)
    })
    if (filterdData.length <= 0) {
        alert("Appointments Not Found...")
    }
    for (let i = 0; i < filterdData.length; i++) {
        const row = document.createElement("tr")
        row.innerHTML = `
         <td>${i + 1}</td>
        <td>${filterdData[i].name}</td> 
        <td>${filterdData[i].mail}</td>
        <td>${filterdData[i].isdate}</td>
        <td>${filterdData[i].from_time}</td>
        <td>${filterdData[i].to_time}</td>
        <td>${filterdData[i].desciption}</td>
       `
        tableData.appendChild(row)
        row.className = rowColor[status]
    }
    return false
}

function filterCondtion(status, value) {
    const conditions = {
        expire: (value.isdate < checkDate) || (value.isdate == checkDate && value.to_time < checkHour),
        today: (value.isdate == checkDate && value.from_time >= checkHour && value.to_time >= checkHour),
        running: (value.isdate == checkDate && value.from_time < checkHour && value.to_time >= checkHour),
        upcoming: (value.isdate > checkDate),
    }
    return conditions[status]
}