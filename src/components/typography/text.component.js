import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
     font-family: ${theme.fonts.body};
     font-weight: ${theme.fontWeights.regular};
     color: ${theme.colors.text.primary};
     flex-wrap: wrap;
     margin-top: 0px;
     margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.heading};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

// <Text variant="label" />
/*
    const Text = styled.Text`
        !font-family: ${theme.fonts.body};
        !font-weight: ${theme.fontWeights.regular};
        *color: ${theme.colors.text.primary};
        *flex-wrap: wrap;
        *margin-top: 0px;
        *margin-bottom: 0px;
        *font-size: ${theme.fontSizes.body}:
        *font-weight: ${theme.fontWeights.medium}
        *font-family: ${theme.fonts.heading}
    `
*/

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
