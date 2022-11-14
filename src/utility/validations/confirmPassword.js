export default function validateConfirmPasswordForm(values) {
    let errors = {};
    if (values.password.length < 8 || values.password.length >= 20) {
        errors.password = "Your password must be at least 8 and 20 characters.";
    } else if (values.password.search(/[a-z]/i) < 0) {
        errors.password = "Your password must contain at least one letter.";
    } else if (values.password.search(/[0-9]/) < 0) {
        errors.password = "Your password must contain at least one digit.";
    } else if (values.password.search(/[!@#$%^&*]/) < 0) {
        errors.password = "Your password must contain at least one special character.";
    }

    if (values.confirmPassword.length < 8 || values.confirmPassword.length >= 20) {
        errors.confirmPassword = "Your password must be at least 8 and 20 characters.";
    } else if (values.confirmPassword.search(/[a-z]/i) < 0) {
        errors.confirmPassword = "Your password must contain at least one letter.";
    } else if (values.confirmPassword.search(/[0-9]/) < 0) {
        errors.confirmPassword = "Your password must contain at least one digit.";
    } else if (values.confirmPassword.search(/[!@#$%^&*]/) < 0) {
        errors.confirmPassword = "Your password must contain at least one special character.";
    }

    return errors;
};
