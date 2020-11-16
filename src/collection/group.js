let elesfn = ({

  /**
 * Get whether the element is a node.
 * @memberof nodes
 * @namespace nodes.isNode
 */
  isNode: function(){
    return this.group() === 'nodes';
  },

  /**
 * Get whether the element is an edge.
 * @memberof nodes
 * @namespace nodes.isEdge
 */
  isEdge: function(){
    return this.group() === 'edges';
  },

  /**
 * Get whether the edge is a loop (i.e. same source and target).
 * @memberof nodes
 * @namespace nodes.isLoop
 */
  isLoop: function(){
    return this.isEdge() && this.source()[0] === this.target()[0];
  },

  /**
 * Get whether the edge is simple (i.e. different source and target).
 * @memberof nodes
 * @namespace nodes.isSimple
 */
  isSimple: function(){
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },

  /**
 * Get the group string that defines the type of the element.
 * @memberof nodes
 * @namespace nodes.group
 */
  group: function(){
    let ele = this[0];

    if( ele ){
      return ele._private.group;
    }
  }
});


export default elesfn;
