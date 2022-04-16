console.log("background")

//grab the startTime from popup page

const popuppg = chrome.extension.getViews()[0];
console.log(popuppg)

let interval = popuppg.querySelector('select').getValue;

let startTime = popuppg.querySelector('#starttime').getValue;

startTime = Number(startTime);

console.log(interval, startTime);

const coundown = setInterval((function(){
    if (startTime) {
        //grab current time
        const curr = new Date().getTime();
        //console.log(curr);
        //compare with startTime from onlick
        const diff = curr - startTime;
        if (diff > interval * 60 * 1000) {
            getValue()
            //give user an option if they want to continue to receive reminders
            startTime = new Date().getTime();
        }
    }
}), 1000)