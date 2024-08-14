const greetingMassage = document.querySelector('.greetingMassage');

function displayGreetingMassage () {
    const currentHour = new Date().getHours();
    let massage;
    if(currentHour <12) {
        massage = "Good Morinig!";
    }
    else if(currentHour <18) {
        massage = "Good Afternoon!";
    }
    else {
        massage = "Good Evening!";
    }
    greetingMassage.innerHTML = massage;
    alert(massage)
}

window.onload = displayGreetingMassage();