# syntax=docker/dockerfile:1
FROM node
WORKDIR /.
COPY . .
RUN ["npm", "i"]

# Can be commented out and run from command if container is run
# interactively(-it) with a shell (like bash)
RUN ["npm", "run", "transpile"]

# Start upp when run - otherwise run interactivly
CMD ["npm", "start"]

### cheat-sheet build command:
# docker build -t simple-node-mongodb .

### cheat-sheet run command (detached):
# docker run -dp 3000:3000 --mount type=bind,src="$(pwd)/env",target=/env simple-nodets-mongodb

### cheat-sheet run command (interactive):
# docker run -itp 3000:3000 --mount type=bind,src="$(pwd)/env",target=/env simple-nodets-mongodb bash