var settings = {
    "airport_id": 7960,
    "halifax_id_for_testing": 5031,
    "notify_me_if_appt_is_before_date": "May 14, 2020",
    "number_of_appts_to_show": 6,
}

let timeleft = 9;
const main = document.querySelector('.main');
const body = document.querySelector('body');

getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



secondsToRefresh = () => {
    const refreshTimer = setInterval(function () {
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
    secondsToRefresh();
    fetch(`https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=${settings.number_of_appts_to_show}&locationId=${settings.airport_id}&minimum=1`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (data.length) {
                let appts = '';
                for (let i = 0; i < data.length; i++) {
                    const date = new Date(data[i].startTimestamp).toDateString();
                    const hours = `${data[i].startTimestamp.split('T')[1]} - ${data[i].endTimestamp.split('T')[1]}`;
                    appts += `<span><a target="_blank" href="https://ttp.cbp.dhs.gov/">${date} ${hours}</a></span>`;
                }

                main.innerHTML = appts;

                if (new Date(data[0].startTimestamp) < new Date(settings.notify_me_if_appt_is_before_date)) {
                    const audio = new Audio('global-entry-here-we-come.wav');
                    audio.play();
                }
            } else {
                main.innerHTML = `<span><a target="_blank" href="https://ttp.cbp.dhs.gov/">Still Checking at ${new Date()}</a></span>`;
            }
            body.style["background-color"] = getRandomColor();
        });
};

setInterval(checkForAppt, 10000);
checkForAppt();
