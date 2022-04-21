const initialData={
    workData:[]
}
const workReducer=(state=initialData,action)=>{
    switch(action.type){
        case "WORK_DATA":
            const {data}=action.payload;
            return{
                workData:[{
                    data:data
                }]
            }
        default: return state;
    }
}

export default workReducer;