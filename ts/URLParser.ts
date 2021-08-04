export class URLParser{
    private hash:string

    constructor(hash:string){
        this.hash=hash
    }

    private extract():string[]{
        const no_hash=this.hash.substring(1)
        if(no_hash.length==0){
            return[]
        }
        return no_hash.split("/")
    }

    public parse(){
        const split_hash=this.extract()
        let controller="home"
        let method="default"
        let args:string[]=[]
        
        if(split_hash.length==1){
            controller=split_hash[0]
            
        }
        if(split_hash.length==2){
            controller=split_hash[0]
            method=split_hash[1]
            
        }
        if(split_hash.length>2){
            controller=<string>split_hash.shift()
            method=<string>split_hash.shift()
            args=split_hash
            
        }
        
        return{
            "controller":controller,
            "method":method,
            "args":args
        }

    }
}