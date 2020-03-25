export const server = {
    URI: 'https://localhost:8080/v1/graphql',
    get wsURI() {
        return `ws://${this.URI.split('//').splice(-1)[0]}`
    }
}

export const client = {
    // JSON Web Token
    get JWT() {
        return localStorage.getItem('jwt')
    },
    set JWT(jwt) {
        localStorage.setItem('jwt', jwt)
    }
}
