import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;

  a {
    display: inline-block;
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          border: 0.2rem solid #2ecc71  ; /* Sky Blue */
          background: #2ecc71 ; 
          color: #2C3E50; /* White */
          a {
            padding: 0.75rem 1.5rem;
            color: #ffffff; /* White */
          }
          &:hover {
            background: #b0e0e6; 
            border-color: #b0e0e6; 
          }
        `;

      case "secondary":
        return css`
          border: 0.2rem solid #2c3e50; 
          background: #5d6d7e; 
          color:  #ffffff;
          a {
            padding: 0.75rem 1.5rem;
            color: #808080; /* Gray */
          }
          &:hover {
            background: #2c3e50;
            color:  #ffffff; /* White */
            a {
              color: #ffffff; /* White */
            }
          }
        `;

      default:
        break;
    }
  }}
`;

export default Button;
