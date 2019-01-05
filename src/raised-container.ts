import styled from "@emotion/styled";

const RaisedContainer = styled.div`
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
  transition: all 0.2s ease 0s;
  border-radius: 5px;
  padding: 10px 30px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
  }
`;

export default RaisedContainer;
