export function addHobby(hobby){
    return {
        type:"hobby/ADD",
        payload:hobby
    }
}

export function activeHobby(hobbyId){
    return {
        type:"hobby/ACTIVE",
        payload:hobbyId
    }
}