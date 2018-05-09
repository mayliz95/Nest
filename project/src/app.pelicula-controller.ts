import {Body, Controller, Delete, Get, HttpCode, Param, Post, Req, Res} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Pelicula')
export class AppPeliculaController {

    peliculas: Pelicula [] = [];
    constructor(private _usuarioService:UsuarioService) {}

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
    @Get('recuperarUsuario')
    recuperarUsuario() {
        return this._usuarioService.arregloUsuarios
    }

    @Post('añadirUsuario')
    añadirUsuario(@Body() bodyParams) {
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad)
        return this._usuarioService.agregarUsuario(usuario);
    }

    @Delete('BorrarUsuario')
    borrarUsuario(@Body() bodyParams) {
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad)
        return this._usuarioService.borrarUsuario(usuario);
    }
}

class Pelicula {

    constructor(
        public Nombre?: String,
        public Estreno?: Number
    ){};
}