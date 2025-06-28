import React from "react";

const getRequestHandling = async (url) => {
  let result = null;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error("Error occurs whilr retriving..");
    }
    result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    return result;
  }
};

const postRequestHandling = async (url, body) => {
  let result = null;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const deleteRequestHandling = async (url) => {
  debugger;
  let result = null;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export { getRequestHandling, postRequestHandling, deleteRequestHandling };
