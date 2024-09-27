"use client"

import { UserButton } from '@clerk/nextjs'
import { BarChart, Calendar, ChartNoAxesGantt, Clock, Users } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return( 
    <UserButton 
    appearance={
       { elements:{
            avatarBox: "w-10 h-10 "
        }}
    }>
        <UserButton.MenuItems>
            <UserButton.Link 
                label='My Events'
                labelIcon={<Calendar size={15}/>}
                href='/events'
            />
            <UserButton.Link 
                label='Dashboard'
                labelIcon={<BarChart size={15}/>}
                href='/dashboard'
            />
            <UserButton.Link 
                label='Meetings'
                labelIcon={<Users size={15}/>}
                href='/meetings'
            />
            <UserButton.Link 
                label='Availability'
                labelIcon={<Clock size={15}/>}
                href='/availability'
            />
            <UserButton.Action label='manageAccount' />
        </UserButton.MenuItems>
        
    </UserButton>
  )
}

export default UserMenu;