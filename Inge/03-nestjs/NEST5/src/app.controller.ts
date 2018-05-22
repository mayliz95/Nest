import {Get, Controller, Post, Body, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioPipe} from "./usuario/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

    @Post('Crear')
    crear(
        @Body(
            new UsuarioPipe(USUARIO_SCHEMA)) usuario
    ) {
        console.log('Usuario correcto');
        return usuario;
    }
}
