/* =========================================================
   1. DATA DATASETS
   ========================================================= */

/* --- TRAIN SCHOOL DATA (FULL CURRICULUM) --- */
const schoolData = {
    signalling: {
        title: "Signalling Systems",
        icon: "fa-traffic-light",
        topics: [
            { 
                title: "1. Colours & Meaning", 
                content: "<strong>Red (Stop):</strong> The train must stop before the signal. Passing it is a SPAD (Signal Passed at Danger), a serious incident.<br><br><strong>Yellow (Caution):</strong> Be prepared to stop at the next signal.<br><br><strong>Double Yellow (Preliminary Caution):</strong> Be prepared to find the next signal at Yellow.<br><br><strong>Green (Clear):</strong> Proceed at line speed. The next block is clear." 
            },
            { 
                title: "2. Aspects (2, 3, 4)", 
                content: "Signals can display different numbers of lights, called 'Aspects':<br>• <strong>2-Aspect:</strong> Red/Green only. Low speed lines.<br>• <strong>3-Aspect:</strong> Red, Yellow, Green.<br>• <strong>4-Aspect:</strong> Adds Double Yellow. Used on high-speed mainlines to give drivers earlier warnings to brake." 
            },
            { 
                title: "3. Points & Turnouts", 
                content: "Points are the moving rails that allow trains to change tracks. They are <strong>Interlocked</strong> with signals. If a signal shows Green, the points ahead are physically locked. If points are moving or fail detection, the signal stays Red." 
            },
            { 
                title: "4. The Block System", 
                content: "Tracks are divided into sections called 'Blocks'. Only one train can be in a block at a time to prevent collisions.<br><br>• <strong>Absolute Block:</strong> Manual human system.<br>• <strong>Track Circuit:</strong> Electricity in rails detects train wheels.<br>• <strong>Moving Block (CBTC/ETCS):</strong> Safety zones move with the train." 
            },
            { 
                title: "5. Safety (AWS & TPWS)", 
                content: "<strong>AWS (Automatic Warning System):</strong> A bell sounds for Green. A horn sounds for Yellow/Red, and the driver must click a button or brakes apply.<br><br><strong>TPWS (Train Protection Warning System):</strong> Grid sensors on the track that automatically stop a train if it approaches a Red signal too fast." 
            }
        ]
    },
    dispatching: {
        title: "Dispatching & Control",
        icon: "fa-tower-broadcast",
        topics: [
            {
                title: "1. Roles in Railway Control",
                content: "<strong>Signaller:</strong> Sits in a box or centre, pulling levers or clicking screens to set signals for specific trains.<br><br><strong>Dispatcher:</strong> Station-based staff who ensure the train is ready to leave (doors closed, driver ready).<br><br><strong>Controller:</strong> Sits in a HQ, looking at the whole network. They decide what to do if a train breaks down (cancel, divert, etc)."
            },
            {
                title: "2. Train Regulation",
                content: "Deciding which train goes first. <br>• <strong>Punctuality:</strong> On-time trains often get priority.<br>• <strong>Class:</strong> Express passenger trains usually overtake freight trains.<br>• <strong>Recovery:</strong> If a train is late, a controller might skip stops to get it back on time."
            },
            {
                title: "3. Control Rooms & Panels",
                content: "Modern control rooms use <strong>IECC</strong> (Integrated Electronic Control Centre). Screens show the track diagram with live train positions (Headcodes). <br><br>Older boxes use <strong>NX Panels</strong> (Entrance-Exit), where signallers push a button at the start and end of a route to clear signals."
            },
            {
                title: "4. Route Setting",
                content: "<strong>ARS (Automatic Route Setting):</strong> Computers set signals automatically based on the timetable.<br><br><strong>Manual:</strong> The signaller must intervene if ARS fails or if there is a disruption."
            },
            {
                title: "5. Communication (GSM-R)",
                content: "Trains use <strong>GSM-R</strong> (Global System for Mobile-Rail), a secure dedicated phone network. Drivers can call the Signaller directly, or initiate a 'Rec Call' (Emergency) which stops all trains in the area."
            }
        ]
    },
    guarding: {
        title: "Guarding & Safety",
        icon: "fa-user-shield",
        topics: [
            {
                title: "1. Guard Responsibilities",
                content: "The Guard (or Conductor) is responsible for the safety of the train, not just checking tickets. They operate the doors, make announcements, and check that the train is safe to depart."
            },
            {
                title: "2. Dispatch Methods",
                content: "<strong>Right Away (RA):</strong> The station staff confirm it's safe, the Guard closes doors, then gives the 'Right Away' buzzer signal to the driver.<br><br><strong>Bell Codes:</strong><br>• 1 beep: Stop<br>• 2 beeps: Ready to start<br>• 3 beeps: Set back (Reverse)"
            },
            {
                title: "3. Passenger Safety",
                content: "Guards manage overcrowding, deal with anti-social behavior, and help passengers with disabilities. They are trained to use the <strong>PassCom</strong> (Passenger Communication Alarm) override if it's pulled in a tunnel."
            },
            {
                title: "4. Platform Safety (TRTS)",
                content: "Before leaving, platform staff use the 'wand' or hand signals. The Guard checks the <strong>PTI</strong> (Platform Train Interface) to ensure no one is trapped in the doors. Once safe, they signal TRTS (Train Ready To Start) to the signaller."
            },
            {
                title: "5. Emergency Procedures",
                content: "In a crash or fire, the Guard takes charge of evacuation. They carry track safety equipment (flags, detonators) to protect the line and warn oncoming trains."
            }
        ]
    },
    driving: {
        title: "Train Driving",
        icon: "fa-gauge-high",
        topics: [
            {
                title: "1. Basic Cab Controls",
                content: "<strong>Power/Brake Controller:</strong> Often combined into one handle. Push for power, pull for brake.<br><strong>Reverser:</strong> Forward, Neutral, Reverse.<br><strong>Vigilance Device (DSD):</strong> A pedal or button that must be pressed/released every 60 seconds to prove the driver is awake."
            },
            {
                title: "2. Driving Techniques",
                content: "<strong>Coasting:</strong> Drivers accelerate to speed and then shut off power to coast, saving huge amounts of energy.<br><strong>Defensive Driving:</strong> Braking earlier than necessary, especially in wet leaves or snow conditions where wheels slip."
            },
            {
                title: "3. Understanding Signs",
                content: "<strong>Line Speed:</strong> Circular signs showing the max speed (e.g., '90').<br><strong>TSR:</strong> Temporary Speed Restrictions (yellow boards) placed during track work.<br><strong>Whistle Boards:</strong> A 'W' sign means blow the horn."
            },
            {
                title: "4. Stopping Accuracy",
                content: "Stopping a 200-tonne train at exactly the right spot requires skill. Drivers look for 'Car Stop Markers' (e.g., [4], [8]) on the platform to ensure all doors open safely."
            },
            {
                title: "5. Traction Types",
                content: "<strong>EMU (Electric):</strong> Pick up power from overhead wires (Pantograph) or 3rd rail (Shoes). Fast acceleration.<br><strong>DMU (Diesel):</strong> Has an engine under the carriage. Noisier and slower.<br><strong>Bi-Mode:</strong> Can switch between Diesel and Electric."
            }
        ]
    }
};

/* --- FACTS --- */
const factsData = [
    { category: "High Speed", text: "The TGV set the world speed record for a wheeled train at 574.8 km/h (357 mph) in 2007." },
    { category: "High Speed", text: "Japanese Shinkansen trains have an average annual delay of less than 1 minute." },
    { category: "History", text: "The first public railway opened in 1825 between Stockton and Darlington in the UK." },
    { category: "History", text: "The 'Mallard' holds the speed record for a steam locomotive at 126 mph (1938)." },
    { category: "Metro", text: "London Underground (The Tube) is the oldest metro system in the world, opened in 1863." },
    { category: "Metro", text: "The New York City Subway has the most stations of any system in the world (472 stations)." },
    { category: "Signalling", text: "Early railways used 'Ball Signals' where a raised ball meant the track was clear (Highball)." },
    { category: "Signalling", text: "ETCS (European Train Control System) monitors train speed and stops it automatically." },
    { category: "Rolling Stock", text: "The 'Big Boy' locomotives were the largest steam locomotives ever built." },
    { category: "Rolling Stock", text: "Hydrogen trains (like the Coradia iLint) emit only steam and water." }
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

/* --- NEWS (With Images) --- */
const newsData = [
    { 
        category: "Longline Studios", date: "Dec 09, 2025", 
        title: "Official LineTrack Launch", 
        image: "https://images.unsplash.com/photo-1474487548417-781cb714c2f0?auto=format&fit=crop&w=600&q=80",
        excerpt: "LineTrack is officially launched! Discover our new interactive platform.",
        body: "Hello everyone, we are presenting you the new website about train stuff: LineTrack.\n\nLineTrack is an entertaining site with Facts, News, Quizzes and way much more about trains in general. The news will be updated every day, and the website improved all along the next days/weeks.\n\nWe appreciate your support and our team thanks you for your visit.\n\nYou can check our Discord page at anytime here: <a href='https://discord.gg/HDXFZtkEDQ' target='_blank' style='color:var(--accent); text-decoration:underline;'>Join our Discord</a>"
    },
    { 
        category: "Service Launch", date: "Dec 09, 2025", 
        title: "New Nightjet Service Launches: Paris to Berlin", 
        image: "https://images.unsplash.com/photo-1556621595-6dd9c669273c?auto=format&fit=crop&w=600&q=80",
        excerpt: "The first overnight train connecting the two capitals arrived this morning.",
        body: "A historic moment for European rail travel occurred this morning as the new ÖBB Nightjet service arrived at Berlin Hauptbahnhof from Paris. The train, fully booked with 400 passengers, offers a sustainable alternative to short-haul flights.\n\nThe service runs three times a week and features the new generation of sleeper cabins, offering private showers and wireless charging. 'This is the renaissance of the night train,' said the Transport Minister at the inauguration ceremony.\n\nTicket prices start at €29 for a seated ticket, making it highly competitive with budget airlines, while producing 90% less CO2."
    },
    { 
        category: "Innovation", date: "Dec 08, 2025", 
        title: "Battery Record: 220km on One Charge", 
        image: "https://images.unsplash.com/photo-1515165592879-1849288ca9e3?auto=format&fit=crop&w=600&q=80",
        excerpt: "Stadler's new FLIRT Akku prototype has shattered previous world records.",
        body: "In a test run conducted in northern Germany, the new Stadler FLIRT Akku battery-electric train traveled 224 kilometers on a single battery charge, operating in freezing winter conditions.\n\nThis technology allows electric trains to run on non-electrified lines without using diesel engines. The batteries charge from overhead wires when available and take over when the wires end.\n\n'This proves that the age of diesel on branch lines is coming to an end,' stated the lead engineer. The train is expected to enter commercial service by late 2026."
    },
    { 
        category: "Infrastructure", date: "Dec 06, 2025", 
        title: "US Funding for Texas High-Speed Line", 
        image: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=600&q=80",
        excerpt: "Federal regulators approved a $12 billion loan package for Dallas-Houston.",
        body: "The dream of Japanese-style Bullet Trains in Texas is one step closer to reality. Today, federal regulators approved a $12 billion loan package to kickstart construction on the Dallas to Houston high-speed rail corridor.\n\nThe project will use N700S Shinkansen technology imported from Japan, capable of speeds up to 200 mph (320 km/h). The journey time between the two major cities will be cut to under 90 minutes.\n\nConstruction is set to begin in Q1 2026, with an estimated completion date of 2031. Proponents say it will remove 15,000 cars from I-45 daily."
    },
    { 
        category: "Fleet Update", date: "Dec 05, 2025", 
        title: "Hydrogen Train Fleet Enters Service in Italy", 
        image: "https://images.unsplash.com/photo-1563273941-2c93883a7c36?auto=format&fit=crop&w=600&q=80",
        excerpt: "The Valcamonica line is now fully operated by hydrogen-powered trains.",
        body: "Italy has become the second country in Europe, after Germany, to operate a fully hydrogen-powered railway line. The 'Coradia iLint' trains began regular passenger service today in the Valcamonica valley.\n\nThese trains emit nothing but steam and condensed water. They are powered by hydrogen fuel cells that generate electricity on board. The hydrogen is produced locally using hydroelectric power, making the entire cycle 100% green.\n\nPassengers have noted that the new trains are significantly quieter than the diesel predecessors."
    }
];

/* =========================================================
   2. STATE MANAGEMENT & DOM
   ========================================================= */
let currentCategory = "All";
let currentSearch = "";
let currentNewsCat = "All";
let factIndex = 0;
let quizIndex = 0;
let quizScore = 0;
const POINTS_PER_Q = 100;

// Game State
let currentLevel = 1;
let gameState = { signal1: 'red', signal2: 'red', switch1: 'top', switch2: 'top', trainMoving: false };
let gameInterval = null;

// DOM
const titleEl = document.getElementById("main-title");
const subEl = document.getElementById("sub-title");
const dynamicArea = document.getElementById("dynamic-area");
const cardIcon = document.querySelector(".card-icon i");

initTheme();
renderHome();

/* =========================================================
   3. THEME
   ========================================================= */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.className = "fa-solid fa-sun";
        themeText.innerText = "Light Mode";
    }
    const themeBtn = document.getElementById('btn-theme');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeIcon.className = "fa-solid fa-sun";
                themeText.innerText = "Light Mode";
            } else {
                localStorage.setItem('theme', 'dark');
                themeIcon.className = "fa-solid fa-moon";
                themeText.innerText = "Dark Mode";
            }
        });
    }
}

/* =========================================================
   4. NAVIGATION
   ========================================================= */
function attachMenuEvent(id, action) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (gameInterval) clearInterval(gameInterval);
            const card = document.getElementById('card');
            card.style.animation = 'none';
            card.offsetHeight; 
            card.style.animation = 'fadeInScale 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
            action();
        });
    }
}

attachMenuEvent('btn-home', renderHome);
attachMenuEvent('btn-school', initSchool);
attachMenuEvent('btn-fact', initFacts);
attachMenuEvent('btn-quiz', initQuiz);
attachMenuEvent('btn-news', initNews);
attachMenuEvent('btn-game', () => { currentLevel = 1; initGame(); });

function setActiveMenu(id) {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/* =========================================================
   5. HOME
   ========================================================= */
function renderHome() {
    cardIcon.className = "fa-solid fa-train";
    titleEl.innerText = "Welcome Aboard";
    subEl.innerText = "The #1 place for railway enthusiasts.";

    dynamicArea.innerHTML = `
        <div class="update-banner"><i class="fa-solid fa-star"></i> NEW : Signalling Minigame v1.1</div>
        <div class="btn-group">
            <button class="action-btn" onclick="openDailyFact()"><i class="fa-solid fa-calendar-day"></i> Fact of the Day</button>
            <button class="action-btn secondary" onclick="openDailyArticle()"><i class="fa-solid fa-newspaper"></i> Article of the Day</button>
        </div>
        <div style="margin-top: 20px; font-size: 0.9rem; color: var(--text-muted);">Select a category from the menu to start exploring.</div>
    `;
}

function openDailyFact() { setActiveMenu('btn-fact'); initFacts(); const today = new Date(); const seed = today.getFullYear() * 1000 + (today.getMonth() + 1) * 100 + today.getDate(); const dailyIndex = seed % factsData.length; renderFactDisplay(factsData[dailyIndex]); }
function openDailyArticle() { setActiveMenu('btn-news'); if(newsData.length > 0) openNewsModal(0); else initNews(); }

/* =========================================================
   6. TRAIN SCHOOL (LOGIC)
   ========================================================= */
function initSchool() {
    cardIcon.className = "fa-solid fa-graduation-cap";
    titleEl.innerText = "Train School";
    subEl.innerText = "Learn how the railway actually works.";

    let html = `<div class="school-grid">`;
    for (const key in schoolData) {
        const item = schoolData[key];
        html += `
            <div class="school-card" onclick="openLesson('${key}')">
                <i class="school-icon fa-solid ${item.icon}"></i>
                <div class="school-title">${item.title}</div>
            </div>
        `;
    }
    html += `</div>`;
    dynamicArea.innerHTML = html;
}

function openLesson(key) {
    const lesson = schoolData[key];
    let accordionHTML = `<div class="lesson-container">`;
    
    lesson.topics.forEach((topic, index) => {
        accordionHTML += `
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    ${topic.title}
                    <i class="arrow-icon fa-solid fa-chevron-down"></i>
                </div>
                <div class="accordion-content">
                    ${topic.content}
                </div>
            </div>
        `;
    });
    accordionHTML += `</div>`;

    dynamicArea.innerHTML = `
        <div style="margin-bottom: 20px; display:flex; align-items:center; gap:10px;">
            <button class="action-btn secondary" style="padding: 8px 15px;" onclick="initSchool()"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <h2 style="font-size: 1.5rem; margin:0;">${lesson.title}</h2>
        </div>
        ${accordionHTML}
    `;
}

function toggleAccordion(header) {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    
    document.querySelectorAll('.accordion-item').forEach(i => {
        if(i !== item) {
            i.classList.remove('active');
            i.querySelector('.accordion-content').style.maxHeight = null;
            i.querySelector('.accordion-content').classList.remove('open');
        }
    });

    item.classList.toggle('active');
    
    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 40 + "px"; 
        content.classList.add('open');
    } else {
        content.style.maxHeight = null;
        content.classList.remove('open');
    }
}

/* =========================================================
   7. FACTS LOGIC
   ========================================================= */
function initFacts() {
    cardIcon.className = "fa-solid fa-lightbulb";
    titleEl.innerText = "Railway Encyclopedia";
    subEl.innerText = "Discover knowledge by category.";
    
    const categories = ["All", ...new Set(factsData.map(f => f.category))];
    let catsHTML = categories.map(c => `<button class="cat-btn ${c === currentCategory ? 'active' : ''}" onclick="filterCategory('${c}')">${c}</button>`).join("");

    dynamicArea.innerHTML = `
        <div class="facts-controls">
            <input type="text" id="factSearch" class="search-bar" placeholder="Search facts..." onkeyup="filterFacts()">
            <div class="category-list" id="catList">${catsHTML}</div>
        </div>
        <div id="fact-result-area"></div>
        <button class="action-btn" onclick="showRandomFact()">Random Fact</button>
    `;
    showRandomFact();
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('#catList .cat-btn').forEach(btn => btn.classList.toggle('active', btn.innerText === cat));
    showRandomFact();
}

function filterFacts() {
    currentSearch = document.getElementById('factSearch').value.toLowerCase();
    showRandomFact();
}

function showRandomFact() {
    const filtered = factsData.filter(f => {
        const matchesCat = currentCategory === "All" || f.category === currentCategory;
        const matchesSearch = f.text.toLowerCase().includes(currentSearch);
        return matchesCat && matchesSearch;
    });
    const randomIndex = Math.floor(Math.random() * filtered.length);
    renderFactDisplay(filtered[randomIndex] || { category: "Info", text: "No facts found matching your criteria." });
}

function renderFactDisplay(fact) {
    const area = document.getElementById('fact-result-area');
    if(!area) return;
    area.innerHTML = `<div class="fact-display-card"><span class="fact-category-label">${fact.category}</span><div class="fact-text">"${fact.text}"</div></div>`;
}

/* =========================================================
   8. QUIZ LOGIC
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
        <div style="font-size: 3rem; color: var(--accent); margin-bottom: 10px;"><i class="fa-solid fa-trophy"></i></div>
        <div class="btn-group"><button class="action-btn" onclick="initQuiz()">Play Again</button><button class="action-btn secondary" onclick="initFacts()">Study Facts</button></div>
    `;
}

/* =========================================================
   9. NEWS LOGIC
   ========================================================= */
function initNews() {
    cardIcon.className = "fa-solid fa-newspaper";
    titleEl.innerText = "Rail News";
    subEl.innerText = "Top stories from around the world.";

    const categories = ["All", ...new Set(newsData.map(n => n.category))];
    let catsHTML = categories.map(c => `<button class="cat-btn ${c === currentNewsCat ? 'active' : ''}" onclick="filterNews('${c}')">${c}</button>`).join("");

    dynamicArea.innerHTML = `
        <div class="filter-row">${catsHTML}</div>
        <div class="news-container" id="newsFeed"></div>
        <div style="margin-top: 20px;">
            <button class="action-btn secondary" onclick="refreshNewsFeed()"><i class="fa-solid fa-rotate"></i> Refresh Feed</button>
        </div>
    `;
    
    renderNewsFeed();
}

function filterNews(cat) {
    currentNewsCat = cat;
    initNews();
}

function renderNewsFeed() {
    const feed = document.getElementById('newsFeed');
    feed.innerHTML = "";
    
    const filtered = newsData.filter(n => currentNewsCat === "All" || n.category === currentNewsCat);
    
    if (filtered.length === 0) {
        feed.innerHTML = "<p>No news in this category.</p>";
        return;
    }

    filtered.forEach((post) => {
        const originalIndex = newsData.indexOf(post);
        feed.innerHTML += `
            <div class="news-card" onclick="openNewsModal(${originalIndex})">
                <img src="${post.image}" class="news-thumb" alt="News">
                <div class="news-content">
                    <div class="news-meta"><span class="news-tag">${post.category}</span><span class="news-date">${post.date}</span></div>
                    <div class="news-title">${post.title}</div>
                    <div class="news-excerpt">${post.excerpt}</div>
                </div>
            </div>`;
    });
}

function refreshNewsFeed() {
    const feed = document.getElementById('newsFeed');
    feed.innerHTML = '<div class="spinner"></div>'; 
    setTimeout(() => { renderNewsFeed(); }, 800);
}

function openNewsModal(index) {
    const post = newsData[index];
    const modal = document.getElementById('news-modal');
    document.getElementById('modal-img').src = post.image;
    document.getElementById('modal-tag').innerText = post.category;
    document.getElementById('modal-date').innerText = post.date;
    document.getElementById('modal-title').innerText = post.title;
    document.getElementById('modal-text').innerHTML = post.body;
    modal.classList.add('show');
}

function closeNewsModal() {
    document.getElementById('news-modal').classList.remove('show');
}

/* =========================================================
   10. GAME LOGIC
   ========================================================= */
function initGame() {
    cardIcon.className = "fa-solid fa-traffic-light";
    titleEl.innerText = `Signal Simulator - Level ${currentLevel}`;
    gameState = { signal1: 'red', signal2: 'red', switch1: 'top', switch2: 'top', trainMoving: false };
    if (gameInterval) clearInterval(gameInterval);
    if (currentLevel === 1) { subEl.innerText = "Mission: Guide the WHITE train to TRACK 2 (Bottom)."; renderLevel1(); }
    else if (currentLevel === 2) { subEl.innerText = "Mission: Avoid the Dead End. Reach TRACK 3 (Bottom)."; renderLevel2(); }
    else if (currentLevel === 3) { subEl.innerText = "Mission: Stop the GREY train! Merge safely to Top Track."; renderLevel3(); }
}

function renderLevel1() {
    dynamicArea.innerHTML = `<div class="status-text" id="game-status">LEVEL 1: READY.</div><div class="game-board"><svg width="100%" height="100%" viewBox="0 0 600 300"><line x1="0" y1="150" x2="200" y2="150" class="track-line" /><line x1="200" y1="150" x2="600" y2="100" class="track-line" opacity="0.5" /><text x="540" y="90" fill="#555" font-family="monospace" font-size="12">TRACK 1</text><line x1="200" y1="150" x2="600" y2="200" class="track-line" opacity="0.5" /><text x="540" y="230" fill="#555" font-family="monospace" font-size="12">TRACK 2</text><line id="sw1" x1="200" y1="150" x2="300" y2="135" class="switch-line" onclick="toggleSwitch(1)" /><line x1="180" y1="120" x2="180" y2="150" stroke="#333" stroke-width="2" /><circle id="sig1" cx="180" cy="120" r="8" fill="#ef4444" class="signal-light" onclick="toggleSignal(1)" /><rect id="train1" x="20" y="144" width="40" height="12" rx="2" fill="white" /></svg></div><div class="game-controls"><button class="action-btn" onclick="startLevel1()">START</button><button class="action-btn secondary" onclick="initGame()">RESET</button></div>`;
}
function renderLevel2() {
    dynamicArea.innerHTML = `<div class="status-text" id="game-status">LEVEL 2: COMPLEX JUNCTION.</div><div class="game-board"><svg width="100%" height="100%" viewBox="0 0 600 300"><line x1="0" y1="150" x2="150" y2="150" class="track-line" /><line x1="150" y1="150" x2="500" y2="50" class="track-line" opacity="0.5" /><text x="510" y="55" fill="#ef4444" font-family="monospace" font-size="12">DEAD END</text><line x1="150" y1="150" x2="350" y2="200" class="track-line" opacity="0.5" /><line x1="350" y1="200" x2="600" y2="200" class="track-line" opacity="0.5" /><text x="540" y="190" fill="#555" font-family="monospace" font-size="12">TRACK 2</text><line x1="350" y1="200" x2="600" y2="280" class="track-line" opacity="0.5" /><text x="540" y="270" fill="#555" font-family="monospace" font-size="12">TRACK 3</text><line id="sw1" x1="150" y1="150" x2="230" y2="130" class="switch-line" onclick="toggleSwitch(1)" /><line id="sw2" x1="350" y1="200" x2="430" y2="200" class="switch-line" onclick="toggleSwitch(2)" /><line x1="120" y1="120" x2="120" y2="150" stroke="#333" stroke-width="2" /><circle id="sig1" cx="120" cy="120" r="8" fill="#ef4444" class="signal-light" onclick="toggleSignal(1)" /><rect id="train1" x="20" y="144" width="40" height="12" rx="2" fill="white" /></svg></div><div class="game-controls"><button class="action-btn" onclick="startLevel2()">START</button><button class="action-btn secondary" onclick="initGame()">RESET</button></div>`;
}
function renderLevel3() {
    dynamicArea.innerHTML = `<div class="status-text" id="game-status">LEVEL 3: COLLISION COURSE.</div><div class="game-board"><svg width="100%" height="100%" viewBox="0 0 600 300"><line x1="0" y1="100" x2="600" y2="100" class="track-line" /><text x="10" y="80" fill="#888" font-family="monospace" font-size="12">AI LINE</text><line x1="0" y1="220" x2="300" y2="220" class="track-line" /><line x1="300" y1="220" x2="500" y2="100" class="track-line" opacity="0.5" /><text x="10" y="250" fill="#fff" font-family="monospace" font-size="12">YOUR LINE</text><line id="sw1" x1="300" y1="220" x2="400" y2="220" class="switch-line" onclick="toggleSwitch(1)" /><line x1="250" y1="190" x2="250" y2="220" stroke="#333" stroke-width="2" /><circle id="sig1" cx="250" cy="190" r="8" fill="#ef4444" class="signal-light" onclick="toggleSignal(1)" /><text x="235" y="180" fill="#fff" font-size="10">YOU</text><line x1="250" y1="70" x2="250" y2="100" stroke="#333" stroke-width="2" /><circle id="sig2" cx="250" cy="70" r="8" fill="#ef4444" class="signal-light" onclick="toggleSignal(2)" /><text x="240" y="60" fill="#888" font-size="10">AI</text><rect id="train1" x="20" y="214" width="40" height="12" rx="2" fill="white" /><rect id="train2" x="20" y="94" width="40" height="12" rx="2" fill="#94a3b8" /></svg></div><div class="game-controls"><button class="action-btn" onclick="startLevel3()">START</button><button class="action-btn secondary" onclick="initGame()">RESET</button></div>`;
}

function toggleSignal(id) { if (gameState.trainMoving) return; const key = `signal${id}`; const el = document.getElementById(`sig${id}`); if (gameState[key] === 'red') { gameState[key] = 'green'; el.setAttribute('fill', '#22c55e'); } else { gameState[key] = 'red'; el.setAttribute('fill', '#ef4444'); } }
function toggleSwitch(id) { if (gameState.trainMoving) return; const key = `switch${id}`; const el = document.getElementById(`sw${id}`);
    if (currentLevel === 1) { if (gameState[key] === 'top') { gameState[key] = 'bottom'; el.setAttribute('x2', '300'); el.setAttribute('y2', '165'); } else { gameState[key] = 'top'; el.setAttribute('x2', '300'); el.setAttribute('y2', '135'); } } 
    else if (currentLevel === 2) { if (id === 1) { if (gameState.switch1 === 'top') { gameState.switch1 = 'bottom'; el.setAttribute('x2', '230'); el.setAttribute('y2', '170'); } else { gameState.switch1 = 'top'; el.setAttribute('x2', '230'); el.setAttribute('y2', '130'); } } else { if (gameState.switch2 === 'top') { gameState.switch2 = 'bottom'; el.setAttribute('x2', '430'); el.setAttribute('y2', '225'); } else { gameState.switch2 = 'top'; el.setAttribute('x2', '430'); el.setAttribute('y2', '200'); } } } 
    else if (currentLevel === 3) { if (gameState.switch1 === 'top') { gameState.switch1 = 'bottom'; el.setAttribute('x2', '400'); el.setAttribute('y2', '220'); } else { gameState.switch1 = 'top'; el.setAttribute('x2', '400'); el.setAttribute('y2', '160'); } }
}

function startLevel1() { if (gameState.trainMoving) return; gameState.trainMoving = true; const t1 = document.getElementById('train1'); const status = document.getElementById('game-status'); status.innerText = "TRAIN MOVING..."; status.style.color = "#fbbf24"; let pos = 20; let angle = 0;
    gameInterval = setInterval(() => { pos += 3; let y = 144; if (pos > 200) { if (gameState.switch1 === 'top') { y = 144 - (pos - 200) * 0.125; angle = -7; } else { y = 144 + (pos - 200) * 0.125; angle = 7; } } t1.setAttribute('x', pos); t1.setAttribute('y', y); t1.setAttribute('transform', `rotate(${angle}, ${pos+20}, ${y+6})`); if (gameState.signal1 === 'red' && pos > 140 && pos < 150) endGame("CRASH: Signal RED!", false); if (pos > 580) { if (gameState.switch1 === 'bottom') endGame("LEVEL 1 COMPLETE!", true); else endGame("WRONG TRACK!", false); } }, 16);
}
function startLevel2() { if (gameState.trainMoving) return; gameState.trainMoving = true; const t1 = document.getElementById('train1'); const status = document.getElementById('game-status'); status.innerText = "TRAIN MOVING..."; status.style.color = "#fbbf24"; let pos = 20; let angle = 0;
    gameInterval = setInterval(() => { pos += 3; let y = 144; if (pos < 150) { y = 144; angle = 0; } else if (pos >= 150 && pos < 350) { if (gameState.switch1 === 'top') { y = 144 - (pos - 150) * 0.28; angle = -15; } else { y = 144 + (pos - 150) * 0.25; angle = 14; } } else if (pos >= 350) { if (gameState.switch1 === 'top') y = 144 - (pos - 150) * 0.28; else { let startY = 194; if (gameState.switch2 === 'top') { y = startY; angle = 0; } else { y = startY + (pos - 350) * 0.3; angle = 16; } } } t1.setAttribute('x', pos); t1.setAttribute('y', y); t1.setAttribute('transform', `rotate(${angle}, ${pos+20}, ${y+6})`); if (gameState.signal1 === 'red' && pos > 80 && pos < 90) endGame("CRASH: Signal RED!", false); if (pos > 500 && gameState.switch1 === 'top') endGame("CRASH: Dead End!", false); if (pos > 580) { if (gameState.switch1 === 'bottom' && gameState.switch2 === 'bottom') endGame("LEVEL 2 COMPLETE!", true); else endGame("WRONG TRACK!", false); } }, 16);
}
function startLevel3() { if (gameState.trainMoving) return; gameState.trainMoving = true; const t1 = document.getElementById('train1'); const t2 = document.getElementById('train2'); const status = document.getElementById('game-status'); status.innerText = "TRAINS MOVING..."; status.style.color = "#fbbf24"; let p1 = 20; let p2 = 20; let y1 = 220; let y2 = 100; let a1 = 0;
    gameInterval = setInterval(() => { if (gameState.signal2 === 'green' || p2 < 210 || p2 > 260) p2 += 4; t2.setAttribute('x', p2); if (gameState.signal1 === 'green' || p1 < 210 || p1 > 260) p1 += 3; if (p1 > 300) { if (gameState.switch1 === 'top') { y1 = 220 - (p1 - 300) * 0.6; a1 = -30; if (y1 < 100) { y1 = 100; a1 = 0; } } else { y1 = 220; a1 = 0; } } t1.setAttribute('x', p1); t1.setAttribute('y', y1); t1.setAttribute('transform', `rotate(${a1}, ${p1+20}, ${y1+6})`); if (Math.abs(p1 - p2) < 45 && Math.abs(y1 - y2) < 20) endGame("CRASH! TRAINS COLLIDED!", false); if (p1 > 400 && gameState.switch1 === 'bottom') endGame("DERAILED! Use the switch.", false); if (p1 > 580) endGame("LEVEL 3 COMPLETE! MASTER SIGNALER!", true); }, 16);
}
function endGame(msg, win) { clearInterval(gameInterval); const statusEl = document.getElementById('game-status'); statusEl.innerText = msg; if (win) { statusEl.style.color = "#22c55e"; if (currentLevel < 3) { setTimeout(() => { currentLevel++; initGame(); }, 2500); } } else { statusEl.style.color = "#ef4444"; } }
