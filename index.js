var settings = {
    "locationID": 7960,
    "halifax_id_for_testing": 5031,
    "notify_me_if_appt_is_before_date": "May 14, 2020",
    "number_of_appts_to_show": 6,
    "ecAddress": "7000 PDX AIRPORT Room T3352 Portland OR 97218 US",
}

let timeleft = 9;
let intervalForAppt, refreshTimer;
const main = document.querySelector('.main');
const body = document.querySelector('body');
const addressEl = document.querySelector('.address');

getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

secondsToRefresh = () => {
    refreshTimer = setInterval(function () {
        if (timeleft === 1) {
            document.querySelector(".counter").innerHTML = timeleft;
            clearInterval(refreshTimer);
            timeleft = 10;
        } else {
            document.querySelector(".counter").innerHTML = timeleft;
            timeleft -= 1;
        }
        
    }, 1000);
};

checkForAppt = () => {
    // secondsToRefresh();
    body.style["background-color"] = getRandomColor();
    fetch(`https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=${settings.number_of_appts_to_show}&locationId=${settings.locationID}&minimum=1`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.length) {
                let appts = '';
                data.map((eachDate) => {
                    const date = new Date(eachDate.startTimestamp).toDateString();
                    const hours = `${eachDate.startTimestamp.split('T')[1]} - ${eachDate.endTimestamp.split('T')[1]}`;
                    appts += `<span><a target="_blank" href="https://ttp.cbp.dhs.gov/">${date} ${hours}</a></span>`;
                })

                main.innerHTML = appts;

                if (new Date(data[0].startTimestamp) < new Date(settings.notify_me_if_appt_is_before_date)) {
                    const audio = new Audio('global-entry-here-we-come.wav');
                    audio.play();
                }
            } else {
                main.innerHTML = `<span><a target="_blank" href="https://ttp.cbp.dhs.gov/">There are zero appointments right now</a></span>`;
            }
        });
};

startCheck = () => {
    intervalForAppt = setInterval(checkForAppt, 10000);
    checkForAppt();
}

const dateBox = document.querySelector('#last-day');
const enrollmentCenters = document.querySelector('#enrollment-center');

getEnrollmentID = (obj) => {
    settings.ecAddress = obj.options[obj.selectedIndex].dataset.address;
    settings.locationID = enrollmentCenters.value;
    addressEl.innerHTML = `<p>${settings.ecAddress}</p>`;
    clearInterval(intervalForAppt);
    // clearInterval(refreshTimer);
    startCheck();
}

enrollmentCenters.addEventListener('change', function() {getEnrollmentID(this)});
dateBox.addEventListener('focusout', (event) => {
    if (event.target.value) {
        settings.notify_me_if_appt_is_before_date = event.target.value;
        clearInterval(intervalForAppt);
        // clearInterval(refreshTimer);
        startCheck();
    }
});

startCheck();