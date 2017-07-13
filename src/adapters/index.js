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
  static save(data){
    // let data = this.state.data || "test"
    fetch(`http://localhost:3000/api/v1/data_sets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        data_set: {user_id: 1,
          content: JSON.stringify(data)}
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
