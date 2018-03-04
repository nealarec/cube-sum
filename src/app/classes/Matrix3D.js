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
    get(...args) {
        args = args.map(n => n - 1)
        let x = args[0], y = args[1], z = args[2]

        let x_obj = this.matrix[x] ? this.matrix[x] : []
        let y_obj = x_obj[y] ? x_obj[y] : []
        let value = y_obj[z]

        return value
    }

    /**
    * Change the value of 3D object on the matrix
    * 
    * @param {integer} x x coordinate
    * @param {integer} y y coordinate
    * @param {integer} z z coordinate
    * @param {integer} W value to assign
    */
    set(...args) {
        if (this.get(args[0], args[1], args[2]) !== undefined) {
            args = args.map((n, i) => i < 3 ? n - 1 : n)

            let x = args[0], y = args[1], z = args[2], W = args[3]

            this.matrix = $.extend(true, [], this.matrix)
            this.matrix[x][y][z] = W
            return true
        }

        return false
    }

    /**
     * Return 3D matrix between p1(x,y,z) and p2(x,y,z)
     * 
     * @param {integer} x1 p1 x coordinate
     * @param {integer} y1 p1 y coordinate
     * @param {integer} z1 p1 z coordinate
     * @param {integer} x2 p2 x coordinate
     * @param {integer} y2 p2 y coordinate
     * @param {integer} z3 p3 z coordinate
     */
    subMatrix(...args) {
        // test the limits of matrix, validating limit points existence
        if (this.get(args[0], args[1], args[2]) === undefined
            || this.get(args[3], args[4], args[5]) === undefined
            || args[0] > args[3]
            || args[1] > args[4]
            || args[2] > args[5]) {
            return false
        }

        /** 
         * move arguments from (1,1,1)*(n,n,n) to (0,0,0)*(n-1,n-1,n-1) matrix,
         * this because the Matrix3D.matrix object is a array matrix 
         * and all in it began on 0
         */
        args = args.map(n => n - 1)

        let base_x = args[0]
        let base_y = args[1]
        let base_z = args[2]

        let take_x = args[3] - base_x + 1
        let take_y = args[4] - base_y + 1
        let take_z = args[5] - base_z + 1

        return this.matrix.slice(base_x, take_x).map(y_obj =>
            y_obj.slice(base_y, take_y).map(z_obj =>
                z_obj.slice(base_z, take_z)
            )
        )
    }
}