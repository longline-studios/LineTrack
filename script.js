/* =========================================================
   1. DATA DATASETS (DATA)
   ========================================================= */

/* --- FACTS --- */
const facts = [
    "The first public railway opened in 1825 between Stockton and Darlington in the UK.",
    "The TGV set a world speed record of 574.8 km/h (357 mph) in 2007.",
    "Japanese Shinkansen (Bullet Trains) have an average annual delay of less than 1 minute.",
    "London has the oldest underground system in the world, opened in 1863.",
    "The Eurostar connects London with Paris, traveling under the English Channel.",
    "The Trans-Siberian Railway is the longest in the world, stretching 9,289 km across Russia.",
    "The 'Mallard' steam locomotive set a record of 126 mph (202 km/h) in 1938, which still stands.",
    "Switzerland's Gotthard Base Tunnel is the world's longest rail tunnel at 57 km.",
    "The Shanghai Maglev is the fastest commercial electric train, hitting 431 km/h using magnets.",
    "The Qinghai-Tibet Railway is the highest railway in the world, reaching 5,072 meters altitude.",
    "Australia has the longest straight section of railway in the world (478 km) on the Nullarbor Plain.",
    "The first steam locomotive was built by Richard Trevithick in 1804.",
    "Grand Central Terminal in New York City has the most platforms of any station (44 platforms).",
    "Indian Railways is one of the world's largest employers, with over 1.3 million employees.",
    "The Seikan Tunnel in Japan has a 23.3 km section that is under the seabed."
];

/* --- QUIZ --- */
const quizData = [
    { q: "Which country opened the first public railway in 1825?", options: ["United Kingdom", "United States", "Germany", "France"], correct: 0 },
    { q: "What is the name of the famous high-speed train in Japan?", options: ["TGV", "Shinkansen", "Maglev", "ICE"], correct: 1 },
    { q: "Which city has the oldest underground railway system?", options: ["New York", "Paris", "London", "Moscow"], correct: 2 },
    { q: "What is the longest railway line in the world?", options: ["Orient Express", "Trans-Siberian", "Amtrak Coast", "Indian Pacific"], correct: 1 },
    { q: "The 'Mallard' holds the speed record for what type of train?", options: ["Electric", "Diesel", "Steam", "Magnetic"], correct: 2 },
    { q: "In which country is the world's longest rail tunnel (Gotthard Base)?", options: ["Japan", "China", "Switzerland", "Norway"], correct: 2 },
    { q: "What technology does the Shanghai train use to float above tracks?", options: ["Air Cushion", "Maglev (Magnetic Levitation)", "Hydraulics", "Anti-Gravity"], correct: 1 },
    { q: "Which station has the most platforms in the world?", options: ["Shinjuku Station", "Grand Central Terminal", "Gare du Nord", "Waterloo"], correct: 1 },
    { q: "Who built the first steam locomotive in 1804?", options: ["James Watt", "George Stephenson", "Richard Trevithick", "Isambard Brunel"], correct: 2 },
    { q: "What is the highest railway line in the world?", options: ["Swiss Alps", "Qinghai-Tibet", "Rocky Mountaineer", "Andean Explorer"], correct: 1 }
];

/* --- NEWS --- */
const newsData = [
    { category: "Innovation", date: "Dec 05, 2025", title: "Hydrogen Trains Expand in Europe", content: "Germany and Italy are leading the way with new Coradia iLint trains that emit only water vapor." },
    { category: "High Speed", date: "Nov 28, 2025", title: "New Speed Record Attempt Planned", content: "Engineers are preparing a modified Maglev prototype hoping to break the 603 km/h barrier next month in Japan." },
    { category: "History", date: "Nov 15, 2025", title: "100 Years of the Flying Scotsman", content: "Celebrations are taking place across the UK to honor the world's most famous steam locomotive." },
    { category: "Infrastructure", date: "Oct 30, 2025", title: "Night Trains Make a Comeback", content: "New sleeper services connecting Paris, Berlin, and Vienna have sold out in record time as travelers ditch planes for trains." }
];

/* =========================================================
   2. STATE MANAGEMENT & DOM
   ========================================================= */
let factIndex = 0;
let quizIndex = 0;
let quizScore = 0;
const POINTS_PER_Q = 100;

// Game State Variables
let currentLevel = 1;
let gameState = { 
    signal: 'red', 
    switch1: 'top', 
    switch2: 'top', // For Level 2
    trainMoving: false, 
    trainX: 20 
};
let gameInterval = null;

// DOM Elements
const titleEl = document.getElementById("main-title");
const subEl = document.getElementById("sub-title");
const dynamicArea = document.getElementById("dynamic-area");
const cardIcon = document.querySelector(".card-icon i");

// Démarrage
renderHome();

/* =========================================================
   3. NAVIGATION HANDLERS
   ========================================================= */
function attachMenuEvent(id, action) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (gameInterval) clearInterval(gameInterval);
            action();
        });
    }
}

attachMenuEvent('btn-home', renderHome);
attachMenuEvent('btn-fact', initFacts);
attachMenuEvent('btn-quiz', initQuiz);
attachMenuEvent('btn-news', initNews);
attachMenuEvent('btn-game', () => { currentLevel = 1; initGame(); });

/* =========================================================
   4. HOME LOGIC
   ========================================================= */
function renderHome() {
    cardIcon.className = "fa-solid fa-train";
    titleEl.innerText = "Welcome Aboard";
    subEl.innerText = "Discover amazing engineering feats, read the latest news, or test your knowledge.";
    dynamicArea.innerHTML = `
        <div class="btn-group">
            <button class="action-btn" onclick="initFacts()"><i class="fa-solid fa-book-open"></i> Discover Facts</button>
            <button class="action-btn secondary" onclick="initQuiz()"><i class="fa-solid fa-brain"></i> Try the Quiz</button>
        </div>
    `;
}

/* =========================================================
   5. FACTS LOGIC
   ========================================================= */
function initFacts() {
    cardIcon.className = "fa-solid fa-lightbulb";
    titleEl.innerText = "Did You Know?";
    subEl.innerText = "Learn something new about railways.";
    factIndex = 0;
    showFact();
}

function showFact() {
    if (factIndex >= facts.length) factIndex = 0;
    const currentFact = facts[factIndex];
    dynamicArea.innerHTML = `
        <span class="fact-counter">Fact ${factIndex + 1} / ${facts.length}</span>
        <div style="font-size: 1.3rem; margin-bottom: 30px; min-height: 80px; display:flex; align-items:center; justify-content:center;">"${currentFact}"</div>
        <div class="btn-group">
            <button class="action-btn secondary" onclick="prevFact()" ${factIndex === 0 ? 'disabled' : ''}>Previous</button>
            <button class="action-btn" onclick="nextFact()">Next Fact</button>
        </div>
    `;
}
function nextFact() { factIndex++; if (factIndex >= facts.length) factIndex = 0; showFact(); }
function prevFact() { if (factIndex > 0) { factIndex--; showFact(); } }

/* =========================================================
   6. QUIZ LOGIC
   ========================================================= */
function initQuiz() {
    quizIndex = 0; quizScore = 0;
    cardIcon.className = "fa-solid fa-circle-question";
    renderQuestion();
}

function renderQuestion() {
    if (quizIndex >= quizData.length) { showQuizResults(); return; }
    const currentQ = quizData[quizIndex];
    titleEl.innerText = `Question ${quizIndex + 1}`;
    subEl.innerText = currentQ.q;
    let optionsHTML = '<div class="quiz-options">';
    currentQ.options.forEach((option, index) => {
        optionsHTML += `<button class="option-btn" onclick="checkAnswer(${index}, this)">${option}</button>`;
    });
    optionsHTML += '</div>';
    dynamicArea.innerHTML = `<div class="score-badge">Points: ${quizScore}</div>${optionsHTML}<div id="next-btn-container"></div>`;
}

function checkAnswer(selectedIndex, btnElement) {
    const currentQ = quizData[quizIndex];
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    if (selectedIndex === currentQ.correct) {
        btnElement.classList.add('correct');
        quizScore += POINTS_PER_Q;
    } else {
        btnElement.classList.add('wrong');
        allButtons[currentQ.correct].classList.add('correct');
    }
    document.querySelector('.score-badge').innerText = `Points: ${quizScore}`;
    document.getElementById('next-btn-container').innerHTML = `<button class="action-btn" onclick="nextQuestion()">Next Question</button>`;
}
function nextQuestion() { quizIndex++; renderQuestion(); }
function showQuizResults() {
    titleEl.innerText = "Quiz Complete!";
    subEl.innerText = `Final Score: ${quizScore} Points`;
    dynamicArea.innerHTML = `
        <div style="font-size: 3rem; color: #06b6d4; margin-bottom: 10px;"><i class="fa-solid fa-trophy"></i></div>
        <div class="btn-group"><button class="action-btn" onclick="initQuiz()">Play Again</button><button class="action-btn secondary" onclick="initFacts()">Study Facts</button></div>
    `;
}

/* =========================================================
   7. NEWS LOGIC
   ========================================================= */
function initNews() {
    cardIcon.className = "fa-solid fa-newspaper";
    titleEl.innerText = "Rail News";
    subEl.innerText = "Latest updates from the world of railways.";
    let htmlContent = '<div class="news-container">';
    newsData.forEach(post => {
        htmlContent += `
            <div class="news-card">
                <div class="news-header"><span class="news-tag">${post.category}</span><span class="news-date">${post.date}</span></div>
                <div class="news-title">${post.title}</div><div class="news-excerpt">${post.content}</div>
            </div>`;
    });
    htmlContent += '</div><div style="margin-top: 20px;"><button class="action-btn secondary" onclick="renderHome()">Back Home</button></div>';
    dynamicArea.innerHTML = htmlContent;
}

/* =========================================================
   8. GAME LOGIC (LEVELS + ROTATION)
   ========================================================= */

function initGame() {
    cardIcon.className = "fa-solid fa-traffic-light";
    titleEl.innerText = `Signal Simulator - Level ${currentLevel}`;
    
    // Reset State
    gameState = { signal: 'red', switch1: 'top', switch2: 'top', trainMoving: false };
    if (gameInterval) clearInterval(gameInterval);

    if (currentLevel === 1) {
        subEl.innerText = "Mission: Guide the train to TRACK 2 (Bottom).";
        renderLevel1();
    } else {
        subEl.innerText = "Mission: Avoid the Dead End. Reach TRACK 3 (Bottom).";
        renderLevel2();
    }
}

function renderLevel1() {
    dynamicArea.innerHTML = `
        <div class="status-text" id="game-status">LEVEL 1: READY.</div>
        <div class="game-board" id="board">
            <svg width="100%" height="100%" viewBox="0 0 600 300">
                <!-- Tracks -->
                <line x1="0" y1="150" x2="200" y2="150" class="track-line" />
                <line x1="200" y1="150" x2="600" y2="100" class="track-line" opacity="0.5" />
                <text x="540" y="90" fill="#555" font-family="monospace" font-size="12">TRACK 1</text>
                <line x1="200" y1="150" x2="600" y2="200" class="track-line" opacity="0.5" />
                <text x="540" y="230" fill="#555" font-family="monospace" font-size="12">TRACK 2</text>

                <!-- Switch 1 -->
                <line id="sw1" x1="200" y1="150" x2="300" y2="135" class="switch-line" onclick="toggleSwitch(1)" />

                <!-- Signal -->
                <line x1="180" y1="120" x2="180" y2="150" stroke="#333" stroke-width="2" />
                <circle id="sig" cx="180" cy="120" r="8" fill="#ef4444" class="signal-light" onclick="toggleSignal()" />

                <!-- Train -->
                <rect id="game-train" x="20" y="144" width="40" height="12" rx="2" fill="white" />
            </svg>
        </div>
        <div class="game-controls">
            <button class="action-btn" onclick="startTrainLvl1()">START TRAIN</button>
            <button class="action-btn secondary" onclick="initGame()">RESET</button>
        </div>
        <div style="font-size: 0.9rem; color: #94a3b8; margin-top: 15px;">Click Blue Lines (Switch) and Red Light (Signal).</div>
    `;
}

function renderLevel2() {
    dynamicArea.innerHTML = `
        <div class="status-text" id="game-status">LEVEL 2: COMPLEX JUNCTION.</div>
        <div class="game-board" id="board">
            <svg width="100%" height="100%" viewBox="0 0 600 300">
                <!-- Track Start -->
                <line x1="0" y1="150" x2="150" y2="150" class="track-line" />
                
                <!-- Split 1 -->
                <line x1="150" y1="150" x2="500" y2="50" class="track-line" opacity="0.5" /> <!-- Top (Dead End) -->
                <text x="510" y="55" fill="#ef4444" font-family="monospace" font-size="12">DEAD END</text>
                
                <line x1="150" y1="150" x2="350" y2="200" class="track-line" opacity="0.5" /> <!-- Middle -->

                <!-- Split 2 (Starts at x=350, y=200) -->
                <line x1="350" y1="200" x2="600" y2="200" class="track-line" opacity="0.5" /> <!-- Track 2 -->
                <text x="540" y="190" fill="#555" font-family="monospace" font-size="12">TRACK 2</text>
                
                <line x1="350" y1="200" x2="600" y2="280" class="track-line" opacity="0.5" /> <!-- Track 3 -->
                <text x="540" y="270" fill="#555" font-family="monospace" font-size="12">TRACK 3</text>

                <!-- Switch 1 (Left) -->
                <line id="sw1" x1="150" y1="150" x2="230" y2="130" class="switch-line" onclick="toggleSwitch(1)" />
                
                <!-- Switch 2 (Right) -->
                <line id="sw2" x1="350" y1="200" x2="430" y2="200" class="switch-line" onclick="toggleSwitch(2)" />

                <!-- Signal -->
                <line x1="120" y1="120" x2="120" y2="150" stroke="#333" stroke-width="2" />
                <circle id="sig" cx="120" cy="120" r="8" fill="#ef4444" class="signal-light" onclick="toggleSignal()" />

                <!-- Train -->
                <rect id="game-train" x="20" y="144" width="40" height="12" rx="2" fill="white" />
            </svg>
        </div>
        <div class="game-controls">
            <button class="action-btn" onclick="startTrainLvl2()">START TRAIN</button>
            <button class="action-btn secondary" onclick="initGame()">RESET</button>
        </div>
    `;
}

function toggleSignal() {
    if (gameState.trainMoving) return;
    const sig = document.getElementById('sig');
    if (gameState.signal === 'red') {
        gameState.signal = 'green';
        sig.setAttribute('fill', '#22c55e');
    } else {
        gameState.signal = 'red';
        sig.setAttribute('fill', '#ef4444');
    }
}

function toggleSwitch(num) {
    if (gameState.trainMoving) return;
    const sw = document.getElementById(`sw${num}`);
    const key = `switch${num}`; // 'switch1' or 'switch2'

    if (currentLevel === 1) {
        if (gameState[key] === 'top') {
            gameState[key] = 'bottom';
            sw.setAttribute('x2', '300'); sw.setAttribute('y2', '165');
        } else {
            gameState[key] = 'top';
            sw.setAttribute('x2', '300'); sw.setAttribute('y2', '135');
        }
    } 
    else if (currentLevel === 2) {
        if (num === 1) {
            // Switch 1: Top (Dead End) vs Bottom (Middle Path)
            if (gameState.switch1 === 'top') {
                gameState.switch1 = 'bottom';
                sw.setAttribute('x2', '230'); sw.setAttribute('y2', '170'); // Point Down
            } else {
                gameState.switch1 = 'top';
                sw.setAttribute('x2', '230'); sw.setAttribute('y2', '130'); // Point Up
            }
        } else {
            // Switch 2: Top (Track 2) vs Bottom (Track 3)
            if (gameState.switch2 === 'top') {
                gameState.switch2 = 'bottom';
                sw.setAttribute('x2', '430'); sw.setAttribute('y2', '225'); // Point Down
            } else {
                gameState.switch2 = 'top';
                sw.setAttribute('x2', '430'); sw.setAttribute('y2', '200'); // Point Straight
            }
        }
    }
}

/* --- PHYSICS LEVEL 1 --- */
function startTrainLvl1() {
    if (gameState.trainMoving) return;
    gameState.trainMoving = true;
    const trainEl = document.getElementById('game-train');
    const statusEl = document.getElementById('game-status');
    statusEl.innerText = "TRAIN MOVING..."; statusEl.style.color = "#fbbf24";

    let pos = 20;
    let angle = 0;

    gameInterval = setInterval(() => {
        pos += 3;
        let y = 144;

        // Logic for Y position & Rotation
        if (pos > 200) {
            if (gameState.switch1 === 'top') {
                y = 144 - (pos - 200) * 0.125; // Slope Up
                angle = -7; // Rotate Up
            } else {
                y = 144 + (pos - 200) * 0.125; // Slope Down
                angle = 7; // Rotate Down
            }
        }

        // Apply Position & Rotation
        trainEl.setAttribute('x', pos);
        trainEl.setAttribute('y', y);
        // Rotate around center of train (pos + 20, y + 6)
        trainEl.setAttribute('transform', `rotate(${angle}, ${pos + 20}, ${y + 6})`);

        // Check Signal Crash
        if (gameState.signal === 'red' && pos > 140 && pos < 150) {
            endGame("CRASH: Signal was RED!", false);
        }

        // Check Win/Loss
        if (pos > 580) {
            if (gameState.switch1 === 'bottom') {
                endGame("LEVEL 1 COMPLETE! Next level...", true);
            } else {
                endGame("WRONG TRACK! Train sent to Track 1.", false);
            }
        }
    }, 16);
}

/* --- PHYSICS LEVEL 2 --- */
function startTrainLvl2() {
    if (gameState.trainMoving) return;
    gameState.trainMoving = true;
    const trainEl = document.getElementById('game-train');
    const statusEl = document.getElementById('game-status');
    statusEl.innerText = "TRAIN MOVING..."; statusEl.style.color = "#fbbf24";

    let pos = 20;
    let angle = 0;

    gameInterval = setInterval(() => {
        pos += 3;
        let y = 144;

        // Segment 1: Start to Switch 1 (x=150)
        if (pos < 150) {
            y = 144;
            angle = 0;
        }
        // Segment 2: After Switch 1
        else if (pos >= 150 && pos < 350) {
            if (gameState.switch1 === 'top') {
                // Going to Dead End (Up)
                y = 144 - (pos - 150) * 0.28;
                angle = -15;
            } else {
                // Going to Switch 2 (Down)
                y = 144 + (pos - 150) * 0.25;
                angle = 14;
            }
        }
        // Segment 3: After Switch 2 (x=350, y starts at ~194)
        else if (pos >= 350) {
            if (gameState.switch1 === 'top') {
                // Still on dead end track
                y = 144 - (pos - 150) * 0.28;
            } else {
                // We are at Switch 2
                let startY = 144 + (200) * 0.25; // y at 350 is roughly 194
                if (gameState.switch2 === 'top') {
                    // Straight to Track 2
                    y = startY; 
                    angle = 0;
                } else {
                    // Down to Track 3
                    y = startY + (pos - 350) * 0.3;
                    angle = 16;
                }
            }
        }

        // Apply Updates
        trainEl.setAttribute('x', pos);
        trainEl.setAttribute('y', y);
        trainEl.setAttribute('transform', `rotate(${angle}, ${pos + 20}, ${y + 6})`);

        // Check Signal
        if (gameState.signal === 'red' && pos > 80 && pos < 90) {
            endGame("CRASH: Signal RED!", false);
        }

        // Check Crashes
        if (pos > 500 && gameState.switch1 === 'top') {
            endGame("CRASH: Dead End!", false);
        }

        // Check Win
        if (pos > 580) {
            if (gameState.switch1 === 'bottom' && gameState.switch2 === 'bottom') {
                endGame("SUCCESS! TRACK 3 REACHED!", true);
            } else if (gameState.switch1 === 'bottom' && gameState.switch2 === 'top') {
                endGame("WRONG TRACK (Track 2).", false);
            }
        }
    }, 16);
}

function endGame(msg, win) {
    clearInterval(gameInterval);
    const statusEl = document.getElementById('game-status');
    const trainEl = document.getElementById('game-train');
    statusEl.innerText = msg;
    
    if (win) {
        statusEl.style.color = "#22c55e";
        trainEl.setAttribute('fill', '#22c55e');
        if (currentLevel === 1) {
            setTimeout(() => {
                currentLevel = 2;
                initGame();
            }, 2000);
        }
    } else {
        statusEl.style.color = "#ef4444";
        trainEl.setAttribute('fill', '#ef4444');
    }
}
