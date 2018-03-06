import MatrixController from '../app/classes/MatrixController'
import InputValidator from '../app/classes/InputValidator'

it('MatrixController will instantiable ', function () {
    let ctrl = new MatrixController;
    expect(ctrl instanceof MatrixController).toBe(true);
});

it('MatrixController.process will be a function', function () {
    let ctrl = new MatrixController

    expect(typeof ctrl.process).toBe('function')
})

it('test process whit sample input using InputValidator', function () {
    let ctrl = new MatrixController
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

    console.log(validator.operations)
    console.log(ctrl.process(validator.operations));
    
    expect(ctrl.plain_output).not.toBe('')
    expect(ctrl.plain_output).toBe('4\n4\n27\n0\n1\n1')
})