# library_demo
Book Catalog using Django, DRF and Vue

Live demo : http://52.30.196.202/

deployed on aws using docker

## admin login

username : admin

password : admin


# Installation

* copy .env_example to .env inside docker/web and docker/postgres
* update the environment variables with valid data
* update `axios.defaults.baseURL = 'http://localhost/'` with your server's ip address
* run `cd src/frontend/`
* run `npm install`
* run `npm run build`
* run `docker-compose up -d`
* go to your server's IP

* you can create a super user by following the next steps
* run `docker-compose exec web bash`
    * in the shell run `python manage.py createsuperuser` and fill in the required fields
