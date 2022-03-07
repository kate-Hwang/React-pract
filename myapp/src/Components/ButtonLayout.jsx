
import React from 'react';
// import styled from 'styled-components';


function ButtonLayout (){
    return(
        <>
        <h2>작은 버튼</h2>
        <div className='wrapper'>
            <button>취소</button>
            <button>취소</button>
            <button>취소</button>
            <button>취소</button>
        </div>

        <h2>중간 버튼</h2>
        <div className='wrapper'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>

        <h2>큰 버튼</h2>
        <div className='wrapper'>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
        
        </>
    )
}
export default ButtonLayout;