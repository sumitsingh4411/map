import React,{useState} from 'react'
import { MenuOutlined ,UserOutlined  } from '@ant-design/icons';
import { Button,Drawer } from 'antd';
import  "./Header.css"
import Avatar from 'antd/lib/avatar/avatar';
import { useStateValue } from './stateprovider';
import ShareIcon from '@material-ui/icons/Share';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import FeedbackIcon from '@material-ui/icons/Feedback';
function Header() {
    const [visible, setVisible] = useState(false);
    const [{country,dark}, dispatch] = useStateValue();
    const showDrawer = () => {
        setVisible(true);
      };
     const darktheme=()=>{
        dispatch({
          type: "SET_DARK",
          dark: true,
        })
     }
     const defaulttheme=()=>{
      dispatch({
        type: "SET_DARK",
        dark: false,
      })
     }
      const onClose = () => {
        setVisible(false);
      };
    return (
        <>
        <div className={dark ? "dark" : "header"}>
            <div className="left">
            <MenuOutlined size={50} style={{color:'white'}}  onClick={showDrawer}/>
            </div>
            <div className="right">
            <Button type="primary">SignIn</Button>
            <Button type="primary">SignUp</Button>
            <Avatar size={50} icon={<UserOutlined />} style={{padding:'5px'}}/>
            </div>
        </div>
        <Drawer
           className={dark ? "darkdraw" : null}
           title="Menu"
           placement="left"
           closable={false}
           onClose={onClose}
           visible={visible}
         >
           <div className="draw">
           <div style={{display:'flex', marginBottom:'20px'}}>
           <Button onClick={darktheme}>Dark Theme</Button>
           <Button onClick={defaulttheme}>Default Theme</Button>
           </div>
           <div className="ic" style={{display:'flex'}}>
            <HomeIcon/>
           <p style={{margin:5}}>HOME</p>
           </div>
           <hr/>
           <div className="ic" style={{display:'flex'}}>
            <ShareIcon/>
           <p style={{margin:5}}>SHARE</p>
           </div>
           <hr/>
           <div className="ic" style={{display:'flex'}}>
            <InfoIcon />
           <p style={{margin:5}}>About</p>
           </div>
           <hr/>
           <div className="ic" style={{display:'flex'}}>
            <FeedbackIcon/>
           <p style={{margin:5}}>FeedBack</p>
           </div>
           <hr/>
           </div>
         </Drawer>
        </>
    )
}

export default Header
