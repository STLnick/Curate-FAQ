const baseUrl = 'http://localhost:80/faq-backend'

export default (resource) => ({
  // Add a new FAQ or User
  async create(payload) {
    const res = await fetch(`${baseUrl}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return await res.json()
  },

  // Delete a FAQ or User
  async delete(payload) {
    await fetch(`${baseUrl}/${resource}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  },

  // Get all FAQs or Users
  async show() {
    const res = await fetch(`${baseUrl}/${resource}`)
    return await res.json()
  },

  // Login a User - not used for FAQs
  async login(payload) {
    const res = await fetch(`${baseUrl}/${resource}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return await res.json();
  }
  ,

  // Update a User or FAQ
  async update(payload) {
    const { _id, ...propsToUpdate } = payload
    await fetch(`${baseUrl}/${resource}/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(propsToUpdate)
    })
  },

});