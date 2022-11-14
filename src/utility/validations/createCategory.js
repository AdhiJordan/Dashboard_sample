export default function validateCreateCategoryForm(values) {
    let errors = {};
    let errorMessageRequired = 'Required field';
    if (!values.slug) {
        errors.slug = errorMessageRequired;
    }
    if (!values.category) {
        errors.category = errorMessageRequired;
    }

    return errors;
};
