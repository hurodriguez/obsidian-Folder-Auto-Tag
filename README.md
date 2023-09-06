# FolderAsTag Plugin para Obsidian

Este plugin para Obsidian agrega automáticamente etiquetas a las notas de Markdown basadas en la estructura de carpetas. Por ejemplo, si una nota se encuentra en la carpeta `Uno/Hijo/nieto`, el plugin agregará la etiqueta `#Uno/Hijo/nieto` al principio del contenido de la nota.

## Instalación

Para instalar el plugin, siga estos pasos:

1. Descargue el archivo `main.js` y el archivo `manifest.json` del último lanzamiento en GitHub.
2. Copie los archivos descargados en la carpeta `.obsidian/plugins/folder-as-tag-plugin/` dentro de su bóveda de Obsidian.
3. Abra Obsidian y vaya a **Configuración** > **Complementos** y habilite el plugin **FolderAsTag**.

## Compilación

Si desea compilar el plugin desde el código fuente, siga estos pasos:

1. Clone este repositorio en su computadora.
2. Abra una terminal y navegue hasta la carpeta del repositorio clonado.
3. Ejecute el comando `npm install` para instalar las dependencias.
4. Ejecute el comando `npm run dev` para compilar el plugin.
5. Copie los archivos `main.js` y `manifest.json` generados en la carpeta `.obsidian/plugins/folder-as-tag-plugin/` dentro de su bóveda de Obsidian.
6. Abra Obsidian y vaya a **Configuración** > **Complementos** y habilite el plugin **FolderAsTag**.

## Uso

Una vez instalado y habilitado el plugin, no es necesario realizar ninguna acción adicional. El plugin agregará automáticamente las etiquetas a las notas de Markdown cuando se abran.

## API Documentation

https://github.com/obsidianmd/obsidian-api
