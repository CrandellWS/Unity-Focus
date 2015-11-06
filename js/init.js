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
            },
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQhfmnVHACapgYeT2P4e16bC", "PLBxMIgvbjWQhT0rOUTntzMCkILUrT9Zml","PLBxMIgvbjWQjSosRvlkwP9_5d_Y5ZXCcY","PLBxMIgvbjWQgyINjpRnE4gn_M_68IG0n4"],
                title: "Physics"
            },
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQgOQGOBOPtAnEyQJaRG3k5Z", "PLBxMIgvbjWQiuKocKyFYyJlny8S3rwGCm","PLBxMIgvbjWQhn6L2VS-mab1v_EDLALEuF","PLBxMIgvbjWQg6u-eTp5CeNCgHpo9M5jvZ", "PLBxMIgvbjWQiWiqbaVL29SFGKqT-HZypG"],
                title: "Animation"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
