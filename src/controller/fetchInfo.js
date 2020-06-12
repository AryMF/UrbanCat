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
	};
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

				const dataArray = result.map(element => {
					const categories = {
						'categoryId': element.categoryId,
						'description': element.description,
						'createDate': element.createDate,
						'isActive': element.isActive,
						'updateDate': element.updateDate,
					};

					return categories;
				});

				resolve (dataArray);
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

				const dataArray = result.map(element => {
					const promotions = {
						'promotionID': element.promotionID,
						'description': element.description,
						'persentDiscount': element.persentDiscount,
						'startDate': element.startDate,
						'endDate': element.endDate,
						'createDate': element.createDate,
						'updateDate': element.updateDate,
						'isActive': element.isActive,
						'picture': element.picture,
					};

					return promotions;
				});
				resolve (dataArray);
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

				const dataArray = result.map(element => {
					const products = {
						'productId': element.productId,
						'description': element.description,
						'categoryId': element.categoryId,
						'colors': element.colors,
						'sizes': element.sizes,
						'price': element.price,
						'pic': element.picture,
						'createDate': element.createDate,
						'updateDate': element.updateDate,
						'isActive': element.isActive,
					};

					return products;
				});

				resolve (dataArray);
			})
			.catch(error => {
				console.log('error', error);
				reject (error);
			});
	});
};

const getProductByIdData = (id = '') => {
	return new Promise((resolve, reject) => {
		apiCallFunction(URI + products + '/' + id, 'GET')
			.then(response => response.json())
			.then(result =>{

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
				};

				resolve (products);
			})
			.catch(error => {
				console.log('error', error);
				reject (error);
			});
	});
};

export { getProductsData, getCategoriesData, getPromotionsData, getProductByIdData };