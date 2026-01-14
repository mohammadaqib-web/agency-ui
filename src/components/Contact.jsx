import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const formData = { name, email, message };

    try {
      setLoading(true);
      const res = await fetch(import.meta.env.VITE_APP_API, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
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
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" color="primary" fontWeight={600}>
                CONTACT US
              </Typography>

              <Typography variant="h4" fontWeight={700} mt={1}>
                Let’s Build Something Great Together
              </Typography>

              <Typography color="text.secondary" mt={2} mb={4}>
                Have a project in mind? Fill out the form and our team will get
                back to you within 24 hours.
              </Typography>

              {/* CONTACT INFO */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <ContactItem
                  icon={<LocationOnIcon />}
                  text="Lucknow, Uttar Pradesh, India"
                />
                <ContactItem
                  icon={<PhoneIcon />}
                  text="+91 6394623162"
                />
              </Box>

              {/* SOCIAL LINKS */}
              <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                <SocialIcon
                  icon={<LinkedInIcon />}
                  link="https://www.linkedin.com/company/codnexa"
                />
                <SocialIcon
                  icon={<InstagramIcon />}
                  link="https://www.instagram.com/codnexa"
                />
              </Box>
            </motion.div>
          </Grid>

          {/* FORM */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.95)",
                  p: 4,
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ height: 48 }}
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* SUCCESS SNACKBAR */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSuccess(false)}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

/* ---------- HELPERS ---------- */

function ContactItem({ icon, text }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Typography>{text}</Typography>
    </Box>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "#fff",
          borderColor: "primary.main",
        },
      }}
      onClick={() => window.open(link, "_blank")}
    >
      {icon}
    </Box>
  );
}
