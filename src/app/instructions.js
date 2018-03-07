import React, { Component } from 'react';

class Instructions extends Component {
    render() {
        return (

            <div className="col-12">
                <h4>Instrucciones de uso</h4>
                <p>
                    Esta aplicación esta basada en el ejercicio
                    <a href="https://www.hackerrank.com/challenges/cube-summation/problem">Cube Summation</a>
                    es una aproximación cercana a la funcionalidad descrita, implementada en una aplicación web,
                    En el ejercicio nos proponen un sistema capás de crear matrices cubicas `n*n*n` modificar
                    cada uno de sus elementos y sumar los elementos que se encuentran contenidos entre dos de
                    sus puntos, Esto mediante texto plano el formato de entrada cuenta con 4 tipos de registro
                    los cuales son:
                </p>
                <ul>
                    <li>`T`: Test Case - es un numero único que se utiliza para el seguimiento del caso de prueba</li>
                    <li>`N M`: son dos números que representan la dimensión de la matriz y la cantidad de operaciones a realizar sobre ella</li>
                    <li>`UPDATE x y z W`: modifica el elemento `(x,y,z)` con el valor `W`</li>
                    <li>`QUERY x1 y1 z1 x2 y2 z2`: obtiene la suma de los elementos presentes entre las coordenadas `(x1,y1,z1)` y `(x2,y2,z2)` </li>
                </ul>
                <p>las restricciones a tener en cuenta a la hora de realizar las operaciones son:</p>
                <ul>
                    <li>{'1 <= T <= 50'}</li>
                    <li>{'1 <= N <= 100'}</li>
                    <li>{'1 <= M <= 1000'}</li>
                    <li>{'1 <= x1 <= x2 <= N'}</li>
                    <li>{'1 <= y1 <= y2 <= N'}</li>
                    <li>{'1 <= z1 <= z2 <= N'}</li>
                    <li>{'1 <= z, y, z <= N'}</li>
                    <li>{'-10'}<sup>9</sup>{'<= W <= 10'}<sup>9</sup></li>
                </ul>
                <p>
                    La aplicación cuenta con u sistema de ayudas y sugerencias con objeto de hacer mas fácil su uso
                    lo puedes encontrar en la parte baja de la entrada de texto, el botón procesar se activara automáticamente
                    siempre que la entrada sea valida en su totalidad
                </p>
            </div>
        );
    }
}

export default Instructions;