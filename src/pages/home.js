import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import NotesLayout from '../components/NotesLayout'
import { useSelector, useDispatch } from "react-redux";

const Home = () => {

  const {notesList} = useSelector(state => state.notes)
  const dispatch = useDispatch()

  console.log(notesList)

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%'
    }}>
      <Stack direction="row" justifyContent="center" sx={{mb: 10}}>
        <Header />
      </Stack>

      <Typography variant="h6" sx={{fontSize: 12, color: '#666', textTransform: 'uppercase', ml: 1}}>Pinned</Typography>
      <NotesLayout />
    </Box>
  )
}

export default Home