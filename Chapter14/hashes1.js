String.prototype.hashCode=function(){
	var hash=0;
	if(this.length==0) return hash;
	for(i=0; i<this.length; i++){
		char=this.charCodeAt(i);
		hash=((hash<<5)-hash)+char;
		hash &= hash;
	}
	return hash;
}
function mod(input, div){
	return (input%div+div)%div;
}
function HashNode(key, val){
	this.key=key;
	this.val=val;
	this.next=null;
}
function HashMap(capacity){
	this.capacity=capacity;
	this.table=[];
	this.add=function(key, val, overwrite=true){
		var idx=mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner=this.table[idx];
			while(runner.next){
				if(runner.next.key==key){
					if(overwite){
						runner.next.val=val;
					}
					return;
				}
				runner=runner.next;
			}
			runner.next=new HashNode(key, val);
		}else{
			this.table[idx]=new HashNode(key, val);
		}
	}
	this.isEmpty=function(){
		for(var i=0; i<this.table.length; i++){
			if(this.table[i]){
				return false;
			}
		}
		return true;
	}
	this.find=function(key){
		var runner=this.table(mod(key.hashCode(), this.capacity));
		while(runner){
			if(runner.key==key){
				return runner.val;
			}
			runner=runner.next;
		}
		return null;
	}
	this.remove=function(key){
		var idx=mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner=this.table[idx];
			if(runner.key==key){
				this.table[idx]=runner.next;
				return runner.val;
			}
			while(runner.next){
				if(runner.next.key==key){
					var temp=runner.next;
					runner.next=temp.next;
					return temp.val;
				}else{
					runner=runner.next;
				}
			}
		}
		return null;
	}
	this.loadFactor=function(){
		var elements=0;
		for(var i=0; i<this.table.length; i++){
			var runner=this.table[i];
			while(runner){
				elements++;
				runner=runner.next;
			}
		}
		return elements/this.capacity;
	}
	this.grow=function(){
		this.capacity=Math.trunc(this.capacity*1.5);
		var length=this.table.length;
		for(var i=0; i<length; i++){
			var runner=this.table[i];
			this.table[i]=undefined;
			while(runner){
				var temp=runner;
				runner=runner.next;
				var idx=mod(runner.key.hashCode(), this.capacity);
				temp.next=this.table[idx];
				this.table[idx]=temp;
			}
		}
	}
	this.setSize=function(newCap){
		var length=this.table.length;
		for(var i=0; i<length; i++){
			var runner=this.table[i];
			this.table[i]=undefined;
			while(runner){
				var temp=runner;
				runner=runner.next;
				var idx=mod(runner.key.hashCode(), newCap);
				temp.next=this.table[idx];
				this.table[idx]=temp;
			}
		}
		this.table.length=newCap;
		this.capacity=newCap;
	}
	this.addMap=function(HashMap, overwrite=true){
		for(var i=0; i<HashMap.table.length; i++){
			var runner=this.table[i];
			while(runner){
				this.add(runner.key, runner.val, overwrite);
			}
		}
	}
	this.selectKeys=function(keyArray){
		for(var i=0; i<this.table.length; i++){
			while(this.table[i]&&!keyArray.contains(this.table[i].key)){
				this.table[i]=this.table[i].next;
			}
			if(this.table[i]){
				var runner=this.table[i];
				while(runner.next){
					if(!keyArray.contains(runner.key)){
						runner.next=runner.next.next;
					}else{
						runner=runner.next;
					}
				}
			}
		}
	}
}