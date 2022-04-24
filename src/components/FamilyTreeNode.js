import { Box, Typography } from "@mui/material";

export default function FamilyTreeNode(props){
    return(
        <Box>
            <img 
                src={props.member.attributes.image.data ? process.env.REACT_APP_STRAPI_ENDPOINT + props.member.attributes.image.data.attributes.url : ""}
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