import React, { useEffect, useRef } from "react";

const StarCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const randomPos = (min: number, max: number) => {
		return Math.random() * (max - min) + min;
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const createStar = () => {
			const x = randomPos(0, canvas.width);
			const y = randomPos(0, canvas.height);
			const radius = randomPos(1.5, 2.5);

			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2, false);
			ctx.fillStyle = "white";
			ctx.fill();
			ctx.closePath();
		};

		for (let i = 0; i < 12; i++) {
			createStar();
		}
	}, []);

	return <canvas className="canvas" ref={canvasRef} width={1600} height={600} />;
};

export default StarCanvas;
