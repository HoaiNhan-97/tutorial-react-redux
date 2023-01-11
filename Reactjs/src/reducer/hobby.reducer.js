let initalHobby = {
    list:[{id: 1673452756708, title: 'java'}],
    active:null
}
function hobbyReducer(state=initalHobby,action){
    switch(action.type) {
        case "hobby/ADD":
            let newState = {...state}

            newState.list.push(action.payload);
          return newState
        case "hobby/ACTIVE":

          return {...state,active:action.payload};
        default:
          return state;
      }
}
export default hobbyReducer;
