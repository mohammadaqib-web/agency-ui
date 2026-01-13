import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    // role: "Founder, StartupX",
    feedback:
      "CodNexa delivered exactly what we needed. The website performance and UI exceeded our expectations.",
  },
  {
    name: "Ananya Verma",
    feedback:
      "Their SEO and digital marketing strategies helped us significantly increase our organic traffic.",
  },
  {
    name: "Amit Patel",
    // role: "Product Manager, TechNova",
    feedback:
      "Professional team with great communication. Our app was delivered on time with excellent quality.",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h6" color="primary" fontWeight={600}>
            TESTIMONIALS
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            What Our Clients Say
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Real feedback from businesses we’ve worked with.
          </Typography>
        </Box>

        {/* Testimonials */}
        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
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
                    borderRadius: 3,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent>
                    <Typography
                      color="text.secondary"
                      sx={{ mb: 3, fontStyle: "italic" }}
                    >
                      “{item.feedback}”
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar>{item.name.charAt(0)}</Avatar>
                      <Box>
                        <Typography fontWeight={600}>{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.role}
                        </Typography>
                      </Box>
                    </Box>
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
