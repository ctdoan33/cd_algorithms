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
// All vertices reachable from given vertex (using adjacency list and vertices with .visited)
function allVertices(list, vertex, vertices=[]){
	if(vertex.visited){
		return vertices;
	}
	vertex.visited=true;
	vertices.push(vertex);
	for(var i=0; i<list[vertex].length; i++){
		if(!list[vertex][i].visited){
			allVertices(list, list[vertex][i], vertices);
		}
	}
	return vertices;
}