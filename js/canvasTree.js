import BinaryTree from './tree.js';

const OFFSET_X = 100;
const NODE_RADIUS = 20;

const INITIAL_X = window.innerWidth / 2 - OFFSET_X / 2;
const INITIAL_Y = 100;

export default class CanvasTree extends BinaryTree{
    constructor(nodeRadius){
        super();
        this.ctx = null;
        this.nodeRadius = nodeRadius ? nodeRadius : NODE_RADIUS;
    }
    drawTree(){
        if(this.ctx === null)
            throw new ReferenceError("Context not defined. Use setContext to define.");
            
        if(this.root === null)
            return;

        this.setNodesPosition(this.root, INITIAL_X - this.computeOffset(OFFSET_X), INITIAL_Y, null, OFFSET_X);

        this.drawNodesFrom(this.root);
    }
    setNodesPosition(node, posX, posY, side, offset){
        if(side === "left")
            node.posX = posX - this.computeOffset(offset);
        else
            node.posX = posX + this.computeOffset(offset);
        node.posY = posY;
        node.assignRadius(this.nodeRadius);

        if(node.leftChild !== null)
            this.setNodesPosition(node.leftChild, ...node.leftNodePosition, "left", offset / 2)
        if(node.rightChild !== null)
            this.setNodesPosition(node.rightChild, ...node.rightNodePosition, "right", offset / 2)
    
    }
    drawNodesFrom(node){   

        if(node.leftChild !== null) {
            this.drawLine(node, node.leftChild);
            this.drawNodesFrom(node.leftChild);
        }
        if(node.rightChild !== null) {                    
            this.drawLine(node, node.rightChild);
            this.drawNodesFrom(node.rightChild);
        }

        node.draw(this.ctx);     
    }

    drawLine(start, end){
        this.ctx.beginPath();
        this.ctx.moveTo(start.posX, start.posY);
        this.ctx.lineTo(end.posX, end.posY);
        this.ctx.stroke();
    }

    computeOffset(offset){
        return (offset / 3) * (this.height * 2);
    }

    set context(ctx){
        this.ctx = ctx;
    }
}