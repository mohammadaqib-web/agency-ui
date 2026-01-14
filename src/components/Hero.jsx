import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        mt: { xs: 4, md: 0 },
      }}
    >
      {/* RIPPLE BACKGROUND */}
      <Box className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;
