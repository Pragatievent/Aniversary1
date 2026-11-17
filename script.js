const correctPassword = "Kanarth";

const steps = [
    { title: "It's Our Special Day🥹💗✨", desc: "I've created a little gift for youh🥹🫶🏻", btn: "NEXT" },
    { title: "Have a look at it Madam ji", desc: "Here we goo..... 🥹", btn: "LET'S GO" },
    { title: "Ready for your surprise?", desc: "But first, Do you love me???☺️... (You have no option other than yes🥰)", btn: "Yess!!!" },
    { title: "Yesssss jaanuuuu🫶🏻☺️.... I love uhhhhh tooo🤭", desc: "Ab lights On kro☺️", btn: "TURN ON LIGHTS" },
    { title: "Khali khali lg rha he n.... Music kesa rahega☺️", desc: "Chalo.... Ab apne cute cute hatho se... Vibe bhi on kr do🤭", btn: "PLAY MUSIC" },
    { title: "Hurryyyyy!!!!😭 u did... Awwww itne chotu se cute cute hatho se.... Ahhhhhhhhhh I'm obsessed yll😭💗! Still khali khali nhi he..?", desc: "What about ballons👀..", btn: "FLY BALLOONS" },
    { title: "Okhayyyyyy😭... You did😋...", desc: "Bhot wait kiya... Lessssss gooo!!!!!!!", btn: "Letss Go!!!" }
];

let currentStep = 0;
let balloonInterval = null;

function checkPassword() {
    const inputVal = document.getElementById('pass-input').value;
    const errorText = document.getElementById('pass-error');
    
    if (inputVal === correctPassword) {
        document.getElementById('password-screen').style.display = 'none';
    } else {
        errorText.style.display = 'block';
    }
}

function nextStep() {
    const currentBtnText = document.getElementById('step-btn').innerText;

    if (currentBtnText === "TURN ON LIGHTS") {
        document.body.classList.add('lights-on');
    } else if (currentBtnText === "PLAY MUSIC") {
        const audio = document.getElementById('birthday-audio');
        audio.play().catch(e => console.log("Audio autoplay restricted by browser"));
    } else if (currentBtnText === "FLY BALLOONS") {
        startBalloonEffect();
    } else if (currentBtnText === "Letss Go!!!") {
        document.body.classList.add('curtains-open');
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('special-message-section').style.display = 'flex';
        
        const audio = document.getElementById('birthday-audio');
        audio.play().catch(e => console.log("Audio autoplay restricted by browser"));
        return;
    }

    currentStep++;
    if (currentStep < steps.length) {
        document.getElementById('card-title').innerText = steps[currentStep].title;
        document.getElementById('card-desc').innerText = steps[currentStep].desc;
        document.getElementById('step-btn').innerText = steps[currentStep].btn;
    }
}

function showMemoriesTab() {
    document.getElementById('special-message-section').style.display = 'none';
    document.getElementById('memory-page-0').style.display = 'flex';
}

function revealMemory(index) {
    const cover = document.getElementById(`cover-${index}`);
    const content = document.getElementById(`revealed-${index}`);
    cover.style.opacity = '0';
    setTimeout(() => {
        cover.style.display = 'none';
        content.style.display = 'block';
    }, 300);
}

function nextMemoryPage(nextIndex) {
    document.getElementById(`memory-page-${nextIndex - 1}`).style.display = 'none';
    document.getElementById(`memory-page-${nextIndex}`).style.display = 'flex';
}

function showGiftTab() {
    document.getElementById('memory-page-5').style.display = 'none';
    document.getElementById('gift-section').style.display = 'flex';
}

function showVoiceNoteTab() {
    document.getElementById('gift-section').style.display = 'none';
    document.getElementById('voicenote-section').style.display = 'flex';
}

function restartExperience() {
    location.reload();
}

function openModal(imageSrc, descriptionText) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');

    modalImg.src = imageSrc;
    modalDesc.innerText = descriptionText;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

function openGiftModal() {
    const modal = document.getElementById('gift-modal');
    modal.style.display = 'flex';
}

function closeGiftModal() {
    const modal = document.getElementById('gift-modal');
    modal.style.display = 'none';
}

function startBalloonEffect() {
    const colorPairs = [
        { light: '#ff6699', dark: '#cc0044' },
        { light: '#ffcc00', dark: '#cc9900' },
        { light: '#33ccff', dark: '#0066cc' },
        { light: '#ff66b2', dark: '#99004d' },
        { light: '#bf80ff', dark: '#6600cc' },
        { light: '#33cc66', dark: '#006622' }
    ];

    balloonInterval = setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const pair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
        balloon.style.setProperty('--b-light', pair.light);
        balloon.style.setProperty('--b-dark', pair.dark);
        balloon.style.left = Math.random() * (window.innerWidth - 40) + 'px';
        
        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.style.bottom = window.innerHeight + 80 + 'px';
            balloon.style.opacity = '0';
        }, 100);

        setTimeout(() => balloon.remove(), 4000);
    }, 300);
}
