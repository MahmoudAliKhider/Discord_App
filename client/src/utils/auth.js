export const Logout = () => {
    localStorage.clear();
    window.location.pathname = '/login';

}