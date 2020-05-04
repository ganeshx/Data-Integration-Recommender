'use strict';

// create a network
var container = document.getElementById('mynetwork');

var options = {
  nodes: {
    shadow:{
      enabled: true,
      color: 'rgba(0,0,0,0.5)',
      size:10,
      x:5,
      y:5
    }
  },
  layout:{
    //improvedLayout: true,
    hierarchical: {
      enabled: true,
      nodeSpacing: 180,
      sortMethod: 'directed'
    }
  },
  physics: false,
  interaction:{
    hover:true
  },
  edges: {
    color: {
      color:'rgb(211, 211, 211, 0.1)',
      highlight:'blue',
      hover: 'rgb(35, 120, 249, 1)',
      inherit: 'from',
      opacity: 1
    }
  },
  width: '1800px'
};

let oldClickedNodeIds = [];
let oldClickedEdgeIds = [];


// network.on( 'deselectNode', function(properties) {

//   const previousIds = properties.previousSelection.nodes;
//   const connectedNodes = network.getConnectedNodes(clickedId)

//   connectedNodes.forEach(nodeId => {
//     nodes.update({id: nodeId, color: {background: "orange"}});
//   })
// //  network.redraw();
// });

//load data
fetch("http://localhost:1111/src/granted1.json")
  .then(response => response.json())
  .then(json => {
    render(json);
  });

  $("form").submit(function(e){
    e.preventDefault();
    $('#createModal').modal('toggle');
    let text = $('textarea#result').val();
    render(JSON.parse(text));
  });



var getColor = function(type) {
  var color;
  if(type === "ROLE"){
    color = "rgb(255, 232, 232, 1)";
  }
  else if(type === "USER"){
    color = "rgb(189, 243, 227, 1)";
  }
  return color;
}

var nodes = new vis.DataSet([]);

var render = function(json){
  json.forEach(element => {    
    if((element.SNOWFLAKE_OBJECT_TYPE === 'ROLE') && (element.GRANTED_TO_NAME !=="SECURITYADMIN")) {   
      try {
        nodes.add({
          id: element.GRANTED_TO_NAME, 
          label: element.GRANTED_TO_NAME, 
          shape: "box", 
          color: { 
            border: 'rgb(211, 211, 211, 1)', 
            background: getColor(element.GRANTED_TO_TYPE),
            highlight: 
            {
              border: 'rgb(211, 211, 211, 1)',
              background: 'yellow'
            },
            hover: {
              border: '#2B7CE9',
              background: 'lightblue'
            }
          },
          widthConstraint: { maximum: 150 },
          initialColor: getColor(element.GRANTED_TO_TYPE)
        });
      }
      catch(error) {
        console.log(error);
        //errors if there are duplicate items
      }
      try {
        nodes.add({
          id: element.OBJECT_NAME, 
          label: element.OBJECT_NAME, 
          shape: "box", 
          color: { 
            border: 'rgb(211, 211, 211, 1)', 
            background: getColor(element.SNOWFLAKE_OBJECT_TYPE),
            highlight: {
              border: '#2B7CE9',
              background: 'yellow'
            },
            hover: {
              border: '#2B7CE9',
              background: 'lightblue'
            }
          },
          widthConstraint: { maximum: 150 },
          initialColor: getColor(element.SNOWFLAKE_OBJECT_TYPE)
        });
      }
      catch(error) {
        console.log(error);
          //errors if there are duplicate items
      }
    }
    
  });

  let x = []
// create an array with edges

  json.forEach(element => {
    if((element.GRANTED_TO_NAME !=="SECURITYADMIN") && (element.PRIVILEGE !== 'OWNERSHIP')) {
      x.push({from: element.OBJECT_NAME, to: element.GRANTED_TO_NAME, arrows:'to'});
     // edges.add({from: element.OBJECT_NAME, to: element.GRANTED_TO_NAME, arrows:'to'})
    }
  })
  
  var edges = new vis.DataSet(x);

  // provide the data in the vis format
  var data = {
    nodes: nodes,
    edges: edges
  };
    // initialize network!
 var network = new vis.Network(container, data, options);

 network.moveTo({
  position: {x:1, y:1},
  scale: 3,
  offset: {x:5, y:5}
  })

 let getLinkedNodes = function(nodeId, nodeArray, edgeArray){ 
   if(nodeId) {
      let childEdges = network.getConnectedEdges(nodeId);
      let directedEdges = edges.get(childEdges)
          .filter((edge) => { return edge.to === nodeId })

      directedEdges.map(edge => {
        edge.color = 'blue';
      })
      directedEdges.forEach( edge => {
        edgeArray.push(edge)
      })

     edges.update(directedEdges);

    let childNodes = network.getConnectedNodes(nodeId, 'from');
    if(childNodes) {
      childNodes.forEach(child => {
        if(nodeArray.indexOf(child) === -1){
          nodeArray.push(child);
          nodes.update({id: child, color: {background: "rgb(113, 167, 247, 1)"}});
          getLinkedNodes(child, nodeArray, edgeArray);       
        }
      })
    }
   }
   return [nodeArray, edgeArray];
 }

 //click handler
  network.on( 'select', function(properties) {
  if(oldClickedNodeIds.length > 0 ) {
      let oldNodes = nodes.get(oldClickedNodeIds)
      oldNodes.forEach(node => {
        node.color = 
        { 
          border: 'rgb(211, 211, 211, 1)', 
          background: node.initialColor,
          highlight: 
          {
            border: '#2B7CE9',
            background: 'yellow'
          },
          hover: {
            border: '#2B7CE9',
            background: 'lightblue'
          }
        }
      })
      nodes.update(oldNodes);
  }
  if(oldClickedEdgeIds.length > 0 ) {
     oldClickedEdgeIds.forEach(edge => {
        edge.color = {
          color:'rgb(211, 211, 211, 0.1)',
          highlight:'blue',
          hover: 'blue',
          inherit: 'from',
          opacity: 0.5
        }
      })
      edges.update(oldClickedEdgeIds );
  }
  const clickedId = properties.nodes[0];
  const connectedNodes = getLinkedNodes(clickedId, [], []);

  oldClickedNodeIds = connectedNodes[0];
  oldClickedEdgeIds = connectedNodes[1];
 //network.redraw();
  });
  window.onresize = function() {network.fit();}

}
