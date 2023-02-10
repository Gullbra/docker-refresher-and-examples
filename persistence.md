
# Persistence

## Volumes

Create volume:
```powershell
docker volume create <volume-name>
```

Mount container with Volume:
```powershell
docker run /*cmds*/ --mount type=volume,src=<volume-name>,target=<path-in-container-to-store-volume> <image-name>
```

Look at volume(s):
```
docker volume inspect
```

## Bind Mounts
Mount:
```powershell
docker run -dp 3000:3000 -w /app --mount type=bind,src="$(pwd)",target=/app node:18-alpine sh -c "npm install && npm run dev"
```
Where:
```powershell
-w /app => sets the directory of the command

--mount 
    type=bind     => bind mount
    src="$(pwd)"  => sets source to pwd
    target=/app   => sets mount directory in container 

node:18-alpine sh -c "npm install && npm run dev" => command to be run (and shell and platform)
                  
```

## Table

<table>
  <tr>
    <th></th>
    <th>Volume</th>
    <th>Bind Mount</th>
  </tr>

  <tr>
    <td>Storage</td>
    <td>
      In a FS managed by docker
    </td>
    <td>
      In the hosts FS
    </td>
  </tr>

  <tr>
    <td>Access</td>
    <td>
      Via docker only
    </td>
    <td>
      Any process with FS access
    </td>
  </tr>

  <tr>
    <td>Data sharing</td>
    <td>
      Multiple container can use the same volume at the same time
    </td>
    <td>
      Only one container can use the data at the same time
    </td>
  </tr>

  <tr>
    <td>Use Cases</td>
    <td>
      Cloud and remote friendly
    </td>
    <td>
      Config, source code
    </td>
  </tr>

</table>