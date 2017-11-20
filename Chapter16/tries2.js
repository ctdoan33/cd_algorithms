// Implementation using charCode, full punctuation and case-sensitivity (matches book)
// There is a time-space tradeoff for using charCode values (full array of children for each node)
function TrieNode(val){
	this.val=null;
	this.children=[];
	this.insert=function(str, idx=0){
		if(str.length==idx){
			if(this.val){
				return false;
			}
			this.val=str;
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
			if(this.val){
				return true;
			}
			return false;
		}
		var cidx=str.charCodeAt(idx)-32;
		if(this.children[cidx]){
			return this.children[cidx].contains(str, idx+1);
		}
		return false;
	}
	this.first=function(){
		if(this.val){
			return this.val;
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i]){
				return this.children[i].first();
			}
		}
	}
	this.last=function(){
		for(var i=this.children.length-1; i>=0; i--){
			if(this.children[i]){
				return this.children[i].last();
			}
		}
		return this.val;
	}
	this.size=function(){
		var count=0;
		if(this.val){
			count++;
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i]){
				count+=this.children[i].size();
			}
		}
		return count;
	}
	this.next=function(str, idx=0, find=true){
		if(!find&&this.val){
			return this.val;
		}
		var cidx=0;
		if(find){
			cidx=str.charCodeAt(idx)-32;
			if(this.children[cidx]){
				return this.children[cidx].next(str, idx+1);
			}
		}
		for(var i=cidx; i<this.children.length; i++){
			if(this.children[i]){
				return this.children[i].next(str, idx+1, false);
			}
		}
		return null;
	}
	this.autocomplete=function(str, maxResults, idx=0, complete=[]){
		if(complete.length>=maxResults){
			return complete;
		}
		if(str.length>idx){
			var cidx=str.charCodeAt(idx)-32;
			if(this.children[cidx]){
				this.children[cidx].autocomplete(str, maxResults, idx+1);
			}
		}else{
			if(this.val){
				complete.push(this.val);
			}
			for(var i=0; i<this.children.length; i++){
				if(this.children[i]){
					this.children[i].autocomplete(str, maxResults, idx+1, complete);
				}
			}
		}
		return complete;
	} 
}
function TrieSet(){
	this.root=new TrieNode();
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
				return false;
			}
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i]){
				this.val=null;
				return true;
			}
		}
		ancestor.children[childidx]=undefined;
		return true;
	}
	this.size=function(){
		return this.root.size();
	}
	this.next=function(str){
		return this.root.next(str);
	}
	this.autocomplete=function(str, maxResults){
		return this.root.autocomplete(str, maxResults);
	}
}