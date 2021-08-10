import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardSection,
  Col,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function ListActors() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((res) => {
        setCharacters(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const useBreakPoints = () => {
    const sm = useMediaQuery("(max-width:400px)");
    const md = useMediaQuery("(max-width:600px)");
    const lg = useMediaQuery("(max-width:800px)");
    const xl = useMediaQuery("(max-width:1000px)");
    return { sm, md, lg, xl };
  };
  const { sm, md, lg } = useBreakPoints();
  const span = sm ? 12 : md ? 6 : lg ? 4 : 3;
  return (
    <div>
      <Container>
        <Grid>
          {characters.length ? (
            characters.map((character) => {
              return (
                <Col span={span} key={character.char_id}>
                  <Card shadow="sm" padding="md">
                    <CardSection>
                      <Image src={character.img} />
                    </CardSection>
                    <Group position="apart">
                      <Text
                        weight="500"
                        size="lg"
                        style={{ marginTop: "15px" }}
                      >
                        {character.name}
                      </Text>
                    </Group>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div>No Character</div>
          )}
        </Grid>
      </Container>
    </div>
  );
}
