const velocity = 0.03;
const drag = 0.05;

export default class Dot {
    #xStart;
    #yStart;
    #radius;
    #color;
    #distance;

    #rad;
    #x;
    #y;
    #lastPoint;
    #lastMouse;

    constructor(x, y, radius, color, distance) {
        this.#xStart = x;
        this.#yStart = y;
        this.#radius = radius;
        this.#color = color;
        this.#distance = distance;

        // make the dot start on random radian on the circle 
        this.#rad = Math.random() * (Math.PI * 2);

        // if used the mouse following with drag effect
        this.#lastMouse = {x, y};
        this.#lastPoint = {x, y};
    }

    /**
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {{x: number, y: number}} mouse
   */
    update(ctx, mouse) {
        this.#lastPoint = {
            x: this.#x,
            y: this.#y,
        };
        
        this.#rad += velocity;

        // with fixed center, e.g. starting point around which the dot is circling 
        // const xCenter = this.#xStart;
        // const yCenter = this.#yStart;

        // this follows the mouse coordinates as center but is very real-time
        // const xCenter = mouse.x;
        // const yCenter = mouse.y;

        // so drag-effect is needed to be created
        this.#lastMouse = {
            x: this.#lastMouse.x + (mouse.x - this.#lastMouse.x) * drag,
            y: this.#lastMouse.y + (mouse.y - this.#lastMouse.y) * drag,
        };
        const xCenter = this.#lastMouse.x;
        const yCenter = this.#lastMouse.y;

        this.#x = xCenter + Math.cos(this.#rad) * this.#distance;
        this.#y = yCenter + Math.sin(this.#rad) * this.#distance;

        this.draw(ctx);
    }

    /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
    draw(ctx) {
        ctx.beginPath();

        // not so smooth - looks mor like dots when moved fast
        // ctx.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2, false);
        // ctx.fillStyle = this.#color;
        // ctx.fill();

        // use line for more smoothness
        ctx.strokeStyle = this.#color;
        ctx.lineWidth = this.#radius;
        ctx.moveTo(this.#lastPoint.x, this.#lastPoint.y);
        ctx.lineTo(this.#x, this.#y);
        ctx.stroke();

        ctx.closePath();
    }
}
