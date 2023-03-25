import React, { useState } from "react";
import "./DownloadButton.scss";

const DownloadButton = ({ url, label }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 3000); // Simulamos una descarga que dura 3 segundos
  };

  return (
    <button className={`download-button ${isDownloading ? "downloading" : ""}`} onClick={handleClick}>
      {isDownloading ? "Descargando..." : label}
    </button>
  );
};

export default DownloadButton;
