import {
  Card,
  Center,
  Col,
  Grid,
  Title,
  Text,
  Badge,
  Tooltip,
  Button,
  Loader,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImFilm } from "react-icons/im";
import { GiFilmProjector } from "react-icons/gi";
import { useMediaQuery } from "@mantine/hooks";

function Deaths() {
  const [deaths, setDeaths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/deaths`);
      setDeaths(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, []);
  const useBreakPoints = () => {
    const sm = useMediaQuery("(max-width:510px)");
    const md = useMediaQuery("(max-width:730px)");
    const lg = useMediaQuery("(max-width:960px)");
    return { sm, md, lg };
  };
  const { sm, md, lg } = useBreakPoints();
  const span = sm ? 12 : md ? 6 : lg ? 4 : 3;
  return (
    <div style={{ paddingTop: "25px" }}>
      <Grid>
        {isLoading ? (
          <Center style={{ paddingTop: "25px", width: "100%" }}>
            <Grid>
              <Col span={12}>
                <Loader size="xl" color="green"></Loader>
              </Col>
            </Grid>
          </Center>
        ) : (
          deaths.map((item) => {
            return (
              <Col span={span}>
                <Card className="deathItem">
                  <div>
                    <Text
                      weight={500}
                      size="lg"
                      align="center"
                      style={{ paddingBottom: "10px" }}
                    >
                      {item.death}
                    </Text>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <Badge variant="filled">cause :</Badge>
                    </div>
                    <span> {item.cause} </span>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <Badge variant="filled">Responsible :</Badge>
                    </div>
                    <span> {item.responsible} </span>
                  </div>
                  <div>
                    <Grid style={{ paddingTop: "10px" }}>
                      <Col span={6}>
                        <Text weight="500" size="lg" align="center">
                          Season
                        </Text>
                        <Center>
                          <GiFilmProjector
                            style={{ fontSize: "40px", marginRight: "5px" }}
                          />
                          <Title order={2} align="center">
                            {" "}
                            {item.season}{" "}
                          </Title>
                        </Center>{" "}
                      </Col>
                      <Col span={6}>
                        <Text weight="500" size="lg" align="center">
                          Episode
                        </Text>
                        <Center>
                          <ImFilm
                            style={{ fontSize: "40px", marginRight: "5px" }}
                          />
                          <Title order={2}> {item.episode} </Title>
                        </Center>
                      </Col>
                    </Grid>
                  </div>
                  <div style={{ paddingTop: "5px" }}>
                    <Center>
                      <Tooltip
                        wrapLines
                        width={200}
                        withArrow
                        transition="fade"
                        transitionDuration={500}
                        label={item.last_words}
                      >
                        <Button compact color="teal">
                          Last Words
                        </Button>
                      </Tooltip>
                    </Center>
                  </div>
                </Card>
              </Col>
            );
          })
        )}
      </Grid>
    </div>
  );
}

export default Deaths;
