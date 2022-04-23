import { Box } from "@mui/material"
import { Tree, TreeNode } from 'react-organizational-chart'

export default function FamilyTree(props){
    return(
        <Box>
           <Tree label={<div>Root</div>}>
                <TreeNode label={<div>Child 1</div>}>
                    <TreeNode label={<div>Grand Child 1</div>} />
                    <TreeNode label={<div>Grand Child 2</div>} />
                </TreeNode>
                <TreeNode label={<div>Child 2</div>}>
                    <TreeNode label={<div>Grand Child 3</div>} />
                    <TreeNode label={<div>Grand Child 4</div>} />
                </TreeNode>
            </Tree> 
        </Box>
    )
}