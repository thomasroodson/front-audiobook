import { Livro } from "@/types/Livro";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import Link from "next/link";

type Props = {
  item: Livro;
};

export const LivroItem = ({ item }: Props) => {
  return (
    <Card sx={{ maxWidth: 300, mx: "auto" }} elevation={3}>
      <CardActionArea>
        <Link href="/livros/[slug]" as={`/livros/${item.attributes.slug}`}>
          <CardMedia
            component="img"
            height="396"
            image={`http://localhost:1337${item.attributes.capa.data.attributes.formats.medium.url}`}
            sx={{
              objectFit: "cover"
            }}
          />
        </Link>
      </CardActionArea>
    </Card>
  );
};
