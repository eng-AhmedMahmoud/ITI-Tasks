var obj;
const linkedListObj ={
  data: [],
  isDuplicated: function (num) {
    obj = { val: num };
    if (this.data.includes(obj)) {
      throw new Error("Duplicated number");
    }
    return false;
  },
  push: function (num) {
    obj = { val: num };
    this.isDuplicated(obj.val);
    if(typeof obj.val !== "number"){
      throw new Error("Invalid number");
    }
    else if(this.data.length === 0){
      this.data.push(obj);
    }else if(this.data[this.data.length-1].val < obj.val){
      this.data.push(obj);
    }else{
      throw new Error("Invalid number");
    }
  },
  pop: function () {
    if(this.data.length === 0){
      throw new Error("Empty list");
    }
    else{
      this.data.pop();
    }
  },
  display: function () {
    console.log(this.data);
  },
  enqueue: function (num) {
    obj = { val: num };
    this.isDuplicated(num);
    if(typeof obj.val !== "number"){
      throw new Error("Invalid number");
    }
    else if(this.data.length === 0){
      this.data.push(obj);
    }else if(this.data[0].val > obj.val){
      this.data.unshift(obj);
    }else{
      throw new Error("Invalid number");
    }
  },
  dequeue: function () {
    if(this.data.length === 0){
      throw new Error("Empty list");
    }
    else{
      this.data.shift();
    }
  },
  insert: function (num, afterNum) {
    obj = { val: num };
    var obj2 = { val: afterNum };
    var data2 = [];
    for( i in this.data){
      data2.push(this.data[i].val)
    }

    this.isDuplicated(num);
    if(typeof obj.val !== "number" || typeof obj2.val !== "number"){
      throw new Error("Invalid number");
    }
    else if(this.data.length === 0){
      throw new Error("Empty list");
    }
    else if(data2.includes(obj2.val)){
      this.data.splice(data2.indexOf(obj2.val)+1,0,obj);
    }else{
      throw new Error("Invalid number");
    }
  },
  remove: function (num) {
    obj = { val: num };
    var data2 = [];
    for (i in this.data) {
      data2.push(this.data[i].val)
    }

    if(typeof obj.val !== "number"){
      throw new Error("Invalid number");
    }
    else if(this.data.length === 0){
      throw new Error("Empty list");
    }else if(data2.includes(obj.val)){
      this.data.splice(data2.indexOf(obj.val),1);
    }else{
      throw new Error("Invalid number");
    }
  }
}