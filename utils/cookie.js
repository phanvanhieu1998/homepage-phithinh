import Cookies from 'js-cookie'



export function  getCartCookie() {
  return Cookies.get()
}