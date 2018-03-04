import Matrix3D from '../app/classes/Matrix3D'

it('Matrix3D will instantiable ', function () {
    let my_matrix = new Matrix3D;
    expect(my_matrix instanceof Matrix3D).toBe(true);
});
