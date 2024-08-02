import React, { useRef } from 'react';
import './App.css';
import { DiagramComponent, SymbolPaletteComponent, NodeModel, ConnectorModel } from '@syncfusion/ej2-react-diagrams';

const App = () => {
  const diagramRef = useRef(null);

  const flowShapes : NodeModel[] = [
    {
      id: 'Terminator',
      shape: {
        type: "Flow",
        shape: "Terminator",
      },
      annotations: [{content: "Terminator"}]
    },
    {
      id: 'Process',
      shape: {
        type: "Flow",
        shape: "Process",
      },
      annotations: [{content: "Process"}]
    },
    {
      id: 'Display',
      shape: {
        type: "Flow",
        shape: "Display",
      },
      annotations: [{content: "Display"}]
    }

  ];

  const basicShapes : NodeModel[] = [
    {
      id: "Rectangle",
      shape: {
        type: "Basic",
        shape: "Rectangle",
      },
      annotations: [{content: "Basic Rectangle"}]
    },
    {
      id: "Ellipse",
      shape: {
        type: "Basic",
        shape: "Ellipse",
      },
      annotations: [{content: "Basic ellipse"}]
    },
    {
      id: "Diamond",
      shape: {
        type: "Basic",
        shape: "Diamond",
      },
      annotations: [{content: "Basic Diamond"}]
    },
    {
      id: "Triangle",
      shape: {
        type: "Basic",
        shape: "Triangle",
      },
      annotations: [{content: "Basic Triangle"}]
    },
    {
      id: "Paralellogram",
      shape: {
        type: "Basic",
        shape: "Parallelogram",
      },
      annotations: [{content: "Basic Paralellogram"}]
    },

  ];

  const connectorSymbols : ConnectorModel[]= [
    {
      id: "Ortho-connector",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 100, y: 100 },
    },{
      id: "Straight-connector",
      type: "Straight",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 100, y: 100 },
    },

  ];

  return (
    <div className="container">
      <div>
        <SymbolPaletteComponent
          id="symbolpalette"
          width={'300px'}
          height={'700px'}
          palettes={[
            {
              id: 'flow',
              title: 'Flow Shapes',
              symbols: flowShapes
              
            },
            {
              id: 'basic',
              title: 'Basic Shapes',
              symbols: basicShapes,
              expanded: false
            },
            {
              id: 'connectors',
              title: 'Connectors',
              symbols: connectorSymbols
            }
          ]}
          symbolHeight={60}
          symbolWidth={60}
          enableSearch={true}
          //symbolPreview={{ height: 150, width: 150, offset: { x: 15, y: 10 } }}
        />
      </div>
      <div>
        <DiagramComponent
          id="diagram"
          width={'1102px'}
          height={'702px'}
          ref={diagramRef}
        />
      </div>
    </div>
  );
}

export default App;
