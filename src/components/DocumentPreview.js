import React from 'react';

const DocumentPreview = ({ document }) => {
    // Logic to render document preview based on its type
    return (
        <div className='document-preview'>
            <h3>Preview: {document.title}</h3>
            <div className='preview-content'>
                {/* Render preview based on document type */}
            </div>
        </div>
    );
};

export default DocumentPreview;