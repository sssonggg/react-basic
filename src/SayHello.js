import React from "react";


// 컴포넌트
function SayHello(props) {
    return(
      <div>
        <p>안녕?😁</p>
        {props.children}
        <br/>
        <span>👯‍♀️방가왕만두둠칫</span>
      </div>

    );
}

export default SayHello;