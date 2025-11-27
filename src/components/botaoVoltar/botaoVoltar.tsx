import React from "react";
import styled from "styled-components";

type Variant =
  | "fill"
  | "enter"
  | "expand"
  | "collapse"
  | "rotate";

interface IconAnimatedProps {
  icon: React.ReactNode;
  variant: Variant;
  size?: number;
  onClick?: () => void;
}

export const BotaoVoltar: React.FC<IconAnimatedProps> = ({
  icon,
  variant,
  size = 60,
  onClick
}) => {
  return (
    <IconWrapper
      size={size}
      className={`icon-${variant}`}
      onClick={onClick}
      role="button"
      aria-label="Voltar"
    >
      <span className="inner">{icon}</span>
    </IconWrapper>
  );
};

const colors = {
  green: "#16A085",
  red: "#C82647",
  greenL: "#8CC63F",
  orange: "#EB9532",
  purple: "#7E3661",
  background: "#2d2c3e"
};

const IconWrapper = styled.div<{ size: number }>`
  cursor: pointer;
  position: relative;
  display: inline-block;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  margin: ${({ size }) => size / 5}px;
  border-radius: ${({ size }) => size * 0.5}px;

  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transition: 0.25s ease;
    border-radius: inherit;
  }

  .inner {
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: ${({ size }) => size / 2}px;
    z-index: 2;
    transition: 0.25s ease;
  }

  &.icon-fill::before {
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 1px ${colors.red};
  }
  &.icon-fill:hover::before {
    box-shadow: inset 0 0 0 ${({ size }) => size}px ${colors.red};
  }

  &.icon-enter::after {
    box-shadow: inset 0 0 0 1px ${colors.orange};
  }
  &.icon-enter::before {
    border-radius: 0;
    margin-left: -100%;
    box-shadow: inset 0 0 0 ${({ size }) => size}px ${colors.orange};
  }
  &.icon-enter:hover::before {
    margin-left: 0;
  }

  &.icon-expand::after {
    box-shadow: inset 0 0 0 1px ${colors.red};
  }
  &.icon-expand::before {
    background: ${colors.red};
    box-shadow: inset 0 0 0 ${({ size }) => size}px ${colors.background};
  }
  &.icon-expand:hover::before {
    box-shadow: inset 0 0 0 1px ${colors.background};
  }

  &.icon-collapse::before {
    border-radius: 0;
  }
  &.icon-collapse:hover::before {
    box-shadow:
      inset 0 ${({ size }) => size / 2}px 0 0 ${colors.greenL},
      inset 0 -${({ size }) => size / 2}px 0 0 ${colors.greenL};
  }
  &.icon-collapse::after {
    box-shadow: inset 0 0 0 1px ${colors.greenL};
  }

  &.icon-rotate {
    box-shadow: inset 0 0 0 1px ${colors.purple};
  }
  &.icon-rotate::before,
  &.icon-rotate::after {
    border: 0px solid transparent;
  }

  &.icon-rotate:hover::before {
    transition:
      border-top-width 0.3s ease,
      border-top-color 0.3s ease;
    border-width: ${({ size }) => size}px;
    border-top-color: ${colors.purple};
  }

  &.icon-rotate:hover::after {
    transition:
      border-left-width 0.3s ease,
      border-left-color 0.3s ease;
    border-width: ${({ size }) => size}px;
    border-left-color: ${colors.purple};
  }

  &.icon-rotate:hover {
    transition: background 0.001s ease 0.3s;
    background: ${colors.purple};
  }
`;
