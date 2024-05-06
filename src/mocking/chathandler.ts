// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const chathandler = [
  // Intercept "GET https://example.com/user" requests...
  http.get('/hi', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      user:{
        id: "010513",
        name:"sin",
        chat:"Hello I'm huaksu!"
      }
    })
  }),
]