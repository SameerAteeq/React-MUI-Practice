function App() {
    const BlueBtn = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.otherColor.main,
        color: "#888",
        m: 6,
        "&:hover": {
            backgroundColor: "lightblue"
        },
        "&:disabled": {
            backgroundColor: "gray",
            color: "white"
        }
    }))
    return (
        <div className="App">
            <Button variant="text">Text</Button>
            <Button variant="contained" color="secondary" size="medium" startIcon={<RemoveCircleOutlineOutlined />}>Contained</Button>
            <Button variant="outlined" color="error" startIcon={<DeleteOutlineOutlined />}>error</Button>
            <Typography variant="h1" component="p">
                it is using h1 style but it is p tag
            </Typography>
            <BlueBtn>und 1 </BlueBtn>
            <BlueBtn>und 2 </BlueBtn>
        </div>
    );
}