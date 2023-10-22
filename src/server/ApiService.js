import server from "./Server";

class ApiService {
  static getInstance() {
    if (!this.server) {
      this.server = new ApiService();
    }
    return this.server;
  }

  async fetchData(endpoint) {
    try {
      const response = await server.get(endpoint);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async postData(endpoint, data) {
    try {
      const response = await server.post(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async putData(endpoint, data) {
    try {
      const response = await server.put(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteData(endpoint) {
    try {
      await server.delete(endpoint);
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;
