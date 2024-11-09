import React from 'react'

const Step06 = () => {
    // 조건문

    const isLoggedIn = true;

    // 1. if문 사용
    /*
    if(isLoggedIn){
        return <h1>로그인되었습니다.</h1>
    } else {
        return <h1>로그인하세요.</h1>
    }
    */

  return (
    <>
        {/* 2. 삼항연산자 사용 */}
        {isLoggedIn ? <h1>로그인되었습니다.</h1> : <h1>로그인하세요.</h1>}

        {/* 3. && 연산자 사용 */}
        {isLoggedIn && <h1>로그인되었습니다.</h1>}
    </>
  )
}

export default Step06