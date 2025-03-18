#!/bin/bash

# Lista produktów
products=(
  "vegetables"
  "bread"
  "seafood"
  "tomatoes"
  "apples"
  "carrots"
  "mushrooms"
  "cottage-cheese"
  "yogurt"
  "milk"
  "kefir"
  "rye-bread"
  "pasta"
  "spiral-pasta"
  "ribbon-pasta"
  "strawberry-jam"
  "cherry-jam"
  "peach-jam"
  "plum-jam"
  "honey"
  "walnuts"
  "raisins"
  "almonds"
)

# Kopiowanie pattern-light.svg jako PNG
cp public/pattern-light.svg public/pattern-light.png

# Tworzenie kopii placeholdera dla każdego produktu
for product in "${products[@]}"
do
  cp public/placeholder.svg "public/${product}.jpg"
done 