let solveBtn = document.getElementById('solve_btn');
const diction = [
    "cat", "dog", "bat", "rat", "sun", "pen", "map", "cup", "box", "fan", "cow", "man", "hat",
    "tree", "rock", "book", "blue", "fish", "lake", "wind", "lamp", "ring", "desk", "frog", "star", "coat",
    "apple", "grape", "table", "bread", "river", "chair", "storm", "cloud", "water", "flame", "earth", "music",
    "bright", "forest", "planet", "flower", "animal", "rocket", "stream", "butter", "candle", "pencil", "basket", "branch",
    "picture", "journey", "village", "teacher", "garden", "harmony", "sunrise", "fortune", "rainbow", "treetop",
    "sunshine", "courage", "freedom", "respect", "victory", "whisper", "dolphin", "mountain", "gallery", "passion",
    "elephant", "computer", "advent", "firewood", "hospital", "umbrella", "creation", "treasure", "wildlife", "notebook",
    "language", "butterfly", "triangle", "director", "building", "discover", "champion", "baseball", "software", "guitar"
]
let bestWord = "";
let bestScore = 0;

solveBtn.addEventListener('click', async () => {
    let letters = [];
    for (let i = 0; i < 15 * 15; i++) {
        let letter = document.getElementById('grid' + i).value;
        if (letter != null && letter != "") {
            letters.push(letter.toLowerCase());
        }
    }
    letters.forEach((ltr) => {
        let hand = [];
        for (let i = 0; i < 7; i++) {
            let letter = document.getElementById('hand' + i).value;
            if (letter != null && letter != "") {
                hand.push(letter.toLowerCase());
            }
        }
        hand.push(ltr);
        let comb = getCombos(hand);
        comb.forEach(async (com) => {
            if (diction.includes(com)) {
                console.log(com);
                const letterScores = {
                    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4,
                    i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3,
                    q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8,
                    y: 4, z: 10
                };
            
                let score = 0;
            
                for (const letter of com.toLowerCase()) {
                    score += letterScores[letter];
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestWord = com;
                }
        
            }
        });
    });

    console.log(bestWord);
    console.log(bestScore);
    alert("Best Score: " + bestScore + ", Best word: " + bestWord);
    
    function getCombos(arr) {
        let combos = [];

        function helper(curr, left) {
            if (left.length === 0) {
                combos.push(curr);
            } else {
                for (let i = 0; i < left.length; i++) {
                    helper(curr + left[i], left.slice(0, i) + left.slice(i + 1));
                }
            }
        }

        helper("", arr.join(''));
        return combos;
    }
    bestWord = "";
    bestScore = 0;
    console.log("done");
});