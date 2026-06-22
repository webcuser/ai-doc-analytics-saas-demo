export const getDocumentPreview = async (documentId) => {
    // Logic to fetch preview data for a document
    // This includes mock or real data fetching from API/file system
    return fetch(`/api/documents/${documentId}/preview`).then(res => res.json());
};