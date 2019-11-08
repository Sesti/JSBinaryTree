import CanvasNode from "./canvasNode.js";

export default class Node extends CanvasNode {
    constructor(value){
        super();
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}