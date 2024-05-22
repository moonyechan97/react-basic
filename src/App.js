import logo from './logo.svg';
import './App.css';
import BtnEventComponent from './components/BtnEventComponent';
import React, { useState } from 'react'; //리액트 내장 모듈에서 useState 객체 import
import KakaoMap from './components/ClassKakaoMap';
import { Link } from "react-router-dom"; //추가

function App() {
  const [state, setState] = useState({ count: 10 });
  const resetEvent = () => { //기존 값+10으로 리셋하기
    //state 변경 let count = state.count;
    setState(prevState => ({
      count: prevState.count + 10,
    }));
  }
  return (
    <div className="App">
      {/* <KakaoMap /> */}
      {/* <BtnEventComponent count={state.count} nodeValue={<h1>태그노드</h1>}>
        <h2>자식노드</h2>
      </BtnEventComponent>
      <button onClick={resetEvent}>{state.count + 10}으로 초기화!!</button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>리액트 앱의 구조를 확인합니다.
          <br />App.js가 자동으로 렌더링 됩니다.
        </h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/classkakaomap">
          <button id="btnHome">
            클래스형 카카오 맵
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;
