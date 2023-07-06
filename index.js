import express from "express";console.log("A");
import cors from "cors";
//import { loadBackend_agroclimatic } from "./APIs/cadiz-agroclimatic-informations-stats.js";
//import { loadBackend_professionalorganisations_v1 } from "./APIs/professionalorganisations-stats-v1.js";
//import { loadBackend_professionalorganisations_v2 } from "./APIs/professionalorganisations-stats-v2.js";
//import { loadBackend_agroclimaticV2 } from "./APIs/v2/cadiz-agroclimatic-informations-stats.js";
import { loadBackend_civilwarandalusian } from "./APIs/civilwarandalusian-stats.js";
import { loadBackend_civilwarandalusianV2 } from "./APIs/v2/civilwarandalusian-stats.js";
console.log("B");
import { handler } from "./frontend/build/handler.js";
const app = express();
app.use(cors());
app.use(express.json());
console.log("c");
/**
 * Constants
 */

const PORT = 8080;


var ruta = "/proxy";
var apiServerHost = "https://sos2223-12.appspot.com/api/v1/agroclimatic";

app.use(ruta, function(req, res) {
    var url = apiServerHost + req.url;
    req.pipe(request(url)).pipe(res);
});


/**
 * Load APIs
 * */

//loadBackend_professionalorganisations_v1(app);
//loadBackend_professionalorganisations_v2(app);
//loadBackend_agroclimatic(app);
//loadBackend_agroclimaticV2(app);
loadBackend_civilwarandalusianV2(app);
loadBackend_civilwarandalusian(app);

app.use(handler);
console.log("D");
/**
 * Initialization
 */

app.listen(PORT);
console.log("E");