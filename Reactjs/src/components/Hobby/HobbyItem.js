import classNames from "classnames/bind";
import styles from "./Hobby.module.scss";
let cx = classNames.bind(styles);

function HobbyItem({hobbyList,active,onlickHobby}) {
    function handleClick (id){
        if(onlickHobby){
            onlickHobby(id)
        }
        
    }
    return <ul className={cx("ul-item")}>
        {hobbyList.map(item => {
            return <li 
            onClick={() => handleClick(item.id)} 
            key = {item.id}
            className ={active === item.id ? cx("active"): ""}
            >{item.title}</li>
        })}
    </ul>;
}

export default HobbyItem;