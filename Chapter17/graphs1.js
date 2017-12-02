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
function ELGraph(){
	this.vertList=[];
	this.graph=[];
	this.addVertex=function(value){
		var vertex=new Vertex(value);
		for(var i=0; i<this.vertList.length; i++){
			if(!this.vertList[i]){
				this.vertList[i]=vertex;
				return i;
			}
		}
		this.vertList.push(vertex);
		return i;
	}
	this.removeVertex=function(vertId){
		if(this.vertList[vertId]){
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
				this.graph.splice(i, 0);
			}
		}
	}
	this.removeEdge=function(vertId1, vertId2){
		for(var i=this.graph.length-1; i>=0; i--){
			if(this.graph[i][0]==vertId1&&this.graph[i][1]==vertId2){
				this.graph.splice(i, 0);
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