import React from 'react'
import DashboardData from './DashboardData'
import { useRouteProtector } from '../../use-route-protector'

export default function Dashboard() {
    useRouteProtector()
    return (
        <div>
            <DashboardData />
        </div>
    )
}
