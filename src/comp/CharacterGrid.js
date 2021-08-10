import React from "react";
import {
  Card,
  CardSection,
  Center,
  Col,
  Grid,
  Group,
  Image,
  Loader,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
function CharacterGrid({ isLoading, items }) {
  const useBreakPoints = () => {
    const sm = useMediaQuery("(max-width:510px)");
    const md = useMediaQuery("(max-width:730px)");
    const lg = useMediaQuery("(max-width:960px)");
    return { sm, md, lg };
  };
  const { sm, md, lg } = useBreakPoints();
  const span = sm ? 12 : md ? 6 : lg ? 4 : 3;
  return (
    <div>
      {isLoading ? (
        <Center>
          <Grid>
            <Col span={12}>
              <Loader size="xl" color="green"></Loader>
            </Col>
          </Grid>
        </Center>
      ) : (
        <Grid>
          {items.map((character) => {
            return (
              <Col span={span} key={character.char_id} className="actor-box">
                <Card shadow="sm" padding="md">
                  <CardSection>
                    <Image src={character.img} className="actor-img" />
                  </CardSection>
                  <Group position="apart">
                    <NavLink to={"/character/" + character.char_id}>
                      <Text
                        weight="500"
                        size="lg"
                        style={{ marginTop: "15px" }}
                      >
                        {character.name}
                      </Text>
                    </NavLink>
                  </Group>
                </Card>
              </Col>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default CharacterGrid;
