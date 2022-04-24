import { Box } from '@mui/material'
import {useParams} from 'react-router-dom'

export default function MemberPage(props){
    let {id} = useParams()

    return (
        <Box>
            {id}
        </Box>
    )
}