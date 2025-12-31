const isLogin = (username) => {
    return true
}

const register = (username) => {
    if(username){
        return true
    }else{
        return false
    }
}
console.log(register('arash'))

