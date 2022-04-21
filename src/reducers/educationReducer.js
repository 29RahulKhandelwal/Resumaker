const initialData={
    educationData:[]
}
const educationReducer=(state=initialData,action)=>{
    switch(action.type){
        case "EDUCATION_DATA":
            const {data}=action.payload;
            
            return{
                educationData:[{
                    data:data
                }]
            }
        default: return state;
    }
}

export default educationReducer;