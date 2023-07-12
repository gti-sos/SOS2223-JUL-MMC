import express from "express"; console.log("a")
import cors from "cors";
import request from "request";
//import { loadBackend_agroclimatic } from "./APIs/cadiz-agroclimatic-informations-stats.js";
//import { loadBackend_professionalorganisations_v1 } from "./APIs/professionalorganisations-stats-v1.js";
//import { loadBackend_professionalorganisations_v2 } from "./APIs/professionalorganisations-stats-v2.js";
//import { loadBackend_agroclimaticV2 } from "./APIs/v2/cadiz-agroclimatic-informations-stats.js";
import { loadBackend_civilwarandalusian } from "./APIs/civilwarandalusian-stats.js";
import { loadBackend_civilwarandalusianV2 } from "./APIs/v2/civilwarandalusian-stats.js";

import { handler } from "./frontend/build/handler.js";
const app = express();
app.use(cors());
app.use(express.json());



const PORT = 8081;

    
    
let otraApi = 'https://cat-fact.herokuapp.com/facts';
var ruta = "/agroclimatizaciones";
    	app.use(ruta,function(req, res) {
    
        let url = otraApi + req.url;
        console.log('piped: proxy' + req.url);
        console.log(url);
        req.pipe(request(url)).pipe(res);
    });


console.log("b")
loadBackend_civilwarandalusianV2(app);
loadBackend_civilwarandalusian(app);

app.use(handler);

/**
 * Initialization
 */
console.log("c");
app.listen(PORT);
console.log("d")