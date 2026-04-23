import { login } from './login';

describe('login', () => {
    const mockEmail = 'usuario@dio.me';
    const mockPassword = 'password123';

    it('Deve retornar true caso o email e senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    });

    it('Deve retornar false caso o email seja inválido', async () => {
        const response = await login('email@invalido.com', mockPassword);
        expect(response).toBeFalsy();
    });

    it('Deve retornar false caso a senha seja inválida', async () => {
        const response = await login(mockEmail, 'senha_errada');
        expect(response).toBeFalsy();
    });
});