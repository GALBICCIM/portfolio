import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
	position: absolute;
	user-select: none;
`;

const StarCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const randomPos = (min: number, max: number) => {
		return Math.random() * (max - min) + min;
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const canvasParent = canvas.parentNode;
		if (!canvasParent) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let canvasWidth = (canvasParent as HTMLElement).clientWidth;
		let canvasHeight = (canvasParent as HTMLElement).clientHeight;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		let stars: {
			x: number;
			y: number;
			radius: number;
			speed: number;
			dynamicX: number;
			dynamicY: number;
		}[] = [];

		const createStars = (num: number) => {
			stars = [];
			for (let i = 0; i < num; i++) {
				const x = randomPos(0, canvasWidth);
				const y = randomPos(0, canvasHeight);
				const radius = randomPos(1, 2.5);
				const speed = randomPos(0.01, 0.05);

				stars.push({
					x,
					y,
					radius,
					speed,
					dynamicX: x / canvasWidth,
					dynamicY: y / canvasHeight,
				});
			}
		};

		const breathe = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			stars.forEach((star) => {
				star.radius += star.speed;
				if (star.radius > 2.5 || star.radius < 1) star.speed *= -1;

				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fillStyle = "white";
				ctx.fill();
			});

			requestAnimationFrame(breathe);
		};

		const resize = () => {
			canvasWidth = (canvasParent as HTMLElement).clientWidth;
			canvasHeight = (canvasParent as HTMLElement).clientHeight;
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;

			stars.forEach((star) => {
				star.x = star.dynamicX * canvasWidth;
				star.y = star.dynamicY * canvasHeight;
			});
		};

		resize();
		createStars(110);
		breathe();

		window.addEventListener("resize", resize);

		return () => window.removeEventListener("resize", resize);
	}, []);

	return <Canvas ref={canvasRef} />;
};

export default StarCanvas;
