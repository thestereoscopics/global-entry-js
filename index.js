$(document).ready(function () {
    var halifaxURL = 'https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=3&locationId=5031&minimum=1';
    var pdxURL = 'https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=3&locationId=7960&minimum=1';

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
            url: pdxURL
        }).done(function(data) {
            if (data.length) {
                var appts = '';
                for (let i = 0; i < data.length; i++) {
                    appts += '<span>' + new Date(data[i].startTimestamp).toDateString() + '</span>';
                }
                $('.main').html(appts).css('color', getRandomColor());

                if (new Date(data[0].startTimestamp) < new Date('August 01 2020')) {
                    var audio = new Audio('global-entry-here-we-come.wav');
                    //audio.play();
                }
            } else {
                $('.main').html('<span>Nothing</span>').css('color', getRandomColor());
            }
        });
    }

    setInterval(checkForAppt, 5000);
    checkForAppt();
});