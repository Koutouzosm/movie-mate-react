import React from 'react';

const Div = (props) => {
    return (

                <div id="side-display" style={{overflowY: "scroll", maxHeight:"100vh" }}>
                    {props.children}
                </div>
            
    )
}

export default Div;