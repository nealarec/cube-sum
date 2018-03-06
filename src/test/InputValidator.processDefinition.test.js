import InputValidator, { messages } from '../app/classes/InputValidator'

it('processDefinition will be a function', function () {
    let validator = new InputValidator;

    expect(typeof validator.processDefinition).toBe('function');
})

it("processDefinition('3 3') will set matrix_length and operation_length to 3", function () {
    let validator = new InputValidator;
    validator.processDefinition('3 3')
    expect(validator.matrix_length).toBe(3);
    expect(validator.operation_length).toBe(3);
})

it("processDefinition('3 6') will set matrix_length to 3 and operation_length to 6", function () {
    let validator = new InputValidator;
    validator.processDefinition('3 6')
    expect(validator.matrix_length).toBe(3);
    expect(validator.operation_length).toBe(6);
})

it("processDefinition('3 3') will add a 'MAKE 3' operation to operations array", function () {
    let validator = new InputValidator;
    validator.processDefinition('3 3')
    expect(validator.operations.find(o => o === 'MAKE 3')).not.toBe(undefined);
})

it("processDefinition('5 3') will add a 'MAKE 5' operation to operations array", function () {
    let validator = new InputValidator;
    validator.processDefinition('5 3')
    expect(validator.operations.find(o => o === 'MAKE 5')).not.toBe(undefined);
})

