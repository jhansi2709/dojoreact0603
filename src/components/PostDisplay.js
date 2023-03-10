import {Component} from 'react';

import { Provider } from 'react-redux';
import Posts from './Posts';
import Postform from './Postform';


class PostDisplay extends Component{


render(){

    return(
        <>
       
        <Postform />
        <Posts />
        </>

    )


}

}

export default PostDisplay;