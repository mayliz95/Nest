import {Get, Controller, Post, Body, ReflectMetadata, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {JwtValidoGuard} from "./guards/jwt-valido.guard";

@Controller()
@UseGuards(JwtValidoGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ReflectMetadata('metodoAsegurado', false)
  @ReflectMetadata('roles', ['Administrador', 'Usuario'])
  root(): string {
    return this.appService.root();
  }

    @Post('Crear')
    @ReflectMetadata('metodoAsegurado', true)
    crear(
        @Body(
            new UsuarioPipe(USUARIO_SCHEMA)) usuario
    ) {
        console.log('Usuario correcto');
        return usuario;
    }
}
