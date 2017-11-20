function TrieMapNode(){
	this.key=null;
	this.val=null;
	this.children=[];
	this.insert=function(key, val, idx=0){
		if(key.length==idx){
			var temp=this.val;
			this.key=key;
			this.val=val;
			return temp;
		}
		var cidx=key.charCodeAt(idx)-32;
		if(!this.children[cidx]){
			var node=new TrieMapNode();
			this.children[cidx]=node;
		}
		return this.children[cidx].insert(key, val, idx+1);
	}
	this.contains=function(key, idx=0){
		if(key.length==idx){
			return this.val;
		}
		var cidx=key.charCodeAt(idx)-32;
		if(this.children[cidx]){
			return this.children[cidx].contains(key, idx+1);
		}
		return null;
	}
	this.first=function(){
		if(this.val){
			return [this.key, this.val];
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
		return [this.key, this.val];
	}
	this.next=function(key, idx=0, find=true){
		if(!find&&this.val){
			return this.val;
		}
		var cidx=0;
		if(find){
			cidx=key.charCodeAt(idx)-32;
			if(this.children[cidx]){
				return this.children[cidx].next(key, idx+1);
			}
		}
		for(var i=cidx; i<this.children.length; i++){
			if(this.children[i]){
				return this.children[i].next(key, idx+1, false);
			}
		}
		return null;
	}
}
function TrieMap(){
	this.root=new TrieMapNode();
	this.insert=function(key){
		return this.root.insert(key);
	}
	this.contains=function(key){
		return this.root.contains(key);
	}
	this.first=function(){
		return this.root.first();
	}
	this.last=function(){
		return this.root.last();
	}
	this.remove=function(key){
		var runner=this.root;
		var idx=0;
		var ancestor=this.root;
		var childidx=key.charCodeAt(idx)-32;
		while(idx<key.length){
			var cidx=key.charCodeAt(idx)-32;
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
				this.key=null;
				this.val=null;
				return true;
			}
		}
		ancestor.children[childidx]=undefined;
		return true;
	}
	this.next=function(key){
		return this.root.next(key);
	}
}