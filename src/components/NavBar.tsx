// import React from 'react'

import {Config, HamburgerButton} from "@icon-park/react";
import menus from '../config/menus.ts'
import {Button, Drawer} from 'antd';
import {useState} from 'react'

function NavBar() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <main className = ' bg-white flex justify-center shadow-sm border-b-4-10 border-t-4 border-t-rose-600  '>
                <section
                    className = 'w-full flex justify-between items-center  py-3 px-4 lg:container   '>
                    <div className = 'lg:flex items-center justify-center gap-2 hidden'>
                        <div className = "logo flex items-center text-rose-600 gap-2">
                            <Config theme = "outline" size = '28'/>
                            <div className = "name text-2xl uppercase font-bold ">
                                xihaha
                            </div>
                        </div>
                        <div className = 'flex item-center gap-2 '>
                            {
                                menus.map(menu => (
                                    <a href = '#' key = {menu.title} className = "flex items-center ">
                                        {menu.title}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <HamburgerButton onClick = {showDrawer} className = 'lg:hidden' theme = "outline" size = "24"
                                     fill = "#333"/>
                    <div className = 'flex gap-2'>
                        <Button type = {'primary'}>登录</Button>
                        <Button type = {"default"}>注册</Button>
                    </div>
                </section>

            </main>

            <Drawer title = "" placement = {'left'} onClose = {onClose} open = {open}
                    extra = {
                        <>
                            <div className = "logo flex items-center text-rose-600 gap-2">
                                <Config theme = "outline" size = '24'/>
                                <div className = "name text-2xl uppercase font-bold ">
                                    xihaha
                                </div>
                            </div>
                        </>}>
                <div className = 'grid grid-flow-row gap-2 text-gray-800/90 '>
                    {
                        menus.map(menu => (
                            <a href = '#' key = {menu.title}>
                                {menu.title}
                            </a>
                        ))
                    }
                </div>
            </Drawer>
        </>

    )
}

export default NavBar
