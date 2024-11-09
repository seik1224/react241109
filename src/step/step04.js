import React from 'react'


const Step04 = (props) => {
    /*
        [ props ]
        - 컴포넌트에 전달되는 데이터
        - 오브젝트 형태로 전달
        - 부모 컴포넌트에서 값을 자식 컴포넌트에게 전송해줄 때 사용
        - 일반 변수, 문자, 숫자, 함수 전송가능
    */
   console.log(props);
   
  return (
    <>
        <div className={props.red}>{props.title}</div>
        <div>{props.content}</div>
        <div>{props.name}</div>
    </>
  )
}

export default Step04