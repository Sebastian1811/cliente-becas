# cliente-becas
Backend y frontend del sistema de recomendación. En este repositorio se desarrolla el cliente donde se presentaron los datos y recomendaciones recopiladas en el desarrollo del sistema recomendador y del scrapper de datos.



# Como correr el proyecto

Ejecutar: 
Este comando esta en desuso
```shell
docker build --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa)" -t cliente_becas:v1 .
```
# Correr app actualizado

Primero construya una version actualizada del proyecto:

```shell
make build
```
Luego corra una instancia del proyecto:

```shell
make run
```
