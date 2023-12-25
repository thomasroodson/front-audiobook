import { Header } from "@/components/Header";
import { Livro } from "@/types/Livro";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import AudioPlayer from "@/components/AudioPlayer";
import Head from "next/head";

type Props = {
  username: string;
  livroItem: Livro;
};

const Page = ({ username, livroItem }: Props) => {
  const router = useRouter();
  return (
    <Container component="section">
      <Head>
        <title>Livro - {livroItem.attributes.title}</title>
      </Head>
      <Header username={username} />
      <Box pt={12} mb={2}>
        <Button
          size="small"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
        >
          Voltar
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1, pb: 12 }}>
        <Grid container spacing={5}>
          <Grid xs={12} md={4} textAlign="center">
            <CardMedia
              component="img"
              image={`http://localhost:1337${livroItem.attributes.capa.data.attributes.formats.small.url}`}
              sx={{
                maxHeight: "390px",
                objectFit: "contain",
                my: 4
              }}
            />
            <Typography variant="h5">{livroItem.attributes.title}</Typography>
          </Grid>
          <Grid
            xs={12}
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <AudioPlayer />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryslug = Array.isArray(context.query.slug)
    ? context.query.slug[0]
    : context.query.slug;
  const token = context.req.cookies?.AUTH_TOKEN;
  const option = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const resUser = await fetch("http://localhost:1337/api/users/me", option);

  const { username } = await resUser.json();

  const res = await fetch(
    `http://localhost:1337/api/livros?populate=*&filters[slug][$eq]=${queryslug}`,
    option
  );
  const { data } = await res.json();

  return {
    props: {
      username,
      livroItem: data[0]
    }
  };
};

export default Page;
