const data = [
    {
      id: '1',
      type: 'input', // input node
      data: { label: 'Car Building Flow' },
      position: { x: 250, y: 25 },
    },
    // default node
    {
      id: '2',
      type: 'subflow',
      data: {
        label: "Part Creating",
        children: [
          {
            id: "2-1",
            data: { label: <div>Metall list</div> },
            position: { x: 0, y: 0 },
            draggable: false,
            style: {
            }
          },
          {
            id: "2-2",
            data: { label: <div>5000tons of press</div> },
            position: { x: 0, y: 75 },
            draggable: false,
            style: {
              
            }
          },
          {
            id: "2-3",
            data: { label: <div>Special dolly form</div> },
            position: { x: 0, y: 200 },
            draggable: false,
            style: {
              
            }
          },
          { id: "e2", source: "2-1", target: "2-2", animated: true, type: "smart" },
          { id: "e2", source: "2-2", target: "2-3", animated: true, type: "smart" }
        ]
      },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      data: { label: 'Output Node' },
      position: { x: 250, y: 450 },
    },
    // animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true, type: "smart" },
    { id: 'e2-3', source: '2', target: '3', type: "smart" },
  ];

export default data;