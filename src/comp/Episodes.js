import {
  Card,
  Grid,
  Tab,
  Tabs,
  Col,
  Text,
  Badge,
  Tooltip,
  Loader,
  Button,
  Center,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/episodes`);
      setEpisodes(result.data);
      console.log(result.data[0]);
      setIsLoading(false);
    };
    fetchItem();
  }, []);
  const filterEp = (season) => {
    return episodes.filter((ep) => ep.season === season);
  };

  const useBreakPoints = () => {
    const sm = useMediaQuery("(max-width:510px)");
    const md = useMediaQuery("(max-width:730px)");
    const lg = useMediaQuery("(max-width:960px)");
    return { sm, md, lg };
  };
  const { sm, md, lg } = useBreakPoints();
  const span = sm ? 12 : md ? 6 : lg ? 4 : 3;
  const tabsInfo = [
    { id: 1, sName: "Season 1", sNumber: "1" },
    { id: 1, sName: "Season 2", sNumber: "2" },
    { id: 1, sName: "Season 3", sNumber: "3" },
    { id: 1, sName: "Season 4", sNumber: "4" },
    { id: 1, sName: "Season 5", sNumber: "5" },
  ];
  return (
    <div className="episodes">
      <Tabs grow variant="pills">
        {tabsInfo.map((tab) => {
          return (
            <Tab label={tab.sName} color="blue">
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
                  filterEp(tab.sNumber).map((ep) => {
                    return (
                      <Col key={ep.episode_id} span={span} className="epBox">
                        <Card className="epBox">
                          <Text weight={500} style={{ paddingBottom: "15px" }}>
                            Title : {ep.title}{" "}
                          </Text>
                          <div className="air-date">
                            <Badge variant="dot" color="red">
                              Air Date :{" "}
                            </Badge>
                            <Text> {ep.air_date} </Text>
                          </div>
                          <div>
                            <Center style={{ paddingTop: "15px" }}>
                              <Tooltip
                                wrapLines
                                width={200}
                                withArrow
                                transition="fade"
                                transitionDuration={500}
                                label={ep.characters.map((char) => {
                                  return <div> {char} </div>;
                                })}
                              >
                                <Button compact color="teal">
                                  Characters
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
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default Episodes;
