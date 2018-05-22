import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";
import {ParametrosController} from "./parametros.controller";
import {UsuarioService} from "./usuario.service";
import {LogMiddleware} from "./log.middleware";
import {UsuarioController} from "./usuario.controller";
import {UsuarioModule} from "./usuario/usuario.module";
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
            .forRoot({
                type: 'mysql',
                host: '172.31.104.77',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'web',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
        // UsuarioModule,
    ], // Importar otros modulos
    controllers: [
        // AppController,
        // AppPeliculaController,
        // ParametrosController,
        // UsuarioController
    ],
    components: [
        // UsuarioService
    ], // Componentes
})
export class AppModule{
}
