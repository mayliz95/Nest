import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs/index";
import {JwtService} from "../servicios/jwt.service";

@Injectable()
export class JwtValidoGuard implements CanActivate {

    constructor(private _reflector: Reflector,
                private _jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const necesitaValidarse = this._reflector
            .get(
                'metodoAsegurado',
                context.getHandler()
            );
        if (necesitaValidarse) {
            const request = context
                .switchToHttp()
                .getRequest();
            console.log('request.headers', request.headers);
            const jwt = request.headers.auth;
            if (jwt) {
                return this._jwtService
                    .verificarTokenSync(jwt)
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}