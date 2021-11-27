import React from 'react';
import ReactFlow, {
    Handle,
    Position,
    NodeProps,
    ReactFlowProvider,
    useStoreState
} from "react-flow-renderer";

const Subflow = ({ data }) => {
    const { children, label } = data;
    //const [, , z] = useStoreState((state) => state.transform);
    return (
        <div style={{ border: "1px solid red", borderRadius: "4px" }}>
            <Handle type="target" position={Position.Top} />
            <div style={{ position: "relative" }}>
            <div style={{padding: 10}}>{label}</div>
                <div
                    style={{
                        width: "200px",
                        height: "200px",
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
                                    [0, 5],
                                    [0, 0]
                                ]}
                                nodeExtent={[
                                    [12.5, 10],
                                    [20, 150]
                                ]}
                                elements={children}
                            />
                        </ReactFlowProvider>
                    )}
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

export default Subflow;