#!/bin/bash

ADMIN_SRC_DIR="./admin/dist"
ADMIN_DEST_DIR="/var/www/homecity/admin-build/"

cp -r $ADMIN_SRC_DIR/* $ADMIN_DEST_DIR

CLINET_SRC_DIR="./client/dist"
CLIENT_DEST_DIR="/var/www/homecity/client-build/"

cp -r $CLINET_SRC_DIR/* $CLIENT_DEST_DIR


