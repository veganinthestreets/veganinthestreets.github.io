const POSITIVE = 'POSITIVE';
const NEGATIVE = 'NEGATIVE';

const powerUps = {
    1: {
        "name": "Penalty Box",
        "description": "Before throwers team's next full turn, they choose one opponent who can't defend for that turn.",
        "effect": POSITIVE
    },
    2: {
        "name": "Two Pronger",
        "description": "For thrower's next throw, they throw two dice instead of one.",
        "effect": POSITIVE
    },
    3: {
        "name": "Three Pronger",
        "description": "For thrower's next throw, they throw three dice instead of one.",
        "effect": POSITIVE
    },
    4: {
        "name": "Amputee Airstrike",
        "description": "For the throwers team's next full turn, opponent's can only defend with their non-dominant hand.",
        "effect": POSITIVE
    },
    5: {
        "name": "Take a Seat",
        "description": "Before the thrower's next defensive turn, they have to place a chair and can only defend while sitting in that chair.",
        "effect": NEGATIVE
    },
    6: {
        "name": "Take a Shot",
        "description": "For the thrower's next throw, they throw the die beer pong style into the opponent's cups. They get two attemps and each successful hit counts as a plunk.",
        "effect": POSITIVE
    }
}

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const buildRandomPowerupsTable = () => {

    table = document.getElementById('die-powerup-table');
    table.innerHTML = "";

    table.setAttribute('class', 'die-powerup-table');

    const randomPowerUpIds = shuffle(Object.keys(powerUps));

    // Create the table header
    let header = table.createTHead();
    header.setAttribute('class', 'die-powerup-thead-tr')

    // Header tr
    let row = header.insertRow(0);
    row.setAttribute('class', 'die-powerup-td')

    // Dice roll
    let cell = row.insertCell(0);
    cell.setAttribute('class', 'die-powerup-td')
    cell.innerHTML = "Dice Roll";

    // PowerUp
    let cell2 = row.insertCell(1);
    cell2.setAttribute('class', 'die-powerup-td')
    cell2.innerHTML = "PowerUp";

    // Description
    let cell3 = row.insertCell(2);
    cell3.setAttribute('class', 'die-powerup-td')
    cell3.innerHTML = "Description";

    // Effect
    let cell4 = row.insertCell(2);
    cell4.setAttribute('class', 'die-powerup-td')
    cell4.innerHTML = "Effect";

    // Create the rows
    let tBody = table.createTBody();
    for (let i = 5; i >= 0; i--) {
        const powerUp = powerUps[randomPowerUpIds[i]];
        console.log(powerUp);

        // Tbody tr
        let row = tBody.insertRow(0);
        row.setAttribute('class', 'die-powerup-tr')

        // Dice roll #
        let cell = row.insertCell(0);
        cell.setAttribute('class', 'die-powerup-td')
        cell.innerHTML = i + 1;

        // PowerUp name
        let cell2 = row.insertCell(1);
        cell2.setAttribute('class', 'die-powerup-td')
        cell2.innerHTML = powerUp.name;

        // PowerUp description
        let cell3 = row.insertCell(2);
        cell3.setAttribute('class', 'die-powerup-td')
        cell3.innerHTML = powerUp.description;

        // PowerUp effect type
        let cell4 = row.insertCell(3);
        cell4.innerHTML = powerUp.effect;
        if (powerUp.effect == POSITIVE) {
            cell4.setAttribute('class', 'die-powerup-td die-powerup-positive')
        } else {
            cell4.setAttribute('class', 'die-powerup-td die-powerup-negative')
        }
    }

};
