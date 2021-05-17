# Sistecrédito Reto frontend

Reto frontend para Sistecrédito. A continuación los pasos para correr el proyecto.

## 1. Instalar dependencias

Para esto debemos correr el comando: `npm i` el cual descargara todas nuestras dependencias.

## 2. Json server

Para correr el proyecto lo primero que debemos hacer es correr el servidor de **json-server** que nos ayuda a trabajar como si tuviesemos una API Rest.
Para esto debemos correr el comando: `npm run json-server` de esta manera ya tendremos la API corriendo. La API corre por el `http://localhost:3000`.

## 3. Correr el proyecto

Para correr el proyecto debemos ejecutar el comando `npm run start` el cual nos permite levantar nuestro poryecto en angular. Actualmente el proyeco corre por el `http://localhost:4200`.

## 4. Correr las pruebas unitarias

Para correr las pruebas unitarias y ver la cobertura ejecutamos el comando `ng test --code-coverage`.

## Generalidades
 - Se trabaja con lazy loading para las rutas
 - Se trabaja con modulos por separado
 - Se trabaja con componentes smart y presentation para tratar de reutilizar al máximo los componentes de presentation
 - Los formularios se trabajan de manera independiente cada uno para poder reutilizarlos y embeberlos en otros formularios mas grandes
 - Se hace uso de la librería de ng-bootstrap para el uso de modales, dropdowns
 - Se hace uso de la librería de ng2-currency-mask para que el ingreso de valores en precios sea fácil
 - Se hace uso de la librería de ngx-spinner para mostrar el spinner mientras el usuario realiza alguna operación que consuma un servicio externo
 - Se hace uso de la librería de ngx-toastr para mostrar las alertas informando lo que sucede
 - Se mejora y actualiza el código de la directiva ngx-errors creada por [Todd Motto](https://github.com/ultimatecourses/ngx-errors) para ayudar a mostrar los mensajes de error de los formularios reactivos
