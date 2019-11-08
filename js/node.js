const NODE_RADIUS = 40;

const OFFSET_X = 100;
const OFFSET_Y = 100;

const OFFSET_X_NO_CHILD = 50;

export default class Node {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
        
        this.posX = null;
        this.posY = null;
    }
    
    draw(ctx){
        // Node Circle
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, NODE_RADIUS, 0, Math.PI * 2, true);
        ctx.stroke();

        // Node text
        ctx.font = "40px Lato";
        ctx.textAlign = "center";
        ctx.fillText(this.value, this.posX, this.posY + 15);
    }
    
    get leftNodePosition(){
        if(this.leftChild === null)
            return [this.posX - OFFSET_X_NO_CHILD, this.posY + OFFSET_Y];
        return [this.posX - OFFSET_X, this.posY + OFFSET_Y];
    }

    get rightNodePosition(){
        if(this.rightChild === null)
            return [this.posX + OFFSET_X_NO_CHILD, this.posY + OFFSET_Y];
        return [this.posX + OFFSET_X, this.posY + OFFSET_Y];
    }
}