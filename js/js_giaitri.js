function resetAllGames() {
    try { resetCuoc(); } catch(e){}
}
function showGame(id) {
    resetAllGames();
    document.querySelectorAll('.game-box').forEach(g => g.style.display = "none");
    const game = document.getElementById(id);
    if(game) game.style.display = "block";

    // Xử lý active cho nút
    document.querySelectorAll('#game-selector button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#game-selector button[onclick="showGame('${id}')"]`);
    if(activeBtn) activeBtn.classList.add('active');

    if (id === "guessnum") initGuessGame();
}

// --------CARD GAME LOGIC-------

let timerInterval; let timeCount = 0; let wrongCount = 0; let hasGameStarted = false;
let firstCard = null; let lockBoard = false; let matchedPairs = 0; let totalPairs = 0;

function startGame() {
    resetGame();
    const count = parseInt(document.getElementById("card-count").value);
    totalPairs = count / 2;
    const columns = (count === 30) ? 6 : Math.ceil(count / 4);
    const board = document.getElementById("cardBoard");
    board.style.gridTemplateColumns = `repeat(${columns}, 80px)`;
    let values = [];
    for (let i = 1; i <= totalPairs; i++) { values.push(i, i); }
    values.sort(() => Math.random() - 0.5);
    values.forEach(v => {
        const card = document.createElement("div"); card.className = "card"; card.dataset.value = v;
        card.innerHTML = `<div class="front">${v}</div><div class="back">?</div>`;
        card.addEventListener("click", flipCard); board.appendChild(card);
    });
    hasGameStarted = true;
    timerInterval = setInterval(() => { timeCount++; document.getElementById("timer").innerText = timeCount; }, 1000);
}
function flipCard() {
    if(!hasGameStarted || lockBoard) return;
    if(this.classList.contains("flip")) return;
    this.classList.add("flip");
    if(!firstCard) { firstCard = this; } else {
        lockBoard = true; let secondCard = this;
        if(firstCard.dataset.value === secondCard.dataset.value) {
            setTimeout(() => {
                firstCard.style.visibility = "hidden"; secondCard.style.visibility = "hidden";
                matchedPairs++; if(matchedPairs === totalPairs) endGame(); resetChoices();
            }, 500);
        } else {
            wrongCount++; document.getElementById("wrong").innerText = wrongCount;
            setTimeout(() => { firstCard.classList.remove("flip"); secondCard.classList.remove("flip"); resetChoices(); }, 800);
        }
    }
}
function resetChoices() { firstCard = null; lockBoard = false; }
function endGame() {
    clearInterval(timerInterval);
    const score = timeCount + wrongCount;
    document.getElementById("finalResult").innerHTML = `🎉 Hoàn thành! Tổng điểm phạt: ${score} (càng thấp càng tốt)`;
}
function resetGame() {
    clearInterval(timerInterval); document.getElementById("cardBoard").innerHTML = "";
    document.getElementById("timer").innerText = 0; document.getElementById("wrong").innerText = 0;
    document.getElementById("finalResult").innerHTML = "";
    timeCount = 0; wrongCount = 0; matchedPairs = 0; firstCard = null; lockBoard = false; hasGameStarted = false;
}

// ------GUESS NUM LOGIC-----

let soBiMat; let soLanDoan;
function initGuessGame() {
    soBiMat = Math.floor(Math.random() * 100) + 1; soLanDoan = 0;
    document.getElementById("msgGuess").innerText = ""; document.getElementById("countGuess").innerText = soLanDoan;
    document.getElementById("userGuess").value = "";
}
function doanSo() {
    const inputField = document.getElementById("userGuess"); const msg = document.getElementById("msgGuess");
    let guess = parseInt(inputField.value);
    if (isNaN(guess) || guess < 1 || guess > 100) { msg.style.color = "#ef4444"; msg.innerText = "⚠️ Vui lòng nhập số từ 1 đến 100!"; return; }
    soLanDoan++; document.getElementById("countGuess").innerText = soLanDoan;
    if (guess === soBiMat) { msg.style.color = "#10b981"; msg.innerText = `🎉 Chính xác! Số bí mật là ${soBiMat}`; } 
    else if (guess < soBiMat) { msg.style.color = "#f59e0b"; msg.innerText = "📉 Thấp quá! Thử số lớn hơn 👉"; } 
    else { msg.style.color = "#f59e0b"; msg.innerText = "📈 Cao quá! Thử số nhỏ hơn 👇"; }
}
function choiLai() { initGuessGame(); }
initGuessGame();

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        
        // Cần đảm bảo hàm startGame() đã được định nghĩa trong main.js hoặc ở đâu đó.
        if (typeof startGame === 'function') {
            startGame();
        }
    }
});

document.addEventListener('keydown', function(event) {
// Kiểm tra xem phím được nhấn có phải là phím Enter không
if (event.key === 'Enter' || event.keyCode === 13) {
    // Ngăn chặn hành vi mặc định của phím Enter (ví dụ: gửi form)
    event.preventDefault(); 
    
    // --- LOGIC MỚI CHO NÚT ĐOÁN HOẶC BẮT ĐẦU ---
    
    // 1. Ưu tiên gọi hàm Đoán số (thường dùng khi đang tập trung vào ô nhập liệu)
    if (typeof doanSo === 'function') {
        doanSo();
    } 
    
    // 2. Dự phòng: Nếu không có hàm đoán số, có thể gọi hàm bắt đầu game 
    // (Chỉ dùng nếu bạn đang muốn phím Enter hoạt động như Bắt đầu Game)
    /*
    else if (typeof startGame === 'function') {
        startGame();
    }
    */

    // Tùy thuộc vào trò chơi, bạn chỉ nên gọi hàm phù hợp nhất. 
    // Nếu đây là game Đoán Số, chỉ cần gọi doanSo() là đủ.
}
});