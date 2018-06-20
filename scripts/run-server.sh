#!/bin/bash

set -xeo pipefail

PGHOST=localhost
PGUSER=dbuser
PGPASSWORD=secretpassword
PGDATABASE=spectrum
PGPORT=5432

PG_CONTAINER_NAME=spectrum-postgres

PG_RUNNING=false
{
  PG_RUNNING=$(docker container inspect -f '{{.State.Running}}' $PG_CONTAINER_NAME)
} || {
  true
}


if [ ! $PG_RUNNING ];
then
  docker run --name $PG_CONTAINER_NAME -p 5432:5432 -e POSTGRES_USER=$PGUSER -e POSTGRES_PASSWORD=$PGPASSWORD -e POSTGRES_DB=$PGDATABASE -d postgres
fi

PGHOST=$PGHOST PGUSER=$PGUSER PGPASSWORD=$PGPASSWORD PGDATABASE=$PGDATABASE PGPORT=$PGPORT npm start