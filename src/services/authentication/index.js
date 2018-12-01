import fetch from 'isomorphic-fetch';

let AuthenticateUserRequestGenerator = (requestFn) => {
    return function (user) {
        return requestFn('localhost:8080/api/login', { method: 'POST', body: JSON.stringify(user) })
    }
}

let AuthenticateUser = AuthenticateUserRequestGenerator(fetch)
export { AuthenticateUserRequestGenerator, AuthenticateUser }