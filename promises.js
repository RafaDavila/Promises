class Spaceship {
    constructor(name, maxCapacity, currentCharge){
        this.name = name;
        this.maxCapacity = maxCapacity;
        this.currentCharge = currentCharge;
    }

    currentPercentCharge() {
        return this.currentCharge * 100 / this.maxCapacity;
    }
}

class SpaceshipEngine {
    constructor(Spaceship){
        this.Spaceship = Spaceship;
    }

    turnOn(){
        this.checkCurrentCharge().then(currentCharge =>{
            console.log(`(${this.Spaceship.name}) Partida Autorizada: carga atual em ${currentCharge}%.`);
        }).catch(currentCharge =>{
            console.log(`(${this.Spaceship.name}) Partida não autorizada: carga em apenas ${currentCharge}%.`);
        });
    }

    checkCurrentCharge(){
        return new Promise((resolve, reject) =>{
            let currentCharge = this.Spaceship.currentPercentCharge();
            if(currentCharge >= 30){
                resolve(currentCharge);
            } else {
                reject(currentCharge);
            }
        });
    }
}

const sophia = new Spaceship("Sophia", 10, 5);
const amsterda = new Spaceship("Amsterdã", 14, 10);
const dwarfStar = new Spaceship("Estrela-Anã", 20, 4);

const sophiaEngine = new SpaceshipEngine(sophia);
const AmsterdaEngine = new SpaceshipEngine(amsterda);
const dwarfStarEngine = new SpaceshipEngine(dwarfStar);

sophiaEngine.turnOn();
AmsterdaEngine.turnOn();
dwarfStarEngine.turnOn();


