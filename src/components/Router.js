import React, { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import EmpleadosComponent from './EmpleadosComponent'
import MenuComponent from './MenuComponent'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/empleados" element={<EmpleadosComponent/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}
