import $ from 'jquery'

export default class Matrix3D {
    matrix = []

    /**
     * Create a matrix of n*n*n and store it on matrix property
     * 
     * @param {number} n determinate the matrix length
     */
    make(n) {
        this.matrix = [...Array(n).keys()].map(() =>
            [...Array(n).keys()].map(() =>
                [...Array(n).keys()].map(() => 0)
            )
        )
    }

    /**
     * Return the value of 3D element on matrix
     * 
     * @param {integer} x x coordinate
     * @param {integer} y y coordinate
     * @param {integer} z z coordinate
     */
    get(x, y, z) {
        let x_obj = this.matrix[x] ? this.matrix[x] : []
        let y_obj = x_obj[y] ? x_obj[y] : [];
        let value = y_obj[z];

        return value;
    }

    /**
    * Change the value of 3D object on the matrix
    * 
    * @param {integer} x x coordinate
    * @param {integer} y y coordinate
    * @param {integer} z z coordinate
    * @param {integer} W value to assign
    */
    set(x, y, z, W) {
        if (this.get(x, y, z) !== undefined) {
            this.matrix = $.extend(true, [], this.matrix)
            this.matrix[x][y][z] = W;
            return true;
        }

        return false;
    }
}