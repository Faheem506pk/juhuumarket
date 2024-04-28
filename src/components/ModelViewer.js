import React from 'react';
import "../assets/css/style.css";

function ModelViewer({ src }) {
  return (
    
      <>
     

        
        <model-viewer className="mt-0 pt-0 container d-flex justify-content-center"
        style={{ height: "auto", width: "100%" }}
          src={src}
          alt="Product 3D Model"
          shadow-intensity="2"
          camera-controls 
          auto-rotate
          ar
          camera-orbit="0deg 0deg"
          
        ></model-viewer>
        
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        ></script>
      </>
    
  );
}

export default ModelViewer;
