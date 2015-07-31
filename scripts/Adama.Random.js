// Random
(function (Adama,undefined){
    // Most of these are from https://github.com/victorquinn/chancejs/blob/develop/chance.js
    var slice = Array.prototype.slice;
    // Initialize library
    if (typeof Adama.rnd === 'undefined')
        Adama.rnd = { random:Math.random };
    Adama.r = {};
    // Random % Chance
    Adama.r.percent = function(chance){
        if (typeof chance === 'undefined') chance = 50;
        return (Adama.rnd.random() * 100 < chance);
    };
    // Random Number
    Adama.r.number = function(min, max){
        if (typeof max === 'undefined') max = Number.MAX_SAFE_INTEGER;
        if (typeof min === 'undefined') min = -max;
        return Math.floor(Adama.rnd.random() * (max - min + 1) + min);
    };
    // Random Letter
    Adama.r.letter = function(){
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        return letters.charAt(Adama.r.number(0, letters.length -1));
    };
    // Repeat Function Until N
    Adama.r.n = function(fn, n){
        if (typeof n === 'undefined') n = 1;
        var i = n, arr = [], params = slice.call(arguments, 2);
        i = Math.max( 0, i );
        for (null; i--; null) {
            arr.push(fn.apply(this, params));
        }
        return arr;
    };
    // Random String of Letters
    Adama.r.string = function(length){
        if (typeof length === 'undefined') length = Adama.r.number(5,20);
        return Adama.r.n(Adama.r.letter, length).join("");
    };
    // Repeat Function Until N Unique
    Adama.r.q = function(fn, n, comparer){
        if (typeof comparer === 'undefined')
            comparer = function(arr, val) { return arr.indexOf(val) !== -1; };
        var arr = [], count = 0, result, MAX_DUPLICATES = n * 50, params = slice.call(arguments, 3);
        while (arr.length < n) {
            result = fn.apply(this, params);
            if (!comparer(arr, result)) {
                arr.push(result);
                count = 0;
            }
            if (++count > MAX_DUPLICATES) {
                return;
            }
        }
        return arr;
    };
    // Weighted Pick One
    Adama.r.w =function(arr, weights) {
        if (arr.length !== weights.length) return;
        for (var weightIndex = weights.length - 1; weightIndex >= 0; --weightIndex) {
            if (weights[weightIndex] <= 0) {
                arr.splice(weightIndex,1);
                weights.splice(weightIndex,1);
            }
        }
        if (weights.some(function(weight) { return weight < 1; })) {
            var min = weights.reduce(function(min, weight) {
                return (weight < min) ? weight : min;
            }, weights[0]);
            var scaling_factor = 1 / min;
            weights = weights.map(function(weight) {
                return weight * scaling_factor;
            });
        }
        var sum = weights.reduce(function(total, weight) {
            return total + weight;
        }, 0);
        var selected = Adama.r.number(1, sum), total = 0, chosen;
        weights.some(function(weight, index) {
            if (selected <= total + weight) {
                chosen = arr[index];
                return true;
            }
            total += weight;
            return false;
        });
        return chosen;
    };
    // Pick N From Array
    Adama.r.pick = function (arr, n) {
        if (!n || n === 1) {
            return arr[Adama.r.number(0, arr.length-1)];
        } else {
            return Adama.r.shuffle(arr).slice(0, n);
        }
    };
    // Random Sylable
    Adama.r.syllable = function (length) {
        if (typeof length === 'undefined') length = Adama.r.number(2,3);
        var consonants = 'bcdfghjklmnprstvwz', vowels = 'aeiou', 
            all = consonants + vowels, text = '', chr;
        for (var i = 0; i < length; i++) {
            if (i === 0) {
                chr = Adama.r.pick(all);
            } else if (consonants.indexOf(chr) === -1) {
                chr = Adama.r.pick(consonants);
            } else {
                chr = Adama.r.pick(vowels);
            }
            text += chr;
        }
        return text;
    };
    // Random Word
    Adama.r.word = function (syllables) {
        if (typeof syllables === 'undefined') syllables = Adama.r.number(2,4);
        for (var text = '', i = 0; i < syllables; i++) {
            text += Adama.r.syllable();
        }
        return text;
    };
    // Random Sentence
    Adama.r.sentence = function (length, punctuation) {
        if (typeof length === 'undefined') length = Adama.r.number(12,18);
        var text, word_array = Adama.r.n(Adama.r.word, length);
        text = word_array.join(' ');
        text = Adama.r.capitalize(text);
        if (punctuation !== false && !/^[\.\?;!:]$/.test(punctuation)) {
            punctuation = '.';
        }
        if (punctuation) {
            text += punctuation;
        }
        return text;
    };
    // Shuffle Array
    Adama.r.shuffle = function (arr) {
        var old_array = arr.slice(0), new_array = [], j = 0, length = Number(old_array.length);
        for (var i = 0; i < length; i++) {
            j = Adama.r.number(0, old_array.length - 1);
            new_array[i] = old_array[j];
            old_array.splice(j, 1);
        }
        return new_array;
    };
    // Capitalize Word
    Adama.r.capitalize = function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    };
    // Pad Number
    Adama.r.pad = function (number, width, pad) {
        pad = pad || '0';
        number = number + '';
        return number.length >= width ? number : new Array(width - number.length + 1).join(pad) + number;
    };
}(window.Adama = window.Adama || {}));