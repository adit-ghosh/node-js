const server = require('./server');

test('Basic Node Server Test',()=>{
    expect(server()).toBe(true);
})

console.log("This is a test file for node-2, node servers");