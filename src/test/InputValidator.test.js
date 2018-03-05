import InputValidator, { messages } from '../app/classes/InputValidator'

it('InputValidator will instantiable ', function () {
    let validator = new InputValidator;

    expect(validator instanceof InputValidator).toBe(true);
});

it('setInput will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.setInput).toBe('function');
})

it('setInput will change a input ', function () {
    let validator = new InputValidator;
    validator.setInput('my input');
    expect(typeof validator.input).not.toBe('undefined');
    expect(validator.input).toBe('my input');
})
