import InputValidator, { messages } from '../app/classes/InputValidator'

it('isValid will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.isValid).toBe('function');
})

it('isValid without input will be true', function () {
    let validator = new InputValidator;

    expect(validator.isValid()).toBe(true);
})

it("isValid with input 'e' will be false", function () {
    let validator = new InputValidator;
    validator.setInput('e')
    expect(validator.isValid()).toBe(false);
})

it("isValid with input '5' will be true", function () {
    let validator = new InputValidator;
    validator.setInput('5')
    expect(validator.isValid()).toBe(true);
})

it("isValid with input '5 \ns a' will be false", function () {
    let validator = new InputValidator;
    validator.setInput('5 \ns a')
    expect(validator.isValid()).toBe(false);
})

it("isValid with input '5 \ns a' will be false on doble calling", function () {
    let validator = new InputValidator;
    validator.setInput('5 \ns a')
    expect(validator.isValid()).toBe(false);
    expect(validator.isValid()).toBe(false);
})

it("isValid with input '5 \n 8 10 \n 3' will be false", function () {
    let validator = new InputValidator;
    validator.setInput('5 \n 8 10 \n 3')
    expect(validator.isValid()).toBe(false);
})

it("isValid with input '5 \n 8 10 \n QUERY 5 5 5 8 8 8' will be true", function () {
    let validator = new InputValidator;
    validator.setInput('5 \n 8 10 \n QUERY 5 5 5 8 8 8')

    expect(validator.isValid()).toBe(true)
})

it("isValid with input '5 \n 8 10 \n QUERY 5 5 5 8 8 8' will be true on double calling", function () {
    let validator = new InputValidator;
    validator.setInput('5 \n 8 10 \n QUERY 5 5 5 8 8 8')

    expect(validator.isValid()).toBe(true)
    expect(validator.isValid()).toBe(true)
})

it("isValid with input '3 \n 4 5 \n 9 9 9 9' will be false", function () {
    let validator = new InputValidator;
    validator.setInput('3 \n 4 5 \n 9 9 9 9')

    expect(validator.isValid()).toBe(false)
})

it("isValid with input 're' will make a suggestion", function () {
    let validator = new InputValidator;
    validator.setInput('re')
    validator.isValid()
    expect(validator.suggestion).toBe(messages.TEST_CASE_SUGGESTION)
})

it("isValid test with sample input will be true", function () {
    let validator = new InputValidator;
    validator.setInput(`2
        4 5
        UPDATE 2 2 2 4
        QUERY 1 1 1 3 3 3
        UPDATE 1 1 1 23
        QUERY 2 2 2 4 4 4
        QUERY 1 1 1 3 3 3
        2 4
        UPDATE 2 2 2 1
        QUERY 1 1 1 1 1 1
        QUERY 1 1 1 2 2 2
        QUERY 2 2 2 2 2 2`)

    expect(validator.isValid()).toBe(true)
    expect(validator.isValid()).toBe(true)
})

it("isValid test will make operations.length be 11", function () {
    let validator = new InputValidator;
    validator.setInput(`2
        4 5
        UPDATE 2 2 2 4
        QUERY 1 1 1 3 3 3
        UPDATE 1 1 1 23
        QUERY 2 2 2 4 4 4
        QUERY 1 1 1 3 3 3
        2 4
        UPDATE 2 2 2 1
        QUERY 1 1 1 1 1 1
        QUERY 1 1 1 2 2 2
        QUERY 2 2 2 2 2 2`)

    validator.isValid()

    expect(validator.operations.length).toBe(11)
})

