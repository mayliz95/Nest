import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {AppPeliculaController} from "./app.pelicula-controller";

@Module({
  imports: [],
  controllers: [AppController, AppPeliculaController],
  components: [],
})
export class AppModule {}
