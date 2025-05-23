import styled from "styled-components"

export const Box = styled.div<{
  $visible: boolean
  $color: "green" | "orange" | "red"
}>`
  position: fixed;
  z-index: 1000;
  top: 100px;
  left: 50%;
  transform: translate(-50%, ${({ $visible }) => ($visible ? "50" : "0")}%);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s, height 0.3s;

  max-width: 75vw;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  padding: 6px 14px;
  border-radius: 24px;
  background-color: ${({ $color }) =>
    $color === "green"
      ? "#4E7C3C"
      : $color === "orange"
      ? "#FFA903"
      : "#D8484A"};
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.08);

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.white.main};
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.bp.small}px) {
    padding: 6px 32px;
    width: max-content;
  }
`
