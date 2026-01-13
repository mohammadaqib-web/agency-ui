import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const About = () => {
  return (
    <Box sx={{ py: { xs: 5, md: 10 }, mt: { xs: 5, md: 0 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <MotionCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              sx={{ borderRadius: 4, overflow: "hidden" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Agency Team"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block", // 👈 FIX
                }}
              />
            </MotionCard>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={6} sx={{ mt: { xs: -5, md: 5 } }}>
            <MotionCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              elevation={0}
            >
              <CardContent>
                <Typography variant="h6" color="primary" fontWeight={600}>
                  ABOUT US
                </Typography>

                <Typography variant="h4" fontWeight={700} sx={{ my: 2 }}>
                  The Best Digital Solution
                  <br />
                  For Your Business
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  We help startups and businesses build scalable digital
                  products through modern web & mobile applications, SEO-driven
                  growth strategies, and performance-focused digital marketing.
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  From website design and redesign to full-stack development,
                  our team delivers solutions that look great and perform even
                  better.
                </Typography>

                {/* <Button variant="contained">Read More</Button> */}
              </CardContent>
            </MotionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
