import React, {useState} from 'react'
import PropTypes from 'prop-types'

const NickName = props => {

    // useState 훅은 배열을 리턴하는데
    // 0번에는 상태변수값, 1번에는 상태변수값을 변경하는 setter 함수가 들어있음
    const statement = useState('뿡뿡이');
    const nickName = statement[0];
    const setNickName = statement[1];

    console.log('statement:', statement);

    // let nickName = '뿡뿡이';

    const changeNickName = e => {
        console.log('changeNickName, call~');
        // nickName = '척척박사';
        setNickName('척척박사');     // 클로저를 통해 setter로 이름을 변경하기
        console.log('nickName:', nickName);
    }
  return (
    <>
        <h1>Hello~😏 {nickName}</h1>
        <button className='btn' onClick={changeNickName}>척척박사💯</button>
        <button className='btn' onClick={()=> setNickName('쩝쩝박사')}>쩝쩝박사💯</button>
    </>
    )
}

NickName.propTypes = {}

export default NickName