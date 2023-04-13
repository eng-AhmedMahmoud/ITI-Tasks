const { MathUtils, obj, sayHelloWorld } = require("../index");

describe("test MathUtils function", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils sum", () => {
    expect(math1.sum(2, 5)).toEqual(7);
    expect(math1.sum(2, 5)).toBe(7);
    expect(math1.sum(2, 5)).toEqual(jasmine.any(Number));
  });
  
});

describe("study diff btn toEqual and toBe", () => {
  var user = { id: 1 };
  var a = { x: user };
  var b = { x: user };
  it("", () => {
    expect(a).toEqual(b);
    //  expect(a).toBe(b)  //? test value with ref
  });
});

describe("study spyOn", () => {
  it("", () => {
    spyOn(obj, "hello");
    sayHelloWorld(obj);
    expect(obj.hello).toHaveBeenCalled();
    expect(obj.hello).toHaveBeenCalledTimes(1);
    expect(obj.hello).toHaveBeenCalledWith(3);
    expect(obj.hello).toHaveBeenCalledOnceWith(3);
  });
});

describe("create custom matcher", () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeLarge: function () {
        return {
          compare: function (actual) {
            let result = {};
            result.pass = actual > 5000;
            result.message = "num must be > 5000";
            return result;
          },
        };
      },
    });
  });
  it("", () => {
    expect(60000).toBeLarge();
  });
});

describe("delay in jasmine ", () => {
  beforeAll(() => {
    jasmine.clock().install();
  });
  afterAll(() => {
    jasmine.clock().uninstall();
  });
  it("", () => {
    var x = 5;
    setTimeout(() => {
      x = 10;
    }, 3000);
    jasmine.clock().tick(6000);
    expect(x).toEqual(10);
  });
});
