import devSettings from "./devSettings";
import prodSettings from "./prodSettings";

let appSettings: any;

const NODE_ENV: string = process.env.NODE_ENV;

if ( NODE_ENV === "production" ) {
    appSettings = prodSettings;
} else {
    appSettings = devSettings;
}

export default appSettings;
