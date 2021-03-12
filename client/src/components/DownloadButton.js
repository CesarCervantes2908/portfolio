import React from 'react';
import '../styles/DownloadButton.css';

function DownloadButton({children, fileName}) {
    return (
        <a className="btn btn-download" 
           href={`${process.env.PUBLIC_URL}/downloads/${fileName}.pdf`}
           download>{children}</a>
    );
};

export default DownloadButton;