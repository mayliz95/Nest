import {MiddlewaresConsumer, Module, NestMiddleware, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";
import {UsuarioController} from "./usuario.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {UsuarioModule} from "./Usuario/usuario.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'web2018agr2.mysql.database.azure.com',
          port: 3306,
          username: 'profesor@web2018agr2',
          password: 'Javascript1',
          database: 'web',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      UsuarioModule
  ],
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
