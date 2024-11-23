import { Box, Grid, Typography, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        color: "black",
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        {/* Social Icons Section */}
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <Box>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{
                  "&:hover": { color: "#1DA1F2" },
                }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  "&:hover": { color: "#0077B5" },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://github.com"
                target="_blank"
                sx={{
                  "&:hover": { color: "#333" },
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{
                  "&:hover": { color: "#1877F2" },
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Information Section */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                About
              </Typography>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                Features
              </Typography>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                Support
              </Typography>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                Community
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                contact@contactUs.com
              </Typography>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                support@contactUs.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                Terms & Conditions
              </Typography>
              <Typography variant="body2" fontSize="large" fontWeight="bold">
                Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};


