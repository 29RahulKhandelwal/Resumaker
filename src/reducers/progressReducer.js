const initialData={
    progressData:20
}
const progressReducer=(state=initialData,action)=>{
    switch(action.type){
        case "PROGRESS_ACTION":
            const {data}=action.payload;
            
            return{
                progressData:data
            }
        default: return state;
    }
}

export default progressReducer;