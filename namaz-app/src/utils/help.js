const imgtoBlob = async (uri) => {
    try {
        console.log("URO",uri);
        const xhr = new XMLHttpRequest();
        xhr.open("GET",uri,true)
        xhr.responseType = "blob";
        const blobPromise  = new Promise((resolve,reject)=>{
            xhr.onload = () => {
                const blob = xhr.response;
                resolve(blob)
            }
            xhr.onerror = () => {
                reject(new Error("Failed to load image"))
            }
        });
        xhr.send();
        const blob = await blobPromise;
        return blob;
    } catch (error) {
        alert(error.message)
    }
}


const randomNameGenerator = () => {
    const prefix = 'picture';
    const postfix = '.png'
    const randomNum = Math.random()
    return prefix+postfix

}

export {imgtoBlob,randomNameGenerator};