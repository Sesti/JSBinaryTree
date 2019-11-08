import BinaryTree from './tree.js';
import {createCanvas, drawTree} from './canvas.js';
import CanvasTree from './canvasTree.js';

let tree = new BinaryTree();
tree.insert(29);
tree.insert(40);
tree.insert(60);
tree.insert(3);
tree.insert(104);
tree.insert(107);
tree.insert(26);
tree.insert(1);
tree.print();

let ctx = createCanvas('tree');
tree.context = ctx;
tree.drawTree();