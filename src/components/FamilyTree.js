import { Box } from "@mui/material"
import { Tree, TreeNode } from 'react-organizational-chart'
import axios from "axios"
import {useState, useEffect} from 'react'
import FamilyTreeNode from "./FamilyTreeNode"

// Recursively build out the tree
function buildSubtree(parent, treeMembers){
    return (
        <TreeNode label={<FamilyTreeNode member={parent}/>}>
            {parent.attributes.children?.data.map(child => 
                buildSubtree(treeMembers.find(member => member.id === child.id), treeMembers)
            )}
        </TreeNode>
    )
}

// Build the root of each tree
function buildTree(treeMembers){
    // Find the roots
    const roots = treeMembers.filter(member => member.attributes.parent.data === null)
    return (
        <Box>
            {roots.map(root => 
                <Tree label={<FamilyTreeNode member={root}/>}>
                    {root.attributes.children.data.map(child => 
                        buildSubtree(treeMembers.find(member => member.id === child.id), treeMembers)
                    )}
                </Tree>
            )}
        </Box>
    )
}

export default function FamilyTree(props){
    let [treeMembers, setTreeMembers] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_STRAPI_ENDPOINT + process.env.REACT_APP_STRAPI_TREE_MEMBERS + "?populate=*")
        .then(response => {
            setTreeMembers(response.data.data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return buildTree(treeMembers)
}