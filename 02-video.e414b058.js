const e=new Vimeo.Player("vimeo-player");e.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));const t=localStorage.getItem("videoplayer-current-time");t&&e.setCurrentTime(t);
//# sourceMappingURL=02-video.e414b058.js.map
