import React from 'react'

const Step07 = () => {
    // 반복문 

    const students = ['짱구', '짱아', '흰둥이'];
    const friendList = [];

    // 1. for문 사용
    for(let i=0; i<students.length; i++){
        friendList.push(<li key={i}>{students[i]}</li>)
    }

  return (
    <>
        {/* <ul>{friendList}</ul> */}
        {/* 2. map 사용법 */}
        <ul>
            {students.map((v, i)=>{
                <li key={i}>{v}</li>
            })}
        </ul>
    </>
  )
}

export default Step07