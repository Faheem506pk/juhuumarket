import React from 'react';
// import '@google/model-viewer/dist/model-viewer.min.js'; // Import the model-viewer library

function ModelViewer({ src }) {
  return (
    <html lang="en">
      <head>
        <title>3d model</title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta name="generator" content="Geany 1.37.1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="style.css" rel="stylesheet" />
        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>
      </head>
      <body>
        <model-viewer
          src={src}
          alt="A 3D model of a car"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        ></script>
      </body>
    </html>
  );
}

export default ModelViewer;
