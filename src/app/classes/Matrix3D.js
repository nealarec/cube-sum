export default class Matrix3D {
    matrix = []

    /**
     * Create a matrix of n*n*n and store it on matrix property
     * @param {number} n determinate the matrix length
     */
    make(n) {
        this.matrix = [...Array(n).keys()].map(() =>
            [...Array(n).keys()].map(() =>
                [...Array(n).keys()].map(() => 0)
            )
        )
    }

    get(x, y, z) {
        let x_obj = this.matrix[x] ? this.matrix[x] : []
        let y_obj = x_obj[y] ? x_obj[y] : [];
        let value = y_obj[z];

        return value;
    }
}