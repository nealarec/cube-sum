
import InputValidator, { messages } from '../app/classes/InputValidator';

it('testDefinition will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.testDefinition).toBe('function')
})

it("testDefinition('3') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testDefinition('3')).toBe(false)
    expect(validator.error.error).toBe(messages.DEFINITION_NOT_NUMBER)
})

it("testDefinition('3 3') will be true", function () {
    let validator = new InputValidator;

    expect(validator.testDefinition('3 3')).toBe(true)
    expect(validator.matrix_length).toBe(3)
    expect(validator.operation_length).toBe(3)
    expect(validator.operation_count).toBe(0)
})

it("testDefinition('-3 4') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testDefinition('-3 4')).toBe(false)
    expect(validator.error.error).toBe(messages.DEFINITION_N_OUT_BOUNDS);
})

it("testDefinition('3 -3') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testDefinition('3 -3')).toBe(false)
    expect(validator.error.error).toBe(messages.DEFINITION_M_OUT_BOUNDS);
})
