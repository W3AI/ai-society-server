// this js code will run on the client / browser

const deleteProduct = (btn) => {
    const productId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

    // to Send or receive to current host if no http://server is specified
    fetch('/admin/product/' + productId, {
        method: 'DELETE',
        headers: {
            'csrf-token': csrf
        }
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
};