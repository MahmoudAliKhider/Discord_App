export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid
}
export const validateRegisterForm = ({ mail, username, password }) => {
    return (
        validateMail(mail) && validatePassword(password) && isUsernameValid(username)
    )
}

const isUsernameValid = (username) => {
    // Check if username is defined and is a string
    if (typeof username !== 'string' || !username) {
        return false;
    }
    // Check the length of the username
    return username.length > 2 && username.length < 13;
}

const validatePassword = (password) => {
    return password.length > 5 && password.length < 16;
}

export const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail)
}