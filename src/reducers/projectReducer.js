const initialData={
    projectData:[]
}
const projectReducer=(state=initialData,action)=>{
    switch(action.type){
        case "PROJECT_DATA":
            const {data}=action.payload;
            return{
                projectData:[{
                    data:data
                }]
            }
        default: return state;
    }
}

export default projectReducer;