export class Get_date_string{

    private static instance:Get_date_string
    
    private constructor(){}

    public static get(){
        if(Get_date_string.instance==undefined||Get_date_string.instance==null){
            Get_date_string.instance=new Get_date_string
        }
        return Get_date_string.instance
   
    }
    public date_string(){
        const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
        return days[new Date().getDay()]
    }
}