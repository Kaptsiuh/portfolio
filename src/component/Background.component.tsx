import { useEffect } from "react";
import styled from "styled-components";

export function Background() {
  useEffect(() => {
    const canvas = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const fontSize = 16;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.font = `bold ${fontSize}px monospace`;
    context.fillStyle = "green";

    let y = 0;

    function animate(
      context: CanvasRenderingContext2D,
      fontSize: number,
      y: number
    ): void {
      context.fillText("M", 100, y);
      y += fontSize;

      setTimeout(() => requestAnimationFrame(animate), 50);
    }

    animate(context, fontSize, y);

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <StyledCanvas id="canvas" />;
}

const StyledCanvas = styled.canvas`
  background-color: #000;
`;
