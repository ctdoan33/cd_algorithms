// Graph A
[[A,B]]
[[ 0, 1],
 [-1, 0]]
[[B],[]]
// Graph B
[[A,B],[B,A],[B,C],[C,A]]
[[ 0, 1,-1],
 [ 1, 0, 1],
 [ 1,-1, 0]]
[[B],[A,C],[A]]
// Graph C
[[A,B],[A,C],[A,H],[B,D],[B,E],[C,A],[C,D],[D,E],[F,E],[G,F],[G,H],[H,F],[H,G]]
[[ 0, 1, 1,-1,-1,-1,-1, 1],
 [-1, 0,-1, 1, 1,-1,-1,-1],
 [ 1,-1, 0, 1,-1,-1,-1,-1],
 [-1,-1,-1, 0, 1,-1,-1,-1],
 [-1,-1,-1,-1, 0,-1,-1,-1],
 [-1,-1,-1,-1, 1, 0,-1,-1],
 [-1,-1,-1,-1,-1, 1, 0, 1],
 [-1,-1,-1,-1,-1,-1, 1, 0]]
[[B,C,H],[D,E],[A,D],[E],[],[E],[F,H],[F,G]]

// with only edge lists, we cannot know whether a given vertex exists (a vertex may not be part of an edge)
// adjacency maps and lists do allow us to know if a vertex exists
function Vertex(value){
	this.val=value;
}
// vertList may be sparse in this implementation, but keeps vertIds stable
// edge list will have weights at index 2
function ELGraph(){
	this.vertList=[];
	this.graph=[];
	this.addVertex=function(value){
		var vertex=new Vertex(value);
		for(var i=0; i<=this.vertList.length; i++){
			if(!this.vertList[i]){
				this.vertList[i]=vertex;
				return i;
			}
		}
	}
	this.removeVertex=function(vertId){
		if(this.vertList[vertId]){
			this.removeEdges(vertId);
			this.vertList[vertId]=undefined;
			return true;
		}
		return false;
	}
	this.getVertexValue=function(vertId){
		if(this.vertList[vertId]){
			return this.vertList[vertId].val;
		}
	}
	this.setVertexValue=function(vertId, value){
		if(this.vertList[vertId]){
			this.vertList[vertId].val=value;
			return true;
		}
		return false;
	}
	this.addEdge=function(vertId1, vertId2, value){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			this.graph.push([vertId1, vertId2, value]);
			return true;
		}
		return false;
	}
	this.removeEdges=function(vertId){
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId||this.graph[i][1]==vertId){
				this.graph.splice(i, 1);
			}
		}
	}
	this.removeEdge=function(vertId1, vertId2){
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId1&&this.graph[i][1]==vertId2){
				this.graph.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	this.getEdgeValue=function(vertId1, vertId2){
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId1&&this.graph[i][1]==vertId2){
				return this.graph[i][2];
			}
		}
	}
	this.setEdgeValue=function(vertId1, vertId2, value){
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId1&&this.graph[i][1]==vertId2){
				this.graph[i][2]=value;
				return true;
			}
		}
		return false;
	}
	this.adjacent=function(vertId1, vertId2){
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId1&&this.graph[i][1]==vertId2){
				return true;
			}
		}
		return false;
	}
	this.neighbors=function(vertId){
		var adjacent=[];
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId){
				adjacent.push(this.graph[i][1]);
			}
		}
		return adjacent;
	}
}
// in this implementation, the adjacency map will also be sparse to keep vertIds stable
function AMGraph(){
	this.vertList=[];
	this.graph=[];
	this.addVertex=function(value){
		var vertex=new Vertex(value);
		for(var i=0; i<=this.vertList.length; i++){
			if(!this.vertList[i]){
				this.vertList[i]=vertex;
				break;
			}
		}
		this.graph[i]=[];
		for(var j=0; j<this.vertList.length; j++){
			if(this.vertList[j]){
				this.graph[i][j]=-1;
				this.graph[j][i]=-1;
			}
		}
		this.graph[i][i]=0;
		return i;
	}
	this.removeVertex=function(vertId){
		if(this.vertList[vertId]){
			this.vertList[vertId]=undefined;
			for(var i=0; i<this.vertList.length; i++){
				this.graph[vertId][i]=undefined;
				this.graph[i][vertId]=undefined;
			}
			return true;
		}
		return false;
	}
	this.getVertexValue=function(vertId){
		if(this.vertList[vertId]){
			return this.vertList[vertId].val;
		}
	}
	this.setVertexValue=function(vertId, value){
		if(this.vertList[vertId]){
			this.vertList[vertId].val=value;
			return true;
		}
		return false;
	}
	this.addEdge=function(vertId1, vertId2, value){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			this.graph[vertId1][vertId2]=value;
			return true;
		}
		return false;
	}
	this.removeEdges=function(vertId){
		if(this.vertList[vertId]){
			for(var i=0; i<this.vertList.length; i++){
				if(i!=vertId){
					this.graph[vertId][i]=-1;
					this.graph[i][vertId]=-1;
				}
			}
		}
	}
	this.removeEdge=function(vertId1, vertId2){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			this.graph[vertId1][vertId2]=-1;
			return true;
		}
		return false;
	}
	this.getEdgeValue=function(vertId1, vertId2){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			return this.graph[vertId1][vertId2];
		}
	}
	this.setEdgeValue=function(vertId1, vertId2, value){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			this.graph[vertId1][vertId2]=value;
			return true;
		}
		return false;
	}
	this.adjacent=function(vertId1, vertId2){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			return this.graph[vertId1][vertId2]>0;
		}
		return false;
	}
	this.neighbors=function(vertId){
		if(this.vertList[vertId]){
			var adjacent=[];
			for(var i=0; i<this.vertList.length; i++){
				if(this.graph[vertId][i]>0){
					adjacent.push(i);
				}
			}
			return adjacent;
		}
	}
}
// similar to AMGraph, the adjacency list can also be sparse
// also, the list will have another nested array to track edge weights (instead of an edge class)
function ALGraph(){
	this.vertList=[];
	this.graph=[];
	this.addVertex=function(value){
		var vertex=new Vertex(value);
		for(var i=0; i<=this.vertList.length; i++){
			if(!this.vertList[i]){
				this.vertList[i]=vertex;
				this.graph[i]=[];
				return i;
			}
		}
	}
	this.removeVertex=function(vertId){
		if(this.vertList[vertId]){
			this.removeEdges(vertId);
			this.graph[vertId]=undefined;
			this.vertList[vertId]=undefined;
			return true;
		}
		return false;
	}
	this.getVertexValue=function(vertId){
		if(this.vertList[vertId]){
			return this.vertList[vertId].val;
		}
	}
	this.setVertexValue=function(vertId, value){
		if(this.vertList[vertId]){
			this.vertList[vertId].val=value;
			return true;
		}
		return false;
	}
	this.addEdge=function(vertId1, vertId2, value){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			this.graph[vertId1].push([vertId2, value]);
			return true;
		}
		return false;
	}
	this.removeEdges=function(vertId){
		if(this.vertList[vertId]){
			for(var i=this.vertList.length-1; i>=0; i--){
				if(this.vertList[i]){
					for(var j=this.graph[i].length-1; j>=0; j--){
						if(this.graph[i][j][0]==vertId){
							this.graph[i].splice(j, 1);
						}
					}
				}
			}
			this.graph[vertId]=[];
		}
	}
	this.removeEdge=function(vertId1, vertId2){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			for(var i=this.graph[vertId1].length-1; i>=0; i--){
				if(this.graph[vertId1][i][0]==vertId2){
					this.graph[vertId1].splice(i, 1);
					return true;
				}
			}
		}
		return false;
	}
	this.getEdgeValue=function(vertId1, vertId2){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			for(var i=this.graph[vertId1].length-1; i>=0; i--){
				if(this.graph[vertId1][i][0]==vertId2){
					return this.graph[vertId1][i][1];
				}
			}
		}
	}
	this.setEdgeValue=function(vertId1, vertId2, value){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			for(var i=this.graph[vertId1].length-1; i>=0; i--){
				if(this.graph[vertId1][i][0]==vertId2){
					this.graph[vertId1][i][1]=value;
					return true;
				}
			}
		}
		return false;
	}
	this.adjacent=function(vertId1, vertId2){
		if(this.vertList[vertId1]&&this.vertList[vertId2]){
			for(var i=this.graph[vertId1].length-1; i>=0; i--){
				if(this.graph[vertId1][i][0]==vertId2){
					return true;
				}
			}
		}
		return false;
	}
	this.neighbors=function(vertId){
		if(this.vertList[vertId]){
			var adjacent=[];
			for(var i=this.graph[vertId].length-1; i>=0; i--){
				adjacent.push(this.graph[vertId][i][0]);
			}
			return adjacent;
		}
	}
}