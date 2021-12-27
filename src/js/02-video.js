const throttle = require("lodash.throttle");
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', throttle(function () {
    player.getCurrentTime().then(function (value) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(value))
    });}, 1000),);

const startFrom = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(startFrom);
player.setCurrentTime(startFrom)