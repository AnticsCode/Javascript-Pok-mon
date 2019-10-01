var bulbasaur;
var charmander;

function Pokemon(name, hp, str) {
  this.name = name;
  this.hp = hp;
  this.str = str;
  this.pp = 10;
  this.alive = true;

  this.attack = function (objetive) {
    if (!objetive.alive) {
      console.error(objetive.name + " ya murió!");
      return;
    } else {
      console.info(this.name + " ataca a " + objetive.name + "...");
      objetive.hp -= this.str;
      console.info(objetive.name + " pierde " + this.str + " puntos de salud!");
      this.pp -= 1;
      if (objetive.hp <= 0) {
        console.error(objetive.name + " murió!");
        objetive.hp = 0;
        objetive.alive = false;
      }
      showState();
    }
  }
}

function start() {
  bulbasaur = new Pokemon('Bulbasaur', 23, 4);
  charmander = new Pokemon('Charmander', 20, 6);
  console.log(bulbasaur.name + " VS " + charmander.name);
  showState();
}

function attack() {
  if (!bulbasaur || !charmander) {
    console.error('Inicia primero!');
    return;
  }
  if (bulbasaur.alive) { bulbasaur.attack(charmander); }
  if (charmander.alive) { charmander.attack(bulbasaur); }
}

function showState() {
  console.log(bulbasaur);
  console.log(charmander);
  console.log('-----------------------------\n');
}