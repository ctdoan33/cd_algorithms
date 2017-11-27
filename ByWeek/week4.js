// basic constructor functions for nodes and singly linked lists
function Node(val){
    this.val=val;
    this.next=null;
}
function SSL(){
    this.head=null;
}
// creating a singly linked list of 3 nodes
var mylist = SSL();
mylist.head = new Node(1);
mylist.head.next = new Node(2);
mylist.head.next.next = new Node(3);
// or
var mylist = SSL();
var node1 = Node(1);
var node2 = Node(2);
var node3 = Node(3);
mylist.head = node1;
node1.next = node2;
node2.next = node3;

function SSL(){
    this.head = null;
    this.addFront = function(node){
        node.next = this.head;
        this.head = node;
    }
    this.contains = function(val){
        var runner = this.head;
        while(runner){
            if(runner.val===val){
                return true;
            }else{
                runner=runner.next;
            }
        }
        return false;
    }
    this.removeFront = function(){
        this.head = this.head.next;
        return this.head;
    }
    this.length = function(){
		var runner = this.head;
		var count = 0;
		while(runner){
			runner = runner.next;
			count++;
		}
		return count;
    }
    this.max = function(){
		if(!this.head){
			return;
		}
        var runner = this.head;
        var max = runner.val;
        while(runner.next){
            runner = runner.next;
            if(runner.val > max){
                max = runner.val;
            }
        }
        return max;
    }
    this.average = function(){
		if(!this.head){
			return;
		}
        var runner = this.head;
        var sum = 0;
        var count = 0;
        while(runner){
            sum += runner.val;
            count++;
            runner = runner.next;
        }
        return sum/count;
    }
    this.minToFront = function(){
		if(!this.head){
			return;
		}
        var runner = this.head;
        var min = runner;
        var prev = null;
        while(runner.next){
            if(runner.next.val < min.val){
                min = runner.next;
                prev = runner;
            }
            runner = runner.next;
        }
        if(prev){
            prev.next = min.next;
            min.next = this.head;
            this.head = min;
        }
    }
    this.addBack = function(value){
        var runner = this.head;
        if(runner){
            while(runner.next){
                runner = runner.next;
            }
            runner.next = new Node(value);
        }else{
            this.head = new Node(value);
        }
    }
    this.moveMaxToBack = function(){
		if(!this.head){
			return;
		}
        var runner = this.head;
        var max = runner;
        var prev = null;
        while(runner.next){
            if(runner.next.val > max.val){
                max = runner.next;
                prev = runner;
            }
            runner = runner.next;
        }
        runner.next = max;
        if(prev){
            prev.next = max.next;
        }else{
            this.head = max.next;
        }
        max.next = null;
    }
    this.removeNegatives = function(){
        while(this.head && this.head.val < 0){
            this.head = this.head.next;
		}
		if(!this.head){
			return;
		}
		var runner=this.head;
        while(runner.next){
            if(runner.next.val < 0){
                runner.next = runner.next.next;
            }else{
                runner = runner.next;
            }
        }
    }
}
