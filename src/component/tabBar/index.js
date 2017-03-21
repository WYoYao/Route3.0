

import React,{Component} from "react";
import "./index.css";
import {Link} from 'react-router';

export default class TabBar extends Component{
    render(){
        return (
            <div><div className="TabDiv">
                <p><Link className="font" to="/Home">主页</Link></p>
                <p><Link className="font" to="/Person">个人</Link></p>
                <p><Link className="font" to="/About">关于</Link></p>
            </div>
            <div>
            {this.props.children}
            </div></div>
    )
    }
}