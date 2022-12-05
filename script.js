function getCatImage() {
    const newImage = document.createElement('img');
    const imageContainer = document.querySelector('.image-container')

    fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            // Resolve the promise we got from calling then() to the promise that we get from calling json()
            return response.json()
        })
        .then((data) => {
            imageContainer.appendChild(newImage)
            newImage.src = data[0].url
        }).catch((error) => {
            console.log(error);
        });
}
