const data = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start point of Car Building Flow' },
    position: { x: 150, y: 25 },
    style: { width: "200px", backgroundColor: "rgba(0, 65, 208, 0.25)", fontWeight: "bold"}
  },
  {
    id: '2',
    type: 'subflow',
    data: {
      label: "Car Body-Part Creating",
      children: [
        {
          id: "2-1",
          data: { label: <div>Roll of Steel</div> },
          position: { x: 0, y: 0 },
          draggable: false,
        },
        {
          id: "2-2",
          data: { label: <div>5000tons of press</div> },
          position: { x: 0, y: 70 },
          draggable: false,
        },
        {
          id: "2-3",
          data: { label: <div>Steel shape</div> },
          position: { x: 0, y: 140 },
          draggable: false,
        },
        {
          id: "2-4",
          data: { label: <div>Put on special dolly</div> },
          position: { x: 0, y: 210 },
          draggable: false,
        },
        {
          id: "2-5",
          data: { label: <div>Quality Check</div> },
          position: { x: 0, y: 280 },
          draggable: false,
        },
        { id: "e2-1", source: "2-1", target: "2-2", animated: true, type: "smart" },
        { id: "e2-2", source: "2-2", target: "2-3", animated: true, type: "smart" },
        { id: "e2-3", source: "2-3", target: "2-4", animated: true, type: "smart" },
        { id: "e2-4", source: "2-4", target: "2-5", animated: true, type: "smart" },
      ]
    },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'circleflow',
    data: {
      label: "Car Body Assembly",
      children: [
        {
          id: "3-1",
          data: { label: <div>Welding Robot</div> },
          position: { x: 120, y: 110 },
          draggable: false,
          type: 'main',
          style: {
            width: "150px",
          }
        },
        {
          id: "3-2",
          data: { label: <div>Floor</div> },
          position: { x: 0, y: 40 },
          draggable: false,
          type: "input",
          style: {
            width: "80px"
          }
        },
        {
          id: "3-3",
          data: { label: <div>Doors</div> },
          position: { x: 140, y: 0 },
          draggable: false,
          type: "input",
          style: {
            width: "80px"
          }
        },
        {
          id: "3-4",
          data: { label: <div>Roof</div> },
          position: { x: 260, y: 50 },
          draggable: false,
          type: "input",
          style: {
            width: "80px"
          }
        },
        {
          id: "3-5",
          data: { label: <div>Trunks</div> },
          position: { x: 0, y: 180 },
          draggable: false,
          sourcePosition: "top",
          type: "input",
          style: {
            width: "80px"
          }
        },
        {
          id: "3-6",
          data: { label: <div>Fender</div> },
          position: { x: 140, y: 230 },
          draggable: false,
          sourcePosition: "top",
          type: "input",
          style: {
            width: "80px"
          }
        },
        {
          id: "3-7",
          data: { label: <div>Panels</div> },
          position: { x: 260, y: 200 },
          draggable: false,
          sourcePosition: "top",
          type: "input",
          style: {
            width: "80px"
          }
        },
        { id: "e3-1", source: "3-2", target: "3-1", arrowHeadType: 'arrowclosed', targetHandle: 'a', },
        { id: "e3-2", source: "3-3", target: "3-1", arrowHeadType: 'arrowclosed', targetHandle: 'b', },
        { id: "e3-3", source: "3-5", target: "3-1", arrowHeadType: 'arrowclosed', targetHandle: 'c', },
        { id: "e3-4", source: "3-4", target: "3-1", arrowHeadType: 'arrowclosed', targetHandle: 'd', },
        { id: "e3-5", source: "3-6", target: "3-1", arrowHeadType: 'arrowclosed', targetHandle: 'e', },
        { id: "e3-6", source: "3-7", target: "3-1", arrowHeadType: 'arrowclosed', targetHandle: 'f', },


      ]
    },
    position: { x: 400, y: 125 },
  },
  {
    id: '4',
    data: { label: 'Quality Check' },
    position: { x: 400, y: 510 },
    sourcePosition: "right"
  },
  {
    id: '5',
    type: 'colorNode',
    targetPosition: "left",
    data: { label: 'Painting' },
    position: { x: 660, y: 490 },
    style: { border: '1px solid #777', padding: 10, width: "100px", borderRadius: "4px" },
  },
  {
    id: '6',
    data: { label: 'Adding other small parts (~4000 parts)' },
    position: { x: 850, y: 450 },
    targetPosition: "left",
    sourcePosition: "top",
  },
  {
    id: '7',
    data: { label: 'Wheels Adding' },
    position: { x: 880, y: 360 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: '8',
    data: { label: 'Assembly Check' },
    position: { x: 880, y: 280 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: '9',
    data: { label: 'Front and Rear Windows Installation' },
    position: { x: 880, y: 200 },
    targetPosition: "bottom",
    sourcePosition: "top",
  },
  {
    id: '10',
    data: { label: 'Outer Assembly COMPLETED' },
    position: { x: 880, y: 100 },
    targetPosition: "bottom",
    sourcePosition: "right",
    style: {
      backgroundColor: "rgba(117, 190, 218, 0.5)",
    }
  },
  {
    id: '11',
    type: 'subflow',    
    targetPosition: "bottom",
    sourcePosition: "top",
    position: { x: 1100, y: 110 },
    data: {
      label: 'Inside Assembly',
      children: [
        {
          id: "11-1",
          data: { label: <div>Engine</div> },
          position: { x: 0, y: 0 },
          draggable: false,
        },
        {
          id: "11-2",
          data: { label: <div>Brake</div> },
          position: { x: 0, y: 70 },
          draggable: false,
        },
        {
          id: "11-3",
          data: { label: <div>Oils</div> },
          position: { x: 0, y: 140 },
          draggable: false,
        },
        {
          id: "11-4",
          data: { label: <div>Seats</div> },
          position: { x: 0, y: 210 },
          draggable: false,
        },
        { id: "e11-1", source: "11-1", target: "11-2", animated: true, type: "smart" },
        { id: "e11-2", source: "11-2", target: "11-3", animated: true, type: "smart" },
        { id: "e11-3", source: "11-3", target: "11-4", animated: true, type: "smart" },
      ]
    }
  },
  {
    id: '12',
    type: 'subflow',    
    targetPosition: "bottom",
    sourcePosition: "top",
    position: { x: 1400, y: 110 },
    data: {
      label: 'Final Check',
      children: [
        {
          id: "12-1",
          data: { label: <div>Under the car</div> },
          position: { x: 0, y: 0 },
          draggable: false,
        },
        {
          id: "12-2",
          data: { label: <div>Car runs smoothly</div> },
          position: { x: 0, y: 70 },
          draggable: false,
        },
        {
          id: "12-3",
          data: { label: <div>No scratches or stains</div> },
          position: { x: 0, y: 140 },
          draggable: false,
        },
        { id: "e12-1", source: "12-1", target: "12-2", animated: true, type: "smart" },
        { id: "e12-2", source: "12-2", target: "12-3", animated: true, type: "smart" },
      ]
    }
  },
  {
    id: '13',
    type: 'output',
    data: { label: 'Finish point of Car Building Flow' },
    position: { x: 1400, y: 425 },
    style: { width: "200px", backgroundColor: "rgba(255, 0, 114, 0.25)", fontWeight: "bold"}
  },
  { id: 'e1', source: '1', target: '2', animated: true, type: "smart" },
  { id: 'e2', source: '2', target: '3', animated: true, type: "smart" },
  { id: 'e3', source: '3', target: '4', animated: true, type: "smart" },
  { id: 'e4', source: '4', target: '5', animated: true, type: "smart" },
  { id: 'e5', source: '5', target: '6', animated: true, type: "smart" },
  { id: 'e6', source: '6', target: '7', animated: true, type: "smart" },
  { id: 'e7', source: '7', target: '8', animated: true, type: "smart" },
  { id: 'e8', source: '8', target: '9', animated: true, type: "smart" },
  { id: 'e9', source: '9', target: '10', animated: true, type: "smart" },
  { id: 'e10', source: '10', target: '11', animated: true, type: "smart" },
  { id: 'e11', source: '11', target: '12', animated: true, type: "smart" },
  { id: 'e12', source: '12', target: '13', animated: true, type: "smart" },
];

export default data;