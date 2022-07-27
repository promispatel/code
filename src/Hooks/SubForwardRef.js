import React, { forwardRef } from 'react';

function SubForward(props,ref){

    return(
        <div>
        <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(SubForward);