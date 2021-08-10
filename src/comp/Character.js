import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Col,
  Image,
  Card,
  Center,
  Title,
  Loader,
  Badge,
  Text,
  Alert,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Character() {
  const params = useParams();
  /* */
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/${params.id}`
      );
      setCharacter(result.data[0]);
      console.log(result.data[0]);
      setIsLoading(false);
    };
    fetchItem();
  }, [params.id]);
  const useBreakPoints = () => {
    const sm = useMediaQuery("(max-width:670px)");
    return { sm };
  };
  const { sm } = useBreakPoints();
  const span = sm ? 12 : 6;
  return (
    <div style={{ padding: "30px 0" }}>
      {!isLoading ? (
        <Card>
          <Grid>
            <Col span={12}>
              <NavLink to="/">
                <Button
                  radius="lg"
                  color="teal"
                  leftIcon={<AiOutlineArrowLeft />}
                >
                  {" "}
                  Back To Home Page{" "}
                </Button>
              </NavLink>
            </Col>
            <Col span={span}>
              <Image src={character.img} />
            </Col>
            <Col span={span}>
              <Title order={2} weight={500}>
                {" "}
                Name : {character.name}
              </Title>
              <Title order={2} weight={500}>
                {" "}
                Birthday : {character.birthday}
              </Title>
              <Title order={2} weight={500}>
                {" "}
                Nickname : {character.nickname}
              </Title>

              <div style={{ display: "flex", gap: "10px", padding: "10px 0" }}>
                <Badge color="teal" size="lg">
                  Status
                </Badge>
                <Text variant="text" weight={600} size="lg">
                  {character.status}
                </Text>
              </div>
              <div>
                <Alert title="Occupation" color="teal" shadow="sm">
                  {character.occupation.map((item) => {
                    return <Text size="lg"> {item} </Text>;
                  })}
                </Alert>
              </div>
            </Col>
          </Grid>
        </Card>
      ) : (
        <Center style={{ paddingTop: "25px", width: "100%" }}>
          <Grid>
            <Col span={12}>
              <Loader size="xl" color="green"></Loader>
            </Col>
          </Grid>
        </Center>
      )}
    </div>
  );
}

export default Character;
