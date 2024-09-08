let eggs = 0;
let dragons = 0;
let gold = 0;

let hatchSpeed = 1; 
let sellPrice = 1; 
let hatchSpeedCost = 10; 
let sellPriceCost = 15; 


const eggCountEl = document.getElementById('egg-count');
const dragonCountEl = document.getElementById('dragon-count');
const goldCountEl = document.getElementById('gold-count');
const hatchSpeedEl = document.getElementById('hatch-speed');
const sellPriceEl = document.getElementById('sell-price');
const hatchButton = document.getElementById('hatch-button');
const sellButton = document.getElementById('sell-button');
const upgradeHatchSpeedButton = document.getElementById('upgrade-hatch-speed');
const upgradeSellPriceButton = document.getElementById('upgrade-sell-price');


function updateDisplay() {
  eggCountEl.textContent = eggs;
  dragonCountEl.textContent = dragons;
  goldCountEl.textContent = gold;

  hatchSpeedEl.textContent = `${hatchSpeed} egg/sec`;
  sellPriceEl.textContent = `${sellPrice} gold/dragon`;

  hatchButton.disabled = eggs <= 0;
  sellButton.disabled = dragons <= 0;
  upgradeHatchSpeedButton.disabled = gold < hatchSpeedCost;
  upgradeSellPriceButton.disabled = gold < sellPriceCost;
}


function generateEggs() {
  eggs += 1;
  updateDisplay();
}


setInterval(() => {
  generateEggs();
}, 1000 / hatchSpeed);


hatchButton.addEventListener('click', () => {
  if (eggs > 0) {
    eggs -= 1;
    dragons += 1;
    updateDisplay();
  }
});


sellButton.addEventListener('click', () => {
  if (dragons > 0) {
    dragons -= 1;
    gold += sellPrice;
    updateDisplay();
  }
});


upgradeHatchSpeedButton.addEventListener('click', () => {
  if (gold >= hatchSpeedCost) {
    gold -= hatchSpeedCost;
    hatchSpeed += 1;
    hatchSpeedCost *= 2;
    
    
    clearInterval(eggInterval);
    eggInterval = setInterval(() => {
      generateEggs();
    }, 1000 / hatchSpeed);
    
    updateDisplay();
  }
});

upgradeSellPriceButton.addEventListener('click', () => {
  if (gold >= sellPriceCost) {
    gold -= sellPriceCost;
    sellPrice += 1;
    sellPriceCost *= 2; 
  }
});

updateDisplay();
