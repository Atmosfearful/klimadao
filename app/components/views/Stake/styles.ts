import { css } from "@emotion/css";
import * as typography from "@klimadao/lib/theme/typography";
import * as common from "@klimadao/lib/theme/common";

export const stakeCard = css`
  position: relative;
  display: grid;
  background-color: var(--surface-02);
  border-radius: 1.2rem;
  padding: 2.4rem;
  gap: 2rem;

  .hr {
    height: 2px;
    background-color: var(--surface-01);
  }
`;

export const stakeCard_header = css`
  display: grid;
  gap: 0.8rem;
`;

export const stakeCard_header_title = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const stakeIcon = css`
  margin-right: 10px;
`;

export const inputsContainer = css`
  display: grid;
  gap: 2rem;
`;

export const stakeSwitch = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: stretch;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.4rem;
  background-color: var(--surface-01);
`;

export const switchButton = css`
  ${typography.button};
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: var(--surface-01);
  border-radius: 0.4rem;
  min-height: 4.8rem;
  &:hover {
    opacity: 0.8;
  }

  &[data-active="false"] {
    color: var(--font-01);
    background-color: var(--surface-01);
  }

  &[data-active="true"] {
    background-color: var(--primary);
    font-weight: bold;
  }
`;

export const stakeInput = css`
  min-height: 4.8rem;
  display: grid;
  grid-template-columns: 1fr min-content;
  z-index: 1; /* cover advanced-settings border */
`;

export const stakeInput_input = css`
  ${typography.body2};
  width: 100%;
  background-color: var(--surface-02);
  padding-left: 1.6rem;
  color: var(--font-02);
  border: 2px solid var(--surface-01);
  border-radius: 0.8rem 0 0 0.8rem;
  outline: none;
  font-family: monospace;
  &::placeholder {
    ${typography.caption};
    color: var(--font-02);
  }
  &:focus,
  &:hover {
    border-color: var(--klima-green);
  }
  &:disabled {
    opacity: 0.7;
  }
`;

export const stakeInput_max = css`
  ${common.iconButton};
  ${typography.button};
  padding: 0 1.6rem;
  border-radius: 0 0.8rem 0.8rem 0;
  &:hover {
    background-color: var(--surface-03);
  }
`;

export const infoIconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  min-height: 2.4rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const infoTable = css`
  display: grid;
  grid-template-areas:
    "label label label"
    "data data data";
  row-gap: 0.4rem;
  column-gap: 1.6rem;
  justify-content: space-around;
  align-content: center;
  justify-items: center;
`;

export const address = css`
  font-family: monospace;
  text-align: center;
  color: var(--gray);
`;

export const infoTable_label = css`
  ${typography.caption};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: end;
  color: var(--font-03);
  display: flex;
  gap: 0.4rem;

  svg {
    color: var(--font-03);
  }
`;

export const infoTable_value = css`
  ${typography.caption};
  color: var(--font-01);

  span[data-warning="true"] {
    color: rgb(248, 152, 27);
  }
`;
export const buttonRow = css`
  display: flex;
  justify-content: center;
`;

export const buttonRow_spinner = css`
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
`;

export const submitButton = css`
  width: 100%;
`;
