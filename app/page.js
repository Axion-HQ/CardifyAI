import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Typography } from "@mui/material";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Head,
  Box,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Cardify AI
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              {""}
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Cardify AI
        </Typography>
        <Typography variant="h5" gutterBottom>
          {""}
          The easiest way to generate flashcards from text.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} gutterBottom>
            <Typography variant="h6">Smart flashcards</Typography>
            <Typography>
              {""}
              Our AI intelligent breaks down your text into concise flashcards
              perfect for studying.
            </Typography>
            <Typography></Typography>
          </Grid>
          <Grid item xs={12} md={4} gutterBottom>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>Access your flashcards from any device.</Typography>
          </Grid>
          <Grid item xs={12} md={4} gutterBottom>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              Simply input text and let our software do the rest. Creating
              flashcards has never been easier.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / Month{" "}
              </Typography>
              <Typography>
                {""}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / Month{" "}
              </Typography>
              <Typography>
                {""}
                Unlimited flashcards and storage with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
