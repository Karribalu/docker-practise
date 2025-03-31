## Docker

### Basic commands

<ol>
<li> docker build . </li>
<li> docker run image_name</li>
&nbsp &nbsp Runs the docker image in attach mode
<li> docker start </li>
&nbsp &nbsp Runs the docker image in detach mode
<li> docker attach image_id </li>
&nbsp &nbsp Attaches to the running docker image
<li> docker run -it image_id</li>
&nbsp &nbsp -it stands for -interactive and t for TTY terminal
<li> docker start -a -i image_id</li>
&nbsp &nbsp -a for attaching and -i for interactive
<li> docker rm container_id</li>
&nbsp &nbsp Removes the docker container
<li> docker images</li>
&nbsp &nbsp Displays all the images
<li> docker image prune</li>
&nbsp &nbsp Removes all the images created <br>
<i>The containers built using the images should be removed to delete the image</i>
<li> docker rmi image_id</li>
&nbsp &nbsp Displays all the images
<li> docker run --rm image_id</li>
&nbsp &nbsp Creates and runs the docker container, But will be deleted as soon as it is stopped
<li> docker image inspect image_id</li>
&nbsp &nbsp Displays the metadata of the image built including the layers
<li> docker cp <i>source</i> <i>dest </i> </li>
&nbsp &nbsp Copies files from system to container
&&nbsp &nbsp ex: docker cp file interesting_bartik:/ OR docker cp interesting_bartik:/file test
<li> docker build -t sample:tag .</li>
&nbsp &nbsp Adds a tag to the docker image with the name sample
</ol>
