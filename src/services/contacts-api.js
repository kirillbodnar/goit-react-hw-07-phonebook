const URL = 'https://62c3073d876c4700f534ee32.mockapi.io/contacts';

export async function fetchContacts() {
  try {
    const dataJSON = await fetch(URL);
    const data = await dataJSON.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function addContact(contact) {
  try {
    const resJSON = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const res = await resJSON.json();
    return res;
  } catch (error) {
    return error;
  }
}

export async function deleteContact(id) {
  try {
    const resJSON = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    const res = await resJSON.json();
    return res.id;
  } catch (error) {
    return error;
  }
}
