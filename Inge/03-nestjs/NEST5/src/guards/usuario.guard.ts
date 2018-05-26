import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";

@Injectable()
export class UsuarioGuard implements CanActivate {

    constructor(
        private reflector: Reflector) {
    }


    canActivate(
        context: ExecutionContext
    ):
        boolean |
        Promise<boolean> |
        Observable<boolean>
    {
        const request = context
            .switchToHttp()
            .getRequest();

        console.log('Request', request);
        console.log('Cabeceras', request.headers);

        const reflectorNecesitaValidacion = this.reflector
            .get(
                'necesitaValidacion',
                context.getHandler()
            );

        const reflectorPermisos = this.reflector
            .get(
                'permiso',
                context.getHandler()
            );

        // console.log('reflectorNombreDato', reflectorNombreDato);
        //         // console.log('reflectorPermisos', reflectorPermisos);


        if(reflectorNecesitaValidacion){
            // Validar
            // Tomar el valor de la headers
            // #ID
            // Buscamos en la base los roles del usuario
            // administradores
            // reflector roles 'administradores'
            //
            // if(tieneRoles){
            //     return true; // da el acceso
            // } else {
            //     return false; // forbidden
            // }
            return true;


        } else {
            // No validamos
            return true;
        }


    }

}