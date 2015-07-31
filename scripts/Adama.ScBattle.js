// Game Engine
(function (Adama,undefined){
    Adama.scBattle = {};
    Adama.scBattle.spr = Adama.e.group();
    Adama.scBattle.spr.visible = false;
    Adama.scBattle.init = function(){
        // Initialize scene
        Adama.scBattle.spr.visible = true;
        
        // Start scene
        Adama.e.state = Adama.scBattle.loop;
    };
    Adama.scBattle.loop = function(){
        // Main scene loop 
    };
}(window.Adama = window.Adama || {}));