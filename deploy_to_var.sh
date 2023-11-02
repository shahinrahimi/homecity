#!/bin/bash

ADMIN_SRC_DIR="./admin/dist"
ADMIN_DEST_DIR="/var/www/homecity/admin/"

cp -r $ADMIN_SRC_DIR/* $ADMIN_DEST_DIR

CLINET_SRC_DIR="./client/dist"
CLIENT_DEST_DIR="/var/www/homecity/client/"

cp -r $CLINET_SRC_DIR/* $CLIENT_DEST_DIR


