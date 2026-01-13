import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Counter from "./Counter.jsx";

const stats = [
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Successful Projects" },
  { value: 5, suffix: ".00", label: "Average Rating" },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} textAlign="center">
          {stats.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Counter value={item.value} suffix={item.suffix} />
                <Typography color="text.secondary">{item.label}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
