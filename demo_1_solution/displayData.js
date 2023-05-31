const displayTable = document.getElementById("displayTable");

getItem = JSON.parse(localStorage.getItem('finalData'))

function display() {
    const tableData = document.getElementById("tableData")
    tableData.innerHTML = ""
    let realDate = new Date();
    checkDate = `${realDate.getFullYear()}-${((realDate.getMonth() + 1) < 10) ? `0${realDate.getMonth() + 1}` : realDate.getMonth() + 1}-${realDate.getDate()}`
    checkHour = `${((realDate.getHours()) < 10 ? `0${realDate.getHours()}` : realDate.getHours())}:${((realDate.getMinutes() + 1) < 10 ? `0${realDate.getMinutes() + 1}` : realDate.getMinutes() + 1)
        } `;

    for (let i = 0; i < getItem.length; i++) {
        const row = document.createElement("tr")
        row.innerHTML = `
         <td>${i + 1}</td>
        <td>${getItem[i].name}</td> 
        <td>${getItem[i].mail}</td>
        <td>${getItem[i].isdate}</td>
        <td>${getItem[i].from_time}</td>
        <td>${getItem[i].to_time}</td>
        <td>${getItem[i].desciption}</td>
       `
        tableData.appendChild(row)

        if (getItem[i].isdate == checkDate && getItem[i].from_time >= checkHour && getItem[i].to_time >= checkHour) {
            row.className = "table-success"

        }
        if ((getItem[i].isdate < checkDate) || (getItem[i].isdate == checkDate && getItem[i].to_time < checkHour)) {
            row.className = "table-danger"
        }
        if (getItem[i].isdate == checkDate && getItem[i].from_time < checkHour && getItem[i].to_time >= checkHour) {
            row.className = "table-warning"
        }

        if (getItem[i].isdate > checkDate) {
            row.className = "table-primary"
        }
    }

    return false;

}


