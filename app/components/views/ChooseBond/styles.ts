import { css } from "@emotion/css";
// import * as typography from "@klimadao/lib/theme/typography";
// import * as common from "@klimadao/lib/theme/common";
import breakpoints from "@klimadao/lib/theme/breakpoints";

export const chooseBondCard = css`
  position: relative;
  display: grid;
  background-color: var(--surface-02);
  border-radius: 1.2rem;
  padding: 1.6rem;
  gap: 2.4rem;
  align-content: start;

  .hr {
    height: 2px;
    background-color: var(--surface-01);
  }

  ${breakpoints.small} {
    padding: 2.4rem;
  }

  ${breakpoints.desktop} {
    grid-column: cardsleft;
    grid-row: 2 / span 3;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: start;
    /* hacky fix to keep grid-rows from collapsing on short screens */
    /* if you add a new bond or refactor this view, make sure you test for overflow at the narrowest part of the breakpoint */
    min-height: 117rem;
    min-width: 45rem;
  }

  ${breakpoints.desktopLarge} {
    padding: 3.2rem;
    /* hacky fix to keep grid-rows from collapsing on short screens */
    /* if you add a new bond or refactor this view, make sure you test for overflow at the narrowest part of the breakpoint */
    min-height: 99rem;
  }
`;

export const chooseBondCard_header = css`
  display: grid;
  gap: 0.8rem;
  max-width: 38rem;
`;

export const chooseBondCard_ui = css`
  display: grid;
  gap: 2.4rem;
  ${breakpoints.medium} {
    border: 2px solid var(--surface-01);
    padding: 2.4rem;
    border-radius: 1.2rem;
  }
  ${breakpoints.desktop} {
    gap: 3.2rem;
    padding: 3.2rem;
    max-width: 56rem;
    justify-self: center;
    width: 100%;
  }
`;

export const chooseBondCard_header_title = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const bondList = css`
  display: grid;
  gap: 1.2rem;
`;
export const bondList_columnTitle = css`
  display: flex;
  justify-content: space-between;
`;
export const bondLink = css`
  display: grid;
  gap: 1.6rem;
  border-radius: 0.6rem;
  grid-template-columns: min-content 1fr auto;
  background-color: var(--surface-01);
  padding: 0.8rem 1.2rem;
  border: 1px solid transparent;
  color: white;
  &:hover {
    border: 1px solid var(--klima-green);
    background-color: var(--surface-03);
  }
  > div {
    display: grid;
    gap: 0.4rem;
  }
  .bondLink_imgContainer {
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
  }
  .bondLink_imgContainer img {
    width: 3.2rem;
    height: 3.2rem;
  }

  ${breakpoints.medium} {
    padding: 1.2rem 1.6rem;
    .bondLink_imgContainer img {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;

export const bondROI = css`
  justify-self: center;
  align-self: center;
  &[data-hide="true"] {
    opacity: 0.4;
  }
`;
