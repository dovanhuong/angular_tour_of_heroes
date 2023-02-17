#!/bin/bash
git remote add origin https://github.com/dovanhuong/$1.git
git branch -M main
git pull
git add .
git commit -m "$2"
git push -u origin main
echo "Completed updated script"
