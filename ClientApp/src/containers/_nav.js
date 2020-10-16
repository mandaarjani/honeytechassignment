import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    route: '/dashboard',
    icon: 'cil-star'   
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Building',
    route: '/building',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Floor 1',
        to: '/floor',
        _children: [
          {
            _tag: 'CSidebarNavItem',
            name: 'Room 1',
            to: '/room',
          }          
        ],
      },
      {
        _tag: 'CSidebarNavDropdown',
        name: 'Floor 2',
        to: '/floor',
        _children: [
          {
            _tag: 'CSidebarNavItem',
            name: 'Room 2',
            to: '/room',
          }         
        ],
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Security',
    route: '/security',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Lock',
        to: '/lock'        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Alarm',
        to: '/alarm'        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Video',
        to: '/video'        
      }     
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    route: '/settings',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Profile',
        to: '/profile'        
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Logout',
        to: '/logout'        
      }      
    ],
  },
]
