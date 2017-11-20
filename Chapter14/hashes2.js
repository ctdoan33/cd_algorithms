// Only listing changes to the data structure from HashMap
// Note that setSize method does not need to be changed: implementation using an SLL reassigns pointers instead of adding values
// However, the HashNode constructor does need to be changed for sets
function HashMap(capacity){
	this.multi=false; // change to true for multimap
	this.add=function(key, val, overwrite=true){
		var idx=mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner=this.table[idx];
			while(runner.next){
				if(runner.next.key==key&&!this.multi){
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
	this.find=function(key){
		var results=[];
		var runner=this.table(mod(key.hashCode(), this.capacity));
		while(runner){
			if(runner.key==key){
				if(this.multi){
					results.push(runner.val);
				}else{
					return runner.val;
				}
			}
			runner=runner.next;
		}
		if(this.multi){
			return results;
		}
		return null;
	}
	this.remove=function(key){
		var results=[];
		var idx=mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner=this.table[idx];
			if(runner.key==key){
				this.table[idx]=runner.next;
				if(this.multi){
					results.push(runner.val);
					runner=runner.next;
				}else{
					return runner.val;
				}
			}
			while(runner.next){
				if(runner.next.key==key){
					var temp=runner.next;
					runner.next=temp.next;
					if(this.multi){
						results.push(temp.val);
					}else{
						return temp.val;
					}
				}else{
					runner=runner.next;
				}
			}
		}
		return null;
	}
}
function HashSetNode(key){
	this.key=key;
	this.next=null;
}
function HashSet(capacity){
	this.multi=false; // change to true for multiset
	this.add=function(key, val){
		var idx=mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner=this.table[idx];
			while(runner.next){
				if(runner.next.key==key&&!this.multi){
					return;
				}
				runner=runner.next;
			}
			runner.next=new HashSetNode(key);
		}else{
			this.table[idx]=new HashSetNode(key);
		}
	}
	this.find=function(key){
		var numFound=0;
		var runner=this.table(mod(key.hashCode(), this.capacity));
		while(runner){
			if(runner.key==key){
				if(this.multi){
					numFound++;
				}else{
					return true;
				}
			}
			runner=runner.next;
		}
		if(this.multi){
			return numFound;
		}
		return false;
	}
	this.remove=function(key){
		var numFound=0;
		var idx=mod(key.hashCode(), this.capacity);
		if(this.table[idx]){
			var runner=this.table[idx];
			if(runner.key==key){
				this.table[idx]=runner.next;
				if(this.multi){
					numFound++;
					runner=runner.next;
				}else{
					return true;
				}
			}
			while(runner.next){
				if(runner.next.key==key){
					var temp=runner.next;
					runner.next=temp.next;
					if(this.multi){
						numFound++;
					}else{
						return true;
					}
				}else{
					runner=runner.next;
				}
			}
		}
		if(this.multi){
			return numFound;
		}
		return false;
	}
}