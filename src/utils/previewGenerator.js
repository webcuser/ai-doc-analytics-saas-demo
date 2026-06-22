export const generatePreview = (document) => {
    // Logic to generate a preview based on document type
    if (document.type === 'pdf') {
        return { content: 'Preview content for PDF' };
    }
    // Additional types can be handled here
    return { content: 'No preview available' };
};