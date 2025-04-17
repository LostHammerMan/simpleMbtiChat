import React, { useState } from "react";

function Counter(){
    const [number, setNumber] = useState(0);
    /* 
        useState(0) React 가 0을 초기값으로 하는 상태 만들고, 반환값으로 [현재값, 값을 갱신하는 함수]
        형태의 배열을 돌려줌
    */

    /* 
        const numberState = userState(0);
        const number = numberState[0];
        const setNumber = numberState[1]; 를 배열 비구조화 할당을 통해 추출한 것
    */

    const onIncrease = () => {
        console.log('+1')
        setNumber(prevNumber => prevNumber +1);
    }

    const onDecrease = () => {
        console.log('-1')
        setNumber(prevNumber => prevNumber -1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );

}

export default Counter;