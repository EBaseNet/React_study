import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = '리액트 글내용';
    let [글제목,b] = useState( ['리액트 글제목', '리액트 글제목1' , '리액트 글제목2']);

    let [좋아요 , 좋아요변경] = useState(0);

    let [logo, setLogo] = useState('ReactBlog');

    // 그냥 변수랑 state는 차이점이 있음 
    // 변수는 일반 변수가 변경되면 html에 자동으로 반영되지않음
    // state는 갑자기 변경되면 state는 자동으로 html이 자동으로 재렌더링함

    function 함수(){

            console.log(1);
    }


  return (
      <div className="App">

          <div className="black-nav">

              <h4 style={{fontSize: '17px'}}> ReactBlog </h4>

          </div>

          <div className="list">
              <h4> {글제목[0]} <span onClick={ () => { 좋아요변경(좋아요+1)} }> 👍 </span> {좋아요} </h4>
              <p> 2월 17일 발행</p>

          </div>

          <div className="list">
              <h4> {글제목[1]} </h4>
              <p> 2월 17일 발행</p>

          </div>


          <div className="list">
              <h4> {글제목[2]} </h4>
              <p> 2월 17일 발행</p>

          </div>


          <h4> {post} </h4>

      </div>
  );
}

export default App;
