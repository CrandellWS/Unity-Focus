(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "Unity3D",
        devKey: "AIzaSyD5RqweFK8NKQvqGjLACV7lLpDN3Xi-77Y",
        channels: [
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQgy1WFh2AQkktL5HJYktzlQ", "PLBxMIgvbjWQgVcJcuF3HIuqwtPgvZSTyw"],
                title: "Tips and Tricks"
            },
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQi-iBfXV8u50Gi8GGkrJ300", "PLBxMIgvbjWQiAVQQHrvwbpdVyfV51rCgP","PLBxMIgvbjWQi7fmZR_-U8gsQBUXYLwkE-","PLBxMIgvbjWQgjEnEZVO0m__kqY3a3LQd2"],
                title: "Interface Essentials"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
