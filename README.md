- **State 사용 이유**
  - 일반 변수는 변수가 변경되면 HTML에 자동으로 반영되지 않음
  - `useState` 사용 시, 변경된 state는 자동으로 HTML이 재렌더링

- **State 변경**
  - <span onClick={ () => { 함수 }} 처럼 onClick 안에는 함수를 넣어야함
  -  let [a , b] = useState(0);   이런식으로 State 생성 시 변수를 배열로 생성가능함  a는 변수 역할하고 b는 생성된 State 함수를 변경하는 함수
  -  명명은 state 변경함수 라고 함 



