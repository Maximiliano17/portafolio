import React, { useState } from "react";
import "./DownloadButton.scss";

const DownloadButton = ({ href, label }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 3000); // Simulamos una descarga que dura 3 segundos
  };

  return (
    <a href="../documents/Cv.pdf" target="_BLANK" className={`download-button ${isDownloading ? "downloading" : ""}`} onClick={handleClick}>
      {isDownloading ? "Descargando..." : label}
    </a>
  );
};

export default DownloadButton;
