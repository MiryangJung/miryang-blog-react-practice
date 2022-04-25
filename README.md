# miryang blog react practice
> react로 블로그를 만듭니다.  
> 리액트 연습 용
> [https://miryangdev.netlify.app/](https://miryangdev.netlify.app/)  

![home](https://i.ibb.co/rxBw3jp/home.png)

## Develop Environment
- node.js v12
- npm v6
- webstorm

## Installation
```bash
yarn install
yarn start
```

---

## 개발해야할 기능 & 컴포넌트

- nav
  - [x] 프로필 이미지
  - [x] 프로필 정보
  - [x] 메뉴
  - [x] sns 정보
  - [x] 모바일 대응
- home
  - [x] head
  - [x] 날씨 정보 > api 이용
  - [x] 정보들 넣을 귀여운 박스 여러개
  - [x] 모바일 대응
- blog
  - [ ] 썸네일 사진 > 자동으로 만들어지게 해볼까?
  - [ ] 글 제목
  - [ ] 글 태그
  - [ ] 글 날짜
  - [ ] 인피니티 스크롤
  - [ ] 마크다운 형식의 글 내용
- TIL
  - [ ] 카테고리
  - [ ] 카테고리 뎁스
  - [ ] 글 제목
  - [ ] 글 날짜
- 추가 기능
  - [ ] rss 적용
  - [ ] 애널리틱스 적용
  - [ ] 검색 구현
  - [ ] 다크 테마
- 배포
  - [x] Netlify 배포
  - [ ] miryang.dev 도메인 연결
  
## 설계 및 구현

- 날씨 정보
  - OpenWeather API 사용

## 트러블 슈팅

- Netlify 배포
  - `CRA` 사용 시
    - Build command를 `CI= yarn build` 로 설정한다.
- Link `target="_blank"` 사용 시 `noreferrer` 경고
  - `noreferrer` 사용 시 링크 이동할 때 참조자 정보를 숨긴다.
  - 보안상의 이유로 경고가 뜬다.
  - [refer](https://velog.io/@devpark/Remark-Problem-Solving-Tabnabbing-noopener-noreferrer-last-update-2020.12.21)
- HEAD 에서 날씨를 api로 불러오는 과정이 있는데, 페이지 이동 때마다 요청을 보낸다.
  - WEATHER를 바깥 컴포넌트로 빼서 접속 시 한 번만 요청하도록 수정

## 학습한 내용
- emotion.js
  - CSS-in-JS 라이브러리이다.
  - component로 만들어 재사용에 용이하다.
  - `facepaint` 로 미디어쿼리를 쉽게 사용할 수 있다.
- CRA 설정 파일
  - cra는 기본적으로 설정 파일을 숨겨둔다.
  - `npm run eject` 으로 설정 파일을 나타나게 할 수 있다.
- facepaint
  - 미디어쿼리를 더 쉽게 사용할 수 있게 해준다.
- 날씨 정보
  - `Geolocation API` 로 현재 위도, 경도를 알 수 있다.
  - 위치 정보 동의 alert는 어떻게 띄우는가?
    - `Geolocation API` 를 사용하면 자동으로 뜬다!
