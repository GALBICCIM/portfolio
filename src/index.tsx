import React from "react";
import ReactDOM from "react-dom/client";

import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "components/carousel/EmblaCarousel";
import { GlobalFont } from "fonts/GlobalFont";

const OPTIONS: EmblaOptionsType = {
	watchDrag: false,
};

const App: React.FC = () => <EmblaCarousel options={OPTIONS} />;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<GlobalFont />
		<App />
	</React.StrictMode>
);
