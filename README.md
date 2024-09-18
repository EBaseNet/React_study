- **State 사용 이유**
  - 일반 변수는 변수가 변경되면 HTML에 자동으로 반영되지 않음
  - `useState` 사용 시, 변경된 state는 자동으로 HTML이 재렌더링

- **State 변경**
  - <span onClick={ () => { 함수 }} 처럼 onClick 안에는 함수를 넣어야함 ( 함수에 부등호 는 넣지못함 )
  -  let [a , b] = useState(0);   이런식으로 State 생성 시 변수를 배열로 생성가능함  a는 변수 역할하고 b는 생성된 State 함수를 변경하는 함수
  -  명명은 state 변경함수 라고 함


- **State 변경함수 특징**
  - 기존 State == 신규 State의 경우 변경안해줌
  -  자바스크립트의 [ array / object ] 동작 방식을 따라감 - reference data type
  -  이를테면 let arr = [1,2,3] 인 경우 array/object를 담은 변수엔 화살표만 저장됨
     ram 에  [1,2,3] 을 저장하고 let arr는 [1,2,3]이 어디 저장되어있는지만 알려줌
  - 그렇기 때문에 state 변경 시 array의 경우 arr[0] = '바꿀코드' 이렇게 바꿔도 state함수가 감지못함
  - 따라서 let copy = [... 글제목];  이런식으로 활용하면 변경감지됨
  - 즉 state 가 array / object 라면 독립적인 카피본을 만들어서 수정해야함


- **Component 컴포넌트**
  - function 만들고 return() 안에 html 담아서  <함수명> </함수명> 으로 사용
  - 마찬가지로 병렬적으로 div 생성 불가 (하나만)
  - 가령 div를 합쳐야하고, 불필요한 div가 생성된다면 Fragment <> </> 를 사용
  -  컴포넌트 만들면 좋은 경우 = 반복적인 html을 축약할때, 큰 페이지, 자주변경되는 것들
  - 다만 state를 가져다쓸때, 문제가 생김 ( state는 app함수에 있으므로 가져다쓸수없음)
