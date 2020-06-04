import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

interface Props {
    text: string;
    align: string;
    size: number;
    color: string;
    bold: number;
    style: object;
    styles: object;
}

const Text = styled.Text`
  width: 100%;
  text-align: ${(props:  Props) => props.align};
  font-size:  ${(props:  Props) => props.size}px;
  font-weight:  ${(props:  Props) => props.bold};
  color:  ${(props:  Props) => props.color};
`;

const TextComponent = (props: Props) => {
  return <Text {...props }>{ props.text }</Text>;
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired.toString,
  align: PropTypes.string.toString,
  size: PropTypes.number,
  color: PropTypes.string.toString,
  bold: PropTypes.oneOf([ 
    // "normal", "bold",
    100,200,300,400,500,600,700,800,900
  ]),
  style: PropTypes.object,
  styles: PropTypes.object,
}

TextComponent.defaultProps = {
  size: 16,
  color: "#333333",
  bold: 400,
  align: 'left',
  style: {},
  styles: {}
};

export default TextComponent;