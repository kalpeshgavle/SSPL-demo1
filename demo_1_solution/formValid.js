function fromValid() {
    // for name
    let fullName = document.getElementById("fullName").value;
    if (fullName != "") {
        document.getElementById("fname-msg").innerHTML = "";
    } else if ((fullName == "" || fullName == null) && (!/^[A-Za-z]+$/.test(fullName))) {
        document.getElementById("fname-msg").innerHTML = "please enter name";
        return false;
    }

    // for email
    let email = document.getElementById("emailId").value;
    if (email != "") {
        document.getElementById("email-msg").innerHTML = "";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("email-msg").innerHTML = "please enter valid email";
        return false;
    }

    // validation for date
    let date = document.getElementById("formdate").value;
    let realDate = new Date();
    let checkDate = `${realDate.getFullYear()}-${((realDate.getMonth() + 1) < 10) ? `0${realDate.getMonth() + 1}` : realDate.getMonth() + 1}-${realDate.getDate()}`

    if (date == "") {
        document.getElementById("date-msg").innerHTML = "please eneter date";
        return false;
    } else if (date <= checkDate && date != checkDate) {
        document.getElementById("date-msg").innerHTML = "please select valid date";
        return false;
    } else if (date >= checkDate && date == checkDate) {
        document.getElementById("date-msg").innerHTML = "";
    }

    // validation for from time
    let from_time = document.getElementById("from_time").value;
    let checkFromTime = `${realDate.getHours()}:${realDate.getMinutes() + 1 < 10 ? `0${realDate.getMinutes() + 1}` : `${realDate.getMinutes() + 1}`}`;
    console.log(checkFromTime)
    console.log(from_time)
    if (from_time > checkFromTime && date >= checkDate) {
        document.getElementById("from-hour-msg").innerHTML = ""
    } else if (from_time < checkFromTime && date <= checkDate) {
        document.getElementById("from-hour-msg").innerHTML = "please select valid time"
        return false;
    }

    // validation for to time
    let to_time = document.getElementById("to_minutes").value;
    if (to_time < from_time && date <= checkDate) {
        document.getElementById("to-hour-msg").innerHTML = "please select valid time"
        return false;
    }
    else if (to_time == -1) {
        document.getElementById("to-hour-msg").innerHTML = "please select hours"
        return false;
    }

    // validation for description
    let description = document.getElementById("text-area").value;
    if (description != "") {
        document.getElementById("text-area-msg").innerHTML = ""
    } else if (description == "") {
        document.getElementById("text-area-msg").innerHTML = "Enter Description"
        return false;
    }
}

