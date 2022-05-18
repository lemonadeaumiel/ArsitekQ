import React from 'react'
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton,
    EuiText
  } from '@elastic/eui';
import './home.styles.scss';
import banner from '../resources/home/header.jpg';

const Home = (props) => {

    return (
        <>
        <EuiFlexGroup gutterSize="none">
            <EuiFlexItem className="header">
                <EuiText>
                    <h1>no</h1>
                </EuiText>
            </EuiFlexItem>
            <img className="banner" src={banner} alt="Banner"/>
        </EuiFlexGroup>
        </>
      );
}

export default Home;