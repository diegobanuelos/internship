## Obtener el top 10 de las palabras mas frecuentes

El objetivo del ejercicio principal es desarrollar un programa, en conjunto con sus pruebas unitarias utilizando JEST. La intención es entender a mayor profundidad la mecánica y patrones de programación para diseñar y al mismo tiempo facilitar las pruebas.

El ejercicio consiste en desarrollar una programa que descarge una serie de textos via http y los procese para obtener un arreglo con el top 10 de palabras más utilizadas junto con el número de ocurrencias en orden descendente para cada archivo. Esto se utilzará para mostrar un componente de una nube de palabras, muy útil para ver rápidamente tendencias en textos o conversaciones.

El programa debe combinar el top 10 de palabras para cada archivo en uno solo e imprimir el TOP 10 de todos los resultados combinados.

# Ejemplos de entradas/salidas

1. 'a bb bb ccc ccc ccc' -> [{word:'ccc', count:3}, {word:'bb',count:2}, {word:'a', count:1}]
2. 'hola'-> [{word:'hola', count:1}]
3. 'Hola. Sin puntos.' ->  [{word:'hola', count:1}, {word:'sin',count:1}, {word:'puntos', count:1}]

# Consideraciones

- Todas las palabras tienen solo carácteres de la A a la Z y pueden incluir un solo apóstrofe o comilla simple (').
- Debe ignorar cualquier otro caracter que no sean los antes descritos.
- La cadena debe convertirse a minúsculas antes de ser procesada, por lo que "HOLA" y "hola" serán la misma palabra. 
- La función deberá devolver un arreglo con un máximo de 10 palabras únicas encontradas y el número de ocurrencias.
- Si hay empate en el conteo, ordene por palabra de forma descendente (a->z).
- Refactoriza el código para facilitar las pruebas y utiliza **ES6**.


# Urls a descargar
https://raw.githubusercontent.com/axios/axios/v1.x/LICENSE
https://raw.githubusercontent.com/lodash/lodash/master/LICENSE
https://raw.githubusercontent.com/moment/moment/develop/LICENSE



