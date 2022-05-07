const initialData={
    previewData:false
}
const previewReducer=(state=initialData,action)=>{
    switch(action.type){
        case "PREVIEW_ACTION":
            const {data}=action.payload;
            
            return{
                previewData:data
            }
        default: return state;
    }
}

export default previewReducer;