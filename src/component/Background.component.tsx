import { useEffect } from "react";
import styled from "styled-components";
import { Column } from "./column.js";

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

    const columns: Column[] = [];
    const columnsCount = canvas.width / fontSize;

    for (let i = 0; i < columnsCount; i++) {
      columns.push(new Column(i * fontSize, fontSize, canvas.height, context));
    }

    context.font = `bold ${fontSize}px monospace`;
    let y = 0;

    function animate(
      context: CanvasRenderingContext2D,
      fontSize: number,
      y: number,
      canvas: HTMLCanvasElement
    ) {
      context.fillStyle = "rgba(0, 0, 0, 0.05";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "green";
      columns.forEach((column) => column.drawSymbol());

      setTimeout(
        () =>
          requestAnimationFrame(() => animate(context, fontSize, y, canvas)),
        50
      );
    }

    animate(context, fontSize, y, canvas);

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <StyledCanvas id="canvas" />;
}

const StyledCanvas = styled.canvas`
  background-color: #000;
`;
