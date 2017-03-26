var now = new Date();
var birthday = new Date("14 aug 1989 12:00 PM");
var timeSince = (now - birthday) / 1000 / 60 / 60/ 24 / 364;
console.log(timeSince);


var startDateTime = new Date("14 aug 1989 12:00 PM");
var startStamp = startDateTime.getTime();

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    var y = Math.floor(diff/(364*24*60*60));
    diff = diff-(y*364*24*60*60);
    var mo = Math.floor(diff/(30*24*60*60));
    diff = diff-(mo*30*24*60*60);
    var d = Math.floor(diff/(24*60*60));
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;

    $("#time").html(y+ " years, " + mo +" month(s), " + d +" day(s), "+ h +" hour(s), "+ m +" minute(s), "+ s +" second(s) working");
}

setInterval(updateClock, 100);
