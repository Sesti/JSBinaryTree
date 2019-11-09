import BinaryTree from './tree.js';

const OFFSET_X = 25;
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

        this.setNodesPosition(this.root, INITIAL_X - this.computeOffset(this.height) / 2, INITIAL_Y, null, this.height);

        this.drawNodesFrom(this.root);
    }
    setNodesPosition(node, posX, posY, side, height){
        if(side === "left")
            node.posX = posX - this.computeOffset(height);
        else
            node.posX = posX + this.computeOffset(height);

        console.log(node.posX);
        node.posY = posY;
        node.assignRadius(this.nodeRadius);

        if(node.leftChild !== null)
            this.setNodesPosition(node.leftChild, ...node.leftNodePosition, "left", --height)
        if(node.rightChild !== null)
            this.setNodesPosition(node.rightChild, ...node.rightNodePosition, "right", --height)
    
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

    computeOffset(height){
        let nodeOffset = OFFSET_X;
        for(let i = height; i > 0 ; i--){
            nodeOffset *= 2;
        }
        
        return 25 * height;
    }

    set context(ctx){
        this.ctx = ctx;
    }
}