export const createCanvas = (id) => {
    let canvas;
    if(id === undefined)
        canvas = document.getElementsByTagName('canvas')[0];
    else
        canvas = document.getElementById(id);

    canvas.setAttribute("width", window.innerWidth - 16);
    canvas.setAttribute("height", window.innerHeight - 16);
    let ctx = canvas.getContext("2d");

    return ctx;
}

export const drawTree = (nodeArray) => {
    nodeArray.map((e) => {
        e.drawNode();
    })
}