import { Box, Typography } from "@mui/material";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function FamilyTreeNode(props){
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    return(
        <Box
            sx={{
                cursor: hover ? 'pointer' : 'default'
            }}
        >
            <img 
                src={props.member.attributes.image.data ? process.env.REACT_APP_STRAPI_ENDPOINT + props.member.attributes.image.data.attributes.url : ""}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => navigate('/member/' + props.member.id)}
                style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    borderRadius: '10px',
                }}
            />
            <Typography>
                {props.member.attributes.firstName} {props.member.attributes.lastName}
            </Typography>
        </Box>
    )
}