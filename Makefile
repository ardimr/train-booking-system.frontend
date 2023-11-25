FRONTEND_TAG := ardimr/train-booking-system.frontend:latest

build_frontend_image:
	docker image build  --build-arg="NEXT_PUBLIC_BACKEND_ENDPOINT=127.0.0.1:8080" -t $(FRONTEND_TAG) .