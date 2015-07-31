// Game Engine
(function (_,undefined){
    _.s.battle = {};
    _.s.battle.spr = _.e.group();
    _.s.battle.init = function(){
        // Initialize scene
        
        _.e.state = _.s.battle.loop;
    };
    _.s.battle.loop = function(){
        // Main scene loop 
    };
}(window._ = window._ || {}));