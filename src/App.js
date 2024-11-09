import logo from './logo.svg';
import './App.css';
import Step01 from './step/step01';
import Step02 from './step/step02';
import Step03 from './step/step03';
import Step04 from './step/step04';
import Step05 from './step/step05';
import Step06 from './step/step06';
import Step07 from './step/step07';
import Step08 from './step/step08';

function App() {
  return (
    <>
      {/* 컴포넌트 : 재사용 가능한 코드 조각(버튼, 텍스트, 이미지 등등...) */}
      {/* <Comp /> */}
      {/* <Comp /> */}
      {/* <Step01 /> */}
      {/* <Step02 /> */}
      {/* <Step03 /> */}
      {/* <Step04 title='게시판 제목' content='게시판내용' name='작성자' red='red' /> */}
      {/* <Step05 /> */}
      {/* <Step06 /> */}
      {/* <Step07 /> */}
      <Step08 />
    </>
  );
}

// 작명시 영어대문자로 시작
// 함수표현식, 함수선언식 둘 다 가능

function Comp() {
  return <div>컴포넌트</div>
}

export default App;
