// const letters =
// "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
const letters = "01";

export class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x;
    this.y = 0;
    this.context = context;
    this.canvasHeight = canvasHeight;
    this.fontSize = fontSize;
  }

  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.98) {
      return;
    }

    const letterIndex = Math.floor(Math.random() * letters.length);
    const symbol = letters[letterIndex];

    this.context.fillText(symbol, this.x, this.y);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}
