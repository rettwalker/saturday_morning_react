import { AuthenticateUserRequestGenerator } from './index'

describe('tests the authentication', () => {
    describe('when the user attempts to login', () => {
        let requestMock
        let authenicateUser
        beforeAll(() => {
            requestMock = jest.fn()
            authenicateUser = AuthenticateUserRequestGenerator(requestMock)
        })
        it('the user information is returned', () => {
            requestMock.mockResolvedValue({
                "id": 1,
                "email": "test@email.com",
                "first_name": "Test",
                "last_name": "McTester"
            })
            return authenicateUser({ email: '', password: '' }).then(res => {
                expect(res).toEqual({
                    "id": 1,
                    "email": "test@email.com",
                    "first_name": "Test",
                    "last_name": "McTester"
                })
                expect(requestMock).toBeCalled()
                expect(requestMock).toBeCalledWith('localhost:8080/api/login', { method: 'POST', body: JSON.stringify({ email: '', password: '' }) })
            })
        })
    })
    it('', () => {
        expect(AuthenticateUserRequestGenerator()).toBeInstanceOf(Function)
    })
})