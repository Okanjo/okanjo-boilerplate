/**
 * @this OkanjoServer
 */
module.exports = function() {

    this.hapi.route({
        method: 'GET',
        path: '/{path*}',
        handler: (request, reply) => {
            reply.view('index.j2', {
                app: this.app
            });
        },
        config: {
            auth: { mode: 'try', strategies: ['session'] },
            description: "Serve UI files",
            tags: ["Excluded"]
        }
    });
    
};