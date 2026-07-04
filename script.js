 
 // Set the target date to midnight tonight (July 5th, 2026 at 00:00:00)
const targetDate = new Date("July 5, 2026 00:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // If midnight has already arrived or passed
    if (difference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("timerScreen").style.display = "none"; // Hide timer completely
        return;
    }

    // Time math calculations for hours, minutes, and seconds
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the numbers on the screen with leading zeros if they are single digits
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
 
 
 // --- BACKGROUND DECORATION GENERATOR ---
window.addEventListener('DOMContentLoaded', () => {
            const heartsContainer = document.getElementById('heartsContainer');
            const balloonsContainer = document.getElementById('balloonsContainer');

            // Generate drifting background hearts (reduced slightly for rendering performance)
            for (let i = 0; i < 50; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                heart.style.setProperty('--left-pos', Math.random() * 100 + '%');
                heart.style.setProperty('--speed', (Math.random() * 4 + 5) + 's'); 
                heart.style.setProperty('--delay', (Math.random() * -6) + 's'); 
                heart.style.transform = `scale(${Math.random() * 0.5 + 0.6})`;
                heartsContainer.appendChild(heart);
            }

            // Generate flying background balloons 
            for (let i = 0; i < 25; i++) {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.innerHTML = '🎈';
                balloon.style.setProperty('--left-pos', Math.random() * 100 + '%');
                balloon.style.setProperty('--speed', (Math.random() * 4 + 6) + 's'); 
                balloon.style.setProperty('--delay', (Math.random() * -8) + 's'); 
                balloon.style.setProperty('--color-shift', Math.random() * 360 + 'deg');
                balloonsContainer.appendChild(balloon);
            }
        });

        // --- INTERACTION FLOW ---

        function openGift() {
    const boxScene = document.getElementById('giftBoxContainer');
    const birthdayCard = document.getElementById('birthdayCard');
    const lid = document.querySelector('.lid');

    // --- 1. LIVE FULL-LENGTH SYNTHESIZED HAPPY BIRTHDAY MELODY ---
try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    
    // The complete Happy Birthday song note frequencies
    const melody = [
        261.63, 261.63, 293.66, 261.63, 349.23, 329.63, // Happy Birthday to you
        261.63, 261.63, 293.66, 261.63, 392.00, 349.23, // Happy Birthday to you
        261.63, 261.63, 523.25, 440.00, 349.23, 329.63, 293.66, // Happy Birthday dear [Name]
        466.16, 466.16, 440.00, 349.23, 392.00, 349.23  // Happy Birthday to you!
    ];
    
    // Precision musical timing for each note (short, short, long, long...)
    const durations = [
        0.3, 0.3, 0.6, 0.6, 0.6, 1.2, // Phrase 1
        0.3, 0.3, 0.6, 0.6, 0.6, 1.2, // Phrase 2
        0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 1.2, // Phrase 3 (The big peak!)
        0.3, 0.3, 0.6, 0.6, 0.6, 1.2  // Phrase 4 (Ending)
    ];
    
    let currentTime = audioCtx.currentTime;

    melody.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(freq, currentTime);
        
        gainNode.gain.setValueAtTime(0.15, currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + durations[index] - 0.05);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start(currentTime);
        osc.stop(currentTime + durations[index]);
        
        // This moves the time forward so the notes play one after another perfectly
        currentTime += durations[index];
    });
} catch(e) {
    console.log("Audio issue: ", e);
}


    // --- 2. THE VISUAL EFFECT EVENTS ---
    if (lid) {
        lid.style.transform = 'translateY(-140px) rotate(15deg)';
    }

    // Burst confetti instantly
    confetti({
        particleCount: 180,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        gravity: 0.9,
        scalar: 1.2
    });

    // Swap screens seamlessly (FIXED VERSION)
    setTimeout(() => {
        boxScene.style.display = 'none'; // Fixed: removed the double ".style"
        birthdayCard.style.display = 'block'; 
        
        setTimeout(() => {
            birthdayCard.style.opacity = '1';
            birthdayCard.style.transform = 'scale(1)';
            document.body.style.overflow = 'auto';
        }, 50);
    }, 250); 
}
        

        function revealMessage(option) {
            const messageBox = document.getElementById('secretMessage');
             if (option === 2) {
                messageBox.innerHTML = "I Love youuu 😘😍";
                confetti({ particleCount: 100, spread: 60, origin: { x: 0.5, y: 0.5 } });
            }
            messageBox.style.display = 'flex';
            messageBox.classList.add('show');
        }