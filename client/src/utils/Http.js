class Http {
  static async get(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      throw new Error(JSON.stringify(error));
    }
    data = await response.json();
    return data;
  }

  static async post(url, dataBody) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(dataBody)
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      console.error(error);
      throw new Error(JSON.stringify(error));
    }
    data = await response.json();
    return data;
  }
  static async put(url, dataBody) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(dataBody)
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      throw new Error(JSON.stringify(error));
    }
    data = await response.json();
    return data;
  }

  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
    let data = await response;
    if (data.status === 400 || data.status === 404 || data.status === 403) {
      const error = await data.json();
      throw new Error(JSON.stringify(error));
    }
    data = await response.json();
    return data;
  }
}

export default Http;
