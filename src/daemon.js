import Charackter from './index';

export default class Daemon extends Charackter {}

const daemon = new Daemon(11);
daemon.damageLinear = 3;
