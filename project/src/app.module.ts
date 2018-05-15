import {MiddlewaresConsumer, Module, NestMiddleware, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";
import {UsuarioController} from "./usuario.controller";

@Module({
  imports: [],
  controllers: [AppController, AppPeliculaController, ParametrosController, UsuarioController],
  components: [UsuarioService],
})

export class AppModule implements NestModule{
  configure (consumer: MiddlewaresConsumer): void {
    consumer
        .apply(LogMiddleware)
        .with('EPN', 1999)
        .forRoutes(
            ParametrosController,
            AppPeliculaController,
            AppController
        )
  }
}
