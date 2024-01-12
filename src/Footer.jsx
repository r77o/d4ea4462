import React from 'react';
import { MdCall } from "react-icons/md"
import { RiContactsLine } from "react-icons/ri";
import { MdSettings } from "react-icons/md"
import dialpad from './img/dialpad.svg'
import record from './img/record.svg'


const Footer = () => {
  return (
    <footer>
      <ul>
        <li><span className='footer-tab'><MdCall size={20}/></span></li>
        <li><span><RiContactsLine size={20}/></span></li>
        <li><span><img alt='dialpad' className='dialpad' src={dialpad} width="120" height="120" /></span></li>
        <li><span><MdSettings size={20}/></span></li>
        <li><span><img alt='record' className='record' src={record} width="30" height="50" /></span></li>
      </ul>
    </footer>
  );
};

export default Footer;