import InputValidator, { messages } from '../app/classes/InputValidator'

it('processOperation will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.processDefinition).toBe('function');
})

it("processOperation('UPDATE 1 1 1 1') will increment operation count", function () {
    let validator = new InputValidator;
    validator.operation_count = 1
    validator.processOperation('UPDATE 1 1 1 1')
    expect(validator.operation_count).toBe(2);
})

it("processOperation('UPDATE 1 1 1 1') will add a 'UPDATE 1 1 1 1' operation to operations array", function () {
    let validator = new InputValidator;
    validator.processOperation('UPDATE 1 1 1 1')
    expect(validator.operations.find(o => o === 'UPDATE 1 1 1 1')).not.toBe(undefined);
})
