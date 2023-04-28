## Best ToDo - 1주차 과제

## 목차

- 프로젝트소개
- 기능소개
- 실행
- 개발환경
- 기술스택
- 프로젝트 파일 구조
- 팀소개

## 프로젝트 소개

저희 팀의 프로젝트는 Best ToDo입니다.
이 프로젝트는 로그인/회원가입 기능과, TODO 리스트를 구현하기 위해 만들었습니다.

원티드 프리온보딩 사전과제에서 주어진 조건에 맞는 프로젝트를 개발하였습니다.

이 프로젝트는 10명의 팀원 모두 함께 진행하였으며, 각자 과제를 수행한 후 결과물을 통해서 팀원들끼리 토론하여 가장 적절하다고 생각하는 방식을 도출하였습니다.

이 프로젝트를 통해 동료와 함께 협업하는 방법을 학습하였으며, 다양한 관점에서 코드를 해석해보는 경험을 했습니다.

#### Best Practice인 이유

1. API 호출

- axios의 intercepter 기능을 사용하여 API 요청 시, URL과 헤더를 반복해서 입력하는 대신 공통적인 end point를 설정하여 간편하게 관리할 수 있습니다. 또한, 로그인한 인증된 사용자의 경우 interceptor를 이용하여 중간에 가로채어 헤더에 token 값을 추가하여 API를 호출할 수 있습니다. 이를 통해 보안성을 높일 수 있습니다.

2. 상태관리

- props를 사용하여 상태를 전달하였습니다.
- 토큰 유무에 따른 리다이렉트에 고차 컴포넌트를 사용했습니다.

3. 라우터

- useRoutes를 사용하여 App.tsx에서 Routes.tsx를 Rendering 하였습니다.
- Routes.tsx에서는 react에서 제공하는 lazy 메소드를 사용하였습니다.
- 이는 첫 페이지가 로딩될 때 모든 컴포넌트가 렌더링되는 것이 아니라, 해당 컴포넌트가 필요한 시점에 이를 렌더링하여 첫 페이지에서 로딩시간이 오래걸리는 CSR의 단점을 커버할 수 있습니다.

4. craco-alias

- 다른 경로의 모듈을 import로 가져올때 상대 경로로 하면 depth가 길어지게 됩니다. alias를 통해 더 간단하게 depth를 표기하고자 했습니다. 그러나 CRA(Create React App)의 경우 alias를 설정하려면 npm eject를 사용해야합니다. depth의 간단한 표기를 위해 npm eject를 사용하는 대신 craco-alias 라이브러리를 통해 해결했습니다.

5. TypeScript

- React+TypeScript를 활용해 개발을 하였습니다.
- 타입으로 인해 예상치못한 오류를 미리 점검하였습니다.
- 타입을 가지고있어 팀원의 코드를 보고 빠른 피드백을 받았습니다.
- TypeScript 자동완성기능을 적절히 활용하였습니다.
- TypeScript를 사용해 정적 타이핑 및 에러 핸들링을 했습니다.

5. 유효성 검사

- 유효성 검사를 수행하는 함수를 utils 폴더에 따로 정리하여 회원가입, 로그인에서 모두 사용할 수 있도록 했습니다. (재사용성 고려)
- 아이디 input 태그의 type을 email이 아닌 text로 하여 @만 포함하면 유효한 것으로 하는 과제의 요구사항을 더 세밀하게 수행하였습니다.
- 또한 과제의 요구사항이 복잡하지 않으므로 includes와 length를 이용하여 간단하게 유효성 검사를 실시하였습니다.

6. prettier + eslint  

- prettier를 통하여 협업하는 팀원의 일관적인 코드스타일을 유지할 수 있게 적용을 하였고 ESLint를 통해 코드소스를 분석하여 문법적인 오류나 적절하지 않은 구조 등을 정의하여 미리 식별 할 수 있게 적용 하였습니다.
- ESLint의 경우 널리 사용되는 기준인 airbnb 와 airbnb-typescript 을 활용하였으며 팀원 간 소통 및 회의를 통해 제외시킬 옵션을 추가 정의하였습니다. 
- 이를 통해 코드의 통일성을 유지하고 발생할 수 있는 오류를 미리 식별하는 효과를 이루었습니다.

## 기능소개

#### 배포 링크: [Best ToDo](https://pre-onboarding-10th-1-4.vercel.app/)

## 실행방법

#### install
```
npm install
```

#### start
```
npm start
```
## 개발환경

- 테스트 환경 : Chrome browser
- IDE : Visual Studio Code 1.71.0 (Universal)
- 인프라 : Vercel
- 주요 라이브러리
  - React : 18.2.0
  - TypeScript : 4.9.5
  - React-router-dom : 6.10.0
  - tailwindcss : 3.3.2

## 기술스택

#### Environment

<code><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"></code>

#### config

<code><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"></code>

#### Language

<code><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></code>

#### Development

<code><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/></code>
<code><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></code>

#### deploy

<code><img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=Axios&logoColor=white"/></code>

## 프로젝트 파일 구조
```
📦BestToDo
├── .github
│   └── ISSUE_TEMPLATE
├── .husky
├── 📂public
└── 📂src
    ├── 📂api
    ├── 📂components
    │   └── 📂todo
    ├── 📂hoc
    ├── 📂hooks
    ├── 📂pages
    ├── 📂types
    └── 📂utils

```

## 팀소개
|                [wet6123](https://github.com/wet6123)                |                 [1two13](https://github.com/1two13)                  |         [plumpsqrl9744](https://github.com/plumpsqrl9744)    |         [tkdgh3050](https://github.com/tkdgh3050)        |         [senasoon](https://github.com/senasoon)         |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| ![wet6123의 프로필 사진](https://github.com/wet6123.png) | ![1two13의 프로필 사진](https://github.com/1two13.png) | ![plumpsqrl9744의 프로필 사진](https://github.com/plumpsqrl9744.png) | ![tkdgh3050의 프로필 사진](https://github.com/tkdgh3050.png) | ![senasoon의 프로필 사진](https://github.com/senasoon.png) |

|                [5thwin](https://github.com/5thwin)                |                 [yminj1029](https://github.com/yminj1029)                  |                   [Leeseunghwan7305](https://github.com/Leeseunghwan7305)                |         [JKyEun](https://github.com/JKyEun)         |         [chyerin802](https://github.com/chyerin802)        |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| ![5thwin의 프로필 사진](https://github.com/5thwin.png) | ![yminj1029의 프로필 사진](https://github.com/yminj1029.png) | ![Leeseunghwan7305의 프로필 사진](https://github.com/Leeseunghwan7305.png) | ![JKyEun의 프로필 사진](https://github.com/JKyEun.png) | ![chyerin802의 프로필 사진](https://github.com/chyerin802.png) |
