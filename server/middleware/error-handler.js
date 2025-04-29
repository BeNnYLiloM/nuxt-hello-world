export default defineEventHandler(async (event) => {
  // const originalSetHeader = event.node.res.setHeader;
  // const originalWriteHead = event.node.res.writeHead;
  
  // event.node.res.setHeader = function (name, value) {
  //   return originalSetHeader.call(this, name, value);
  // };
  
  // event.node.res.writeHead = function (statusCode, ...args) {
  //   if (statusCode === 404 || statusCode >= 500) {
  //     originalSetHeader.call(this, 'Cache-Control', 'no-cache, no-store, must-revalidate');
  //   }
  //   return originalWriteHead.call(this, statusCode, ...args);
  // };
})