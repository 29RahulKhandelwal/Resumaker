const initialData={
    skillData:[]
}
const skillReducer=(state=initialData,action)=>{
    switch(action.type){
        case "SKILL_DATA":
            const {data}=action.payload;
            return{
                skillData:[{
                    data:data
                }]
            }
        default: return state;
    }
}

export default skillReducer;