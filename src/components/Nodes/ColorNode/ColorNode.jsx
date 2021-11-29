import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
        return (
            <div>
                <Handle
                    type="target"
                    position="left"
                    style={{ background: '#555' }}
                />
                <div style={{paddingBottom: "5px"}}>
                    {data.label}
                </div>
                <input
                    className="nodrag"
                    type="color"
                />
                <Handle
                    type="source"
                    position="right"
                    id="a"
                    style={{ top: "50%", background: '#555' }}
                    isConnectable={isConnectable}
                />
            </div>
        );
    });