export const GAP_LIST = [2, 5, 2];
export const GAP_LIST_MOBILE = [3, 5, 3];

export const TITLE_LIST = ["인적 사항", "자격증 취득 내역", "기술 스택"];

export const INFO_LIST = [
	{ label: "이름", value: "박승원" },
	{ label: "전화번호", value: "010-3158-3683" },
	{ label: "E-mail", value: "winnerone0409@gmail.com" },
	{
		label: "학력 사항",
		value: [
			{ text: "- 세일중학교", date: "(2020. 3. 2.~2023. 2. 3.)" },
			{ text: "- 한세사이버보안고등학교", date: "(2023. 3. 2.~)" },
		],
	},
];

export const CERT_LIST = [
	{ label: "- 정보기기운용기능사", date: "(2025. 7. 18.)" },
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
			{ path: "html.svg", text: "HTML" },
			{ path: "css.svg", text: "CSS" },
		],
	},
	{
		label: "Tools",
		value: [
			{ path: "react.svg", text: "React" },
			{ path: "nextjs.svg", text: "Next.js" },
			{ path: "redux.svg", text: "Redux" },
			{ path: "styled_components.svg", text: "styled-components" },
			{ path: "tailwindcss.svg", text: "Tailwind CSS" },
		],
	},
	{
		label: "Others",
		value: [
			{ path: "vite.svg", text: "Vite" },
			{ path: "npm.svg", text: "NPM" },
		],
	},
];
