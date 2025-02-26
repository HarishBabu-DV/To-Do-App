const jsonServer=require("json-server")

const todoAppServer=jsonServer.create();

const router=jsonServer.router("db.json")

const middleware=jsonServer.defaults();

todoAppServer.use(middleware);

todoAppServer.use(router)

const PORT=4000 || process.env

todoAppServer.listen(PORT,()=>console.log("server is running on port ",PORT));
