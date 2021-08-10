import { Group, Grid, Button, Center } from "@mantine/core";
import React from "react";
import { GoPerson } from "react-icons/go";
import { FiFilm } from "react-icons/fi";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { GiDeathSkull } from "react-icons/gi";
import { NavLink, withRouter } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Center>
        <Grid>
          <Group>
            <NavLink to="/breakingBad">
              <Button
                color="teal"
                leftIcon={<GoPerson />}
                variant="filled"
                radius="md"
              >
                Characters
              </Button>
            </NavLink>
            <NavLink to="/episodes">
              <Button
                color="teal"
                leftIcon={<FiFilm />}
                variant="filled"
                radius="md"
              >
                Episodes
              </Button>
            </NavLink>
            <NavLink to="/quotes">
              <Button
                color="teal"
                leftIcon={<BsFillChatQuoteFill />}
                variant="filled"
                radius="md"
              >
                Quote
              </Button>
            </NavLink>
            <NavLink to="/deaths">
              <Button
                color="teal"
                leftIcon={<GiDeathSkull />}
                variant="filled"
                radius="md"
              >
                Deaths
              </Button>
            </NavLink>
          </Group>
        </Grid>
      </Center>
    </div>
  );
}

export default withRouter(Navbar);
