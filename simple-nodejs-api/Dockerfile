# syntax=docker/dockerfile:1
FROM node
WORKDIR /.
COPY . .
RUN ["npm", "i"]

# only one CMD in dockerfile will be run(the last one).
# RUN commands will be called on (docker) build, but 
# CMD will be run on (docker) run
CMD ["npm", "start"]

# Build args in keyvalue form(supplied with default) can
# be changed with --build-arg <var name>=<var value> when
# calling docker build
ARG ENV_API_PORT=3080

# Connecting containers port 3080 to the outside:
# needs to be maped when calling docker run:
# docker run -p 4200:3080 <image name> .
# connects to containers port 3080 from port 4200. E.g:
# the service is accessed through port 4200
EXPOSE ${ENV_API_PORT}

# calling docker run with -it will make the conteiner
# Stop(crash?) when typing control + C in terminal.