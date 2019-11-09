export const createCanvas = (id) => {
    let canvas;
    if(id === undefined)
        canvas = document.getElementsByTagName('canvas')[0];
    else
        canvas = document.getElementById(id);

    canvas.setAttribute("width", window.innerWidth - 16);
    canvas.setAttribute("height", window.innerHeight - 16);

    return canvas;
}

export const clearCanvas = (canvas) => {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}