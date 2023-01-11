import classNames from "classnames/bind";
import { useState } from "react";
import { connect } from "react-redux";
import { addHobby,activeHobby } from "~/action/hobby.action";
import HobbyItem from "./HobbyItem";
import styles from "./Hobby.module.scss";
const cx = classNames.bind(styles);
function Hobby({hobbyList,activeHobbyId,hobbyitem,submit,DispatchHobbyItem}) {
    // const hobbyList = useSelector(state => state.hobby.list);
    // const activeHobbyId = useSelector(state => state.hobby.active)
    // const {hobbyList}
    // console.log("item",submit)
    // const dispatch = useDispatch();
    let [hobbyName,setHobbyName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        let hobbyItem = {
            id:Date.now(),
            title:hobbyName
        }
        submit(hobbyItem)
        // dispatch(addHobby(hobbyItem))
        setHobbyName("");
        
        
    }
    function handleClickHobby (hobbyId){
        DispatchHobbyItem(hobbyId)
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
const mapStateToProps = (state,ownProps)=>{
    //1673452756708
    let {id} = ownProps
    let hobbyitem = state.hobby.list.filter(item => item.id === id )[0]
    return {
        hobbyList: state.hobby.list,
        activeHobbyId: state.hobby.active,
        hobbyitem
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        submit: (hobby)=>{
            dispatch(addHobby(hobby))
        },
        DispatchHobbyItem: (hobbyId) =>{
            dispatch(activeHobby(hobbyId))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hobby);