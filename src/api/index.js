import axios from 'axios'
import qs from 'qs'

const baseUrl = 'http://localhost:80/faq-php/faq-backend'

export default (resource) => ({
  // Add a new FAQ or User
  async create(payload) {
    return await axios.post(`${baseUrl}/${resource}/create.php`, payload)
      .then(res => res.data)
  },

  // Delete a FAQ or User
  async delete(payload) {
    const options = {
      method: 'DELETE',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(payload),
      url: `${baseUrl}/${resource}/delete.php`,
    };
    return await axios(options);
  },

  // Get all FAQs or Users
  async show() {
    return await axios.get(`${baseUrl}/${resource}/read.php`)
      .then(res => res.data)
  },

  // Login a User - not used for FAQs
  async login(payload) {
    return await axios.post(`${baseUrl}/${resource}/login.php`, payload)
      .then(res => res.data)
  }
  ,

  // Update a User or FAQ
  async update(payload) {
    const options = {
      method: 'PATCH',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(payload),
      url: `${baseUrl}/${resource}/update.php`,
    };
    return await axios(options);
  },

});