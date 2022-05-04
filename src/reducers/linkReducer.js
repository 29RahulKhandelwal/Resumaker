const initialData={
    linkData:window.location.pathname.split("/")[2]
}
const linkReducer=(state=initialData,action)=>{
    switch(action.type){
        case "LINKS":
            const {data}=action.payload;
            
            return{
                linkData:data
            }
        default: return state;
    }
}

export default linkReducer;