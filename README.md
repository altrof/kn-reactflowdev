# Kuehne+Nagel Autumn 2021 Internship [React]

- url sandbox -

Main goal: Create a flow of car building from zero with React Flow Library.

> My actions: 

1. Learned the library react-flow-renderer. (https://reactflow.dev/)
   https://github.com/wbkd/react-flow

2. Created a component "CarBuildingFlow", where I used ReactFlow.

3. Unfortunately this library doesnt support a subflow (nested node) for children, but in the future it will be added.
    (Topic about this: https://github.com/wbkd/react-flow/issues/1377)
   So I decided to create it by myself. In folder Nodes, I created a component for custom node "Subflow".

4. Also I used a community package for this flow "React Flow Smart Edge".
   This will help to avoid crossing the node with other nodes.
   https://github.com/tisoap/react-flow-smart-edge


![alt text](https://image.prntscr.com/image/C82W5cZoTgag-dKu5PkDBw.png)