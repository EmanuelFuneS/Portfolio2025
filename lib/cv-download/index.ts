
export const downloadCvFromApi = async () => {

    try {
        const response = await fetch('/api/download-cv');
        if (!response.ok) {
            throw new Error('Error al descargar');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Cv Emanuel Funes.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading CV: ', error);
        alert('Error al descargar el CV');
    }
}