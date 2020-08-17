#!/bin/bash

#Exericio 6
FILE=$1
if [ -f "$FILE" ]
then
    echo "$FILE é um arquivo comum"
fi