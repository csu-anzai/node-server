const request = require("supertest")
const server = require("../index")

describe("GET /", () => {
  it("respond with hello world", async () => { 
    let responce = null
    
    try{
      //navigate to root and check the the response is "hello world"
      responce = await request(server).get("/");

    } catch (e) {
        console.log(e.message)
    }

    expect(responce.status).toBe(200);
    expect(responce.text).toContain("Hello World!");
  });
});