
import Matrix3D from '../app/classes/Matrix3D'

it('Matrix3D.make will be a function', function () {
    let my_matrix = new Matrix3D

    expect(typeof my_matrix.make).toBe('function')
})

it('Matrix3D.make(2) will set matrix parameter with 2 length array', function () {
    let my_matrix = new Matrix3D

    my_matrix.make(2)

    expect(typeof my_matrix.matrix).not.toBe('undefined')
    expect(my_matrix.matrix.length).toBe(2)
})

it('Matrix3D.make(3) will set matrix parameter with 3 length array', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(3)

    expect(my_matrix.matrix.length).toBe(3)
})

it('Matrix3D.make(1) will define Matrix3D.matrix[0][0]', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(1)

    expect(typeof my_matrix.matrix[0][0]).not.toBe('undefined')
})

it('Matrix3D.make(1) will define Matrix3D.matrix[0][0][0]', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(1)

    expect(typeof my_matrix.matrix[0][0][0]).not.toBe('undefined')
})

it('Matrix3D.make(1)  Matrix3D.matrix[0][0][0] will be 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(1)

    expect(my_matrix.matrix[0][0][0]).toBe(0)
})
it('Matrix3D.make(2)  Matrix3D.matrix[1][1][1] will be 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)

    expect(my_matrix.matrix[1][1][1]).toBe(0)
})

it('Matrix3D.make(50)  Matrix3D.matrix[39][49][21] will be 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(50)

    expect(my_matrix.matrix[39][49][21]).toBe(0)
})

it('Matrix3D.make(20)  all 0 - 19 x,y,z values have to by 0', function () {
    let my_matrix = new Matrix3D
    let n = 19
    my_matrix.make(n)

    for (let x = 0; x < n; x++)
        for (let y = 0; y < n; y++)
            for (let z = 0; z < n; z++)
                expect(my_matrix.matrix[x][y][z]).toBe(0)
}) 