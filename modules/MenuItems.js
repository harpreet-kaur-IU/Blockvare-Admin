import React,{useEffect,useState} from 'react'
import style from './css/SideBar.module.css'
import Link from 'next/link'
import Router from 'next/router'

const MenuItems = (props) => {
    const [path, setPath] = useState('');
  
    useEffect(()=>{
      setPath(Router.route)
    },[])
    if(path==props.path || (props.multipath=="1" && ((props.haspath1=="1" && path==props.path1) || (props.haspath2=="1" && path==props.path2) || (props.haspath3=="1" && path==props.path3) || (props.haspath4=="1" && path==props.path4)))){
        return (
            <li className={`f-600 text-grey-4 l-26 h4 d-flex d-align-center ${style["menu-item-wrapper"]} ${style["active"]}`}>
                <Link href={props.path}>{props.title}</Link>
            </li>
        )
    }else{
        return (
            <li className={`f-600 text-grey-4 l-26 h4 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
                <Link href={props.path}>{props.title}</Link>
            </li>
        )
    }
}

export default MenuItems