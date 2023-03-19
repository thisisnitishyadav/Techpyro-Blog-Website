
import React,{useState} from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    useTheme,
    Drawer,
    IconButton,
    Button,
    TextField,
    
    
    
    
  } from "@mui/material";
import { fontWeight } from '@mui/system';
import MenuButtons from '../MenuButton/MenuButtons';
import { Menu, Search } from '@mui/icons-material';

import { useRouter } from 'next/router';



const StyleToolbar = styled(Toolbar)(({theme}) => ({
  height:'150px',
  width:'85%',
  
   display:'flex',
   flexDirection:'column',
    backgroundColor:'#FFFFFF',
   
    boxShadow:'2px 1px 2px 1px rgba(0,0,0,0.3)',
    [theme.breakpoints.down('md')]: {
      marginLeft:'0px',
      top:'0px',
       height:'60px',
       alignItems:'center',
       justifyContent:'center',
       width:'90%',
       bottom:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft:'0px',
     top:'0px',
      height:'50px',
      alignItems:'center',
      justifyContent:'center',
      width:'90%',
      bottom:'50px',
    },
        
        
        
    }));
    
    const Cart = styled(Box)`
    flex:1;
    `;
    
    
    const NavLeft = styled(Box)(({theme}) => ({
        
        height:'75px',
        display: 'flex',
       width:'100%',
       borderBottom:'3px solid rgba(0,0,0,0.2)',
          justifyContent: 'space-evenly',
        
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          margin:'0px',
         
          height:'60px',
          border:'none',
          justifyContent:'space-evenly',
        },
        [theme.breakpoints.down('sm')]: {
          margin:'0px',
            width:'auto',
            height:'50px',
            border:'none',
            gap:'20px',
        },
        
        
    }));
    const NavRight = styled(Box)(({theme}) => ({
       
        height:'75px',
        display: 'flex',
       justifyContent:'space-between',
        alignItems: 'center',
      gap:'25px',
      position:'Sticky',
        [theme.breakpoints.down('md')]: {
          display:'none',
          paddingRight:'0px',
          margin:'0px',
            },
            [theme.breakpoints.down('sm')]: {
              display:'none',
               paddingRight:'0px',
               margin:'0px',
              
             
            },
            
            
        }));
       
     
      

const MenuButton = styled(IconButton)(({ theme }) => ({
    fontSize:'50px',
    
    margin:"0",
    padding:'0',
        
    }
));



const Downnav = styled(Box)(({ theme }) => ({
  height:'75px',
  width:'83%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  margin:'100px 200px 50px 120px',
  // backgroundColor:'transparent',
  boxShadow:'3px 1px 2px 1px rgba(0,0,0,0.2)',
  [theme.breakpoints.down('sm')]: {
   margin:'50px 0px 0px 0px',
   height:'60px',
   width:'100%',
 },
      
  }
));

const NavBar2 = styled(AppBar)(({theme}) =>({
    
  backgroundColor:'transparent',
    width:'100%',
    height:'auto',
   alignItems:'center',
    position:'static',
    boxShadow:'none',
    display:'flex',
    justifyContent:'center',
    padding:'20px',
    [theme.breakpoints.down('md')]: {
      position:'sticky',
      height:'200px',
      width:'100%',
      
     
    },


[theme.breakpoints.down('sm')]: {
 position:'sticky',
  height:'100px',
  width:'100%',
 
 
},

}));



export default function Navbar2(props) {
    const arr = [{name:'title'},{name:'about'},{name:'contact'}]
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }
const router=useRouter()

const handleClick = (e) => {
  e.preventDefault()
  router.push(`/Search`)
};

const handleRstnt = (e) => {
  e.preventDefault()
  router.push(`/restaurent`)
};
const handleEduc = (e) => {
    e.preventDefault()
    router.push(`/education`)
  };
  const handleShop = (e) => {
    e.preventDefault()
    router.push(`/shop`)
  };
  const handleEcommerce = (e) => {
    e.preventDefault()
    router.push(`/e-commerce`)
  };

  const handleRstntapp = (e) => {
    e.preventDefault()
    router.push(`/rstntapp`)
  };

  const handleEduapp = (e) => {
    e.preventDefault()
    router.push(`/eduapp`)
  };
  const handleShopapp = (e) => {
    e.preventDefault()
    router.push(`/shopapp`)
  };
  const handleEcommerceapp = (e) => {
    e.preventDefault()
    router.push(`/e-commerceapp`)
  };

  const handleTechpyro = (e) => {
    e.preventDefault()
    router.push("https://www.techpyro.com/")
  };
    
  return (
    <>
      
    
      <NavBar2 >
      
    
       
        <StyleToolbar>
        
        <NavLeft >
        <img src='/images/logo (2).png'style={{height:'70px',width:'120px'}}/>
        <Box sx={{display:'flex'}}>

          <TextField variant='outlined' label='Whar are you in the mood for?' sx={{"& fieldset":{borderRadius:'0px',height:'50px',width:'450px',background:'white'},width:'450px',height:'45px',display:{xs:'none',sm:'none',md:'block'}}}></TextField>
          <Button variant='contained' sx={{height:'45px',borderRadius:'0px',background:'#3F414D',"&:hover":{background:'#3F414D'},display:{xs:'none',sm:'none',md:'block'}}}>Search</Button>
        </Box>

       
          <Typography sx={{display:{xs:'flex',sm:'flex',md:'none'},color:'black',gap:'10px'}}>Whar are u in the mood for? <Search onClick={handleClick}/></Typography>

<Box sx={{display:{xs:'block',sm:'block',md:'none'}}}>

<MenuButton onClick={handleOpen}>
<Menu sx={{color:'black'}}/>
</MenuButton>
<Drawer open={open} onClose={handleClose} sx={{}}>
<MenuButtons setOpen={setOpen}/>
</Drawer>
</Box>
        
         


         

          {/* <Box >
            <MenuButton onClick={handleOpen}>
                <Menu sx={{display: {xs:'block',sm:'block',md:'none'},color:'#1F3965',fontSize:'30px'}}/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} sx={{position:'absolute'}}>
                <MenuButtons/>
            </Drawer>
           
            </Box> */}

         
                
        
               
            </NavLeft >
          
            <NavRight > 

            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Websites</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstnt}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduc}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShop}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerce}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>

            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Apps</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Dashboards</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstnt}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduc}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShop}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerce}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
            
        
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>UI/UX Design</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>

        
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Digital Marketing</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
         
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Graphic Design</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
         
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Logo Design</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
         
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Presentation</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
         
            <Box sx={{position:'relative',"&:hover .list":{display:'flex'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Content Writing</Typography>
          <Box className={'list'} sx={{position:'absolute',display:'none',background:'#F5F5F5',padding:'20px',gap:'20px',width:'150px',flexDirection:'column',cursor:'pointer'}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleRstntapp}>Restaurent</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEduapp}>Education</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleShopapp}>Shop</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}} onClick={handleEcommerceapp}>E-Commerce</Typography>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px'}}>Others</Typography>
          </Box>
            </Box>
          
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:'16px',fontWeight:'400px',cursor:'pointer'}} onClick={handleTechpyro}>Shop@Techpyro</Typography>
            </NavRight>
            
        </StyleToolbar>
        
        
      
       
       
   
        </NavBar2>

        
     

       


        
        </>
       
     
    
  )
}