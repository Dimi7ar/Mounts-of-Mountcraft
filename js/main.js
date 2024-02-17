let gold = 0;
let goldGain = 0;
let collection = [];

function loadGame() {
    setInterval(gameLoop, 1000);
}

function addMount() {
    let id = getRandomInt(6);
    const mount = m[id];
    if (!collection.includes(mount)) {
        collection.push(mount);
        let color = mount.Rarity == 1 ? `#9d9d9d` : mount.Rarity == 2 ? `#1eff00` : mount.Rarity == 3 ? `#0070dd` : mount.Rarity == 4 ? `#a335ee` : `#ff8000`;

        let card = `<div id="card">
        <button onclick="" style="background-color: ${color};"> 
                            <div id="name">
                                ${mount.Name} 
                            </div>
                            <img src="./images/${mount.Expansion}/${mount.ID}.jpg">
                            <div id="obtain">
                                ${mount.Desc}
                            </div>
                            <div id="income">
                                +${mount.Income} <img src="./images/gold.png" style="width: 12px">/s
                            </div>
                        </button>
                    </div>`;
        document.getElementById('mount_container').innerHTML += card;
        goldGain += mount.Income;
    }
    console.log(goldGain)
}

function updateGold() {
    gold += goldGain;
    let htmlGold = `<span style="margin-right: 5px; text-align: right;" id="goldDesc">${gold} gold<br>(+${goldGain}g/s)</span>
    <div><img src="./images/gold.png" style="width: 25px; margin-top: 5px;"></div>`;
    document.getElementById(`gold`).innerHTML = htmlGold;
}

function displayTab(tab) {
    document.getElementById('main').childNodes.forEach(function (child) {
        if (child.nodeType === 1 && child.style) {
            child.style.display = 'none';
        }
    });
    document.getElementById(tab).style.display = 'flex';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function gameLoop() {
    updateGold();
}