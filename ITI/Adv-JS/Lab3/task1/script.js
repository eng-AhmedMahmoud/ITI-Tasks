function list(start,end,step){
    Object.defineProperty(this, "start", {
    value: start,
        writable: false,
        configurable: false,
        enumerable: false

    })
    Object.defineProperty(this, "end", {
    value: end,
        writable: false,
        configurable: false,
        enumerable: false
    })
    Object.defineProperty(this, "step", {
    value: step,
        writable: false,
        configurable: false,
        enumerable: false
    })
    var mylist = [];

    var fill = function(){
        for(var i = this.start ; i < this.end ; i+=this.step){
            mylist.push(i);
        }
    }.bind(this);
    fill();

    Object.defineProperty(this,"append",{
        value: append = function(data){
            let length= mylist.length;
            if(mylist.length==0){
                mylist.push(data);
            }
            if(mylist[length-1]>=data || mylist[length-1]+step!=data) { throw "can't push"}
            else if(mylist[length-1]<= data){
                if(mylist[length-1] == data){
                    throw "this value inserted before";
                }
                else{
                    mylist.push(data);
                }
            }
            return data;
        },
        writable: false,
        configurable: false,
        enumerable: false,
        delete : false

    })

    Object.defineProperty(this,"prepend",{
        value:prepend = function(data){
            if(data>=mylist[0] || mylist[0]-step!=data) { throw "can't push"}
            if(mylist.length ==0){
            mylist.unshift(data);
            }
            else if(mylist[0]>=data){
                if(mylist[0] == data){
                    throw "can not add ";
                }
                else{
                mylist.unshift(data);
                }
            }
            return data;
        },
        writable: false,
        configurable: false,
        enumerable: false,
        delete : false

    })
    Object.defineProperty(this,"popVal",{
        value:popVal = function(){
            if(mylist.length == 0){
                throw "No data to pop"
            }else{
            mylist.pop();
            }
        },
        writable: false,
        configurable: false,
        enumerable: false,
        delete : false

    })
    Object.defineProperty(this,"dequeueVal",{
        value:dequeueVal= function(){
            if(mylist.length == 0){
                throw "No data to pop";
            }else{
            mylist.shift();
        }
        },
        writable: false,
        configurable: false,
        enumerable: false,
        delete : false
})

    this.get = function(){
        return mylist;
        }
    }

    list.prototype.toString=function(){
        console.log("List : "+ this.get());
    }


var list1 = new list(2,10,2);
list1.append(10);
list1.prepend(0);
list1.popVal();
list1.dequeueVal()
list1.toString();