import TreeNode from './node.js';
import {createCanvas, drawTree} from './canvas.js';

const INITIAL_X = window.innerWidth / 2;
const INITIAL_Y = 100;

let ctx = createCanvas('tree');

let c1 = new TreeNode(ctx, 40, INITIAL_X, INITIAL_Y);
let c2 = new TreeNode(ctx, 30, ...c1.leftNodePosition);
let c3 = new TreeNode(ctx, 50, ...c1.rightNodePosition);

let nodeArray = [c1, c2, c3];

// Drawing the tree
drawTree(nodeArray);