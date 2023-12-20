import { Header } from "@/components/Header";
import { LivroItem } from "@/components/LivroItem";
import { Livro } from "@/types/Livro";
import { Container, Grid, Typography } from "@mui/material";
import { GetServerSideProps } from "next";

type Props = {
  username: string;
  data: Livro[];
};

const Page = ({ username, data }: Props) => {
  return (
    <Container component="section" sx={{ textAlign: "center", py: 12 }}>
      <Header username={username} />
      <Typography variant="h4" mt={3} mb={3} sx={{ fontWeight: "bold" }}>
        Seus Livros
      </Typography>
      <Grid container spacing={3}>
        {data.map((data, index) => (
          <Grid key={index} item xs={12} sm={4} lg={3}>
            <LivroItem item={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies?.AUTH_TOKEN;
  const option = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const resUser = await fetch("http://localhost:1337/api/users/me", option);
  const { id, username } = await resUser.json();

  const res = await fetch(
    `http://localhost:1337/api/livros?populate=*&filters[users_permissions_users][id][$eq]=${id}`,
    option
  );
  const { data } = await res.json();
  return {
    props: {
      username,
      data
    }
  };
};

export default Page;
