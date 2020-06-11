const URI = 'https://genericapiv1.azurewebsites.net';

//Endpoints GET method
const categories = '/v1/shop/categories';
const promotions = '/v1/shop/promotions';
const products = '/v1/shop/products';
const productDetail = '/v1/shop/products/1';


//Calls without token
const createHeader = (type) => {
    return {
        method:type
    }
};

const apiCallFunction = (url = '', http_method = 'GET') => {
    const requestMethod = createHeader(http_method);
    return fetch(url, requestMethod);
};


//Calls with token
const createHeaderToken = (type) => {
    const myHeaders = new Headers();
    myHeaders.append('authtoken', '???');
	
	return {
		method: type,
		headers: myHeaders,
	};
};

const apiCallwithTokenFunction = (url = '', http_method = 'GET') => {
    const requestMethod = createHeaderToken(http_method);
    return fetch(url, requestMethod);
};






var myHeaders = new Headers();
myHeaders.append("Cookie", "ARRAffinity=1fa22e5e18dd42b9d22d6c2c620b562f117da68736f4d32b741538a2d054d95c");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://genericapiv1.azurewebsites.net/v1/shop/promotions", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));






const test = fetch(URI, {method: 'GET'})
                .then( (response) => {
                    if(response.ok){
                        return response.json();
                    } else {
                        throw new Error('BAD STUFF');
                    }
                })
                .then( (jsonData) => {
                    console.log(jsonData);
                })
                .catch( (err) => {
                    console.log('ERROR', err.mesage);
            });

export { test as default };