import React from 'react'
import './navbar.styles.scss';
import {
    EuiHeader,
    EuiHeaderSectionItem,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiHeaderLink,
  } from '@elastic/eui';

const Navbar = (props) => {
    return (
        <EuiHeader className="navbar">
          <EuiHeaderSectionItem>
            <EuiHeaderLogo>Elastic</EuiHeaderLogo>
          </EuiHeaderSectionItem>
    
          <EuiHeaderSectionItem border="none">
            <EuiHeaderLinks aria-label="App navigation links example">
              <EuiHeaderLink isActive>Docs</EuiHeaderLink>
    
              <EuiHeaderLink>Code</EuiHeaderLink>
        
              <EuiHeaderLink iconType="help">Help</EuiHeaderLink>
            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
        </EuiHeader>
      );
}

export default Navbar;