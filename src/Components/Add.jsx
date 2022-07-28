import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from "@mui/icons-material";
const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    alignItems: "center"
})
const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)}
                title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 }, }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={250} borderRadius={5} padding={5} >
                    <Typography variant='h6' color="gray" textAlign="center">Create a post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: "30px", height: "30px " }} src="https://material-ui.com/static/images/avatar/2.jpg" />
                        <Typography variant='h6'>John</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add