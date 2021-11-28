import React, {useState} from "react";
import ReactFlow from "react-flow-renderer";
import data from "../../data/data"
import Subflow from "../Nodes/Subflow"
import { SmartEdge, SmartEdgeProvider } from '@tisoap/react-flow-smart-edge';

const CarBuildingFlow = () => {
    const [elements, setElements] = useState(data)

    const nodeTypes = {
        subflow: Subflow,
      };

    return (
        <div style={{width: "100%", height: "100vh"}}>
            <SmartEdgeProvider options={{ debounceTime: 0, nodePadding: 15, gridRatio: 2 }}>
            <ReactFlow elements={elements} nodeTypes={nodeTypes} edgeTypes={{smart: SmartEdge}}/>
            </SmartEdgeProvider>
        </div>
    )
}

export default CarBuildingFlow;