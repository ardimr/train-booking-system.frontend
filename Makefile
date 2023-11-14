FRONTEND_TAG := ardimr/tbs-frontend:dev

build_frontend_image:
	docker image build -t $(FRONTEND_TAG) .