/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Card, Theme } from "@lugia/lugia-web";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  display: inline-block;
`;
export default class ShadowCard extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Card
          title={"this is title"}
          description={"this is description"}
          shadow={"always"}
          operation={"操作"}
        />
        <Card
          title={"this is title"}
          description={"this is description"}
          shadow={"hover"}
          operation={"操作"}
        />
        <Card
          title={"this is title"}
          description={"this is description"}
          shadow={"never"}
          operation={"操作"}
        />
      </Wrapper>
    );
  }
}
