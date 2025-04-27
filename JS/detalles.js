document.addEventListener("DOMContentLoaded", function () {
    const desplegaHeaders = document.querySelectorAll('.desplega');
    const contenidoDinamico = document.getElementById('contenidoDinamico');
    const contenidoInicial = contenidoDinamico.innerHTML;
    const headerPrincipal = document.getElementById('headerPrincipal');

    // Configuración de las prácticas desplegables
    desplegaHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        let content = header.nextElementSibling;

        if (!content || !content.classList.contains('desplega-content')) {
            const newContent = document.createElement('div');
            newContent.style.display = 'none';
            newContent.style.paddingLeft = '10px';
            newContent.style.marginTop = '10px';
            
            newContent.classList.add('desplega-content');
            newContent.innerHTML = `
                <div class="lista-practicas">
                    <p><a href="#" class="practica-link" data-archivo="01.Alert.html" data-numero="1">Práctica 1: Alert</a></p>
                    <p><a href="#" class="practica-link" data-archivo="02.Mensaje.html" data-numero="2">Práctica 2: Mensaje</a></p>
                    <p><a href="#" class="practica-link" data-archivo="03.Arreglo.html" data-numero="3">Práctica 3: Arreglo</a></p>
                    <p><a href="#" class="practica-link" data-archivo="04.Numero.html" data-numero="4">Práctica 4: Número</a></p>
                    <p><a href="#" class="practica-link" data-archivo="05.ParVerificaClean.html" data-numero="5">Práctica 5: Verificar Par</a></p>
                    <p><a href="#" class="practica-link" data-archivo="06.DiasSemana.html" data-numero="6">Práctica 6: Días Semana</a></p>
                    <p><a href="#" class="practica-link" data-archivo="07.suma.html" data-numero="7">Práctica 7: Suma</a></p>
                    <p><a href="#" class="practica-link" data-archivo="08.Factorial.html" data-numero="8">Práctica 8: Factorial</a></p>
                    <p><a href="#" class="practica-link" data-archivo="09.Cadenas.html" data-numero="9">Práctica 9: Cadenas</a></p>
                    <p><a href="#" class="practica-link" data-archivo="10.CadenasPalindromo.html" data-numero="10">Práctica 10: Palíndromo</a></p>
                    <p><a href="#" class="practica-link" data-archivo="11.BasicoDOM.html" data-numero="11">Práctica 11: DOM Básico</a></p>
                    <p><a href="#" class="practica-link" data-archivo="12.BasicoDomVisualiza.html" data-numero="12">Práctica 12: Visualizar</a></p>
                    <p><a href="#" class="practica-link" data-archivo="13.MuestraOculta.html" data-numero="13">Práctica 13: Mostrar/Ocultar</a></p>
                    <p><a href="#" class="practica-link" data-archivo="14.AgregaElimina.html" data-numero="14">Práctica 14: Agregar/Eliminar</a></p>
                    <p><a href="#" class="practica-link" data-archivo="15.AgregaElemento.html" data-numero="15">Práctica 15: Agregar Elemento</a></p>
                    <p><a href="#" class="practica-link" data-archivo="16.AgregaEliminaV2.html" data-numero="16">Práctica 16: Agregar/Eliminar</a></p>
                    <p><a href="#" class="practica-link" data-archivo="17.CalificaTabla.html" data-numero="17">Práctica 17: Califica Tabla</a></p>
                </div>
            `;
            
            header.insertAdjacentElement('afterend', newContent);
            content = newContent;
        }

        header.addEventListener('click', function () {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                header.classList.add('activo');
            } else {
                content.style.display = 'none';
                header.classList.remove('activo');
            }
        });
    });

    // Función para manejar el iframe
    function configurarIframe(iframe, archivo) {
        iframe.src = archivo;
        iframe.style.width = '100%';
        iframe.style.height = '800px';
        iframe.style.border = 'none';
        
        // Reemplazar el contenido actual con el iframe
        contenidoDinamico.innerHTML = '';
        contenidoDinamico.appendChild(iframe);

        // Cambiar el título de la página
        document.title = `${archivo} | Prácticas`;

        // Actualizar header
        if (headerPrincipal) {
            headerPrincipal.innerText = `Equipo 6 - Ejercicios JavaScript - ${archivo}`;
        }
    }

    // Manejo de clics en enlaces
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('practica-link')) {
            e.preventDefault();
            const archivo = e.target.getAttribute('data-archivo');

            // Crear iframe
            const iframe = document.createElement('iframe');
            configurarIframe(iframe, archivo);
        }

        // Cargar el contenido de "Contáctanos" cuando se haga clic en el enlace
        if (e.target.id === "contactanos-link") {
            e.preventDefault();
            
            // Crear iframe para cargar el archivo contactanos.html
            const iframe = document.createElement('iframe');
            iframe.src = 'contactanos.html';
            iframe.style.width = '100%';
            iframe.style.height = '800px';
            iframe.style.border = 'none';
            
            // Reemplazar el contenido con el iframe
            contenidoDinamico.innerHTML = '';
            contenidoDinamico.appendChild(iframe);

            document.title = 'Contacto | Prácticas';
            if (headerPrincipal) {
                headerPrincipal.innerText = 'Equipo 6 - Ejercicios JavaScript - Contacto';
            }
        }

        // Restaurar contenido inicial
        document.querySelector('a[href="Index.html"]').addEventListener('click', function (e) {
            contenidoDinamico.innerHTML = contenidoInicial;
            document.title = 'Inicio | Prácticas';
            if (headerPrincipal) {
                headerPrincipal.innerText = 'Equipo 6 - Ejercicios JavaScript';
            }
        });
    });
});
