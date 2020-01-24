import React from "react";
import {
  Avatar,
  RaisedContainer,
  Table,
  THead,
  TH,
  TBody,
  TR,
  TD
} from "react-zeit-components";

export default {
  title: "Table"
};

export const Regular = () => (
  <RaisedContainer>
    <Table>
      <THead>
        <TR>
          <TH />
          <TH>name</TH>
          <TH>username</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>
            <Avatar src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=240" />
          </TD>
          <TD>Evil Rabbit</TD>
          <TD>evilrabbit</TD>
        </TR>
        <TR>
          <TD>
            <Avatar src="https://zeit.co/api/www/avatar/?u=rauchg&s=240" />
          </TD>
          <TD>Guillermo Rauch</TD>
          <TD>rauchg</TD>
        </TR>
      </TBody>
    </Table>
  </RaisedContainer>
);
