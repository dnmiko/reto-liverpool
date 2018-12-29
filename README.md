Frontend del primer ejercicio del reto Liverpool

## Detalles del proyecto

- Desarrollado utilizando `create-react-app` para generar la estructura inicial del proyecto.
- Se utiliza React Router para el ruteo entre los componentes del proyecto.
- Conexión directa con el backend de este primer ejercicio. Repositorio disponible [aquí](https://github.com/dnmiko/retoLiverpool).
- Se cuenta con una primer pantalla de login en la que pueden acceder usuarios con permisos generales o permisos de administrador. 
- Se cuenta con un módulo en el cual se pueden agregar, eliminar y actualizar productos en la base de datos (Módulo de administración). 
- Se cuenta con un módulo en el cual se enlistan todos los productos agregados en la base de datos (Lista de productos).
- Se agrega la opción de 'logout' del proyecto, para eliminar el token generado por el backend del navegador de internet.

## Consideraciones adicionales

- Dentro del módulo de administración de productos, se tienen tres métodos (agregar, eliminar y actualizar). Cada uno de ellos necesita de ciertos parámetros para funcionar. Por cuestiones de tiempo y considerando que es una prueba técnica en la que el tiempo es importante, se generó solamente un formulario para los tres métodos, por lo que es necesario distinguir qué parámetros ingresar para cada uno de ellos:
    - Agregar. Requiere de todos los parámetros del formulario, excepto del ID del producto.
    - Eliminar. Requiere solamente del ID del producto para funcionar.
    - Actualizar. Requiere de todos los parámetros del formulario, esto es, el ID del producto y la información completa del producto. 

- El ID de cada uno de los productos se encuentra en su thumbnail en el módulo de 'Lista de productos'.

## Mejoras al proyecto

Debido a la restricción de tiempo, se desarrolló un prototipo de una vista mucho más robusta. Algunas de las mejoras que se encuentran para un producto mucho más robusto son:

- Generar una vista para cada uno de los métodos. De esta manera el sistema será mucho más usable para el usuario, sin la necesidad de definir los parámetros que deben ser ingresados para cada uno de los métodos.
- El diseño de la vista de 'Lista de productos' puede optimizarse para mostrar una cierta cantidad de filas y columnas según la cantidad de productos que se obtengan del backend.

## Créditos

Desarrollado por [Diego Fernando Cifuentes Jiménez](https://github.com/dnmiko) 

