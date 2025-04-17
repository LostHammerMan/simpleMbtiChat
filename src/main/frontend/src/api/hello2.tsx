import React from "react";

function Hello2({color, name, isSpecial}){
    return <div style={{color}}>
    {isSpecial ? <b>*</b> : null}
    안녕하세요 {name} 님
    {isSpecial ? <b>*</b> : null} {/* {isSpecial && <b>*</b> 로도 표현 가능 */}
    {/*  */}
    </div>

}

Hello2.defaultProps = {
    name : '이름없음'
}

export default Hello2;