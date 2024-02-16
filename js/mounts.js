const n = {
    Invincible: 1,
    Ashes: 2,
    TimeLost: 3,
    HeavenlyOnyx: 4,
    RavenLord: 5
},
r = {
    Common: 1,
    Uncommon: 2,
    Rare: 3,
    Epic: 4,
    Legendary: 5
};
const i = "./images/";
const e = ".jpg"

const m = {
    1: {
        id: n.Invincible,
        name: "Invincible",
        rare: r.Epic,
        image: `${i}Invincible${e}`,
        desc: `Icecrown Citadel > Arthas the Lich King`,
        income: 1
    },
    2: {
        id: n.Ashes,
        name: "Ashes of Al'ar",
        rare: r.Epic,
        image: `${i}Ashes${e}`,
        desc: `The Eye, Tempest Keep > Kael'thas Sunstrider`,
        income: 1
    },
    3: {
        id: n.TimeLost,
        name: "Time-Lost Proto-Drake",
        rare: r.Epic,
        image: `${i}TimeLost${e}`,
        desc: `The Storm Peaks > Time-Lost Proto-Drake`,
        income: 1
    },
    4: {
        id: n.HeavenlyOnyx,
        name: "Heavenly Onyx Cloud Serpent",
        rare: r.Epic,
        image: `${i}HeavenlyOnyx${e}`,
        desc: `Kun-Lai Summit > Sha of Anger`,
        income: 1
    },
    5: {
        id: n.RavenLord,
        name: "Raven Lord",
        rare: r.Epic,
        image: `${i}RavenLord${e}`,
        desc: `Sethekk Halls > Anzu`,
        income: 1
    },
};
