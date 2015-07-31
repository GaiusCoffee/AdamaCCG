// Game Engine
(function (Adama,undefined){
    Adama.scBattle = {};
    Adama.scBattle.spr = Adama.e.group();
    Adama.scBattle.init = function(){
        // Initialize scene
        
        Adama.e.state = Adama.scBattle.loop;
    };
    Adama.scBattle.loop = function(){
        // Main scene loop 
    };
}(window.Adama = window.Adama || {}));