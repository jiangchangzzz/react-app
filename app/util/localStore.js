const localStore={
    //获取key对应的value
    getItem: function(key){
        let value;
        try{
            value=localStorage.getItem(key);
        }
        catch(ex){
            if(__DEV__){
                console.error('localStorage.getItem error: ',ex.message);
            }
        }
        finally{
            return value;
        }
    },

    //设置key对应的value
    setItem: function(key,value){
        try{
            //ios无痕模式下，会报错，需要捕获异常
            localStorage.setItem(key,value);
        }
        catch(ex){
            if(__DEV__){
                console.error('localStorage.setItem error: ',ex.message);
            }
        }
    }
}

export default localStore;