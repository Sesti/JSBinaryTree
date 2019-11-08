//import {createNode, getLeftNodePosition, getRightNodePosition} from './node.js';
import TreeNode from './node.js';
import createCanvas from './canvas.js';

const INITIAL_X = window.innerWidth / 2;
const INITIAL_Y = 100;

let ctx = createCanvas();

let c1 = new TreeNode(ctx, "40", INITIAL_X, INITIAL_Y);
let c2 = new TreeNode(ctx, "30", ...c1.leftNodePosition);
let c3 = new TreeNode(ctx, "50", ...c1.rightNodePosition);

c1.drawNode();
c2.drawNode();
c3.drawNode();