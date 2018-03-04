import Matrix3D from '../app/classes/Matrix3D'
import deepFreeze from 'deep-freeze'

it('Matrix3D.set will be a function', function () {
    let my_matrix = new Matrix3D;

    expect(typeof my_matrix.set).toBe('function');
});

it('Matrix3D.set(1,0,0,2) before make will return false', function () {
    let my_matrix = new Matrix3D;

    expect(my_matrix.set(1, 0, 0, 2)).toBe(false);
})

it('Matrix3D.set(1,0,0,2) after make(2) will return true', function () {
    let my_matrix = new Matrix3D;

    my_matrix.make(2);
    expect(my_matrix.set(1, 0, 0, 2)).toBe(true);
})

it('Matrix3D.set(1,0,0,2) after make(2) will change matrix[1][0][0] to 2', function () {
    let my_matrix = new Matrix3D;

    my_matrix.make(2);
    my_matrix.set(1, 0, 0, 2);
    expect(my_matrix.matrix[1][0][0]).toBe(2);
})

it('Matrix3D.set will not affect the previews matrix object', function () {
    let my_matrix = new Matrix3D;

    my_matrix.make(2);
    deepFreeze(my_matrix.matrix)
    my_matrix.set(1, 0, 0, 2);
    expect(my_matrix.matrix[1][0][0]).toBe(2);
})
