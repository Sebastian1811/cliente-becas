# Define la variable de la imagen y la versión base
IMAGE_NAME := cliente-becas
BASE_TAG := v1.0.0
# Define la variable de la versión de la imagen
VERSION := $(shell date +'%Y.%m.%d.%H.%M.%S')
CONTAINER_NAME := cliente-becas-develop

.PHONY: build

build-back:
	docker build --file backend/dockerfile -t $(IMAGE_NAME):latest  -t $(IMAGE_NAME):$(VERSION) .
run:
	docker run --name $(CONTAINER_NAME) -dt -v f:/universidad/cliente-becas:/app -p 3000:3000 $(IMAGE_NAME):latest
stop:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)
back:
	uvicorn backend.app:app --reload --port 3000
front:
	cd frontend && npm run dev