String.prototype.hashCode = function(){
	var hash = 0;
	if(this.length == 0) return hash;
	for(i=0; i<this.length; i++){
		var char = this.charCodeAt(i);
		hash = ((hash<<5)-hash) + char;
		hash &= hash;
	}
	return hash;
}
function mod(input, div){
	return (input%div + div) % div;
}
function HashNode(key, val){
	this.key = key;
	this.val = val;
	this.next = null;
}
function HashMap(capacity){
	this.capacity = capacity;
	this.table = [];
	this.add = function(key, val){
		var idx = mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runne r= this.table[idx];
			while(runner.next){
				if(runner.next.key == key){
					runner.next.val = val;
					return this;
				}
				runner = runner.next;
			}
			runner.next = new HashNode(key, val);
		}else{
			this.table[idx] = new HashNode(key, val);
		}
	}
	this.isEmpty = function(){
		for(var i=0; i<this.table.length; i++){
			if(this.table[i]){
				return false;
			}
		}
		return true;
	}
	this.find = function(key){
		var runner = this.table(mod(key.hashCode(), this.capacity));
		while(runner){
			if(runner.key == key){
				return runner.val;
			}
			runner = runner.next;
		}
		return null;
	}
	this.remove = function(key){
		var idx = mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner = this.table[idx];
			if(runner.key == key){
				this.table[idx] = runner.next;
				return runner.val;
			}
			while(runner.next){
				if(runner.next.key == key){
					var temp = runner.next;
					runner.next = temp.next;
					temp.next = null;
					return temp.val;
				}
				runner = runner.next;
			}
		}
		return null;
	}
	this.loadFactor = function(){
		var elements = 0;
		for(var i=0; i<this.table.length; i++){
			var runner = this.table[i];
			while(runner){
				elements++;
				runner = runner.next;
			}
		}
		return elements/this.capacity;
	}
	this.grow = function(){
		this.capacity = Math.trunc(this.capacity*1.5);
		var length = this.table.length;
		for(var i=0; i<length; i++){
			var runner = this.table[i];
			this.table[i] = undefined;
			while(runner){
				var temp = runner;
				runner = runner.next;
				var idx = mod(runner.key.hashCode(), this.capacity);
				temp.next = this.table[idx];
				this.table[idx] = temp;
			}
		}
	}
}
function TrieNode(val){
	this.val = val;
	this.children = [];
	this.isWord = false;
	this.insert = function(str, idx=0){
		if(str.length == idx){
			var result = !this.isWord;
			this.isWord = true;
			return result;
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i].val == str[idx].toLowerCase()){
				return this.children[i].insert(str, idx+1);
			}
		}
		var node = new TrieNode(str[idx].toLowerCase());
		this.children.push(node);
		return node.insert(str, idx+1);
	}
	this.contains = function(str, idx=0){
		if(str.length == idx){
			return this.isWord;
		}
		for(var i=0; i<this.children.length; i++){
			if(this.children[i].val == str[idx].toLowerCase()){
				return this.children[i].contains(str, idx+1);
			}
		}
		return false;
	}
	this.autocomplete = function(str, idx=0, auto=str, complete=[]){
		if(str.length > idx){
			for(var i=0; i<this.children.length; i++){
				if(this.children[i].val == str[idx]){
					this.children[i].autocomplete(str, idx+1);
					break;
				}
			}
		}else{
			if(this.isWord){
				complete.push(auto);
			}
			for(var i=0; i<this.children.length; i++){
				this.children[i].autocomplete(str, idx+1, auto+this.children[i].val, complete);
			}
		}
		return complete;
	} 
}
function TrieSet(){
	this.root = new TrieNode("");
	this.insert = function(str){
		return this.root.insert(str);
	}
	this.contains = function(str){
		return this.root.contains(str);
	}
	this.autocomplete = function(str){
		return this.root.autocomplete(str);
	}
}