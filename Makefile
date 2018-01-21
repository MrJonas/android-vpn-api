SERVER_IP:="45.63.74.224"
IMAGE_NAME:="vpn_app"
CONTAINER_NAME:="vpn_app"
PORT:="80"
APP_NAME:="android-vpn-api"
REPO:="git@github.com:MrJonas/android-vpn-api.git"


PHONY: deploy
deploy:
		@echo "-------------------------------------------------------"
		@echo "Uploading and running app in a docker container"
		@echo "-------------------------------------------------------"
		@ssh root@$(SERVER_IP) \
				" rm -rf $(APP_NAME); \
				git clone $(REPO); \
				cd $(APP_NAME) ; \
				docker stop $(CONTAINER_NAME) ; \
				docker rm $(CONTAINER_NAME) ; \
				docker build --tag $(IMAGE_NAME) . ; \
				docker run -p $(PORT):4200 --name $(CONTAINER_NAME) -d $(IMAGE_NAME) ; \
				"