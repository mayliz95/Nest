import {Controller, Get, ReflectMetadata, UseGuards} from "@nestjs/common";
import {UsuarioGuard} from "./guards/usuario.guard";

@Controller('usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {

    @Get('mostrar')
    @ReflectMetadata('nombreDato','ValorM')
    @ReflectMetadata('necesitaValidacion',false)
    @ReflectMetadata('roles',[
        'usuario',
        'administradores',
        'estudiantes'
    ])
    mostrar() {
        return 'Ok mostrar';
    }
    @Get('crear')
    @ReflectMetadata('nombreDato','ValorC')
    @ReflectMetadata('permiso','publico')
    @ReflectMetadata('necesitaValidacion',true)
    crear() {
        return 'Ok crear';
    }
}