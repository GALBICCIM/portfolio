import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { GlobalFont } from "./fonts/GlobalFont";

const OPTIONS: EmblaOptionsType = {
	align: "end",
	containScroll: false
};

const App: React.FC = () => <EmblaCarousel options={OPTIONS} />;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<GlobalFont />
		<App />
	</React.StrictMode>
);
