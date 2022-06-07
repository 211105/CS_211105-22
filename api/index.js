//funcionalidades de expres para levantar los proyectos
import express from 'express';

import { api } from '../config.js';

import user from './components/user/network.js';

const app = express();

//ROUTER
app.use('/api/user', user);

/*app.listen(api.port, () => {
    console.log(`servidor corriendoe en el puerto: ${api.port}`)
});*/
app.listen(api.port, () => {
    console.log(`servidor corriendoe en el puerto: ${api.port}`)
})