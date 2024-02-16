let goldGain = 0;

function addMount() {
    let id = getRandomInt(5);
    const mount = m[id];
    let card = `<div id="card">
                        <button onclick=""> 
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
    console.log(goldGain)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}