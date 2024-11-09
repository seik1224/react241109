import React, { useState } from 'react'

const Step05 = () => {
    /*
        [ useState ]
        상태값을 저장할 때 사용
        변수대신 사용하는 이유? 상태값이 변경되면 그 상태값을 사용하는 html부분만 재렌더링
    
        const [값, 함수] = useState(초기값);
        함수(값) : 새로운 상태값으로 변경해주는 함수
    */
    const [count, setCount] = useState(0); // let [a,b] = [10,20];

    const [like, setLike] = useState([0,0,0]);
    console.log(like);
  return (
    <>
        <div>
            <p>현재 카운트 : {count}</p>
            <button onClick={()=>setCount(count+1)}>카운트증가</button>
        </div>
        <div>
            {/* 
                useState 상태값이 변경되어야 컴포넌트가 재렌더링
                배열은 참조형데이터이기 때문에 상태값이 변경되지 않음

                [ 해결방법 ]
                배열을 복사하여 새로운 배열을 생성,
                그 배열을 상태값으로 설정
            */}
            <p>현재 좋아요 : {like[0]}</p>
            <button onClick={()=>{
                const copy = [...like];
                copy[0] = copy[0] + 1;
                setLike(copy);
            }}>좋아요 증가</button>

            <p>현재 좋아요 : {like[1]}</p>
            <p>현재 좋아요 : {like[2]}</p>
        </div>
    </>
  )
}

export default Step05