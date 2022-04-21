const initialData={
    profileData:[]
}
const profileReducer=(state=initialData,action)=>{
    switch(action.type){
        case "PROFILE_DATA":
            const {data}=action.payload;
            
            return{
                profileData:[{
                    data:data
                }]
            }
        default: return state;
    }
}

export default profileReducer;