export default class CanvasNode {
    constructor(){ 
        this.posX = null;
        this.posY = null;
        this.offsetY = null;
    }
    
    draw(ctx){
        // Node Circle
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

        // Node text
        ctx.font = this.radius+"px Lato";
        ctx.textAlign = "center";
        ctx.fillStyle = "#FF0033";
        ctx.fillText(this.value, this.posX, this.posY + this.radius * 0.375);
    }
    
    get leftNodePosition(){
        return [this.posX, this.posY + this.offsetY];
    }

    get rightNodePosition(){
        return [this.posX, this.posY + this.offsetY];
    }

    assignRadius(radius){
        this.radius = radius;
        this.offsetY = this.radius * 2.5;
    }
}