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
-i => interactive(kind of opposite of -d) runs and opens a shell in container (closes with CONTROL + D)
-p <client-port>:<image-port> => maps the ports to be used
```
Run terminal in background container:
```powershell
docker exec <container-id>
```