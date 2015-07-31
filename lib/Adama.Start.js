// Game Engine
(function (Adama,undefined){
    Adama.ver = 0.1;
    // Set the game up
    var setup = function() {
        // Setup canvas
        Adama.e.canvas.style.padding = 0;
        Adama.e.canvas.style.margin = "auto";
        Adama.e.canvas.style.display = "block";
        Adama.e.canvas.style.position = "absolute";
        Adama.e.canvas.style.top = 0;
        Adama.e.canvas.style.bottom = 0;
        Adama.e.canvas.style.left = 0;
        Adama.e.canvas.style.right = 0;
        // Initialize scenes
        Adama.s.title = {};
        Adama.s.title.spr = Adama.e.group();
        var btnStart = Adama.e.button([
            "img/btnBlueUp.png",
            "img/btnBlueOver.png",
            "img/btnBlueDown.png"]);
        btnStart.x = (Adama.e.canvas.width / 2) - 95;
        btnStart.y = (Adama.e.canvas.height / 2) + 40;
        Adama.s.title.spr.addChild(btnStart);
        Adama.s.title.loop = function(){
            // Title Screen loop
        };
        // Set game state to play
        Adama.e.state = Adama.s.title.loop;
    };
    // Initialize game
    Adama.init = function() {
        Adama.e.start();
    };
    // Initialize engine
    Adama.e = ga(640, 480, setup, [
            "img/btnBlueUp.png",
            "img/btnBlueOver.png",
            "img/btnBlueDown.png"]);
}(window.Adama = window.Adama || {}));