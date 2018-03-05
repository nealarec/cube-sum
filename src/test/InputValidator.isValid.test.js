import InputValidator, { messages } from '../app/classes/InputValidator'

it('isValid will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.isValid).toBe('function');
})

it('isValid without input will be true', function () {
    let validator = new InputValidator;

    expect(validator.isValid()).toBe(true);
})

