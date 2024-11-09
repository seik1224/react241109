import React from 'react'
import styleName from './step.module.css'; // 모듈 사용 : 이름 작명

const Step02 = () => {
    const blue = 'blue';

  // CSS 작성법
  return (
    <>
        {/* 1. 인라인방식 : camelCase 사용 */}
        <div style={{color:'red', backgroundColor : 'blue'}}>인라인방식</div>
        {/* 2. className 사용 */}
        <div className='blue'>App.css에 스타일 작성해주세요.</div>
        <div className={blue}>변수 사용한 CSS</div>
        {/* 3. CSS모듈 사용 */}
        <div className={styleName.red}>모듈 사용</div>
        {/* 4. Tailwind CSS 사용 : https://tailwindcss.com/docs/guides/create-react-app */}
        <div className='bg-red-500 text-white p-4 rounded-md'>Tailwind CSS 사용</div>
    </>
  )
}

export default Step02