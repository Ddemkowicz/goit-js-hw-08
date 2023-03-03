import Player from '@vimeo/player';

const player = new Vimeo.Player('vimeo-player');

player.on(
  'timeupdate',
  _.throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
