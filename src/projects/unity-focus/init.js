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
                ids: ["PLBxMIgvbjWQi-iBfXV8u50Gi8GGkrJ300", "PLBxMIgvbjWQiAVQQHrvwbpdVyfV51rCgP","PLBxMIgvbjWQi7fmZR_-U8gsQBUXYLwkE-","PLBxMIgvbjWQgjEnEZVO0m__kqY3a3LQd2"],
                title: "Interface Essentials"
            },
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQgweIXar_xxvWBKv4h2QMky", "PLBxMIgvbjWQjK1phmin0cqwZjw1qyfbc1", "PLBxMIgvbjWQgq4PdM4ekSHRfwQ3QFmerY", "PLBxMIgvbjWQimb7jwHUWAlqblFCbwMJWp", "PLBxMIgvbjWQiFAN_ofGWIBj8mGC0HRu68"],
                title: "Scripting"
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
            },
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQg9PC7VL_SAp4sDZsb1ijdu", "PLBxMIgvbjWQhTtulj_gzIFSt6-i0WgBJF"],
                title: "Mobile and Touch"
            },
            {
                type: "multiPlaylists",
                ids: ["PLBxMIgvbjWQgy1WFh2AQkktL5HJYktzlQ", "PLBxMIgvbjWQgVcJcuF3HIuqwtPgvZSTyw"],
                title: "Tips and Tricks"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
