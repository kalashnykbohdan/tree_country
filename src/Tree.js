import React, { useState, useContext } from 'react'
import Context from './context';

const Tree = ({data}) => {

    return(
        <div className='wrap_block'>
            <ul className='ul_list'>
                {data.map(tree => (
                    <TreeNode node={tree} key={tree.code}/>
                ))}
            </ul>
        </div>
    )
}

const TreeNode = ({node}) => {
    const [childVisible, setChildVisible] = useState(false);

    const value = useContext( Context );

    
    let children;
    let stringdotted;

    if(node.countries){
        stringdotted = "";
        children = node.countries;
    }else if(node.languages){
        stringdotted = "------";
        children = node.languages;
    }
    else{
        children="";
        stringdotted = "-------------";
    }

    return(
        <li className={childVisible ? "li_active" + " ul_item" : "li_nonactive" + " ul_item"}>
            <div className='wrap_fild' onClick={(e) => {
                if(!children){
                    value.setContinents([]);
                }
                setChildVisible((v) => !v) 
                }}>
                <span>{stringdotted}</span>
                <div className={childVisible && children ? "fild" + " fild_active" : "fild"}>
                    {node.name}
                </div>
            </div>
            {children && childVisible && <div>
                <ul>
                    <Tree data={children} />
                </ul>
            </div>
            }
        </li>
    )
}

export default Tree;


