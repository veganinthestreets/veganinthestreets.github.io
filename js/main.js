const goToHome = () => {
    let path = window.location.href.split('/');
    if (path[path.length - 1] !== 'index.html') {
        window.location.href = "../index.html";
    }
};