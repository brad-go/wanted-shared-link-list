<h1>원티드 프리온보딩 코스 4주차 기업과제<br />
꽃 정기구독 서비스 🌼</h1>

## 🚀 배포

🔗 **과제물**(netlify): https://symphony-storage.netlify.app/
<br />

## 🧑‍🤝‍🧑 팀 소개

### 저희는 Team **박이최고** 입니다.

| | 팀원 | 역할 | 
|------------------------------------------------------------ |----------------------------------------------------- |--------------------- | 
| ![](https://avatars.githubusercontent.com/u/71081893?s=25) | 이소진 [@krungy](https://github.com/krungy) | (팀장) 라우터 설정, 링크 상세 화면 | 
| ![](https://avatars.githubusercontent.com/u/68905615?s=25) | 고동현 [@brad-go](https://github.com/brad-go) | 유틸 함수, 링크 목록 화면 |

<br>

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/OnBoarding-Park-is-best/week4-symphony-storage
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 프로젝트 root 디렉토리에 `.env` 파일을 생성하고 API_POINT를 추가합니다.
    ```bash
    REACT_APP_API_POINT=<proxy 뒤에 들어올 나머지 API 주소>
    ```
5. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```

<br>

## 🧰 기술 스택 및 구현 사항

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- 모든 기능은 peer programming을 통해 구현되었습니다. 

### 화면1: 링크 목록 화면

- 링크로 공유한 파일(들)을 다운로드 받을 수 있는 링크 목록을 확인할 수 있습니다.
- 기능
    - [x] 서버에서 제공한 링크 데이터를 화면에 표시합니다.
    - [x] 링크 아이템을 클릭하여 상세페이지로 이동합니다.
    - 제목 아래 URL을 아래와 같이 표시합니다.
        - [x] 유효기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 전체경로를 표시합니다.
        - [x] 유효기간 만료: 만료됨으로 표시합니다.
    - URL을 클릭한 경우 아래와 같이 동작합니다.
        - [x] 유효기간 이내: URL를 클립보드에 복사하고 ${링크 제목} 주소가 복사 되었습니다.를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.
        - [x] 유효기간 만료: 아무동작도 하지 않습니다.
    - [x] 파일 개수의 숫자에 3자리 단위마다 콤마를 표시합니다.
    - 파일 사이즈를 읽을 수 있도록 표시해주세요.
        - [x] 소수점 둘째 자리까지 표기합니다.
        - [x] 단위는 숫자 뒤에 B, KB, MB, GB, TB로 표기 (ex. 10.86KB)
    - 유효기간을 아래와 같이 표시하되 실시간으로 반영합니다.
        - [x] 48시간 미만: XX시간 XX분
        - [x] 48시간 이상: X일
        - [x] 만료: 만료됨
    - [x] 받은 사람이 있을 경우 받은 사람 텍스트를 미리 주어진 코드베이스와 같이 <Avatar />컴포넌트를 이용합니다.

### 화면2: 링크 상세 화면

- 링크가 가지고 있는 파일 목록을 확인하고 공유 받을 수 있습니다.
- 기능
    - [x] 링크 정보를 표시합니다.
    - [x] 받기 버튼을 누르면 다운로드 되었습니다.를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.
    - [x] 링크의 유효기간이 만료 되지 않았을 경우에만 파일 목록을 표시합니다.

### 트러블 슈팅

#### API 및 배포

&nbsp;API 데이터를 가져오는데 CORS 문제로 인해 데이터를 불러올 수 없었습니다. 개발 시에는 package.json의 proxy를 이용해서 개발을 진행했지만, netlify를 통해 배포를 하려고 했을때 데이터를 읽어오지 못하는 오류가 발생했습니다. redirect를 이용해서 해결해보려고 했지만, 실패했습니다. 화면을 보여주는게 우선이라고 생각해서 MOCK_DATA를 통해서 우선 배포를 진행했습니다.
- 해결완료!
  - Proxy 설정으로 문제를 해결해였습니다.

#### 이미지 로드가 되지 않는 문제

&nbsp;확장자가 svg인 포함된 이미지들이 모두 불러와지지 않는 오류가 있었습니다. img태그의 onerror 이벤트를 이용해서 하려고 했지만, 그럼에도 403오류가 발생했기 때문에 확장자가 svg인 이미지들은 모두 default.svg로 대체하기로 했습니다. 

#### 리액트 라우터 문제

&nbsp;클릭되면 이동해야할 태그들이 table 구조로 되어 있어서 react-router-dom v6의 Link 태그로 감쌀 수 없는 문제가 있었습니다. table row에 onClick이벤트를 통해서 상세 페이지로 navigate시켜주는 것으로 해결했지만, 에러 페이지가 로드 되지않는 오류가 발생했습니다. 
&nbsp;상세 페이지 안에서 유효한 링크의 key가 들어왔는지 판별하고 제대로 된 key라면 페이지를 보여주고, 아니라면 에러페이지가 로드되게 만들어서 해결할 수 있었습니다. 


## 📂 디렉토리 구조
```bash
.
├── api
├── components
├── constants
├── hooks
├── pages
│   ├── DetailPage
│   ├── Error404Page
│   └── LinkPage
├── router
├── styles
├── types
└── utils
```
