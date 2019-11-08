import {createCanvas} from './canvas.js';
import CanvasTree from './canvasTree.js';
console.profile();
let tree = new CanvasTree(20);
tree.insert(29);
tree.insert(40);
tree.insert(60);
tree.insert(3);
tree.insert(104);
tree.insert(107);
tree.insert(115);
tree.insert(26);
tree.insert(1);
tree.insert(33);
tree.insert(103);
tree.insert(106);
tree.insert(106);
tree.print();

let ctx = createCanvas('tree');
tree.context = ctx;
tree.drawTree();

console.profileEnd();