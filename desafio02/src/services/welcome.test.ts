import { welcome } from "./welcome"

describe('welcome', () => {
    window.alert = jest.fn()

    it('Deve exibir um alert com a mensagem de boas vindas', () => {
        welcome()
        expect(window.alert).toHaveBeenCalledWith('Bem vindo ao Dio Bank!')
    })
})