import {createNode, getLeftNodePosition, getRightNodePosition} from './node.js';
import createCanvas from './canvas.js';

const INITIAL_X = window.innerWidth / 2;
const INITIAL_Y = 100;

let ctx = createCanvas();

let c1 = createNode(ctx, "30", INITIAL_X, INITIAL_Y);
let c2 = createNode(ctx, "40", ...getLeftNodePosition(c1));
let c3 = createNode(ctx, "20", ...getRightNodePosition(c1));