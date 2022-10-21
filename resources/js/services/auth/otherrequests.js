const axios = require('axios');
class otherrequestservice{
	get(uri){
		return axios.get(`/api/${uri}`)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			return error;
		});
	}
	post(uri, formData){
		return axios.post(`/api/${uri}`, formData)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			return error;
		});
	}
}
export default new otherrequestservice();