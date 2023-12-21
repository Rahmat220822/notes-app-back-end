const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const isProduction = process.env.NODE_ENV === 'production';
    const server = Hapi.server({
        port: isProduction ? 5000 : 8080,
        host : isProduction ? '0.0.0.0' : 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    server.route(routes);
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();