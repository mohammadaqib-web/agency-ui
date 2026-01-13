import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const services = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Development",
    price: "Starting at ₹3,000",
    desc: "High-performance web & mobile applications using modern technologies.",
  },
  {
    icon: <DesignServicesIcon fontSize="large" />,
    title: "Design",
    price: "Starting at ₹2,000",
    desc: "User-focused UI/UX design that improves engagement and conversion.",
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Marketing",
    price: "Starting at ₹3,000/month",
    desc: "SEO & digital marketing strategies to grow your business organically.",
  },
];

export default function Services() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h6" color="primary" fontWeight={600}>
            SERVICES
          </Typography>
          <Typography variant="h4" fontWeight={700} mt={1}>
            How We Work
          </Typography>
          <Typography color="text.secondary" mt={1}>
            We deliver end-to-end digital solutions for modern businesses.
          </Typography>
        </Box>

        {/* Service Cards */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    py: 4,
                    borderRadius: 3,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Box color="primary.main" mb={2}>
                      {service.icon}
                    </Box>

                    <Typography variant="h6" fontWeight={600}>
                      {service.title}
                    </Typography>

                    {/* Price */}
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ color: "primary.main", mb: 1 }}
                    >
                      {service.price}
                    </Typography>

                    <Typography color="text.secondary">
                      {service.desc}
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
