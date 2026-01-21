import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import certImg from "../assets/msme.png";
import startupIndia from "../assets/startup-india-logo.png";
import meityIndia from "../assets/meity-logo.png";

const certifications = [
  {
    title: "Udyam Registered MSME",
    Img: certImg,
  },
  {
    title: "ISO 9001:2015 Certified",
    Img: meityIndia,
  },
  {
    title: "Startup India Recognized",
    Img: startupIndia,
  },
];

const MotionCard = motion(Card);
const MotionImg = motion.img;

export default function Certifications() {
  return (
    <Box
      sx={{
        py: 15,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f5f9ff",
      }}
    >
      <Container maxWidth="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h6" color="primary" fontWeight={600}>
              TRUST & COMPLIANCE
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              Our Certifications & Recognitions
            </Typography>
            <Typography color="text.secondary" mt={1}>
              We are officially recognized and certified by government and
              industry authorities.
            </Typography>
          </Box>
        </motion.div>

        {/* Certification Cards */}
        <Grid container spacing={4} sx={{ mt: { xs: -10, md: -6 } }}>
          {certifications.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: 0,
                  scale: 1.01,
                }}
                sx={{
                  height: "100%",
                  background: "transparent",
                  boxShadow: "none",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <MotionImg
                    src={item.Img}
                    alt={item.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />

                  <Typography fontWeight={600} mt={2} color="text.secondary">
                    {item.title}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
