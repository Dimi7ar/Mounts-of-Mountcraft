let gold = 0;
let goldGain = 0;
let collection = [];

function addMount() {
    let id = getRandomInt(5);
    const mount = m[id];
    if(!collection.includes(mount)) {
    collection.push(mount);  
    let color = mount.rare == 1 ? `#9d9d9d` : mount.rare == 2 ? `#1eff00` : mount.rare == 3 ? `#0070dd` : mount.rare == 4 ? `#a335ee` : `#ff8000`;

    let card = `<div id="card">
    <button onclick="" style="background-color: ${color};"> 
                            <div id="name">
                                ${mount.name} 
                            </div>
                            <img src="${mount.image}">
                            <div id="obtain">
                                ${mount.desc}
                            </div>
                            <div id="income">
                                +${mount.income} <img src="./images/gold.png" style="width: 12px">/s
                            </div>
                        </button>
                    </div>`;
    document.getElementById('mount_container').innerHTML += card;
    goldGain += mount.income;
    }
    console.log(goldGain)
}

function updateGold() {
    gold += goldGain;
    let htmlGold = `<span style="margin-right: 5px; text-align: right;" id="goldDesc">${gold} gold<br>(+${goldGain}g/s)</span>
    <div><img src="./images/gold.png" style="width: 25px; margin-top: 5px;"></div>`;
    document.getElementById(`gold`).innerHTML = htmlGold;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

setInterval(updateGold, 1000);