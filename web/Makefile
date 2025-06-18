.PHONY: clone install-server install-web start-backend start-frontend fix-deps-backend fix-deps-frontend help

REPO = git@github.com:lucasbarzan/gobarber.git

clone:
	git clone $(REPO)

install-server:
	npm --prefix server install

install-web:
	npm --prefix web install

fix-deps-backend:
	npm --prefix server install --legacy-peer-deps

fix-deps-frontend:
	npm --prefix web install --legacy-peer-deps

start-backend:
	npm --prefix server run dev:server

start-frontend:
	npm --prefix web start

help:
	@echo "Makefile commands:"
	@echo "  clone             - Clona o repositório"
	@echo "  install-server    - Instala dependências do backend"
	@echo "  install-web       - Instala dependências do frontend"
	@echo "  fix-deps-backend  - Instala backend com --legacy-peer-deps"
	@echo "  fix-deps-frontend - Instala frontend com --legacy-peer-deps"
	@echo "  start-backend     - Roda o backend"
	@echo "  start-frontend    - Roda o frontend"
