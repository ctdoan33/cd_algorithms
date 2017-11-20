// Note that this implementation of tries uses pushing to an array rather than charCodes
// See tries2 for use with charCodes
// To incorporate case-sensitivity, remove all the .toLowerCase() calls. Puncutation already incorporated
function TrieNode(val){
	this.val=val;
	this.children=[];
	this.isWord=false;
	this.insert=function(str, idx=0){
		if(str.length==idx){
			if(this.isWord){
				return false;
			}
			this.isWord=true;
			return true;
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i].val==str[idx].toLowerCase()){
				return this.children[i].insert(str, idx+1);
			}
		}
		var node=new TrieNode(str[idx].toLowerCase());
		this.children.push(node);
		return node.insert(str, idx+1);
	}
	this.contains=function(str, idx=0){
		if(str.length==idx){
			return this.isWord;
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i].val==str[idx].toLowerCase()){
				return this.children[i].contains(str, idx+1);
			}
		}
		return false;
	}
	this.first=function(str=""){
		if(this.isWord){
			return str;
		}
		var first;
		for(var i=0; i<this.children.length; i++){
			if(!first||this.children[i].val<first.val){
				first=this.children[i];
			}
		}
		if(first){
			return first.first(str+first.val);
		}
	}
	this.last=function(str=""){
		var last;
		for(var i=0; i<this.children.length; i++){
			if(!last||this.children[i].val<last.val){
				last=this.children[i];
			}
		}
		if(last){
			return last.last(str+last.val);
		}
		return str;
	}
	// size by counting nodes with values
	this.size=function(){
		var count=0;
		if(this.isWord){
			count++;
		}
		for(var i=0; i<this.children.length; i++){
			count+=this.children[i].size();
		}
		return count;
	}
	this.next=function(str, idx=0, subsequent="", find=true){
		if(!find&&this.isWord){
			return subsequent;
		}
		var next;
		for(var i=0; i<this.children.length; i++){
			if(find&&this.children[i].val==str[idx]){
				return this.children[i].next(str, idx+1, subsequent+str[idx], find);
			}else if((!next||this.children[i].val<next.val)&&((find&&this.children[i].val>str[idx])||!find)){
				next=this.children[i];
			}
		}
		if(next){
			return next.next(str, idx, subsequent+next.val, false);
		}
		return null;
	}
	this.autocomplete=function(str, maxResults, idx=0, auto=str, complete=[]){
		if(complete.length>=maxResults){
			return complete;
		}
		if(str.length>idx){
			for(var i=0; i<this.children.length; i++){
				if(this.children[i].val==str[idx]){
					this.children[i].autocomplete(str, maxResults, idx+1);
				}
			}
		}else{
			if(this.isWord){
				complete.push(auto);
			}
			for(var i=0; i<this.children.length; i++){
				this.children[i].autocomplete(str, maxResults, idx+1, auto+this.children[i].val, complete);
			}
		}
		return complete;
	} 
}
function TrieSet(){
	this.root=new TrieNode("");
	this.insert=function(str){
		return this.root.insert(str);
	}
	this.contains=function(str){
		return this.root.contains(str);
	}
	this.first=function(){
		return this.root.first();
	}
	this.last=function(){
		return this.root.last();
	}
	this.remove=function(str){
		var runner=this.root;
		var idx=0;
		var ancestor=this.root;
		var childidx=0;
		while(idx<str.length){
			var nomatch=true;
			for(var i=0; i<runner.children.length; i++){
				if(runner.children[i]==str[idx].toLowerCase()){
					nomatch=false;
					if(runner.children.length>1){
						ancestor=runner;
						childidx=i;
					}
					runner=runner.children[i];
					idx++;
				}
			}
			if(nomatch){
				return false;
			}
		}
		if(runner.children.length){
			runner.isWord=false;
		}else{
			ancestor.children.splice(childidx, 1);
		}
		return true;
	}
	// First valid way to implement size is through a function that counts all nodes that are words:
	this.size=function(){
		return this.root.size();
	}
	this.next=function(str){
		return this.root.next();
	}
	// Second valid way is to create a size variable that is incremented/decremented on a successful insertion/removal
	this.autocomplete=function(str, maxResults){
		return this.root.autocomplete(str, maxResults);
	}
}