import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-gray-100 flex-grow  flex justify-items-center justify-center flex-col min-h-[50vh]">
          <iframe  
                  src="https://61fa5c87.sibforms.com/serve/MUIFAP5JJ6GQ_Z2Qzb41wVQ9BmD0OLhwvvSZqYFNsg08Eo6V2Zv9rBtL2e9K9iTS-ATVO9ojBRChExm2EItWcdjuLd6O2X0nSk8F9G37nNJ-SFLfyCRZbCco13L5joruSCajveN_RJRTXeuY2vH_Gd6lo2VwyUzR7yaGxq_ndxpglP9wQkBYT6k2QpxGSvymHvEaoarKB3Pgw4b7"
                  frameBorder="0" scrolling="auto" allowFullScreen
                  style={{
                      position: "relative",
                      height: "70vh",
                      width: "100%",

                  }}></iframe>
      </div>
  );
}
