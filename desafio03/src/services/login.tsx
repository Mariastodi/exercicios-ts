export const login = async (email: string, password: string): Promise<boolean> => {
    if(email === 'usuario@dio.me' && password === 'password123') {
        return true;
    }
    return false;
}