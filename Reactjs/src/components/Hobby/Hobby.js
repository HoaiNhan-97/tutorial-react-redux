import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHobby } from "~/action/hobby.action";
import styles from "./Hobby.module.scss";
const cx = classNames.bind(styles);
function Hobby() {
    const hobbyList = useSelector(state => state.hobby.list);
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
    return <div className={cx("container")}>
        <h1>Hello My Hobby</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={hobbyName} onChange={(e)=> setHobbyName(e.target.value)}></input>
            <button>Add</button>
        </form>
        <div>
            <ul>
                {hobbyList.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>

    </div>;
}

export default Hobby;