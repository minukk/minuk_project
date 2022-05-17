# Frontend Subject

## Skill

- React
- react-router-dom
- TypeScript
- emotion, reset
- eslint, prettier

## User Story

- 사용자는 검색어를 입력할 수 있습니다.
- 사용자는 검색에 도움이 되는 필터를 설정할 수 있습니다.
- 사용자는 페이지에 나타나는 상품 목록을 볼 수 있습니다.
- 사용자는 상품 목록에서 상품을 클릭 시 상세 페이지를 볼 수 있습니다.

## 구현

### ProductMain ('/apply')

![ezgif com-gif-maker](https://user-images.githubusercontent.com/78197196/168802167-c45297cf-880e-42d3-a79b-645a60caa02b.gif)

- ProductMain은 URL에 '/apply'를 입력하거나 로고를 클릭시 이동할 수 있습니다.
- ProductMain 컴포넌트는 상품 리스트, 상품 검색을 위한 필터로 구분 되어 있습니다.
- 처음 '/apply'에 접속한 경우 fetch로 전체 데이터를 받아옵니다.
- 상품 검색을 위해 ProductSearch 컴포넌트에서 필터를 설정하거나 검색어를 입력할 경우 fetch로 가져온 Data에서 필터에 맞게 필터링을 합니다.
- 각각의 필터링을 설정할 경우 URL에 필터에 대한 정보가 추가됩니다.
- 필터에 대한 서버 API가 존재하지 않아 필터를 직접 구현하였습니다.
- 각각 설정한 필터에 대한 정보를 상태값 객체로 가져와 적용이 된 필터만 데이터와 비교하여 필터링합니다.
- (요일, 관심분야에 대한 필터는 UI와 URL형태로 동기화 되어 있으나 필터링에 대한 부분은 미구현 상태입니다.)
- 초기화를 누를 시에 필터가 추가된 URL은 초기 상태로 변하며 Filter된 데이터 또한 초기화되며 처음 받아온 전체 데이터를 다시 상품 메인에 렌더링하게 됩니다.
- 각각의 상품은 Card 컴포넌트를 통해 전체 혹은 필터된 데이터를 전달 받아 렌더링합니다.
- Card 컴포넌트 각각은 클릭 시에 해당 상품 상세 페이지로 이동하게 됩니다.
- useScroll을 사용하여 현재 스크롤의 위치를 파악하고 스크롤의 위치가 clientHeight의 95%를 넘을 경우 12개의 상품이 추가로 렌더링 됩니다.

### ProductDetail('/show')

<img width="480" alt="스크린샷 2022-05-17 오후 8 15 55" src="https://user-images.githubusercontent.com/78197196/168799228-da76540f-1a04-4f59-a246-61393a2769c9.png">

- 상품 메인에서 상품 하나를 클릭할 시 ('/show?clubId=id')의 형태로 이동하고, fetch를 통해 id와 일치하는 Data를 찾아와 상태에 저장합니다.
- 저장된 상태의 정보를 이용해서 상세 페이지의 내용을 렌더링합니다.
