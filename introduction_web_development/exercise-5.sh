#!/bin/bash


read -p "Por favor escreva o caminho do aquivo:" FILE
if [ -f $FILE ]
then
  echo "$FILE É UM ARQUIVO COMUM"
fi