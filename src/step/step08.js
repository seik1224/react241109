import React from 'react'
import bg from '../img/logo192.png';

const Step08 = () => {
  return (
    <>
        {/* 1. public 폴더에 있는 이미지 불러오기 */}
        <img src="/logo192.png" alt='리액트' />

        {/* 2. 권장사항 */}
        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt='리액트' />

        {/* 3. CSS 이미지 파일 불러오기 */}
        <div className='bg-main'></div>

        {/* 4. src에서 이미지 불러오기 */}
        <img src={bg} alt='이미지' />

        {/* 5 */}
        <div
            className='w-40 h-40 bg-cover'
            style ={{
                backgroundImage:`url(${process.env.PUBLIC_URL}/logo192.png)`
            }}
        ></div>
    </>
  )
}

export default Step08