#!/bin/bash

FILES=./markdowns/*

for f in $FILES
do
    echo $f
    OUT=./htmls/$(basename $f .md).html

    touch $OUT
    cat ./header.html > $OUT
    pandoc $f -t html >> $OUT
    cat ./footer.html >> $OUT
done
