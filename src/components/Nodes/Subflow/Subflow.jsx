import React from 'react';
import ReactFlow, {
    Handle,
    ReactFlowProvider,
} from "react-flow-renderer";

const Subflow = ({ data }) => {
    const { children, label } = data;

    const heightNode = children.length * 37
    return (
        <div style={{ border: "1px solid red", borderRadius: "4px" }}>
            <Handle type="target" />
            <div style={{ position: "relative" }}>
            <div style={{padding: 10}}>{label}</div>
                <div
                    style={{
                        width: "200px",
                        height: heightNode + "px",
                        padding: "10px",
                    }}
                >  
                    {(
                        <ReactFlowProvider>
                            <ReactFlow
                                maxZoom={4}
                                defaultPosition={[0, 0]}
                                zoomOnScroll={false}
                                translateExtent={[
                                    [0, 0],
                                    [0, 0]
                                ]}
                                nodeExtent={[
                                    [12.5, 10],
                                    [20, heightNode]
                                ]}
                                elements={children}
                            />
                        </ReactFlowProvider>
                    )}
                </div>
            </div>
            <Handle type="source" 
                position="bottom"/>
        </div>
    );
}

export default Subflow;