let initalHobby = {
    list:[],
    active:null
}
function hobbyReducer(state=initalHobby,action){
    switch(action.type) {
        case "hobby/ADD":
            let newState = {...state}

            newState.list.push(action.payload);
          return newState
        default:
          return state;
      }
}
export default hobbyReducer;
