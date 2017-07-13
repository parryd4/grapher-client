const baseUrl = 'http://localhost:3000/api/v1'
// const baseUrl = 'https://evening-reaches-63474.herokuapp.com/api/v1'

export class AuthAdapter {
  static login(loginParams){
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json() )
  }

  static currentUser(){
    return fetch(`${baseUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json() )
  }
}

export class DataAdapter {

  static all() {
    return fetch(`${baseUrl}/data_sets`, {
      headers: headers()
    }).then( res => res.json() )
  }

  static create(data) {
    // let data = this.state.data || "test"
    return fetch(`http://localhost:3000/api/v1/data_sets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        data_set: {
          user_id: data.user_id,
          content: JSON.stringify(data.content),
          file_name: data.fileName
        }
      })
    }).then(response => response.json())
    .then(console.log)
    .catch(console.log)
  }
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': 'totally' //localStorage.getItem('jwt')
  }
}
