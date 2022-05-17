export default class Charackter {
  constructor() {
    this.health = 100;
    this.distanceAttack = undefined;
  }

  set damageLinear(distance) {
    if (this.health >= 0) {
      this.health -= ((this.health / 100) * 10) * (distance - 1);
    }
  }

  get damageLinear() {
    return this.health;
  }

  set damageDatura(distance) {
    const linearValue = this.health - ((this.health / 100) * 10) * (distance - 1);
    this.health = linearValue - (Math.log2(distance) * 5);
  }

  get damageDatura() {
    return this.health;
  }
}

const charackter = new Charackter();
charackter.damageLinear = 5;
