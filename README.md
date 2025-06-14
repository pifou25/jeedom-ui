<img align="right" src="https://raw.githubusercontent.com/pifou25/docker-jeedom/master/public/img/favicon.ico" width="100" height="100" />

[![Docker Build and Push](https://github.com/pifou25/jeedom-ui/actions/workflows/docker-build.yml/badge.svg?branch=master)](https://github.com/pifou25/jeedom-ui/actions/workflows/docker-build.yml)
![Docker Pulls](https://img.shields.io/docker/pulls/pifou25/jeedom-ui)
![GitHub forks](https://img.shields.io/github/forks/pifou25/jeedom-ui)
![GitHub Repo stars](https://img.shields.io/github/stars/pifou25/jeedom-ui)

# Jeedom Angular User-Interface

Fully compatible with [JSON RPC Jeedom API](https://doc.jeedom.com/fr_FR/core/4.4/jsonrpc_api)

Built into a simple Docker container: https://hub.docker.com/r/pifou25/jeedom-ui

docker image may be available also on Github repository [ghcr.io](https://github.com/pifou25/jeedom-ui/pkgs/container/jeedom-ui)

`docker pull ghcr.io/pifou25/jeedom-ui:master`

or [quay.io](https://quay.io/repository/pifou25/jeedom-ui)

`docker pull quay.io/pifou25/jeedom-ui`

The `Dockerfile.dev` is for development only: build and serve the code over WSL, from the root of the project:

`docker build -t jeedom-ui-dev -f Dockerfile.env .`

`docker run --name jeedom-ui-dev -v "$PWD":/app -p 4200:4200 --rm -ti jeedom-ui-dev`
