// solutions assume graph representation is an adjacency list and vertex ids correspond to indices
function someoneOnTheInside1(graph, id, insiders){
	var hash={};
	for(var i=0; i<insiders.length; i++){
		hash[insiders[i]]=1;
	}
	for(var j=0; j<graph[id].length; j++){
		if(hash[graph[id][j]]){
			return graph[id][j];
		}
	}
	return false;
}
function someoneOnTheInside2(graph, id, insiders){
	var hash={};
	for(var i=0; i<insiders.length; i++){
		hash[insiders[i]]=1;
	}
	for(var j=0; j<graph[id].length; j++){
		var contact=graph[id][j];
		for(var k=0; k<graph[contact].length; k++){
			if(hash[graph[contact][k]]){
				return [contact, graph[contact][k]];
			}
		}
	}
	return false;
}
function vertexIsReachable1(graph, id1, id2, visited={id1:1}){
	for(var i=0; i<graph[id1].length; i++){
		var test=graph[id1][i];
		if(test==id2){
			return true;
		}else if(!visited[test]){
			visited[test]=1;
			var result=vertexIsReachable1(graph, test, id2, visited);
			if(result){
				return true;
			}
		}
	}
	return false;
}
function vertexIsReachable2(graph, id1, id2, visited={id1:1}, path=[id1]){
	for(var i=0; i<graph[id1].length; i++){
		var test=graph[id1][i];
		if(test==id2){
			path.push(id2);
			return path;
		}else if(!visited[test]){
			visited[test]=1;
			path.push(test);
			var result=vertexIsReachable2(graph, test, id2, visited, path);
			if(result){
				return result;
			}else{
				path.pop();
			}
		}
	}
	return false;
}
function allPaths(graph, id1, id2, visited={id1:1}, path=[id1], all=[]){
	for(var i=0; i<graph[id1].length; i++){
		var test=graph[id1][i];
		var testpath=path.slice();
		if(test==id2){
			testpath.push(id2);
			all.push(testpath);
		}else if(!visited[test]){
			var testvisited=Object.assign({}, visited);
			testvisited[test]=1;
			testpath.push(test);
			allPaths(graph, test, id2, testvisited, testpath, all);
		}
	}
	return all;
}
function shortestPath(graph, id1, id2){
	var visited={id1:1};
	var queue=new Queue();
	queue.enqueue([id1]);
	while(queue.front()){
		var path=queue.dequeue();
		var id=path[path.length-1];
		for(var i=0; i<graph[id].length; i++){
			var nextid=graph[id][i];
			if(nextid==id2){
				path.push(nextid);
				return path;
			}else if(!visited[nextid]){
				visited[nextid]=1;
				var newpath=path.slice();
				newpath.push(nextid);
				queue.enqueue(newpath);
			}
		}
	}
	return [];
}
function gimmeThreeSteps(graph, id){
	var visited={id:1};
	var ids=[id];
	var steps=3;
	var queue=new Queue();
	queue.enqueue([id]);
	var first=null;
	while(queue.front()){
		id=queue.dequeue();
		if(id==first){
			steps--;
			if(!steps){
				return ids;
			}
			first=null;
		}
		for(var i=0; i<graph[id].length; i++){
			var nextid=graph[id][i];
			if(!visited[nextid]){
				if(!first){
					first=nextid;
				}
				visited[nextid]=1;
				ids.push(nextid);
				queue.enqueue(nextid);
			}
		}
	}
	return ids;
}
function easyToGetThere(graph){
	var vertices={};
	for(var i=0; i<graph.length; i++){
		vertices[i]=-graph[i].length;
	}
	for(var j=0; j<graph.length; j++){
		var edges=graph[j];
		for(var k=0; k<edges.length; k++){
			vertices[edges[k]]++;
		}
	}
	var easy=[];
	for(vertex in vertices){
		if(vertices[vertex]>0){
			easy.push(Number(vertex));
		}
	}
	return easy;
}
function isDAG(graph){
	var checked={};
	var cyclic=false;
	for(var i=0; i<graph.length&&!cyclic; i++){
		if(!checked[i]){
			var visited={};
			check(i);
		}
	}
	if(cyclic){
		return false;
	}
	return true;
	function check(vertex){
		if(checked[vertex]){
			return;
		}else if(visited[vertex]){
			cyclic=true;
			return;
		}
		visited[vertex]=1;
		for(var i=0; i<graph[vertex].length&&!cyclic; i++){
			check(graph[vertex][i]);
		}
		checked[vertex]=1;
	}
}
function DAGToArray(graph){
	var checked={};
	var sorted=[];
	var idx=graph.length-1;
	var cyclic=false;
	for(var i=0; i<graph.length&&!cyclic; i++){
		if(!checked[i]){
			var visited={};
			check(i);
		}
	}
	if(cyclic){
		return [];
	}
	return sorted;
	function check(vertex){
		if(checked[vertex]){
			return;
		}else if(visited[vertex]){
			cyclic=true;
			return;
		}
		visited[vertex]=1;
		for(var i=0; i<graph[vertex].length&&!cyclic; i++){
			check(graph[vertex][i]);
		}
		checked[vertex]=1;
		sorted[idx]=vertex;
		idx--;
	}
}
