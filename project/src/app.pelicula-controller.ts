import {Controller, Get, HttpCode, Param, Post, Req, Res} from "@nestjs/common";

@Controller('Pelicula')
export class AppPeliculaController {

    peliculas: Pelicula [] = [];

    @Get('mostrarCartelera')
    mostrarCartelera() {
        return this.peliculas
    }

    @Post('mostrarCartelera/:nombre/:estreno')
    @HttpCode(203)
    añadirCartelera(@Param() parametros) {
        this.peliculas.
        push(
            new Pelicula(
                parametros.nombre,
                parametros.estreno));

        return this.peliculas
    }

    @Post('mostrarCartelera')
    @HttpCode(203)
    añadirCarteleraConQueryParameters(
        @Req() req,
        @Res() res) {
        const parametroQuery = req.query;

        this.peliculas.
        push(
            new Pelicula(
                parametroQuery.nombre,
                parametroQuery.estreno));

        return res.send(this.peliculas);
    }
}

class Pelicula {

    constructor(
        public Nombre?: String,
        public Estreno?: Number
    ){};
}