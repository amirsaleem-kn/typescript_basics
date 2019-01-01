import app from "./app";

// start the express server
const server = app.listen( app.get("port"), () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ app.get("port") }` );
} );

export default server;
