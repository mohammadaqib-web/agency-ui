import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import webDev from "../assets/carely.png";
import marketingImg from "../assets/charak.png";
import uiuxImg from "../assets/techuz.png";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: webDev,
  },
  {
    title: "Improved User Experience",
    category: "UI / UX Design",
    image: uiuxImg,
  },
  {
    title: "Organic Traffic on Website",
    category: "Digital Marketing",
    image: marketingImg,
  },
];

export default function Projects() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h6" color="primary" fontWeight={600}>
            PROJECTS
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            Our Recent Work
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Some of the projects we’ve successfully delivered.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    width={"100%"}
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="subtitle2" color="primary">
                      {project.category}
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      {project.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* <Box textAlign="center" mt={6}>
          <Button variant="outlined" size="large">
            View All Projects
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
}
