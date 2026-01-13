import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-img.webp";

const MotionBox = motion(Box);

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        mt: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          <Typography variant="h2" fontWeight={700} sx={{ mb: 2 }}>
            We Build Digital Experiences
            <br />
            That Drive Growth
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
          >
            We are a full-service digital agency specializing in Web & App
            Development, SEO Optimization, Digital Marketing, and Website Design
            & Redesign.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              size="large"
              variant="contained"
              sx={{ px: 4, py: 1.5, backgroundColor: "#0666f6c4" }}
              onClick={() => handleScroll("contact")}
            >
              Get Started
            </Button>
            {/* <Button size="large" variant="outlined" sx={{ px: 4, py: 1.5 }}>
              View Work
            </Button> */}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;
