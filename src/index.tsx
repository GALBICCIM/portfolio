import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "./components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./components/carousel/embla.css";

const OPTIONS: EmblaOptionsType = { loop: false };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App: React.FC = () => <EmblaCarousel slides={SLIDES} options={OPTIONS} />;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
