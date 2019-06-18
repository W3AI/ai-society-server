// this js code will run on the client / browser

const deleteProduct = (btn) => {
    const productId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

    // select closest parent/ancestor element with js .closest()
    productElement = btn.closest('article');

    // to Send or receive to current host if no http://server is specified
    fetch('/admin/product/' + productId, {
        method: 'DELETE',
        headers: {
            'csrf-token': csrf
        }
    }).then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data);
        // productElement.remove();    // Modern browsers - remove prod element from DOM
        productElement.parentNode.removeChild(productElement);  // for browsers + IE  version remove prod element from DOM
    })
    .catch(err => {
        console.log(err);
    });
};