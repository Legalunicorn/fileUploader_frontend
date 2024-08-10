export default function joinErrors(errors){
    /**
     * Takes in error object,
     * join them in this form
     * "• Error 1
     *"
     * "• Error 2"
     */
    let result ="";
     errors.forEach(err=>{
        result+='• ';
        result+=err.msg;
        result+='\n'
     })
     return result;
}