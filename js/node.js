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

    get leftNodePosition(){
        return [this.posX - OFFSET_X, this.posY + OFFSET_Y];
    }

    get rightNodePosition(){
        return [this.posX + OFFSET_X, this.posY + OFFSET_Y];
    }
}
/*
export const createNode = (ctx, value, posX, posY, radius = NODE_RADIUS) => {
    // Node Circle
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI * 2, true);
    ctx.stroke();

    // Node text
    ctx.font = "40px Lato";
    ctx.textAlign = "center";
    ctx.fillText(value, posX, posY + 15);

    return {
        value : value,
        positionX : posX,
        positionY : posY,
        radius: radius,
        size: radius * 2
    };
}

export const getLeftNodePosition = (node) => {
    return [node.positionX - OFFSET_X, node.positionY + OFFSET_Y];
}

export const getRightNodePosition = (node) => {
    return [node.positionX + OFFSET_X, node.positionY + OFFSET_Y];
}
*/