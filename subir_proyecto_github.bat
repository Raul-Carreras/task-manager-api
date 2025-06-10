@echo off
:: Script para subir proyecto a GitHub y reemplazar README.md

:: 1. Entra a la carpeta del proyecto (ajusta si es necesario)
cd /d C:\Users\Raul\Documents\task-manager-api

:: 2. Inicializa Git si no está inicializado
git init

:: 3. Añade todos los archivos
git add .

:: 4. Commit inicial
git commit -m "Subida inicial del proyecto, incluyendo README.md"

:: 5. Configura o reemplaza el remoto origin
git remote remove origin 2>nul
git remote add origin https://github.com/Raul-Carreras/task-manager-api.git

:: 6. Fuerza el push a main
git branch -M main
git push -u origin main --force

pause
