require.config({
    paths: {
        "jquery": "lib/jquery",
        "bootstrap": "../bootstrap/js/bootstrap"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
});

require(["jquery", "bootstrap"], function ($, Bootstrap) {

});
