import {createCanvas, clearCanvas} from './canvas.js';
import CanvasTree from './canvasTree.js';

const INCREMENT = 500;
let time = 0;
let canvas = createCanvas('tree');
let ctx = canvas.getContext('2d');
let tree = new CanvasTree(20);
tree.context = ctx;

const values = [29, 40, 60, 3, 100, 107, 115, 26, 1, 33, 103, 105, 105, 103, 106];


values.map((e) => setTimeout(function(){
    tree.insert(e);    
    clearCanvas(canvas);
    tree.drawTree();
}.bind(e), time+=INCREMENT));

