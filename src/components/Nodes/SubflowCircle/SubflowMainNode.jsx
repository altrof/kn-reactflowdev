import React from 'react';

import { Handle } from 'react-flow-renderer';

const SubflowMainNode = ({data}) => {
    return (
        <div style={{ border: "1px solid red", borderRadius: "4px" }}>
            <div style={{padding: 15}}>
                {data.label}
            </div>
            <Handle
                type="target"
                position="top"
                id="a"
                style={{ left: 50, background: "red" }}
            />
            <Handle
                type="target"
                position="top"
                id="b"
                style={{ right: 50, left: "auto", background: "red" }}
            />
            <Handle
                type="target"
                position="left"
                id="c"
                style={{ top: 25, bottom: "auto", background: "red" }}
            />
            <Handle
                type="target"
                position="right"
                id="d"
                style={{ top: 25, bottom: "auto", background: "red" }}
            />
            <Handle
                type="target"
                position="bottom"
                id="e"
                style={{ left: 50, background: "red" }}
            />
            <Handle
                type="target"
                position="bottom"
                id="f"
                style={{ right: 50, left: "auto", background: "red" }}
            />
            
        </div>
    );
}

export default SubflowMainNode;