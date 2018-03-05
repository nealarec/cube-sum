
export const messages = {
    TEST_CASE_NOT_NUMBER: 'Test case debe ser un número',
    TEST_CASE_OUT_BOUNDS: 'Test debe estar entre 1 y 50',

    DEFINITION_NOT_NUMBER: 'Tanto N como M deben ser números',
    DEFINITION_N_OUT_BOUNDS: 'N debe estar entre 1 y 100',
    DEFINITION_M_OUT_BOUNDS: 'M debe estar entre 1 y 1000',

    OPERATION_BAD_START: 'Las operaciones deben empezar con UPDATE o QUERY',
    NOT_MATRIX_LENGTH: 'No se a definido una matriz para operar',

    UPDATE_NOT_NUMBERS: 'x, y, z, W son requeridos deben ser números',
    UPDATE_OUT_BOUNDS: 'x, y, z deben estar 1 y N',
    UPDATE_W_OUT_BOUNDS: 'W debe estar entre -10^9 y 10^9',

    QUERY_NOT_NUMBERS: 'x1, y1, z1, x2, y2, z2 son requeridos deben ser números positivos',
    QUERY_OUT_BOUNDS: 'x1, y1, z1, x2, y2, z2 deben estar entre 1 y N',
    QUERY_X1_GREATER_THAN_X2: 'x1 no debe ser menor que x2',
    QUERY_Y1_GREATER_THAN_Y2: 'y1 no debe ser menor que y2',
    QUERY_Z1_GREATER_THAN_Z2: 'z1 no debe ser menor que z2',
}

export default class InputValidator {

    input = ''
    error = {}
    suggestion = ''
    matrix_length = 0
    operation_length = 0
    operation_count = 0

    setInput(txt) {
        this.input = txt;
    }

    isValid() {
        let { input } = this;

        if (input === '') {
            this.error = {};
            this.suggestion = '{1 - 50} T: test case'
            return true
        }

        input = input.split(/\n/);
        if (!this.testTestCase(input[0], 0)) {
            return false;
        }
    }

    testTestCase(line, line_number) {
        if (!/^-?[0-9]+$/.test(line)) {
            this.error = { line, line_number, error: messages.TEST_CASE_NOT_NUMBER }
            return false;
        }

        if (Number(line) < 1 || Number(line) > 50) {
            this.error = { line, line_number, error: messages.TEST_CASE_OUT_BOUNDS }
            return false;
        }

        this.test_case = Number(line);

        return true
    }

    testDefinition(line, line_number) {
        if (!/^-?[0-9]+\s-?[0-9]+\s*$/.test(line)) {
            this.error = { line, line_number, error: messages.DEFINITION_NOT_NUMBER }
            return false
        }

        line = line.split(/\s/)

        let n = Number(line[0])
        let m = Number(line[1])

        if (n < 1 || n > 100) {
            this.error = { line, line_number, error: messages.DEFINITION_N_OUT_BOUNDS }
            return false
        }

        if (m < 1 || m > 1000) {
            this.error = { line, line_number, error: messages.DEFINITION_M_OUT_BOUNDS }
            return false
        }

        this.matrix_length = m
        this.operation_length = n
        this.operation_count = 0

        return true
    }

    testOperation(line, line_number) {
        if (!/^(UPDATE|QUERY)/.test(line)) {
            this.error = { line, line_number, error: messages.OPERATION_BAD_START }
            return false
        }
        
        if(this.matrix_length === 0) {
            this.error = { line, line_number, error: messages.NOT_MATRIX_LENGTH }
            return false
        }

        if (/^UPDATE/.test(line)) {
            if (!/^UPDATE\s(-?[0-9]+\s){3}-?[0-9]+/.test(line)) {
                this.error = { line, line_number, error: messages.UPDATE_NOT_NUMBERS }
                return false
            }

            let register = line.split(/\s/)
            let x = Number(register[1])
            let y = Number(register[2])
            let z = Number(register[3])
            let W = Number(register[4])

            if ((x < 1 || x > this.matrix_length)
                || (y < 1 || y > this.matrix_length)
                || (z < 1 || z > this.matrix_length)) {

                this.error = { line, line_number, error: messages.UPDATE_OUT_BOUNDS }
                return false
            }

            if (W < Math.pow(-10, 9) || W > Math.pow(10, 9)) {
                this.error = { line, line_number, error: messages.UPDATE_W_OUT_BOUNDS }
                return false
            }
        }

        if (/^QUERY/.test(line)) {
            if (!/^QUERY\s(-?[0-9]+\s){5}[0-9]+/.test(line)) {
                this.error = { line, line_number, error: messages.QUERY_NOT_NUMBERS }
                return false
            }

            let register = line.split(/\s/)

            let x1 = Number(register[1])
            let y1 = Number(register[2])
            let z1 = Number(register[3])
            let x2 = Number(register[4])
            let y2 = Number(register[5])
            let z2 = Number(register[6])

            if (x2 < x1) {
                this.error = { line, line_number, error: messages.QUERY_X1_GREATER_THAN_X2 }
                return false
            }

            if (y2 < y1) {
                this.error = { line, line_number, error: messages.QUERY_Y1_GREATER_THAN_Y2 }
                return false
            }

            if (z2 < z1) {
                this.error = { line, line_number, error: messages.QUERY_Z1_GREATER_THAN_Z2 }
                return false
            }

            if ((x1 < 1 || x1 > this.matrix_length)
                || (y1 < 1 || y1 > this.matrix_length)
                || (z1 < 1 || z1 > this.matrix_length)
                || (x2 < 1 || x2 > this.matrix_length)
                || (y2 < 1 || y2 > this.matrix_length)
                || (z2 < 1 || z2 > this.matrix_length)) {

                this.error = { line, line_number, error: messages.QUERY_OUT_BOUNDS }
                return false
            }
        }

        return true
    }
}