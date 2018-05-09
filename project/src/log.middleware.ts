import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";

@Middleware()
export class LogMiddleware implements NestMiddleware{

    resolve(nombre: string, anio: number): ExpressMiddleware {

        return (request, response,next) => {
            console.log('NOMBRE Y AÑO', nombre, anio);
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };
            console.log(respuesta);
            next()
        };

    }
}