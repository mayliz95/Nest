import {Body, Controller, Delete, Get, HttpCode, Param, Post, Req, Res} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Pelicula')
export class AppPeliculaController {
    peliculas: Pelicula[] = [];

    constructor(private _usuarioService: UsuarioService) {

    }


    @Get('mostrarCartelera')
    mostrarCartelera() {
        return this.peliculas;
    }

    @Post('mostrarCartelera/:nombre/:estreno')
    @HttpCode(203)
    anadirACartelera(@Param() parametros) {

        this.peliculas
            .push(new Pelicula(
                parametros.nombre,
                parametros.estreno)
            );

        return this.peliculas;
    }

    @Post('mostrarCartelera')
    @HttpCode(201)
    anadirACarteleraConQueryParameters(
        @Req() req,
        @Res() res) {
        const paramtrosQuery = req.query;
        this.peliculas
            .push(new Pelicula(
                paramtrosQuery.nombre,
                paramtrosQuery.estreno)
            );
        return res.send(this.peliculas);
    }


    @Get('recuperarUsuarios')
    recuperarUsuarios() {
        return this._usuarioService.arregloUsuarios
    }

    @Post('anadirUsuario')
    anadirUsuario(
        @Body() bodyParams
    ) {
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);
        // const usuario = {
        //     nombre:bodyParams.nombre,
        //     apellido:bodyParams.apellido,
        //     edad:bodyParams.edad,
        // };
        return this._usuarioService.agregarUsuario(usuario)
    }

    @Delete('borrarUsuario')
    borrarUsuario(
        @Body() bodyParams
    ) {
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);

        return this._usuarioService.borrarUsuario(usuario)
    }

}

class Pelicula {
    constructor(public nombre?: string,
                public estreno?: number) {
    }
}