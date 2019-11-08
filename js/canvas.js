const createCanvas = () => {
    let canvas = document.getElementById('tree');
    canvas.setAttribute("width", window.innerWidth - 16);
    canvas.setAttribute("height", window.innerHeight - 16);
    let ctx = canvas.getContext("2d");

    return ctx;
}

export default createCanvas;