import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Business Understanding & Requirement Analysis",
    desc: "We analyze your business goals, audience, and challenges to define clear requirements aligned with growth and ROI.",
  },
  {
    step: "02",
    title: "Strategy, Planning & Digital Roadmap",
    desc: "We create a scalable roadmap covering development, marketing, and long-term performance.",
  },
  {
    step: "03",
    title: "Website, App & Software Development",
    desc: "Fast, responsive, interactive, and SEO-optimized development with clean code and great UX.",
  },
  {
    step: "04",
    title: "Testing, Performance & SEO Optimization",
    desc: "We test speed, usability, and SEO to ensure better rankings and conversions.",
  },
  {
    step: "05",
    title: "Launch, Lead Generation & Marketing",
    desc: "Smooth launch followed by ads, lead generation, and performance marketing.",
  },
  {
    step: "06",
    title: "Ongoing Support, Analytics & Growth",
    desc: "Continuous optimization using analytics to scale your business.",
  },
];

export default function HowWeWork() {
  return (
    <Box
      sx={{
        py: 12,
        position: "relative",
        overflow: "hidden",
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
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h6" color="primary" fontWeight={600}>
            HOW WE WORK
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            Our Proven Process
          </Typography>
        </Box>

        <Grid container spacing={4} mt={-6}>
          {steps.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    position: "relative",
                    zIndex: 1,
                    backdropFilter: "blur(6px)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      color="primary"
                      sx={{ opacity: 0.15 }}
                    >
                      {item.step}
                    </Typography>

                    <Typography variant="h6" fontWeight={600} mb={1}>
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
