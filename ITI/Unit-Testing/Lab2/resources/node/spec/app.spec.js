const request = require("request");

describe("test end point", () => {
  var server;
  var data = {};

  //~ test more than one endpoint "bonus"  ===> async
   beforeAll((done) => {
    server = require("../app");
    request.get("http://localhost:3000/", (error, res, body) => {
      data.status = res.statusCode;
      data.body = body;
      done()
    });
  });
  afterAll(() => {
    server.close();
  });
  it("test status code", () => {
    expect(data.status).toEqual(200);
  });
  it("test body",()=>{
    expect(data.body).toEqual("hello world")
  })
});
