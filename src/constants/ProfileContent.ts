export const GAP_LIST = [2, 8, 1];

export const TITLE_LIST = ["인적 사항", "자격증 취득 내역", "기술 스택"];

export const INFO_LIST = [
	{ label: "이름", value: "박승원" },
	{ label: "전화번호", value: "010-3158-3683" },
	{ label: "E-mail", value: "winnerone0409@gmail.com" },
	{
		label: "학력 사항",
		value: [
			{ text: "- 세일중학교 졸업", date: "(2020. 3. 2.~2023. 2. 3.)" },
			{ text: "- 한세사이버보안고등학교 재학 중", date: "(2023. 3. 2.)" },
		],
	},
];

export const CERT_LIST = [
	{ label: "- AWS Cloud Practitioner", date: "(2025. 4. 21.)" },
	{ label: "- 정보처리기능사", date: "(2024. 4. 17.)" },
	{ label: "- ITQ OA Master", date: "(2023. 11. 9.)" },
	{ label: "- GTQ 포토샵 1급", date: "(2023. 9. 15.)" },
];

export const TECH_LIST = [
	{
		label: "Languages",
		value: [
			{ path: "ts.svg", text: "Typescript" },
			{ path: "js.svg", text: "Javascript" },
			{ path: "python.svg", text: "Python" },
			{ path: "java.svg", text: "Java" },
			{ path: "html.svg", text: "HTML" },
			{ path: "css.svg", text: "CSS" },
		],
	},
	{
		label: "Frameworks / Librarys",
		value: [
			{ path: "react.svg", text: "React.js" },
			{ path: "springboot.svg", text: "Spring Boot" },
			{ path: "fastapi.svg", text: "FastAPI" },
		],
	},
	{
		label: "Others",
		value: [
			{ path: "styled_components.svg", text: "Styled-Components" },
			{ path: "react_router_dom.svg", text: "React-Router-Dom" },
			{ path: "redux.svg", text: "Redux" },
			{ path: "vite.svg", text: "Vite" },
			{ path: "npm.svg", text: "NPM" },
		],
	},
];
