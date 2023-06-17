# Cliente-becas

Corresponde al backend y frontend del sistema de recomendación. En este repositorio se desarrolla el cliente donde se presentaron los datos y recomendaciones recopiladas en el desarrollo del sistema recomendador y del scrapper de datos.

# Dev info :information_source:

- El backend fue construido sobre Fast api como web framework y Python 3.10.7
- El frontend se desarrollo usando Vite 4.2.0 + React 18.2.0, Tailwind 3.3.1 css como framework de estilos, daisy UI 2.51.5 para algunos componentes.
- Tener make instalado.

# Dockerizar  y correr docker del proyecto :whale2:

Para ahorrar tiempo instalando runtimes y dependencias se puede correr el siguiente comando para levantar un contenedor de docker, el contenedor incluye backend y frontend.
Tenga en cuenta que debe contar con el runtime de docker para que funcione.

- *Dockerizar:* Tendrá disponible el backend en el puerto 3000 y el frontend en el puerto 80.

```shell
 make dockerize
```

- *Detener proyecto y borrar contenedor:*

```shell
 make stop
```
# Correr app en local :computer:

## Preliminares:

* Tener el runtime de python y pip instalados, la versión de python debe ser 3.10.7
* Tener el runtime de nodejs instalado en la versión 18.16.0
## Correr API

- Primero instale las dependencias del backend

```shell
cd backend && pip install -r requirements.txt
```

- Luego inicie el backend:

    El Backend corre en el puerto 3000 y puede ver la documentación en el endpoint /docs

```shell
make back
```
## Correr Frontend

- Primero instale las dependencias del frontend
```shell
cd frontend && npm install
```
- Luego corra el frontend:

    El frontend se ejecuta en el puerto 5173

```shell
make front
```

## Autor :black_nib:
Jhoan Sebastian Andica - Estudiante de ingeniería de sistemas UV.