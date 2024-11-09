import React from 'react';

const Step01 = () => {
    const title = "React";

    return(
        // JSX : javascript안에서 HTML을 작성할 수 있도록 해주는 리액트 문법
        // 하나의 부모 요소로 감싸야함
        <>
            {/* 1. class 대신 className 사용 */}
            <div className="container">안녕!</div>

            {/* 2. 하나로만 되어있는 태그는 꼭 닫아줘야함 */}
            <img></img>
            <img />

            {/* 3. {} 중괄호 안에서는 자바스크립트 문법을 사용할 수 있음 */}
            <h1>{1+1}</h1>
            <h1>{title}</h1>
        </>
    )
}

export default Step01;