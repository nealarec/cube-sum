import Matrix3D from '../app/classes/Matrix3D'


it('Matrix3D.get will be a function', function () {
    let my_matrix = new Matrix3D;

    expect(typeof my_matrix.get).toBe('function');
});

it('Matrix3D.get(1,1,1) will be undefined', function () {
    let my_matrix = new Matrix3D;

    expect(my_matrix.get(1, 1, 1)).toBe(undefined);
});

it('After call make(2), get(1,1,1) will be 0', function () {
    let my_matrix = new Matrix3D;

    my_matrix.make(2)
    expect(my_matrix.get(1, 1, 1)).toBe(0);
});

it('After call make(2), get(1,2,1) will be undefined', function () {
    let my_matrix = new Matrix3D;

    my_matrix.make(2)
    expect(my_matrix.get(1, 2, 1)).toBe(undefined);
});

it('If I have a 3*3*3 matrix with 1 all in get(1,2,1) will be 1', function () {
    let my_matrix = new Matrix3D;

    my_matrix.matrix = [[
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]]

    expect(my_matrix.get(1, 2, 1)).toBe(1);
});

