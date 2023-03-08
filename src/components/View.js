import Posts from "./Posts/Posts";
import MyPosts from "./MyPosts/MyPosts";
import {Link} from 'react-router-dom';

function View(){

    var p=0;
    var m=0;
    const onPosts=()=>{
        p=1;
       

    }
    const onMyPosts=()=>{
       
        m=1;
       
    }
  

return(
    <div>
    <div><Link to='/posts'>Posts</Link> </div>

    <div><Link to='/myposts'>MyPosts</Link></div>

    
    </div>
)







}

export default View;