Build:
```powershell
docker build -t <image-name> .
```
```powershell
-t  => tagging(naming) the image
.   => looking for Dockerfile in pwd
```
Run:
```powershell
docker run -dp 3000:3000 <image-name>
```
```powershell
-d  => detached(background). Wont be accessible through current shell.
-p <client-port>:<image-port> => maps the ports to be used
```

Shell in container:
```powershell
docker run -it 3000:3000 <image-name> bash
```
```powershell
-i    => interactive(kind of opposite of -d) runs and opens a shell in container (closes with CONTROL + D)
bash  => select the type of shell
```

Run terminal in background(-d) container:
```powershell
docker exec <container-id>
```

Run start up commands from terminal:

```powershell
docker run -w /app node:18-alpine sh -c "npm install && npm run dev"
```

```powershell
-w /app => sets the directory of the command

node:18-alpine sh -c "npm install && npm run dev" => command to be run (and shell and platform)
```