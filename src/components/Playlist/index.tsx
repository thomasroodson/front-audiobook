"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography
} from "@mui/material";
import { useState } from "react";
const Playlist = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 6
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        square={true}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{ backgroundColor: "#f5f5f5" }}
        >
          <Typography>1. Introdução</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1.1 Introdução</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        square={true}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{ backgroundColor: "#f5f5f5" }}
        >
          <Typography>1. Introdução</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>1.1 Introdução</Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Playlist;
