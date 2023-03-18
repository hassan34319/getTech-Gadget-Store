'use client'
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import {Dropdown} from "flowbite-react";
import { motion, LayoutGroup } from "framer-motion";

import {useRouter} from "next/navigation"

type Props =  {
    links : {href : URL, label : String}[],
    title : String
}


function MyMenu({links, title } : Props) {
    const router = useRouter()
  return (
    <Dropdown
    label={title}
    inline={true}
  >
    {
        links.map((link)=> {
            return (
            <Dropdown.Item onClick={()=> {
                router.push(link.href)
            }}>
                {link.label}
            </Dropdown.Item>
            )
        })
    }
  </Dropdown>
  );
}

export default MyMenu;
