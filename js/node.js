const NODE_RADIUS = 40;

const OFFSET_X = 50;
const OFFSET_Y = 100;

export default class Node {
    constructor(context, value, positionX, positionY){
        this.context = context;
        this.value = value;
        this.posX = positionX;
        this.posY = positionY;
        this.ctx = context;
    }
    
    drawNode(){
        // Node Circle
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, NODE_RADIUS, 0, Math.PI * 2, true);
        this.ctx.stroke();

        // Node text
        this.ctx.font = "40px Lato";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.value, this.posX, this.posY + 15);
    }
    
    set leftChild(node){
        this.node = node;
    }

    set rightChild(child){
        this.node = node;
    }
    
    get leftNodePosition(){
        return [this.posX - OFFSET_X, this.posY + OFFSET_Y];
    }

    get rightNodePosition(){
        return [this.posX + OFFSET_X, this.posY + OFFSET_Y];
    }
}