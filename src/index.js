import React from 'react';
import ReactDom from 'react-dom';
import Halogen from 'halogen';
import styled from 'styled-components';

export default class WrapperComponent extends React.Component {
  render() {
    let isActive = 'none';

    if(this.props.active) isActive = 'block'

    const Hloader = Halogen[this.props.loader];

    const Wrapper = styled.div`
      position: relative;
    `;

    const LoaderWrapper = styled.div`
      &:before {
        content: '';
        background-color: black;
        width: 100%;
        height: 100%;
        opacity: .7;
        position: absolute;
      }

      display: ${ isActive }
    `;    

    const Loader = styled.div`
      position: absolute;
      text-align: center;
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

    let textElement = null
    if (this.props.text) textElement = <div>{this.props.text}</div>

    return (
      <Wrapper> 
        <LoaderWrapper>
          <Loader>
            <Hloader color={'grey'} />
            {textElement}
          </Loader>
        </LoaderWrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}
