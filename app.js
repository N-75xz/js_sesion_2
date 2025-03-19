//Ejercicio 01
/*
 * Crea un formulario en el que el usuario pueda elegir entre tres opciones:

    Obtener la fecha actual en milisegundos.
    Obtener la fecha actual en formato dd-MM-yyyy.
    Obtener la hora actual en formato hh:mm:ss.

Cuando el usuario haga clic en un botón, se debe mostrar el resultado correspondiente en la página sin recargarla.

    [!INFO] Usa el objeto Date para gestionar la fecha.

 */
document.addEventListener("DOMContentLoaded", () => {
    const formularioEjercicio = document.getElementById("ejercicio1"); // Corrected ID
    const resultado = document.getElementById("resultado");

    if (formularioEjercicio) {
        formularioEjercicio.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form submission
            const fecha = new Date();
            const opcion = document.querySelector('input[name="option"]:checked'); // Get selected radio button

            if (!opcion) {
                resultado.innerHTML = "Por favor, selecciona una opción.";
                return;
            }

            switch (opcion.value) {
                case "1":
                    resultado.innerHTML = `Fecha en milisegundos: ${fecha.getTime()}`;
                    break;
                case "2":
                    if (fecha.getDate() < 10) {
                        resultado.innerHTML = `Fecha actual: 0${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;
                    }
                    if (fecha.getMonth() < 10) {
                        resultado.innerHTML = `Fecha actual: ${fecha.getDate()}-0${fecha.getMonth() + 1}-${fecha.getFullYear()}`;
                    }
                    if (fecha.getDate() < 10 && fecha.getMonth() < 10) {
                        resultado.innerHTML = `Fecha actual: 0${fecha.getDate()}-0${fecha.getMonth() + 1}-${fecha.getFullYear()}`;
                    }
                    break;
                case "3":
                    if (fecha.getHours() < 10) {
                        resultado.innerHTML = `Hora actual: 0${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
                    }
                    if (fecha.getMinutes() < 10) {
                        resultado.innerHTML = `Hora actual: ${fecha.getHours()}:0${fecha.getMinutes()}:${fecha.getSeconds()}`;
                    }
                    if (fecha.getSeconds() < 10) {
                        resultado.innerHTML = `Hora actual: ${fecha.getHours()}:${fecha.getMinutes()}:0${fecha.getSeconds()}`;
                    }

                    break;
                default:
                    resultado.innerHTML = "Opción no válida.";
            }
        });
    } else {
        console.error("El formulario con ID 'ejercicio1' no se encontró.");
    }
    //Ejercicio 02
    //Crea un formulario donde el usuario pueda ingresar un número del 1 al 99 y, al hacer clic en un botón, se muestre en la página la tabla de multiplicar de ese número.
    const formularioEjercicio2 = document.getElementById("ejercicio2");
    formularioEjercicio2.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        const n = document.getElementById("numeroEj2").value;
        let resultadoContainer = document.getElementById("resultadoEj2Container");
        if (!resultadoContainer) {
            resultadoContainer = document.createElement("div");
            resultadoContainer.id = "resultadoEj2Container";
            document.body.appendChild(resultadoContainer);
        }
        resultadoContainer.innerHTML = "";
        resultadoContainer.innerHTML = `<h3>Tabla de multiplicar del número ${n}</h3>`;
        for (let i = 1; i <= 10; i++) {
            const resultado = n * i;
            const p = document.createElement("p");
            p.textContent = `${n} x ${i} = ${resultado}`;
            resultadoContainer.append(p);
        }
    });

    //Ejercicio 3
    //Crea un formulario donde el usuario pueda ingresar un número y, al hacer clic en un botón, se muestre en la página el factorial de ese número.
    const formularioEjercicio3 = document.getElementById("ejercicio3");
    formularioEjercicio3.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        const n = document.getElementById("numeroEj3").value;
        let resultadoContainer = document.getElementById("resultadoEj3Container");
        if (!resultadoContainer) {
            resultadoContainer = document.createElement("div");
            resultadoContainer.id = "resultadoEj3Container";
            document.body.appendChild(resultadoContainer);
        }
        resultadoContainer.innerHTML = "";
        resultadoContainer.innerHTML = `<h3>Factorial de ${n}</h3>`;
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        resultadoContainer.innerHTML += `<p>${n}! = ${factorial}</p>`;
    });
    //Ejercicio 4
    /**
     * Crea un formulario donde el usuario pueda:
     * 1. Elegir una operación matemática (suma, resta, multiplicación, división).
     * 2. Ingresar dos números.
     * 3. Presionar un botón para realizar la operación y mostrar el resultado en la página.
     * Si el usuario intenta dividir por 0, debe mostrarse un mensaje de error en pantalla indicando que la operación no es válida (pantalla != consola).
     */
    const formularioEjercicio4 = document.getElementById("ejercicio4");
    formularioEjercicio4.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        const operacion = document.querySelector('input[name="operacion"]:checked').value;
        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);
        let resultadoContainer = document.getElementById("resultadoEj4Container");
        if (!resultadoContainer) {
            resultadoContainer = document.createElement("div");
            resultadoContainer.id = "resultadoEj4Container";
            document.body.appendChild(resultadoContainer);
        }
        resultadoContainer.innerHTML = "";
        if (!operacion) {
            resultado.innerHTML = "Por favor, selecciona una opción.";
            return;
        }
        let resultado = 0;
        switch (operacion.value) {
            case "suma":
                resultado = num1 + num2;
                break;
            case "resta":
                resultado = num1 - num2;
                break;
            case "multiplicacion":
                resultado = num1 * num2;
                break;
            case "division":
                if (num2 === 0) {
                    resultado = "No se puede dividir por 0.";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operación no válida.";
                break;
            }
            resultadoContainer.innerHTML = `<h3>Resultado:</h3><p>${resultado}</p>`;
    });

    
});

