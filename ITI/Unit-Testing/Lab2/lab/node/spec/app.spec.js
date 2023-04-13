const request = require("request");
const async = require("async");

describe("test end point", () => {
  var server;
  var data = {};
  var postdata = {};

  //~ test more than one endpoint "bonus"  ===> async
  beforeAll((done) => {
    server = require("../app");

    async.waterfall([
      // Test GET / endpoint
      (cb) => {
        request.get("http://localhost:3000/", (error, res, body) => {
          data.status = res.statusCode;
          data.body = body;
          cb();
        });
      },
      // Test POST /new-endpoint endpoint
      (callback) => {
        request.post("http://localhost:3000/new-endpoint", { json: true }, (error, res, body) => {
          // Process response
          postdata.status = res.statusCode;
          postdata.body = body;
          callback();
        });
      }
    ], done);
  });

  it("test status code", () => {
    expect(data.status).toEqual(200);
  });
  it("test body", () => {
    expect(data.body).toEqual("Hello World!")
  })
  
  
  it("test status code", () => {
    expect(postdata.status).toEqual(200);
  });
  it("test body", () => {
    expect(postdata.body).toEqual("Hello World!")
  })
});
