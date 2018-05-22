import {Get, Controller} from '@nestjs/common';

const fs = require('fs');
let contador = 0;
@Controller()
export class AppController {
    @Get()
    root() {
        console.log('Entro al metodo');
        contador++;
        let datosArchivo;
        let html = fs.readFileSync(
            __dirname + '/html/Index.html',
            'utf8'
        );
        html = html.replace('{{variable}}',contador);
        return html; // contenido o un error
    }
}
