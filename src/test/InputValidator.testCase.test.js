import InputValidator, { messages } from '../app/classes/InputValidator'

it('testTestCase will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.testTestCase).toBe('function')
})

it('testTestCase(10) will be true', function () {
    let validator = new InputValidator;

    expect(validator.testTestCase('10')).toBe(true)
})

it("testTestCase('55') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testTestCase('55')).toBe(false)
})

it("testTestCase('1d') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testTestCase('1d')).toBe(false)
    expect(validator.error.error).toBe(messages.TEST_CASE_NOT_NUMBER)
})

it("testTestCase('-3') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testTestCase('-3')).toBe(false)
    expect(validator.error.error).toBe(messages.TEST_CASE_OUT_BOUNDS)
})

