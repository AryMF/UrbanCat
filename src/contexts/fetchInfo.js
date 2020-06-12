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


//Fetching categories
const getCategoriesData = () => {
    return new Promise((resolve, reject) => {
        apiCallFunction(URI + categories, 'GET')
        .then(response => response.json())
        .then(result => {

            const categories = {
              'id': result.categoryID,
              'category': result.description,
              'pic': result.picture,
              'date': result.createDate,
              'status': result.isActive,
              'update': result.updateDate,
            }

            resolve (categories);
        })
        .catch(error => {
            console.log('error', error);
            reject (error);
        });
    });
};

//Fetching promotions
const getPromotionsData = () => {
    return new Promise((resolve, reject) => {
        apiCallFunction(URI + promotions, 'GET')
        .then(response => response.json())
        .then(result =>{
    
            const promotions = {
               'promoId': result.promotionID,
               'description': result.description,
               'discount': result.persentDiscount,
               'startDate': result.startDate,
               'endDate': result.endDate,
               'createDate': result.createDate,
               'updateDate': result.updateDate,
               'isActive': result.isActive,
               'pic': result.picture,
            }

            resolve (promotions);
        })
        .catch(error => {
            console.log('error', error);
            reject (error);
        });
    });
};

//Fetching products
const getProductsData = () => {
    return new Promise((resolve, reject) => {
        apiCallFunction(URI + products, 'GET')
        .then(response => response.json())
        .then(result =>{
            // console.log(result)
            const products = {
               'productId': result.productId,
               'description': result.description,
               'categoryId': result.categoryId,
               'colors': result.colors,
               'sizes': result.sizes,
               'price': result.price,
               'pic': result.picture,
               'createDate': result.createDate,
               'updateDate': result.updateDate,
               'isActive': result.isActive,
            }

            resolve (promotions);
        })
        .catch(error => {
            console.log('error', error);
            reject (error);
        });
    });
};

export default getProductsData;