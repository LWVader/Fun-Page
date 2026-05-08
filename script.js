const prefixes = [
    // Original & Whimsical
    "Fizzle", "Glimmer", "Wobble", "Zazzle", "Pippin", "Bumble", "Snaggle", 
    "Doodle", "Tilly", "Pickle", "Sploot", "Puddle", "Flabber", "Grizzle", 
    "Mumble", "Razzle", "Dazzle", "Tickle", "Wiggle", "Joggle", "Baffle",
    // Alchemical & Arcane
    "Aether", "Glitch", "Hocus", "Spindle", "Vortex", "Brimstone", "Cinder",
    "Rune", "Wizened", "Mystic", "Noodle", "Pocus", "Quirk", "Phantasm",
    // Clumsy & Chaotic
    "Thump", "Clatter", "Blunder", "Gibber", "Nutter", "Sloppy", "Fumble",
    "Giddy", "Wonky", "Zany", "Loopy", "Boing", "Scruffy", "Dizzy"
];

const suffixes = [
    // Original & Mechanical
    "bang", "puff", "bottom", "toe", "flask", "pipe", "spark", "wick", 
    "snaps", "whimsey", "clink", "muffin", "sproket", "gadget", "fizz", 
    "pop", "twist", "gear", "bolt", "crank", "whistle",
    // Elemental & Odd
    "drip", "smog", "flame", "soot", "tide", "thistle", "thorn", "bloom",
    "dust", "shard", "cloud", "vapor", "mist", "glow", "bristle",
    // Occupations & Objects
    "smith", "weaver", "drifter", "grinder", "scour", "mender", "shredder",
    "tosser", "nibbler", "gobbler", "spinner", "hopper", "slider", "stalker"
];


const buildCompound = () => {
    const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    
    // Chaos Logic 
if (Math.random() > 0.8) {
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    const middle = vowels[Math.floor(Math.random() * vowels.length)] + 
                   consonants[Math.floor(Math.random() * consonants.length)] + 
                   vowels[Math.floor(Math.random() * vowels.length)];
    return pre + middle + suf;
}
    
    return pre + suf;
};

// Main request handler
function handleGenerateRequest(count = 1) {
    const nameList = [];
    
    for (let i = 0; i < count; i++) {
        const firstName = buildCompound();
        const lastName = buildCompound();
        nameList.push(`${firstName} ${lastName}`);
    }

    
    document.getElementById('displayGeneratedName').innerText = nameList[0];
    
    
    renderGeneratedList(nameList);
}

function renderGeneratedList(names) {
    const container = document.getElementById('displayGeneratedList');
    container.innerHTML = ''; 

    names.forEach(name => {
        const li = document.createElement('li');
        li.className = "name-item";
        li.innerHTML = `
    <span>${name}</span>
    <button class="save-btn" onclick="saveName('${name}')">
        <span class="star-icon">★</span> Save
    </button>
`;
        container.appendChild(li);
    });
}

function saveName(name) {
    const saved = JSON.parse(localStorage.getItem('savedNames')) || [];
    
    if (!saved.includes(name)) {
        saved.push(name);
        localStorage.setItem('savedNames', JSON.stringify(saved));
        displaySavedNames();
    }
}

function displaySavedNames() {
    const saved = JSON.parse(localStorage.getItem('savedNames')) || [];
    const container = document.getElementById('savedNamesList');
    
    container.innerHTML = saved.map(name => `
        <li>
            ${name} 
            <button class="delete-btn" onclick="deleteName('${name}')">×</button>
        </li>
    `).join('');
}

function deleteName(nameToRemove) {
    let saved = JSON.parse(localStorage.getItem('savedNames')) || [];
    saved = saved.filter(name => name !== nameToRemove);
    localStorage.setItem('savedNames', JSON.stringify(saved));
    displaySavedNames();
}

function clearSavedNames() {
    if (confirm("Clear all saved names?")) {
        localStorage.removeItem('savedNames');
        displaySavedNames();
    }
}


window.onload = displaySavedNames;