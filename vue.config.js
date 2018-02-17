module.exports = {
    // Put vendor stuff in a separate bundle
    dll: true,

    lintOnSave: true,

    // Proxy /api calls during development
    devServer:        {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8080/',
                secure: false
            }
        }
    }
}
