help:
# 	@echo -e '\n'
# 	@echo Variables:
# 	@echo -e '\t' IMAGE_NAME'  ': Nome da imagem docker usado apenas nas opções \'build-docker\' e \'build-docker-push\'
# 	@echo -e '\t' TAG'         ': Tag de versão da imagem docker usado apenas nas opções \'build-docker\' e \'build-docker-push\'
# 	@echo -e '\t' SONAR_URL'   ': URL do SonarQube usada somente em \'sonar-scanner\'
# 	@echo -e '\t' SONAR_KEY'   ': KEY de login do SonarQube usada somente em \'sonar-scanner\'
# 	@echo -e '\n'
# 	@echo Options:

# 	@echo -e '\t' build-docker'      ': Cria o build do Next / e imagem docker usando as variáveis 'IMAGE_NAME':'TAG'
# 	@echo -e '\t' build-docker-push' ': Cria a imagem docker usando as variáveis 'IMAGE_NAME':'TAG' e faz push pro Registry
# 	@echo -e '\t' test'              ': Executa os testes com coverage, relatório dentro de src/test
# 	@echo -e '\n'
# 	@echo Exemples:
# 	@echo -e '\t' \# make test
# 	@echo -e '\t' \# make build-go
# 	@echo -e '\t' \# TAG=1.0.0 IMAGE_NAME=mydocker make build-docker
# 	@echo -e '\t' \# TAG=1.0.0 IMAGE_NAME=mydocker make build-docker-push
# 	@echo -e '\n'

build-next: sonar-scanner
	yarn build

build-docker: build-next
ifndef TAG
	$(error TAG is not set)
endif

ifndef IMAGE_NAME
	$(error IMAGE_NAME is not set)
endif
	docker build . -t sa-saopaulo-1.ocir.io/grtenqmoni5x/$(IMAGE_NAME):$(TAG)

build-docker-push: build-docker
ifndef TAG
	$(error TAG is not set)
endif

ifndef IMAGE_NAME
	$(error IMAGE_NAME is not set)
endif
	docker push sa-saopaulo-1.ocir.io/grtenqmoni5x/$(IMAGE_NAME):$(TAG)

install-dependency:
	yarn install

test: install-dependency
	yarn test

sonar-scanner: test
ifndef SONAR_URL
	$(error SONAR_URL is not set)
endif

ifndef SONAR_KEY
	$(error SONAR_KEY is not set)
endif	
	docker run --rm -e SONAR_HOST_URL="${SONAR_URL}" -e SONAR_LOGIN="${SONAR_KEY}" -v "${PWD}:/usr/src" sonarsource/sonar-scanner-cli
