import styled from '@emotion/styled';

export const StatList = styled.ul`
  list-style: none;
  text-align: left;
  width: 200px;
  margin: 0 auto;
  padding: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;

  ::before {
    content: '';
    height: 1px;
    flex-grow: 1;
    background-color: #000;
  }

  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const Name = styled.span`
  display: inline-block;
  order: -1;
`;

export const State = styled.span`
  display: inline-block;
  font-weight: 700;
`;
