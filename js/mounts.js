const r = {
    Common: 1,
    Uncommon: 2,
    Rare: 3,
    Epic: 4,
    Legendary: 5
};

let m = [];
fetch('../mounts.csv')
    .then(response => response.text())
    .then(csvText => {

        let arr = csvText.split('\n');

        var headerLine = arr[0].split(',');

        arr.shift();

        arr.map(function (line) {
            let values = line.split(',');
            let obj = {};

            for (let i = 0; i < values.length; i++) {
                let value = values[i].trim();
                if (!isNaN(value)) {
                    value = parseFloat(value);
                }
                obj[headerLine[i]] = value;
            }
            m.push(obj);
        });
    });
    console.log("lol");
    console.log(m);