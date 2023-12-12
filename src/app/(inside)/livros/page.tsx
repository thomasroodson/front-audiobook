"use client";
import { usePathname } from "next/navigation";
import {
  Card,
  CardMedia,
  Grid,
  Box,
  CardActionArea,
  Link
} from "@mui/material";

const Page = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const pathname = usePathname();

  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center"
      }}
    >
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={4} lg={3}>
            <Card sx={{ maxWidth: 300, mx: "auto" }} elevation={3}>
              <CardActionArea>
                <Link href={`${pathname}/test`}>
                  <CardMedia
                    component="img"
                    height="380"
                    image="https://marketplace.canva.com/EAD0UDNeCTY/1/0/1003w/canva-branco-c%C3%A9u-noturno-autobiografia-capa-de-livro-SrhIncvuk6Q.jpg"
                    sx={{
                      objectFit: "cover"
                    }}
                  />
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Page;
