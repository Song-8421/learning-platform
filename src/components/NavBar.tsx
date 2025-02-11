// import React from 'react'

import {Config} from "@icon-park/react";
import menus from '../config/menus.ts'
import {Button, Drawer} from 'antd';
import {useState} from 'react'

function NavBar() {
    const [open, setOpen] = useState(true);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <main className = ' bg-white flex justify-center'>
                <section className = 'w-full flex justify-between py-3 container pl-4 size-fit  pr-[10px] '>
                    <div className = 'flex items-center justify-center gap-2 '>
                        <div className = "logo flex items-center text-rose-600 gap-2">
                            <Config theme = "outline" size = '28'/>
                            <div className = "name text-2xl uppercase font-bold ">
                                xihaha
                            </div>
                        </div>
                        <div className = 'lg:flex item-center gap-2 hidden'>
                            {
                                menus.map(menu => (
                                    <a href = '#' key = {menu.title} className = "flex items-center ">
                                        {menu.title}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className = 'flex gap-2'>
                        <Button type = {'primary'}>登录</Button>
                        <Button type = {"default"}>注册</Button>
                    </div>
                </section>
            </main>
            <Drawer title = "Basic Drawer" onClose = {onClose} open = {open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>

    )
}

export default NavBar
