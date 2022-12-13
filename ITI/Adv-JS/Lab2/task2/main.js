// getter setter object
function TemplateObj(id, location, address) {
  this.id = id;
  this.location = location;
  this.address = address;
  this.getSetGen = function () {
    for( let i in this){
      if(typeof this[i] !== "Function"){
        let getPropertyName = "get"+i;
        this[getPropertyName] = function(){
          return this[i];
        };
        let setPropertyName = "set"+i;
        this[setPropertyName] = function(value){
          this[i] = value;
        };
      };
    };
  };
};

// create object
let obj = new TemplateObj(1, "Cairo", "Egypt");
obj.getSetGen();
obj.setaddress("Canada");
console.log(obj.getaddress());

// new obj
let obj2 = {"id": 2, "location": "Alex", "address": "Egypt"};
obj.setaddress.bind(obj2, "USA")() 
console.log(obj.getaddress.call(obj2));