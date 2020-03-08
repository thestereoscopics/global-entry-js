$(document).ready(function () {

    var settings = {
        "airport_id": 7960,
        "halifax_id_for_testing": 5031,
        "notify_me_if_appt_is_before_date": "May 14, 2020",
        "number_of_appts_to_show": 6,
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    checkForAppt = () => {
        $.ajax({
            url: `https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=${settings.number_of_appts_to_show}&locationId=${settings.airport_id}&minimum=1`
        }).done(function(data) {
            if (data.length) {
                var appts = '';
                for (let i = 0; i < data.length; i++) {
                    var date = new Date(data[i].startTimestamp).toDateString();
                    var hours = `${data[i].startTimestamp.split('T')[1]} - ${data[i].endTimestamp.split('T')[1]}`;
                    appts += `<span><a target="_blank" href="https://ttp.cbp.dhs.gov/">${date} ${hours}</a></span>`;
                }
                $('.main').html(appts).css('color', getRandomColor());
                
                if (new Date(data[0].startTimestamp) < new Date(settings.notify_me_if_appt_is_before_date)) {
                    var audio = new Audio('global-entry-here-we-come.wav');
                    audio.play();
                }
            } else {
                $('.main').html(`<span><a target="_blank" href="https://ttp.cbp.dhs.gov/">Still Checking at ${new Date()}</a></span>`).css('color', getRandomColor());
            }
        });
    }

    setInterval(checkForAppt, 10000);
    checkForAppt();
});