const getResource = async (url) => {
    let res = await fetch(url);
    if (res.status == 200) {
        const spinner = document.querySelector('.spinner');
        spinner.style.display = 'none';
    }
    return await res.json();
};

export { getResource };