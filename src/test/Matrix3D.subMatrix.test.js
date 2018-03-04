import Matrix3D from '../app/classes/Matrix3D'


it('Matrix3D.subMatrix will be a function', function () {
    let my_matrix = new Matrix3D

    expect(typeof my_matrix.subMatrix).toBe('function')
})

it('Matrix3D.subMatrix(1,1,1,1,1,1) before make will be false', function () {
    let my_matrix = new Matrix3D

    expect(my_matrix.subMatrix(1, 1, 1, 1, 1, 1)).toBe(false)
})

it('Matrix3D.subMatrix(1,1,1,1,1,1) after make(2) will be [[[0]]] ', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    let res = my_matrix.subMatrix(1, 1, 1, 1, 1, 1)

    expect(JSON.stringify(res)).toBe(JSON.stringify([[[0]]]))
})

it('Matrix3D.subMatrix(1,1,1,3,1,1) after make(2) will be false', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    let res = my_matrix.subMatrix(1, 1, 1, 3, 1, 1)

    expect(res).toBe(false)
})

it('Matrix3D.subMatrix(1,0,1,1,1,1) after make(2) will be false', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    let res = my_matrix.subMatrix(1, 0, 1, 1, 1, 1)

    expect(res).toBe(false)
})

it('Matrix3D.subMatrix(1,2,1,1,1,1) after make(2) will be false', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    let res = my_matrix.subMatrix(1, 2, 1, 1, 1, 1)

    expect(res).toBe(false)
})

it('Matrix3D.subMatrix(2,1,1,1,1,1) after make(2) will be false', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    let res = my_matrix.subMatrix(2, 1, 1, 1, 1, 1)

    expect(res).toBe(false)
})

it('Matrix3D.subMatrix(1,1,2,1,1,1) after make(2) will be false', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    let res = my_matrix.subMatrix(1, 1, 2, 1, 1, 1)

    expect(res).toBe(false)
})

it('Matrix3D.subMatrix(1,1,1,2,1,1) after make(3) will be (2*1*1) matrix with 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(3)

    let res = my_matrix.subMatrix(1, 1, 1, 2, 1, 1)

    expect(JSON.stringify(res)).toBe(JSON.stringify([
        [[0]],
        [[0]],
    ]))
})
it('Matrix3D.subMatrix(1,1,1,2,2,1) after make(3) will be (2*2*1) matrix with 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(3)

    let res = my_matrix.subMatrix(1, 1, 1, 2, 2, 1)

    expect(JSON.stringify(res)).toBe(JSON.stringify([
        [[0], [0]],
        [[0], [0]],
    ]))
})

it('Matrix3D.subMatrix(1,1,1,2,2,2) after make(3) will be (2*2*2) matrix with 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(3)

    let res = my_matrix.subMatrix(1, 1, 1, 2, 2, 2)

    expect(JSON.stringify(res)).toBe(JSON.stringify([
        [[0, 0], [0, 0]],
        [[0, 0], [0, 0]],
    ]))
})

it('Matrix3D.subMatrix(1,1,1,2,2,2) after make(3) and set(1,1,3,5) will be (2*2*2) matrix with 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(3)
    my_matrix.set(1, 1, 3, 5)

    let res = my_matrix.subMatrix(1, 1, 1, 2, 2, 2)

    expect(JSON.stringify(res)).toBe(JSON.stringify([
        [[0, 0], [0, 0]],
        [[0, 0], [0, 0]],
    ]))
})

it('Matrix3D.subMatrix(1,1,1,2,2,3) after make(3) and set(1,1,3,5) will be (2*2*3) matrix with 0 and 5 in (1,1,3)', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(3)
    my_matrix.set(1, 1, 3, 5)

    let res = my_matrix.subMatrix(1, 1, 1, 2, 2, 3)

    expect(JSON.stringify(res)).toBe(JSON.stringify([
        [[0, 0, 5], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0]],
    ]))
})

it('Matrix3D.subMatrix(10,10,10,12,12,12) after make(20) and set(11,11,11,5) will be (3*3*3) matrix with 0 and 5 in (2,2,2)', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(20)
    my_matrix.set(11,11,11,5)

    let res = my_matrix.subMatrix(10,10,10,12,12,12)

    expect(JSON.stringify(res)).toBe(JSON.stringify([
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 5, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    ]))
})

