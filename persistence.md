
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
docker run /*cmds*/ --mount type=bind,src="$(pwd)/secrets",target=/env <image-name>
```
Where:
```powershell
--mount 
    type=bind     => bind mount
    src="$(pwd)/secret"  => sets source directory (on local fs) to <pwd>/secrets
    target=/env   => links(and creates) root/env dir in container, and links to src dir in local fs 
                  
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