let downImage = async (preFix="project") => {
  const imageUrls = Array.from(document.querySelectorAll('#property-gallery-js > div')).map(div => div.getAttribute("data-thumb"))
  imageUrls.forEach((url, index) => console.log(url, index))
  const imageResponses = await Promise.all(imageUrls.map(url => fetch(url)))
  console.log(imageResponses)
  const imageResponsesOk = imageResponses.filter(res => res.ok)
  console.log(imageResponsesOk)
  const imageBlobs = await Promise.all(imageResponsesOk.map(res => res.blob()))
  console.log(imageBlobs)
  const downloads = Promise.all(imageBlobs.map((blob, index) => {
    const counter = index.toString().padStart(2,'0')
    const filename = `${preFix}_${counter}.jpg`;
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }))
  
}
