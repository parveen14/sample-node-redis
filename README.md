# Project Title

Save total refresh count in redis

Used docker to install project
Upload docker on ecs using terraform

## Getting Started



### Prerequisites

Softwares required

```
Docker
Docker Compose
```

### Installing

Follow the steps to install the application

1) git clone https://github.com/parveen14/sample-node-redis.git
2) cd sample-node-redis
3) docker-compose build
4) docker-compose up --scale web=2

Here --scale is used scale up the app and we are scaling the web 


# Project Title

Use Terraform to upload app to ecs.
You need to upload your docker image to some docker image registry.

## Getting Started

Replace the docker image path in task-definition/service.json

### Prerequisites

Softwares required

```
AWSCLI
Terraform
```

### Installing

- You must have aws var setup on your local machine to run following commands

Follow the steps:

1) terrform init
2) terraform apply

If terraform apply failed with an error, read the error message and fix the error that occurred. At this stage, it is likely to be a syntax error in the configuration.