export default defineNuxtRouteMiddleware((to, from) => {
   
    const  path = ['/auth/register','/auth/login'];
   
    console.log("sa",path.includes('to.path') || useCookie('User').value || to.path.includes('/auth/login'))
     if(path.includes('to.path') || useCookie('User').value ){
   
     }
     else{
          // let params = to.query.layout || false,redirectRoute = '/auth/login'
          // params && (redirectRoute+=`?layout=${params}`)
          // console.log("coming to elsewith params",redirectRoute)
          // navigateTo(redirectRoute)
          navigateTo('/auth/login')
    }
        
  })
  