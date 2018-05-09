import {Body, Controller, Delete, Get, Headers, Param, Post, Query, Req, Res} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Parametros')
export class ParametrosController {

    constructor(private _usuarioService:UsuarioService) {}

    @Post('recuperar/:id/:materia')
    recuperarParametros(
        @Req() request,
        @Res() response,
        @Param() paramParams,
        @Query() queryParams,
        @Body() bodyParams
    ) {
        const respuesta = {
            paramParams: paramParams,
            queryParams: queryParams,
            bodyParams: bodyParams,
        };
        console.log(respuesta);
        return response.send(respuesta)

    }

    @Get('recuperar/:id/:materia')
    recuperarParametrosConGet(
        @Req() request,
        @Res() response,
        @Param() paramParams,
        @Query() queryParams,
        @Body() bodyParams
    ) {
        const respuesta = {
            paramParams: paramParams,
            queryParams: queryParams,
            bodyParams: bodyParams,
        };
        console.log(respuesta);
        return response.send(respuesta)

    }

    @Get('ReqRes')
    requestResponse(
        @Req() request,
        @Res() response,
        @Headers() headers
    ) {
        const respuesta = {
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdomains: request.subdomains,
            ip: request.ip,
            method: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocol: request.protocol,
            headers,
        };
        console.log(respuesta);
        //172.31.104.93
        return response.redirect('/Pelicula/mostrarCartelera');//Url relativa
    }

    @Get('recuperarUsuario')
    recuperarUsuario() {
        return this._usuarioService.arregloUsuarios
    }

    @Post('anadirUsuario')
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