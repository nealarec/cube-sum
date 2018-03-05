import InputValidator, {messages} from '../app/classes/InputValidator'

it('testOperation will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.testOperation).toBe('function')
})

it("testOperation('ANY 3 -3') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testOperation('ANY 3 -3')).toBe(false)
    expect(validator.error.error).toBe(messages.OPERATION_BAD_START);
})

it("testOperation('UPDATE 1 1 1 2') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testOperation('UPDATE 1 1 1 2')).toBe(false)
    expect(validator.error.error).toBe(messages.NOT_MATRIX_LENGTH);
})

it("testOperation('UPDATE 1 1 1 2') after testDefinition('3 3') will be true", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('UPDATE 1 1 1 2')).toBe(true)
})

it("testOperation('UPDATE 1 6 1 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('UPDATE 1 6 1 2')).toBe(false)
    expect(validator.error.error).toBe(messages.UPDATE_OUT_BOUNDS);
})

it("testOperation('UPDATE 1 -1 1 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('UPDATE 1 -1 1 2')).toBe(false)
    expect(validator.error.error).toBe(messages.UPDATE_OUT_BOUNDS);
})

it("testOperation('UPDATE 1 -1s 1 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('UPDATE 1 -1s 1 2')).toBe(false)
    expect(validator.error.error).toBe(messages.UPDATE_NOT_NUMBERS);
})

it("testOperation('UPDATE 1 1 1 -11111111111') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('UPDATE 1 1 1 -11111111111')).toBe(false)
    expect(validator.error.error).toBe(messages.UPDATE_W_OUT_BOUNDS);
})

it("testOperation('UPDATE 1 1 1 11111111111') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('UPDATE 1 1 1 11111111111')).toBe(false)
    expect(validator.error.error).toBe(messages.UPDATE_W_OUT_BOUNDS);
})

it("testOperation('QUERY 1 1 1 2 2 2') will be false", function () {
    let validator = new InputValidator;

    expect(validator.testOperation('QUERY 1 1 1 2 2 2')).toBe(false)
    expect(validator.error.error).toBe(messages.NOT_MATRIX_LENGTH);
})

it("testOperation('QUERY 1 1 1 2 2 2') after testDefinition('3 3') will be true", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('QUERY 1 1 1 2 2 2')).toBe(true)
})

it("testOperation('QUERY 1 1 1 2 6dj 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('QUERY 1 1 1 2 6dj 2')).toBe(false)
    expect(validator.error.error).toBe(messages.QUERY_NOT_NUMBERS)
})

it("testOperation('QUERY 5 1 1 2 2 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('QUERY 5 1 1 2 2 2')).toBe(false)
    expect(validator.error.error).toBe(messages.QUERY_X1_GREATER_THAN_X2)
})
it("testOperation('QUERY 1 5 1 2 2 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('QUERY 1 5 1 2 2 2')).toBe(false)
    expect(validator.error.error).toBe(messages.QUERY_Y1_GREATER_THAN_Y2)
})
it("testOperation('QUERY 1 1 5 2 2 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('QUERY 1 1 5 2 2 2')).toBe(false)
    expect(validator.error.error).toBe(messages.QUERY_Z1_GREATER_THAN_Z2)
})

it("testOperation('QUERY 1 1 1 2 6 2') after testDefinition('3 3') will be false", function () {
    let validator = new InputValidator;

    validator.testDefinition('3 3')
    expect(validator.testOperation('QUERY 1 1 1 2 6 2')).toBe(false)
    expect(validator.error.error).toBe(messages.QUERY_OUT_BOUNDS)
})
