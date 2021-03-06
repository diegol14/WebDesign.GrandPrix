function tablaPosiciones() {
    //Creamos la variable JQuery que albergará la tabla de posiciones
    var tBodyNode = $('tbody');
    for (let i = 0; i < carrera.length; i++) {

        let identificador = ((i + 1).toString());

        let trNode = document.createElement('tr'); // Generamos la Fila
        tBodyNode.append(trNode); // Agregamos la fila al tbody

        let tdPositionNode = document.createElement('td'); //Creamos la  columna
        tdPositionNode.textContent = ((i + 1).toString() + "º"); // Para que las posiciones empiecen en 1
        trNode.append(tdPositionNode); // Agregamos la columna posicion a la fila

        let tdCorredorNode = document.createElement('td'); //Creamos la  columna
        let tdimageNode = document.createElement('img');
        tdimageNode.src = carrera[i].imagen.src;
        tdimageNode.alt = ("Corredor" + identificador);
        tdimageNode.height = "40";
        tdimageNode.width = "57";
        tdCorredorNode.append(tdimageNode);
        trNode.append(tdCorredorNode);

        let tdNombreNode = document.createElement('td');
        tdNombreNode.textContent = carrera[i].nombre;
        trNode.append(tdNombreNode); // Agregamos la columna nombre a la fila

        let tdIdNode = document.createElement('td');
        tdIdNode.textContent = carrera[i].identificador;
        trNode.append(tdIdNode); // Agregamos la columna nombre a la fila

        let tdPxRecorridos = document.createElement('td');
        tdPxRecorridos.textContent = (carrera[i].pxRecorridos) + " px";
        trNode.append(tdPxRecorridos); // Agregamos la columna pxRecorridos a la fila

        let tdVelocidad = document.createElement('td');
        tdVelocidad.textContent = (carrera[i].pxRecorridos / carrera[i].time).toFixed(3) + " px/s";
        trNode.append(tdVelocidad); // Agregamos la columna nombre a la fila

    }
}


function carreraShow() {

    for (let i = 0; i < carrera.length; i++) {

        let identificador = ((i + 1).toString());

        var carreraNode = $("#" + identificador);
        let tdimageNode = document.createElement('img');
        tdimageNode.src = carrera[i].imagen.src;
        tdimageNode.alt = ("Corredor" + identificador);
        tdimageNode.height = "40";
        tdimageNode.width = "60";
        carreraNode.append(tdimageNode);
    }
}