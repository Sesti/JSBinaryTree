const INITIAL_X = window.innerWidth / 2;
const INITIAL_Y = 100;

export default class CanvasTree{
    constructor(){
        this.ctx = null;
    }
    drawTree(){
        if(this.ctx === null)
            throw new ReferenceError("Context not defined. Use setContext to define.");
            
        if(this.root === null)
            return;

        this.setNodesPosition(this.root, INITIAL_X, INITIAL_Y);

        this.drawNode(this.root);
    }
    setNodesPosition(node, posX, posY){
        node.posX = posX;
        node.posY = posY;
        
        if(node.leftChild !== null)
            this.setNodesPosition(node.leftChild, ...node.leftNodePosition)
        if(node.rightChild !== null)
            this.setNodesPosition(node.rightChild, ...node.rightNodePosition)
    
    }
    drawNode(node){
        node.draw(this.ctx);

        if(node.leftChild !== null) 
            this.drawNode(node.leftChild);
        if(node.rightChild !== null) 
            this.drawNode(node.rightChild);
        
    }

    set context(ctx){
        this.ctx = ctx;
    }
}