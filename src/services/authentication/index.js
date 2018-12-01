import fetch from 'isomorphic-fetch';

let AuthenticateUserRequestGenerator = (requestFn) => {
    return function (user) {
        return requestFn('http://localhost:8080/api/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) })
    }
}

let AuthenticateUser = AuthenticateUserRequestGenerator(fetch)
export { AuthenticateUserRequestGenerator, AuthenticateUser }