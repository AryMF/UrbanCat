const URI = 'https://genericapiv1.azurewebsites.net';

const token = 'ySA3aE6EqwUQOZEfh8T9WRkOO6jdaM_P2p0kA8pYAB0X2r83pyRd1oEEX-eSraqy3TD89UvJjzoirqpmhSYtHMcnZtcyuEoaIROMQpftiQhI8mWUxNzpk0vshFE7SGcYvXun5kJKbA_Ad67pk-mtcYRbpvRgeujhab7YSnd2Vbp-u7HP-2fcsJaSnWqKuRyz--_1WYJTirm4lHXxDC7lnJwYyQouUltZE_zTTvu3WHrerUBDtuATQw31BON8fj58vPVMDZar2yi810htj-osRToSKNRuoT5DMnpnqgZk4ZG0QmOjKtqdLmORPLUNzBpkKFC6hn3xyGgNwdYdJXCsG-WJryRjojphoHv1_nlcYYUBCcny8TLu_HA2Hibpfc4BszHV1vx3jDGiW2iNLgO54ksU0NaYzAAEHtmHyfnSdCo';


//Calls with token
const createHeaderToken = (type) => {
    const myHeaders = new Headers();
    myHeaders.append('authtoken', token);
	
	return {
		method: type,
		headers: myHeaders,
	};
};

const apiCallwithTokenFunction = (url = '', http_method = 'GET') => {
    const requestMethod = createHeaderToken(http_method);
    return fetch(url, requestMethod);
};