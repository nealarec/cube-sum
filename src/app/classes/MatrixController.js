import Matrix3D from './Matrix3D'

export default class MatrixController {
    plain_output = ''
    matrix = new Matrix3D()

    process(operations) {
        this.plain_output = ''
        for (let i in operations) {
            let operation = operations[i].split(/\s/)
            let params = operation.slice(1).map(n => Number(n));

            switch (operation[0]) {
                case 'MAKE':
                    this.matrix.make(...params)
                    break;

                case 'UPDATE':
                    this.matrix.set(...params)
                    break;

                case 'QUERY':
                    let result = this.matrix.sum(...params)
                    this.plain_output = this.plain_output !== '' ? (
                        `${this.plain_output}\n${result}`
                    ) : `${result}`
                    break;

                default:
                    break
            }
        }
        return this.plain_output;
    }
}