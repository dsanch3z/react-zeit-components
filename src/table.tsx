import * as React from "react";
import styled from "styled-components";

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0px;
  width: 100%;
`;

export const THead = styled.thead`
  background-color: #f2f2f2;
  text-transform: uppercase;
  font-size: 12;
  & th:first-child {
    padding: 0 10px;
    border-bottom: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
    border-radius: 4px 0px 0px 4px;
    border-top: 1px solid #eaeaea;
  }
  & th:last-child {
    padding: 0 10px;
    border-bottom: 1px solid #eaeaea;
    border-radius: 0 4px 4px 0;
    border-right: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;
  }
`;

export const TR = styled.tr`
  padding: 0 10px;
  &:not(:last-child) td {
    border-bottom: 1px solid #eaeaea;
  }
`;

const cellStyles = `
  padding: 0 10px;
  text-align: left;
  vertical-align: top;
`;

const THStyled = styled.th`
  ${cellStyles}
  color: #666;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;

  & div {
    align-items: center;
    display: flex;
    min-height: 40px;
    font-size: 12px;
  }
`;

const TDStyled = styled.td`
  ${cellStyles}
  color: #444444;
  font-size: 14;
  padding: 0 10px;
  &:first-child {
    border-left: 1px solid transparent;
  }
  & div {
    align-items: center;
    display: flex;
    min-height: 50px;
    flex-flow: row wrap;
  }
`;

export const TH = (
  props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
) => (
  <THStyled {...props}>
    <div>{props.children}</div>
  </THStyled>
);

export const TD = (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
  <TDStyled {...props}>
    <div>{props.children}</div>
  </TDStyled>
);

export const TBody = styled.tbody``;
