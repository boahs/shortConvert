urlTransform = () => {
    let text = document.getElementById("youtubeURL").value;
    let shortURL = '/shorts/';
    let browserURL = '/watch?v=';
    let finishedURL = text.replace(shortURL, browserURL);
    document.getElementById("youtubeURL").value = finishedURL;
    console.log('Thanks for using this application :)!')
}
