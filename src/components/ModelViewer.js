import React from 'react';
import "../assets/css/style.css";

function ModelViewer({ src }) {
  return (
    
      <body className="pt-0">
        <div className="model-viewer-container d-flex justify-content-center pt-0">

        
        <model-viewer className="mt-0 pt-0"
        style={{ height: "500px", width: "500px" }}
          src={src}
          alt="A 3D model of a car"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
        </div>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        ></script>
      </body>
    
  );
}

export default ModelViewer;
