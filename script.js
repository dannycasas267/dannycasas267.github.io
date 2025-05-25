async function redirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('img');
    const text = urlParams.get('txt');

    if (!imageUrl || !text) {
        document.getElementById('container').innerHTML = `
            <h1>Error en los parámetros</h1>
            <div class="error-message">Se requieren ambos parámetros: 'img' y 'txt' en la URL.</div>
        `;
        return;
    }

    try {
        const targetUrl = `cine.info.bot://share?img=${imageUrl}&txt=${text}`;
        
        console.log("URL de redirección:", targetUrl);
        
        window.location.href = targetUrl;
        
        setTimeout(() => {
            document.getElementById('container').innerHTML = `
                <h1>No se pudo abrir la aplicación</h1>
                <div class="message">
                    <p>Parece que la aplicación no está instalada en tu dispositivo.</p>
                    <p>Si no se redirigió automáticamente, por favor instala la aplicación:</p>
                </div>
                <a href="https://www.apklis.cu/application/cu.cineinfo.bot" class="download-link" target="_blank">
                    Descargar aplicación desde Apklis
                </a>
            `;
        }, 1500);
        
    } catch (error) {
        console.error("Error en redirect:", error);
        document.getElementById('container').innerHTML = `
            <h1>Error inesperado</h1>
            <div class="error-message">Ocurrió un problema al intentar redirigir: ${error.message}</div>
        `;
    }
}

window.onload = redirect;