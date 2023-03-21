import { CardStyled, Section } from "./Card.styled";

export const Card = () => {
  return (
    <Section>
      <CardStyled>
          <div>
            <svg>
              <use href="../../image/logo.svg"></use>
            </svg>
            <img src="../../image/chat.png" alt="chat" />
          </div>
          <div>
            <img src="../../image/line.png" alt="line" />
            <img src="../../image/avatar.png" alt="avatar" />
          </div>
      </CardStyled>
    </Section>
  );
};
