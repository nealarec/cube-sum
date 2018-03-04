import Matrix3D from '../app/classes/Matrix3D'
import deepFreeze from 'deep-freeze'

it('Matrix3D.sum will be a function', function () {
    let my_matrix = new Matrix3D

    expect(typeof my_matrix.sum).toBe('function')
})

it('sum(1,1,1,2,2,2) after make(2) will be 0', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)

    expect(my_matrix.sum(1, 1, 1, 2, 2, 2)).toBe(0)
})

it('sum(1,1,1,2,2,2) after make(2) and set(1,2,1,7) will be 7', function () {
    let my_matrix = new Matrix3D
    my_matrix.make(2)
    my_matrix.set(1, 2, 1, 7)

    expect(my_matrix.sum(1, 1, 1, 2, 2, 2)).toBe(7)
})

it('testing with example test case', function () {
    let my_matrix = new Matrix3D();
    // 2
    // 4 5
    my_matrix.make(4)
    // UPDATE 2 2 2 4
    my_matrix.set(2, 2, 2, 4)
    // QUERY 1 1 1 3 3 3
    expect(my_matrix.sum(1, 1, 1, 3, 3, 3)).toBe(4)
    // UPDATE 1 1 1 23
    my_matrix.set(1, 1, 1, 23)
    // QUERY 2 2 2 4 4 4
    expect(my_matrix.sum(2, 2, 2, 4, 4, 4)).toBe(4)
    // QUERY 1 1 1 3 3 3
    expect(my_matrix.sum(1, 1, 1, 3, 3, 3)).toBe(27)

    // 2 4
    my_matrix.make(2)
    // UPDATE 2 2 2 1
    my_matrix.set(2, 2, 2, 1)
    // QUERY 1 1 1 1 1 1
    expect(my_matrix.sum(1, 1, 1, 1, 1, 1)).toBe(0)
    // QUERY 1 1 1 2 2 2
    expect(my_matrix.sum(1, 1, 1, 2, 2, 2)).toBe(1)
    // QUERY 2 2 2 2 2 2
    expect(my_matrix.sum(2, 2, 2, 2, 2, 2)).toBe(1)

});
