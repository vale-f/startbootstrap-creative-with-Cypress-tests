const ContactFormLocators = {
    nameField: 'input.form-control#name',
    emailField: 'input.form-control#email',
    phoneField: 'input.form-control#phone',
    messageField: 'textarea.form-control#message',
    errorMessageLocation_name: 'div.invalid-feedback[data-sb-feedback="name:required"]',
    errorMessageLocation_requiredEmail: 'div.invalid-feedback[data-sb-feedback="email:required"]',
    errorMessageLocation_invalidEmail: 'div.invalid-feedback[data-sb-feedback="email:email"]',
    errorMessageLocation_phone: 'div.invalid-feedback[data-sb-feedback="phone:required"]',
    errorMessageLocation_message: 'div.invalid-feedback[data-sb-feedback="message:required"]',
    submitButton: 'button.btn.btn-primary.btn-xl',
    successfulMessageLocation: 'div.fw-bolder',
};

export default ContactFormLocators;