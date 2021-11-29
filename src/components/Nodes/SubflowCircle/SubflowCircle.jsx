import React from 'react';
import ReactFlow, {
    Handle,
    ReactFlowProvider,
} from "react-flow-renderer";
import SubflowMainNode from './SubflowMainNode';

const SubflowCircle = ({ data }) => {
    const { children, label } = data;
    const nodeTypes = {
        main: SubflowMainNode
      };

    const heightNode = children.length * 22
    const widthNode = 390
    return (
        <div style={{ border: "1px solid red", borderRadius: "4px" }}>
            <Handle type="target" />
            <div style={{ position: "relative" }}>
                <div style={{ padding: 10 }}>{label}</div>
                <div
                    style={{
                        width: widthNode,
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
                                nodeTypes={nodeTypes}
                                translateExtent={[
                                    [0, 0],
                                    [0, 0]
                                ]}
                                nodeExtent={[
                                    [12.5, 10],
                                    [widthNode, heightNode]
                                ]}
                                elements={children}
                            />
                        </ReactFlowProvider>
                    )}
                </div>
            </div>
            <Handle type="source" position="bottom" />
        </div>
    );
}

export default SubflowCircle;