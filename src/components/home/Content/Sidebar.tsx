import * as React from 'react'
import styled, { css } from '../../style/styled'

// Local
import { Space } from '../../shared/Space'
import { SideMenu } from './Sidemenu'
import { SidebarLine } from './SidebarLine'
import Twitter from '../../vectors/Twitter'
import Slack from '../../vectors/Slack'
import Archive from '../../vectors/Archive'
import { mobile } from '../../style/media'

export const Sidebar = () => {
  return (
    <Wrapper>
      <Space height={64} />
      <SideMenu
        title="Join the community"
        items={[
          { text: 'Follow on Twitter', url: '#', icon: <Twitter /> },
          { text: 'Join us on Slack', url: '#', icon: <Slack /> },
        ]}
      />

      <SidebarLine />

      <SideMenu
        title="topics"
        items={[
          { text: 'Articles', url: '#', selected: true },
          { text: 'Tutorials', url: '#' },
          { text: 'Videos', url: '#' },
          { text: 'Community & Events', url: '#' },
          { text: 'Tools & Open Source', url: '#' },
        ]}
      />

      <Space height={64} />
      <SideMenu
        title="Recent issues"
        items={[
          { text: 'Issue 88', url: '#', selected: true },
          { text: 'Issue 87', url: '#' },
          { text: 'Issue 86', url: '#' },
          { text: 'Issue 85', url: '#' },
          { text: 'View all issues', url: '#', icon: <Archive /> },
        ]}
      />
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  flex-grow: 1;

  margin-left: 42px;

  ${mobile(css`
    display: none;
  `)};
`