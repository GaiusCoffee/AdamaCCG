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
        Adama.scStart = {};
        Adama.scStart.spr = Adama.e.group();
        var imgBG = Adama.e.tilingSprite(
            640,480, "assets/bgBlueTile.png");
        Adama.scStart.spr.addChild(imgBG);
        var pnlMetalWide = Adama.e.sprite("assets/pnlMetalWide.png");
        pnlMetalWide.x = (Adama.e.canvas.width / 2) - 150;
        pnlMetalWide.y = (Adama.e.canvas.height / 2) - 150;
        Adama.scStart.spr.addChild(pnlMetalWide);
        var txtLogo = Adama.e.text(
            "Adama", "64px kenvector_future", "black");
        txtLogo.x = (Adama.e.canvas.width / 2) - 135;
        txtLogo.y = (Adama.e.canvas.height / 2) - 145;
        Adama.scStart.spr.addChild(txtLogo);
        var txtLogoSub = Adama.e.text(
            "Collectible Card Game", "18px kenvector_future_thin", "black");
        txtLogoSub.x = (Adama.e.canvas.width / 2) - 120;
        txtLogoSub.y = (Adama.e.canvas.height / 2) - 90;
        Adama.scStart.spr.addChild(txtLogoSub);
        var txtStart = Adama.e.text(
            "Start Offline Mode", "16px kenvector_future_thin", "black");
        var btnStart = Adama.e.button([
            "assets/btnBlueUp.png",
            "assets/btnBlueOver.png",
            "assets/btnBlueDown.png"]);
        btnStart.x = (Adama.e.canvas.width / 2) - 95;
        btnStart.y = (Adama.e.canvas.height / 2) + 40;
        btnStart.press = function(){
            txtStart.y = (Adama.e.canvas.height / 2) + 59;
        };
        btnStart.release  = function(){
            txtStart.y = (Adama.e.canvas.height / 2) + 55;
            window.setTimeout(function(){ 
                Adama.scStart.spr.visible = false;
                Adama.scBattle.init(); 
            }, 1000);
        };
        Adama.scStart.spr.addChild(btnStart);
        txtStart.x = (Adama.e.canvas.width / 2) - 90;
        txtStart.y = (Adama.e.canvas.height / 2) + 55;
        Adama.scStart.spr.addChild(txtStart);
        Adama.scStart.loop = function(){
            // Title Screen loop
            imgBG.tileX += 1;
            imgBG.tileY += 1;
        };
        // Set game state to play
        Adama.e.state = Adama.scStart.loop;
    };
    // Initialize game
    Adama.init = function() {
        Adama.e.start();
    };
    // Initialize engine
    Adama.e = ga(640, 480, setup, [
        "assets/bgBlueTile.png",
        "assets/btnBlueUp.png",
        "assets/btnBlueOver.png",
        "assets/btnBlueDown.png",
        "assets/pnlMetalWide.png",
        "assets/kenvector_future.ttf",
        "assets/kenvector_future_thin.ttf"]);
}(window.Adama = window.Adama || {}));