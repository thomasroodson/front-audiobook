import { Header } from "@/components/Header";
import { Livro } from "@/types/Livro";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

type Props = {
  username: string;
  livroItem: Livro;
};

const Page = ({ username, livroItem }: Props) => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex"
      }}
    >
      <Header username={username} />
      <Box
        mt={12}
        textAlign="center"
        p={2}
        sx={{ backgroundColor: "#fafafa", width: "100%" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
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
      </Box>
      <Box>.....</Box>
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
  const livroItem: Livro = data[0];

  return {
    props: {
      username,
      livroItem
    }
  };
};

export default Page;
