# cliente-becas
Backend y frontend del sistema de recomendación. En este repositorio se desarrolla el cliente donde se presentaron los datos y recomendaciones recopiladas en el desarrollo del sistema recomendador y del scrapper de datos.

# Dev info:

- El backend fue construido sobre Fast api como web framework y Python 3.10.7
- El frontend se desarrollo usando Vite + React, Tailwind css como framework de estilos, daisy UI para algunos componentes.

# Dockerizar  y correr docker del proyecto

- *Dockerizar:* 
```shell
 make build
```

- *Correr contenedor:*

```shell
 make run
```
# Correr app en local

- Primero inicie el backend:

    El Backend corre en el puerto 3000 y puede ver la documentación en el endpoint /docs

```shell
make back
```

- Luego corra el frontend:

    El frontend corre en el puerto 5173

```shell
make front
```