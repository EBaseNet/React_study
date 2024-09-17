import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = '강남 우동 맛집';
    let [글제목,b] = useState( '남자 코트 추천');

    // 그냥 변수랑 state는 차이점이 있음 
    // 변수는 일반 변수가 변경되면 html에 자동으로 반영되지않음
    // state는 갑자기 변경되면 state는 자동으로 html이 자동으로 재렌더링함



  return (
    <div className="App">

        <div className="black-nav">

            <h4 style={{ fontSize :'17px'}}> 블로그임 </h4>

        </div>

        <div className="list">
            <h4> {글제목} </h4>
            <p> 2월 17일 발행</p>



        </div>

        <h4> {post} </h4>

    </div>
  );
}

export default App;
