#!/bin/bash

#Exercicio 7
DIRECTORY=$1
if [ -d "$DIRECTORY" ]
then
  FILE=`ls -l $DIRECTORY | wc -l`
  echo "O $DIRECTORY tem $FILE arquivos"
else
  echo "O argumento $DIRECTORY não é um diretório"
fi