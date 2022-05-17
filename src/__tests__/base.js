import Charackter from '../index';

test('setter damageLinear', () => {
  const charackter = new Charackter();
  charackter.damageLinear = 1;

  expect(charackter.damageLinear).toBe(100);
});

test('setter damageLinear', () => {
  const charackter = new Charackter();
  charackter.damageLinear = 11;

  expect(charackter.damageLinear).toBe(0);
});

test('setter damageLinear', () => {
  const charackter = new Charackter();
  charackter.health = -1;
  charackter.damageLinear = 11;

  expect(charackter.damageLinear).toBe(-1);
});

test('setter damageLinear', () => {
  const charackter = new Charackter();
  charackter.damageDatura = 2;

  expect(charackter.damageDatura).toBe(85);
});
