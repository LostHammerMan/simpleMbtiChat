import React from "react";
import Hello from "./api/hello";
import './App.css'
import Hello2 from "./api/hello2";
import Wrapper from "./api/Wrapper";
import Counter from "./api/Counter";

function App() {
  const style = {
    color: 'aqua',
    backgroundColor: 'green',
    fontSize: 20,
    padding: '1rem'
  }

  const name = 'Lee'; // 리턴에 선언문이 들어가면 안됨!!!!

  // <> </> : fragment
  return(
    <Wrapper>
    {/* return 에서 주석문 */}
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <hr />
      <Hello2 name='망치' color='white' isSpecial={true}/>
      <Hello2 color='white' isSpecial/> {/* props 이름만 작성하고 값 생략하면 true */}
      <Counter />
      
    </Wrapper>

      
      
      
  );
}

export default App
