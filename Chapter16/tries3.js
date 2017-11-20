// These are implemented with charCodes (and only specified methods)
function TrieMultiNode(val){
	this.val=null;
	this.count=0;
	this.children=[];
	this.insert=function(str, idx=0){
		if(str.length==idx){
			this.val=str;
			count++;
			return true;
		}
		var cidx=str.charCodeAt(idx)-32;
		if(!this.children[cidx]){
			var node=new TrieNode();
			this.children[cidx]=node;
		}
		return this.children[cidx].insert(str, idx+1);
	}
	this.contains=function(str, idx=0){
		if(str.length==idx){
			return this.count;
		}
		var cidx=str.charCodeAt(idx)-32;
		if(this.children[cidx]){
			return this.children[cidx].contains(str, idx+1);
		}
		return this.count;
	}
	this.size=function(){
		var count=this.count;
		for(var i=0; i<this.children.length; i++){
			if(this.children[i]){
				count+=this.children[i].size();
			}
		}
		return count;
	}
	this.autocomplete=function(str, maxResults, idx=0, complete=[], counts=[]){
		if(str.length>idx){
			var cidx=str.charCodeAt(idx)-32;
			if(this.children[cidx]){
				this.children[cidx].autocomplete(str, maxResults, idx+1);
			}
		}else{
			if(this.val){
				var insert=false;
				for(var i=0; i<complete.length; i++){
					if(this.count>counts[i]){
						complete.splice(i, 0, this.val);
						counts.splice(i, 0, this.count);
						insert=true;
						break;
					}
				}
				if(!insert){
					complete.push(this.val);
					counts.push(this.count);
				}
				if(complete.length>maxResults){
					complete.pop();
					counts.pop();
				}
			}
			for(var i=0; i<this.children.length; i++){
				if(this.children[i]){
					this.children[i].autocomplete(str, maxResults, idx+1, complete, counts);
				}
			}
		}
		return complete;
	} 
}
function TrieMultiSet(){
	this.root=new TrieNode();
	this.insert=function(str){
		return this.root.insert(str);
	}
	this.contains=function(str){
		return this.root.contains(str);
	}
	this.remove=function(str){
		var runner=this.root;
		var idx=0;
		var ancestor=this.root;
		var childidx=str.charCodeAt(idx)-32;
		while(idx<str.length){
			var cidx=str.charCodeAt(idx)-32;
			if(this.children[cidx]){
				for(var i=0; i<this.children.length; i++){
					if(this.children[i]&&i!=cidx){
						ancestor=runner;
						childidx=cidx;
						break;
					}
				}
				runner=this.children[cidx];
				idx++;
			}else{
				return 0;
			}
		}
		if(this.count>1){
			return this.count--;
		}else if(this.count==1){
			for(var i=0; i<this.children.length; i++){
				if(this.children[i]){
					this.val=null;
					return this.count--;
				}
			}
			ancestor.children[childidx]=undefined;
			return 1;
		}
		return 0;
	}
	this.size=function(){
		return this.root.size();
	}
	this.autocomplete=function(str, maxResults){
		return this.root.autocomplete(str, maxResults);
	}
}