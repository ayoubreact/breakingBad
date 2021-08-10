import React, { useState, useEffect } from "react";
import axios from "axios";
import { Blockquote, Button, Center, Grid, Col, Loader } from "@mantine/core";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/quotes`);
    let randomId = Math.floor(Math.random() * result.data.length);
    setQuotes(result.data[randomId]);
    setIsLoading(false);
  };
  const hundelChange = () => {
    fetchItem();
  };
  return (
    <div style={{ paddingTop: "30px" }}>
      {isLoading ? (
        <Center style={{ paddingTop: "25px", width: "100%" }}>
          <Grid>
            <Col span={12}>
              <Loader size="xl" color="green"></Loader>
            </Col>
          </Grid>
        </Center>
      ) : (
        <div>
          <Blockquote color="teal" cite={quotes.author}>
            {" "}
            {quotes.quote}{" "}
          </Blockquote>
          <Button
            onClick={hundelChange}
            color="teal"
            style={{ marginTop: "15px" }}
          >
            Get New Quote
          </Button>
        </div>
      )}
    </div>
  );
}

export default Quotes;
