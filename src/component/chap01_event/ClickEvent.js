// rafce
import React from 'react'
import './style.css';

const ClickEvent = () => {
//     const $btn1 = document.getElementById('btn1');
//     $btn1.onclick = e => {
//         alert('클릭하셨네욤?');
//     };
const greeting = e => {
    alert('Have a nice day-')
}

const changeBox = e => {
    const $box = document.querySelector('.box');
    $box.style.background = 'skyblue';
    $box.style.width = '200px';
    $box.style.height = '200px';
};

  return (
    <>
        <button id='btn1' onClick={()=> alert('클릭하셨네욤?')}>클릭하세용용가리용용</button>
        <button id='btn2' onClick={greeting}>클릭, 두번째 이야기</button>
        <button id='btn3' onMouseOver={changeBox}>클릭 룰루 클릭</button>
        
        <div className='box'></div>
    </>
  );
}

export default ClickEvent