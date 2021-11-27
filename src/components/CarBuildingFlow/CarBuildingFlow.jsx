import React, {useState} from "react";
import ReactFlow from "react-flow-renderer";
import data from "../../data/data"
import Subflow from "../Nodes/Subflow"

const CarBuildingFlow = () => {
    const [elements, setElements] = useState(data)

    const nodeTypes = {
        subflow: Subflow,
      };

    return (
        <div style={{width: "100%", height: "100vh"}}>
            <ReactFlow elements={elements} nodeTypes={nodeTypes} />
        </div>
    )
}

export default CarBuildingFlow;