<<<<<<< HEAD
const isLogin = () => {
    return true
}
function getMe(){
    return true
}
function register(){
    return true
=======
const isLogin = (username) => {
    if(username){
        return true
    }else{
        return false
    }
>>>>>>> fixedIsloginFeature
}