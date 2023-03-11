import {Component} from 'react';

import { Provider } from 'react-redux';
import MyPosts from './MyPosts';
import Postform from '../Postform';


class MyPostDisplay extends Component{


render(){

    return(
        <>
       
        <Postform />
        <MyPosts />
        </>

    )


}

}

export default MyPostDisplay;