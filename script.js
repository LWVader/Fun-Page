// The "Training Data" - the more names you add here, the weirder the results!
const trainingNames = [
    "Fizzlebang", "Glimmerpuff", "Barnaby", "Butterflask", "Pippin", "Squeakheart",
    "Snollygoster", "Wobblebottom", "Tilly", "Twinkletoe", "Balthazar", "Blastpipe",
    "Maximum", "Overspark", "Thunderthud", "McStone", "Zorp", "Inconvenient",
    "Jaxxon", "Joltbeard", "Gloomstick", "Rattleskull", "Mordecai", "Mudlicker",
    "Black","White","Gray","Brown","Red","Pink","Crimson","Carnelian","Orange","Yellow",
    "Ivory","Cream","Green","Viridian","Aquamarine","Cyan","Blue","Cerulean","Azure",
    "Indigo","Navy","Violet","Purple","Lavender","Magenta","Rainbow","Iridescent",
    "Spectrum","Prism","Bold","Vivid","Pale","Clear","Glass","Translucent","Misty",
    "Dark","Light","Gold","Silver","Copper","Bronze","Steel","Iron","Brass","Mercury",
    "Zinc","Chrome","Platinum","Titanium","Nickel","Lead","Pewter","Rust","Metal",
    "Stone","Quartz","Granite","Marble","Alabaster","Agate","Jasper","Pebble","Pyrite",
    "Crystal","Geode","Obsidian","Mica","Flint","Sand","Gravel","Boulder","Basalt",
    "Ruby","Beryl","Scarlet","Citrine","Sulpher","Topaz","Amber","Emerald","Malachite",
    "Jade","Abalone","Lapis","Sapphire","Diamond","Peridot","Gem","Jewel","Bevel",
    "Coral","Jet","Ebony","Wood","Tree","Cherry","Maple","Cedar","Branch","Bramble",
    "Rowan","Ash","Fir","Pine","Cactus","Alder","Grove","Forest","Jungle","Palm",
    "Bush","Mulberry","Juniper","Vine","Ivy","Rose","Lily","Tulip","Daffodil",
    "Honeysuckle","Fuschia","Hazel","Walnut","Almond","Lime","Lemon","Apple",
    "Blossom","Bloom","Crocus","Buttercup","Dandelion","Iris","Carnation","Fern",
    "Root","Leaf","Seed","Flower","Petal","Pollen","Orchid","Mangrove","Cypress",
    "Sequoia","Sage","Heather","Snapdragon","Daisy","Mountain","Hill","Alpine",
    "Chestnut","Valley","Glacier","Glen","Thorn","Stump","Desert","Canyon","Dune",
    "Oasis","Mirage","Well","Spring","Meadow","Field","Prairie","Grass","Tundra",
    "Island","Shore","Shell","Surf","Wave","Foam","Tide","Lake","River","Brook",
    "Stream","Pool","Pond","Sun","Sprinkle","Shade","Shadow","Rain","Cloud","Storm",
    "Hail","Snow","Sleet","Thunder","Lightning","Wind","Hurricane","Typhoon","Dawn",
    "Sunrise","Morning","Noon","Twilight","Evening","Sunset","Midnight","Night",
    "Sky","Star","Stellar","Comet","Nebula","Quasar","Solar","Lunar","Planet",
    "Meteor","Sprout","Pear","Plum","Kiwi","Berry","Apricot","Peach","Mango",
    "Pineapple","Coconut","Olive","Ginger","Plain","Fancy","Stripe","Spot",
    "Speckle","Spangle","Ring","Band","Blaze","Paint","Pinto","Tabby","Brindle",
    "Patch","Calico","Checker","Dot","Pattern","Glitter","Glimmer","Shimmer","Dull",
    "Dust","Dirt","Glaze","Scratch","Quick","Swift","Fast","Slow","Clever","Fire",
    "Flicker","Flash","Spark","Ember","Coal","Flame","Chocolate","Vanilla","Sugar",
    "Spice","Cake","Pie","Cookie","Candy","Caramel","Spiral","Round","Jelly",
    "Square","Narrow","Long","Short","Small","Tiny","Big","Giant","Great",
    "Peppermint","Mint","Butter","Fringe","Rag","Quilt","Truth","Lie","Holy",
    "Curse","Noble","Sly","Brave","Shy","Lava","Foul","Leather","Fantasy","Keen",
    "Luminous","Feather","Sticky","Gossamer","Cotton","Rattle","Silk","Satin",
    "Cord","Denim","Flannel","Plaid","Wool","Linen","Silent","Flax","Weak",
    "Valiant","Fierce","Gentle","Rhinestone","Splash","North","South","East","West",
    "Summer","Winter","Autumn","Season","Equinox","Solstice","Paper","Motley",
    "Torch","Ballistic","Rampant","Shag","Freckle","Wild","Free","Chain","Sheer",
    "Crazy","Mad","Candle","Ribbon","Lace","Notch","Wax","Shine","Shallow","Deep",
    "Bubble","Harvest","Fluff","Venom","Boom","Slash","Rune","Cold","Quill","Love",
    "Hate","Garnet","Zircon","Power","Bone","Void","Horn","Glory","Cyber","Nova",
    "Hot","Helix","Cosmic","Quark","Quiver","Holly","Clover","Polar","Regal",
    "Ripple","Wheat","Phantom","Head","Crest","Crown","Tooth","Fang","Frill",
    "Skull","Tongue","Throat","Voice","Nose","Snout","Chin","Eye","Sight","Seer",
    "Speaker","Singer","Song","Chanter","Howler","Chatter","Shrieker","Shriek",
    "Jaw","Bite","Biter","Neck","Shoulder","Fin","Wing","Lifter","Grasp","Grabber",
    "Hand","Paw","Foot","Finger","Toe","Thumb","Talon","Touch","Racer","Runner",
    "Hoof","Fly","Flier","Swoop","Roar","Hiss","Hisser","Snarl","Dive","Diver",
    "Rib","Chest","Back","Ridge","Leg","Legs","Tail","Beak","Walker","Lasher",
    "Swisher","Carver","Kicker","Roarer","Crusher","Spike","Shaker","Charger",
    "Hunter","Weaver","Crafter","Binder","Scribe","Muse","Snap","Snapper","Slayer",
    "Stalker","Track","Tracker","Scar","Scarer","Fright","Killer","Death","Doom",
    "Healer","Saver","Friend","Foe","Guardian","Forger","Scale","Hair","Braid",
    "Nape","Belly","Thief","Stealer","Reaper","Giver","Taker","Dancer","Player",
    "Gambler","Twister","Turner","Painter","Dart","Drifter","Sting","Stinger",
    "Spur","Ripper","Swallow","Devourer",
    "Scourge","Watcher","Cat","Panther",
    "Tiger","Cougar","Puma","Jaguar","Ocelot","Lynx","Lion","Leopard","Ferret",
    "Weasel","Wolverine","Bear","Raccoon","Dog","Wolf","Kitten","Puppy","Cub",
    "Fox","Hound","Terrier","Coyote","Hyena","Jackal","Pig","Horse","Donkey",
    "Stallion","Mare","Zebra","Antelope","Gazelle","Deer","Buffalo","Bison",
    "Boar","Elk","Whale","Dolphin","Shark","Fish","Minnow","Salmon","Ray",
    "Fisher","Otter","Gull","Duck","Goose","Crow","Raven","Bird","Eagle","Raptor",
    "Hawk","Falcon","Moose","Heron","Owl","Stork","Crane","Sparrow","Robin",
    "Parrot","Cockatoo","Carp","Lizard","Gecko","Iguana","Snake","Python","Viper",
    "Boa","Condor","Vulture","Spider","Scorpion","Oriole","Toucan","Bee","Wasp",
    "Hornet","Rabbit","Bunny","Hare","Brow","Mustang","Ox","Piper","Soarer",
    "Flasher","Moth","Mask","Hide","Hero","Antler","Chill","Chiller","Ogre",
    "Myth","Elf","Fairy","Pixie","Dragon","Griffin","Unicorn","Pegasus","Sprite",
    "Fancier","Chopper","Slicer","Skinner","Butterfly","Legend","Wanderer","Rover",
    "Raver","Loon","Lancer","Glazer","Lantern","Lighter","Cloak","Bell","Ringer",
    "Keeper","Centaur","Bolt","Catcher","Whimsey","Quester","Rat","Mouse","Serpent",
    "Wyrm","Gargoyle","Whip","Rider","Spirit","Sentry","Bat","Beetle","Burn",
    "Cowl","Collar","Mark","Grin","Scowl","Spear","Razor","Edge","Seeker","Jay",
    "Ape","Monkey","Gorilla","Koala","Kangaroo","Yak","Sloth","Ant","Roach",
    "Weed","Eater","Shirt","Face","Goat","Mind","Shift","Mole","Vole","Pirate",
    "Llama","Stag","Bug","Cap","Boot","Drop","Hugger","Sargent","Snagglefoot",
    "Carpet","Curtain","Pop", "Snap", "Crackle", "Whiz", "Bang", "Zip", "Zoom", 
    "Clink", "Clank", "Boom", "Pow", "Sizzle", "Fizz", "Buzz", "Whirl", "Swirl", "Twirl", "Zing", "Zap",
    "Puff", "Fluff", "Silk", "Wool", "Gossamer", "Sticky", "Soft", "Fluffy", "Shiny",
    "Dull", "Glitter", "Glimmer", "Shimmer", "Sparkle", "Twinkle", "Glow", "Radiant",
    "Spark", "Shiny", "Dazzle", "Zazzle", "Twinkle", "Glitter", "Flash", "Flicker", "Blaze", "Flare", "Glint", "Gleam", "Shimmer", "Radiance",
];
const chain = {};

trainingNames.forEach(name => {
    const chars = name.toLowerCase().split('');
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const next = chars[i + 1] || null;
        if (!chain[char]) chain[char] = [];
        chain[char].push(next);
    }
});

function generateWord(maxLength = 6) {
    const keys = Object.keys(chain);
    if (keys.length === 0) return "Unknown";

    
    let current = keys[Math.floor(Math.random() * keys.length)];
    let word = current;
    
    for (let i = 0; i < maxLength - 1; i++) {
        const possibilities = chain[current];
        if (!possibilities || possibilities.length === 0) break;
        
        let next = possibilities[Math.floor(Math.random() * possibilities.length)];
        
        
        if (next === null) {
            
            if (word.length < 3) {
                const nonNulls = possibilities.filter(p => p !== null);
                if (nonNulls.length > 0) {
                    next = nonNulls[Math.floor(Math.random() * nonNulls.length)];
                } else {
                    break; 
                }
            } else {
                break; 
            }
        }
        
        word += next;
        current = next;
    }
    
    
    const cleanWord = word.replace(/[^a-zA-Z]/g, '');
    return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
}

function handleGenerateRequest() {
    
    const prefixes = [
        "Fizzle", "Glimmer", "Wobble", "Zazzle", "Pippin", "Bumble", "Snaggle", 
        "Doodle", "Tilly", "Pickle", "Sploot", "Puddle", "Flabber", "Grizzle", 
        "Mumble", "Razzle", "Dazzle", "Tickle", "Wiggle", "Joggle", "Baffle"
    ];
    const suffixes = [
        "bang", "puff", "bottom", "toe", "flask", "pipe", "spark", "wick", 
        "snaps", "whimsey", "clink", "muffin", "sproket", "gadget", "fizz", 
        "pop", "twist", "gear", "bolt", "crank", "whistle"
    ];

    
    const buildCompound = () => {
        
        const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
        
        
        if (Math.random() > 0.8) {
            const chaos = generateWord(3).toLowerCase();
            return pre + chaos + suf;
        }
        
        return pre + suf;
    };

    const firstName = buildCompound();
    const lastName = buildCompound();

    document.getElementById('displayGeneratedName').innerText = `${firstName} ${lastName}`;
}