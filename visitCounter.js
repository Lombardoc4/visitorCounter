This program relies on an API call to https://usnativeplants.com/visitor-counter/{site-name}
This API increments a counter on window load and saves it to a json file on the server

(() => {
    window.addEventListener('load', () => {
        fetch('https://usnativeplants.com/visitor-counter/techtonic')
            .then(response => response.json())
            .then((visitData) => {
                const visitCounter = document.createElement('p');
                visitCounter.id = 'visitCounter';
                visitCounter.style.display = 'none';
                visitCounter.innerHTML = visitData.visitCount;
                document.body.append(visitCounter);
            });
    };
})();

