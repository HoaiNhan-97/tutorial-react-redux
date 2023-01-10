import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHobby,activeHobby } from "~/action/hobby.action";
import HobbyItem from "./HobbyItem";
import styles from "./Hobby.module.scss";
const cx = classNames.bind(styles);
function Hobby() {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeHobbyId = useSelector(state => state.hobby.active)
    const dispatch = useDispatch();
    let [hobbyName,setHobbyName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        let hobbyItem = {
            id:Date.now(),
            title:hobbyName
        }
        dispatch(addHobby(hobbyItem))
        setHobbyName("");
        
        
    }
    function handleClickHobby (hobbyId){
        dispatch(activeHobby(hobbyId))
    }
    return <div className={cx("container")}>
        <h1>Hello My Hobby</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={hobbyName} onChange={(e)=> setHobbyName(e.target.value)}></input>
            <button>Add</button>
        </form>
        <div>
            <h3>Hobby list</h3>
            <HobbyItem hobbyList={hobbyList} onlickHobby = {handleClickHobby} active = {activeHobbyId}/>
        </div>

    </div>;
}

export default Hobby;