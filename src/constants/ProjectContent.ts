export const PROJECT_LIST = [
	{
		label: "자율 동아리 홍보 사이트",
		content: "React를 사용한 동아리 홍보 사이트 웹",
		link: "dfc-carousel-react-app",
		tag: "#React #Typescript #CRA #slick-carousel #styled-components #Vercel",
		description: [
			"Typescript 언어로 Interface를 정의해 props로 스타일을 쉽게 적용할 수 있도록 설계했습니다.",
			"slick-carousel 라이브러리를 사용하여 사용자가 보기 편하도록 캐러셀 UI를 구현했습니다.",
			"styled-components 라이브러리를 사용하여 반복적인 태그는 따로 선언하여 코드 반복성을 줄였습니다.",
			"Vercel Deploy 서비스를 사용하여 학생들이 쉽게 접속할 수 있도록 배포했습니다.",
		],
	},
	{
		label: "익명 게시판 백엔드 API",
		content: "FastAPI를 사용한 게시글과 댓글 및 계정을 관리할 수 있는 REST API 기반 엔드포인트",
		link: "FastAPI-board-backend",
		tag: "#Python #FastAPI #env #bcrypt #MySQL #SQLAlchemy",
		description: [
			"FastAPI 기반 RESTful API를 설계 및 구현하여 계정 생성 및 게시글/댓글 CRUD 기능을 개발했습니다.",
			"MySQL을 사용하여 사용자 정보를 데이터베이스에 저장할 수 있도록 설계했습니다.",
			"bcrypt 암호화 해시 함수로 비밀번호를 데이터베이스에 저장하여 기밀성을 높였습니다.",
			"env 파일을 사용하여 데이터베이스 URL 및 비밀번호를 환경변수로 안전하게 관리했습니다.",
		],
	},
	{
		label: "이미지 자동 백업 사이트",
		content: "React, Express.js를 사용한 이미지 자동 백업 정적 웹",
		link: "AWS-image-upload",
		tag: "#React #Express_JS #Typescript #Javascript #Multer #AWS_S3",
		description: [
			"AWS S3 서비스는 자동으로 백업해 주는 서비스와 성격이 비슷하여 개발했습니다.",
			"AWS S3 서비스를 활용하여 백업 스토리지를 구성했습니다.",
			"React를 사용하여 정적 사이트로 개발하여 웹 효율성을 높였습니다.",
			"REST API를 기반하여 백엔드를 구현했습니다.",
			"Multer 미들웨어를 사용하여 파일 업로드를 처리했습니다.",
		],
	},
	{
		label: "Twitter 클론 코딩",
		content: "React와 Firebase를 사용한 트위터의 트윗, 타임라인, 프로필 페이지 구현",
		link: "react-twitter-app",
		tag: "#React #Typescript #Vite #Firebase",
		description: [
			"Firebase Authentication 서비스를 활용하여 이메일/비밀번호 기반 로그인 및 소셜 로그인 기능을 구현했습니다.",
			"Firestore 서비스를 사용하여 사용자가 게시글을 작성하고, 타임라인에 표시되도록 구현했습니다.",
			"실시간으로 새로운 게시글이 즉시 반영되도록 개발했습니다.",
			"React-router-dom으로 라우팅하여 SPA 구조를 설계했습니다.",
			"Vite를 사용하여 프로젝트의 초기 구동 속도를 향상시켰습니다.",
		],
	},
];
