// Game Engine
(function (_,undefined){
    _.ver = 0.1;
    // Set the game up
    var setup = function() {
        // Setup canvas
        _.e.canvas.style.padding = 0;
        _.e.canvas.style.margin = "auto";
        _.e.canvas.style.display = "block";
        _.e.canvas.style.position = "absolute";
        _.e.canvas.style.top = 0;
        _.e.canvas.style.bottom = 0;
        _.e.canvas.style.left = 0;
        _.e.canvas.style.right = 0;
        // Initialize scenes
        _.s = {};
        _.s.title = {};
        _.s.title.spr = _.e.group();
        var btnStart = _.e.button([
            "img/btnBlueUp.png",
            "img/btnBlueOver.png",
            "img/btnBlueDown.png"]);
        btnStart.x = (_.e.canvas.width / 2) - 95;
        btnStart.y = (_.e.canvas.height / 2) + 40;
        _.s.title.spr.addChild(btnStart);
        _.s.title.loop = function(){
            // Title Screen loop
        };
        // Set game state to play
        _.e.state = _.s.title.loop;
    };
    // Initialize game
    _.init = function() {
        _.e.start();
    };
    // Initialize engine
    _.e = ga(640, 480, setup, [
            "img/btnBlueUp.png",
            "img/btnBlueOver.png",
            "img/btnBlueDown.png"]);
}(window._ = window._ || {}));