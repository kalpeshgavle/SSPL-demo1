let dataSet = document.getElementById("bookApp");
let array = []
const getItem = JSON.parse(localStorage.getItem('finalData'))
if (getItem) {
    array = getItem;
}
let realDate = new Date();
checkDate = `${realDate.getFullYear()}-${((realDate.getMonth() + 1) < 10) ? `0${realDate.getMonth() + 1}` : realDate.getMonth() + 1}-${realDate.getDate()}`
const date = document.getElementById("date");
let checkFromTime = `${realDate.getHours()}:${realDate.getMinutes() + 1 < 10 ? `0${realDate.getMinutes() + 1}` : `${realDate.getMinutes() + 1}`}`;


dataSet.addEventListener('submit', (e) => {

    e.preventDefault()
    const fullName = document.getElementById("fullName").value
    const mail = document.getElementById("emailId").value;
    const date = document.getElementById("formdate").value;
    const from_time = document.getElementById("from_time").value;
    const to_time = document.getElementById("to_minutes").value;
    const descp = document.getElementById("text-area").value

    console.log(date < checkDate)
    if (date < checkDate) {
        alert("invalid inputs -- 1")
        return;
    }
    else if (date == checkDate) {
        if (from_time > to_time || from_time == to_time || from_time < checkFromTime || to_time < from_time || to_time == from_time || to_time < checkFromTime) {
            alert("invalid inputs --2 ")
            return;
        }
    }
    const valuesObj = {
        name: fullName,
        mail: mail,
        isdate: date,
        from_time: from_time,
        to_time: to_time,
        desciption: descp,
    }
    const filtered = array.filter((value) => {
        return (value.isdate == valuesObj.isdate && (
            (value.from_time <= valuesObj.from_time && value.to_time > valuesObj.from_time) ||
            (value.from_time < valuesObj.to_time && value.to_time >= valuesObj.to_time) ||
            (value.from_time >= valuesObj.from_time && value.to_time <= valuesObj.to_time)
        )
        )
    })

    if (filtered.length > 0) {
        alert("Slot already booked")
        return
    }

    array.push(valuesObj)

    array.sort((a, b) => {
        if (a.isdate != b.isdate) {
            return a.isdate.localeCompare(b.isdate);

        } else {
            return a.from_time.localeCompare(b.from_time)
        }
    })
    alert("Appointment Booked")

    localStorage.setItem('new', JSON.stringify(valuesObj))

    const finalData = localStorage.setItem('finalData', JSON.stringify(array))
    dataSet.reset()
}
)