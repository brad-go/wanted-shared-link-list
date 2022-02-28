# [원티드X위코드 프리온보딩 코스] 4주차 기업과제<br /> 🔗 공유 링크 목록 페이지

<br />

## :speaking_head: 1. 프로젝트 소개 

> 주어진 데이터를 불러와 공유받은 링크 목록을 구현하고, 링크가 가진 파일 목록을 확인하고 공유받을 수 있는 페이지를 만들었습니다.

- 팀 프로젝트 (2인)
- 제작기간: 2021.02.25 ~ 2021.02.27
- 팀 저장소: https://github.com/OnBoarding-Park-is-best/week4-symphony-storage

<br />

## :rocket: 2. DEMO LINK

#### 🔗 **과제물**(netlify): https://shared-link-list.netlify.app/ <br />

<br />

## :books: 3. 사용된 기술 스택 

![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- TypeScript - v4.5.4
- React.js - v17.0.2
- Styled-Compoennts - v5.3.3

<br />

## :electric_plug: 4. 프로젝트 실행 방법 

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
4. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```
   
<br />

## :gear: 5. 구현한 기능 

### 5-1. 숫자를 읽을 수 있는 파일 사이즈로 변환하는 함수

```tsx
const idx: number = Math.floor(Math.log(size) / Math.log(BASE));
```

: 파일 사이즈 기준을 1024 byte를 `BASE`(밑)로 해서 로그의 특성을 이용해 지수를 구하는 식을 세웠고, 이를 지수의 크기에 따라 뒤의 단위 표시를 다르게 반환해주는 함수를 만들었습니다.

**[코드 보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/utils/format.ts#L36)**

### 5-2. 유효기간 표시 및 체크 기능

#### 유효기간을 반환하는 util 함수

: unix 시간을 인자로 받아서 유효 기간을 반환하는 함수를 만들었습니다. unix 시간을 가져오는 `Date.getTime()`을 이용해서 현재 시간을 가져와 만료일과의 차를 구한 후 이를 48시간과 비교해 만료일을 표시하는 방식을 결정 했습니다.

 **[코드 보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/utils/format.ts#L22)**

#### Math.trunc vs Math.floor

: 만료된 경우 '만료됨'을 반환하지만, 얼마나 기간이 지났는지를 알려주는 기능 추가를 대비해서 소수점 이하 자릿수를 잘라내는 `Math.trunc`를 사용했습니다. `Math.floor`를 사용하게 되면 하루 반이 지난 것을 '-1.5'를 내림을 통해 '-2일'이 표시될 것입니다. 그렇기에 성능 면에서 아주 조금 더 빠른 속도를 보이는 `Math.trunc`를 이용했습니다.

#### 유효기간 실시간 반영

: `useExpire`라는 커스텀 훅을 만들어서 다른 곳에서도 재사용 할 수 있도록 만들었고, `setInterval()` 함수를 통해서 실시간으로 유효 기간이 반영되도록 하였습니다. 

**[코드 보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/hooks/useExpire.tsx#L5)**

### 5-3. 링크 생성일자 표시 기능

: 다양한 Date 메서드와 Stirng 메서드를 이용해서 unix 시간을 정해진 표기방식대로 반환해주는 함수를 생성했습니다. 

**[코드 보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/utils/format.ts#L9)**

### 5-4. 파일 사이즈 숫자에 3자리마다 콤마 표시

```tsx
export const addCommaToNumber = (number: number): string => {
  return number.toLocaleString();
};
```
: 정규식을 이용해서 구현할 수도 있지만, 내장 함수를 이용한 간단한 방식을 통해서 구현했습니다.

### 5-5. 파일 다운로드 기능

다운로드 기능을 구현하고 싶었지만, 실제로 저희가 파일을 가지고 있지도 않았고, 프론트 단에서 해결하기 어려운 문제라고 생각하였습니다. 그래서 `<a>`태그의 **download** 속성을 이용해서 유효 기간이 만료되지 않았다면 빈 파일을 다운받을 수 있게 만들었습니다. 

**[코드 보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/pages/DetailPage/index.tsx#L72)**

<br />

## :boom: 6. 핵심 트러블 슈팅

#### 6-1. API 및 배포

&nbsp;API 데이터를 가져오는데 **CORS 문제**로 인해 데이터를 불러올 수 없었습니다. 서버 측에서 `Access-Control-Allow-Origin: *` 설정을 해주지 않은 것으로 생각되었습니다. 해결 책을 찾다가 **proxy**를 이용해서 데이터를 불러올 수 있었습니다. 

```json
"proxy" : "https://xxxxxx",
```

개발 시에는 package.json의 proxy를 이용해서 개발을 진행했지만, netlify를 통해 **배포를 하려고 했을때 데이터를 읽어오지 못하는 오류**가 발생했습니다. netlify 측에 설정한 proxy를 인식할 수 있는 방법을 찾아야 했습니다. 여러 방법을 시도 중, 아래의 코드들을 통해서 해결할 수 있었습니다. 

```toml
[[redirects]]
  from = "/proxy/*"
  to = "https://storage-fe.fastraffic.io/:splat"
  status = 200
  force = true
```

- netlify.toml 파일에서 **redirects** 설정 해주기

```tsx
const { REACT_APP_API_POINT }: any = process.env;
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

export const fetchApi = async () => {
  return axios
    .get<ApiReturnType[]>(`${PROXY}${REACT_APP_API_POINT}`)
    .then((res) => res.data);
};
```

- localhost가 아니라면 proxy와 api 엔드포인트를 이용해 데이터를 불러오기

#### 6-2. 이미지 로드가 되지 않는 문제

&nbsp;확장자가 svg인 포함된 이미지들이 모두 불러와지지 않는 오류가 있었습니다. img태그의 onerror 이벤트를 이용해서 하려고 했지만, 그럼에도 403오류는 여전히 발생했기 때문에 확장자가 svg인 이미지들은 모두 default.svg로 대체하기로 했습니다. 

**[코드보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/pages/DetailPage/index.tsx#L244)**

#### 6-3. 리액트 라우터 설정 문제

&nbsp;클릭되면 이동해야할 태그들이 표를 만드는 `<table>` 태그와 하위 태그들로 구성되어 있어서 react-router-dom v6의 Link 태그로 감쌀 수 없는 문제가 있었습니다. 그러므로 페이지 이동 방식에 제약이 생겼고, 다른 방법을 찾아야 했습니다. 
&nbsp;결국 하나의 다운로드 링크를 나타내는 **table row**에 onClick이벤트를 통해서 상세 페이지로 navigate시켜주는 것으로 해결할 수 있었습니다. 

```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const goToDetailPage = () => {
  navigate(`/${link.key}`);
};

return ( <TableRow onClick={goToDetailPage}> ... )
```

&nbsp;하지만 에러 페이지가 로드 되지않는 오류가 발생했습니다. 상세 페이지 안에서 유효한 링크의 key가 들어왔는지 판별하고 제대로 된 key라면 페이지를 보여주고, 아니라면 에러페이지가 로드되게 만들어서 해결할 수 있었습니다. 

**[코드 보기](https://github.com/brad-go/wanted-shared-link-list/blob/97a5632ff80380440c77e5f52dd87db7b0e41cca/src/pages/DetailPage/index.tsx#L47)**

<br />

## :open_file_folder: 7. 디렉토리 구조

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

<br />

## :pray: 8. 회고 및 느낀점

&nbsp;프로젝트에서 구현할 기능 자체는 어렵지 않았지만, API 문제 있어서 많은 어려움을 겪은 프로젝트였습니다. 불러와져야 할 데이터에서 CORS 오류가 발생하고, 이미지에서는 403 forbidden이 발생하고 local에서 해결했더니 배포한 사이트에서는 데이터가 불러와지지 않고... 정말 문제에 문제가 끝없이 이어지는 프로젝트였습니다. 

&nbsp;그래도 Date함수와 다양한 자바스크립트 메서드를 다시 한번 공부할 수 있는 프로젝트였지만, 라우터 에러처리가 조금 미숙하지 않았나 싶습니다. 에러 페이지가 생각처럼 잘 동작해주지 않아서 코드가 조금 지저분해져서 조금 더 공부하고 싶습니다. 그리고 특히 CORS와 proxy에 대해서 더 많은 공부가 필요할 것 같다고 느꼈습니다. 
