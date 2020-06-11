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