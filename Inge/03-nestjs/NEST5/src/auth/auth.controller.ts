import {BadGatewayException, BadRequestException, Body, Controller, Post, UseGuards} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('auth')
export class AuthController {

    constructor(private _jwtService: JwtService){}

    @Post('emitir')
    emitirToken(
        @Body('usuario') usuario,
        @Body('password') password
    ) {
        const enviaParametors = usuario && password;

        if (enviaParametors) {
            const credencialesValidas = usuario === 'adrianeguez' && password === '12345678910';
            if (credencialesValidas) {
                return {
                    jwt: this._jwtService.emitirToken({
                        usuario: usuario
                    })
                };
            } else {
                throw new BadRequestException({
                    mensaje: 'Credenciales Invalidas'
                })
            }
        }
        else {
            throw new BadGatewayException({
                mensaje: 'No envia parametros'
            });
        }
    }

    @Post('verificartokenSync')
    verificarTokenSync(
        @Body('jwt') jwt
    ) {
        const enviaParametros = jwt;

        if(enviaParametros) {
            const tokenvalido = this._jwtService.verificarTokenSync(jwt);
            if(tokenvalido) {
                return {mensaje: 'Ok'}
            } else {
                throw new BadRequestException({
                    mensaje: 'Token invalido'
                })
            }
        } else {
            throw new BadRequestException({
                mensaje: 'No hay parametros'
            })
        }
    }

    @Post('verificartokenAsync')
    verificarTokenAsync(
        @Body('jwt') jwt
    ) {
        const enviaParametros = jwt;
        if (enviaParametros) {
            this._jwtService
                .verificarTokenAsync(
                    jwt,
                    (error, datos) => {
                        if (error) {
                            throw new BadRequestException({
                                mensaje: 'Token invalido',
                                error: error
                            });
                        } else {
                            return {mensake: 'Ok'};
                        }
                    }
                )

        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }
    }
}