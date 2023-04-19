module.exports = {
    server:{
        port: 9080
    },
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ]
    }
}