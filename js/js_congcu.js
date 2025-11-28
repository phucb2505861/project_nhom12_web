let isCalculatorInitialized = false;

// =====================
// Hiển thị công cụ
// =====================
function showGame(id) {
    document.querySelectorAll('.game-box').forEach(el => el.style.display = 'none');

    const game = document.getElementById(id);
    if (game) {
            // Đã sửa CSS để .game-box có display: flex và flex-direction: column để tiêu đề nằm trên
            game.style.display = 'flex'; 
    }

    document.querySelectorAll('#game-selector button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#game-selector button[onclick="showGame('${id}')"]`);
    if (activeBtn) activeBtn.classList.add('active');

    if (id === 'calculator' && !isCalculatorInitialized) {
        initCalculator();
        isCalculatorInitialized = true;
    }
}

// =====================
// Calculator 
// =====================
function initCalculator() {
    const exprEl = document.getElementById("expr");
    const resultEl = document.getElementById("result");

    let currentExpr = "";
    
    function updateDisplay() {
        exprEl.textContent = currentExpr || "\xa0";
        try {
            const val = evaluate(currentExpr);
            resultEl.textContent = formatNumber(val);
        } catch {
            resultEl.textContent = "Error";
        }
    }

    function formatNumber(n) {
        if (n === undefined || n === null || n === "") return "0";
        if (Number.isInteger(n)) return n.toString();
        return parseFloat(n.toPrecision(12)).toString();
    }

    function evaluate(expr) {
        if (!expr) return 0;
        let evalExpr = expr
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/\^/g, "**")
            .replace(/\bpi\b/g, Math.PI)
            .replace(/\be\b/g, Math.E);

        evalExpr = evalExpr
            .replace(/\bsin\(/g, "Math.sin(")
            .replace(/\bcos\(/g, "Math.cos(")
            .replace(/\btan\(/g, "Math.tan(")
            .replace(/\basin\(/g, "Math.asin(")
            .replace(/\bacos\(/g, "Math.acos(")
            .replace(/\batan\(/g, "Math.atan(")
            .replace(/\blog\(/g, "Math.log10(")
            .replace(/\bln\(/g, "Math.log(")
            .replace(/\bsqrt\(/g, "Math.sqrt(")
            .replace(/\b!\(/g, "factorial(");

        while (evalExpr.includes("!")) {
            evalExpr = evalExpr.replace(/([0-9.]+)!/, (_, num) => factorial(Number(num)));
        }

        evalExpr = evalExpr.replace(/([0-9.]+)%/g, (_, num) => String(num / 100));
        evalExpr = evalExpr.replace(/([0-9)])\s*(Math\.\w+\()/g, "$1*$2");

        try {
            return new Function('"use strict"; return (' + evalExpr + ')')();
        } catch {
            return "Error";
        }
    }

    function factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
    }

    document.querySelectorAll('#calculator [data-key]').forEach(btn => {
        btn.onclick = () => {
            const key = btn.getAttribute("data-key");
            handleInput(key);
        };
    });

    window.addEventListener("keydown", (e) => {
        if(document.getElementById('calculator').style.display !== 'none'){
            const allow = "0123456789+-*/().%^!";
            
            if (e.key === "Enter") { e.preventDefault(); handleInput("="); return; }
            if (e.key === "Backspace") { handleInput("CE"); return; }
            if (e.key.toLowerCase() === "c" || e.key === "Escape") { handleInput("AC"); return; }
            
            if (allow.includes(e.key)) {
                handleInput(e.key);
            }
        }
    });

    function handleInput(key) {
        if (key === "=") {
            try {
                const val = evaluate(currentExpr);
                currentExpr = String(parseFloat(val.toPrecision(12))); 
                updateDisplay();
            } catch {
                resultEl.textContent = "Error";
            }
            return;
        }

        if (key === "CE") {
            currentExpr = currentExpr.toString().slice(0, -1);
            updateDisplay();
            return;
        }

        if (key === "AC") {
            currentExpr = "";
            updateDisplay();
            return;
        }

        if (["sin","cos","tan","asin","acos","atan","log","ln","sqrt"].includes(key)) {
            currentExpr += key + "(";
            updateDisplay();
            return;
        }

        currentExpr += key;
        updateDisplay();
    }

    updateDisplay();
}

// vòng quay
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const W = canvas.width, H = canvas.height;
const cx = W/2, cy = H/2, radius = Math.min(W,H)*0.44;
let prizes = ["Voucher 100k", "Áo thun", "Balo", "Phiếu cafe", "Ly nước", "Sticker"];
let rotation = 0; // radians
let spinning = false;
const pointerAngle = -Math.PI/2; // top of canvas
const resultVongQuayEl = document.getElementById('result-vongquay');

function colorFor(i,n){ return `hsl(${i*(360/n)} 78% 55% / 0.98)`; }

function drawWrapped(ctx, text, maxW, lineH){
    const words = String(text).split(' ');
    let line = '';
    let y = - (lineH) * 0.5; 
    for(let i=0;i<words.length;i++){
        const test = line + words[i] + ' ';
        if(ctx.measureText(test).width > maxW && line !== ''){
            ctx.fillText(line.trim(), 0, y);
            line = words[i] + ' ';
            y += lineH;
        } else {
            line = test;
        }
    }
    ctx.fillText(line.trim(), 0, y);
}

function drawWheel(){
    const n = Math.max(1, prizes.length);
    const slice = (2*Math.PI)/n;
    ctx.clearRect(0,0,W,H);

    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 8;

    for(let i=0;i<n;i++){
        const a1 = rotation + i*slice;
        const a2 = rotation + (i+1)*slice;
        ctx.beginPath();
        ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,radius,a1,a2);
        ctx.closePath();
        ctx.fillStyle = colorFor(i,n);
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Text inside segment
        const mid = (a1 + a2)/2;
        ctx.save();
        ctx.translate(cx + Math.cos(mid) * radius * 0.65, cy + Math.sin(mid) * radius * 0.65);
        ctx.rotate(mid + Math.PI/2);
        ctx.fillStyle = "#fffa90";
        ctx.font = 'bold 24px Arial'; 
        ctx.textAlign = 'center';
        drawWrapped(ctx, prizes[i], 140, 24); 
        ctx.restore();
    }

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // center circle
    ctx.beginPath(); 
    ctx.arc(cx,cy,radius*0.16,0,Math.PI*2); 
    ctx.fillStyle='rgba(255,255,255,0.95)'; 
    ctx.fill();

    // pointer
    ctx.fillStyle = '#ff5252';
    ctx.beginPath();
    ctx.moveTo(cx, cy - radius - 6);
    ctx.lineTo(cx - 14, cy - radius + 18);
    ctx.lineTo(cx + 14, cy - radius + 18);
    ctx.closePath();
    ctx.fill();
}

function spin(isQuick=false){
    if(spinning || prizes.length === 0) return;
    spinning = true;
    resultVongQuayEl.textContent = '';

    const n = prizes.length;
    const targetIndex = Math.floor(Math.random() * n);
    const slice = (2*Math.PI)/n;
    const targetSliceCenter = targetIndex * slice + slice/2; 
    const fullRotations = (isQuick ? 3 : 7) + Math.floor(Math.random()*3);
    const rotationTarget = pointerAngle - targetSliceCenter + fullRotations * 2 * Math.PI + (Math.random()-0.5)*(slice*0.6); 

    const startRot = rotation;
    const delta = rotationTarget - startRot;
    const duration = isQuick ? 1400 : 4200; 
    const startTime = performance.now();
    function easeOutCubic(t){ return 1 - Math.pow(1 - t, 3); }

    function frame(now){
        const t = Math.min(1, (now - startTime)/duration);
        rotation = startRot + delta * easeOutCubic(t);
        rotation = ((rotation % (2*Math.PI)) + 2*Math.PI) % (2*Math.PI);
        drawWheel();
        if(t < 1){
            requestAnimationFrame(frame);
        } else {
            spinning = false;
            const idx = computeIndexFromRotation(rotation);
            const prize = prizes[idx];
            resultVongQuayEl.textContent = '🎉 Trúng: ' + prize;
        }
    }
    requestAnimationFrame(frame);
}

function computeIndexFromRotation(rot){
    const n = Math.max(1, prizes.length);
    const slice = (2*Math.PI)/n;
    let adjusted = (pointerAngle - rot) % (2*Math.PI);
    if(adjusted < 0) adjusted += 2*Math.PI;
    const idx = Math.floor(adjusted / slice) % n;
    return idx;
}

function refreshList(){
    const container = document.getElementById('list');
    container.innerHTML = '';
    prizes.forEach((p,i)=>{
        const div = document.createElement('div'); div.className='item';
        div.innerHTML = `<strong>${i+1}.</strong> ${p} <button data-i="${i}" style="float:right;">Xóa</button>`;
        container.appendChild(div);
    });
    container.querySelectorAll('button[data-i]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const i = parseInt(btn.getAttribute('data-i'));
            prizes.splice(i,1);
            refreshList();
            drawWheel();
            resultVongQuayEl.textContent = '';
        });
    });
    drawWheel();
}

document.getElementById('add').addEventListener('click', ()=>{
    const v = document.getElementById('prizeInput').value.trim();
    if(!v) return alert('Nhập phần thưởng.');
    prizes.push(v);
    document.getElementById('prizeInput').value = '';
    refreshList();
    resultVongQuayEl.textContent = '';
});

document.getElementById('spin').addEventListener('click', ()=> spin(false));
document.getElementById('quick').addEventListener('click', ()=> spin(true));

// init
document.addEventListener('DOMContentLoaded', () => {
    refreshList();
});