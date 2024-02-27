import { addblog } from '@/app/redux/apiCalls';
import { Typography } from '@mui/material'
import { Box } from '@mui/system'




const Block2 = ({myData}) => {
  

  return (
  <>
     
    <Box>
      
      <Box sx={{margin:{xs:'20px',sm:'30px',md:'100px 200px 0px 200px'}}}>
        <Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>PRODUCT REVIEWS</Typography>
        <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'20px',sm:'30px',md:'40px'},fontFamily:'fantasy'}}>I AM AN EDITOR AND KAY BEAUTYS NEW LINE OF LIPSTICKS MAKE FOR THE PERFECT GALETINE DAY PRESENT</Typography>
        
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography>by Rupesh Mandal</Typography>
            <Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>991 views</Typography>
        </Box>
      </Box>

     
      <Box sx={{display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',marginTop:'100px',padding:'20px'}}>
     <img src={myData&&myData.sections&&myData.sections.length!==0?myData.sections[0].url.length!==0&&myData.sections[0].url[0].path:"/images/blog9.jpg"} style={{width:'700px',height:'500px'}}/>
      </Box>
    

      <Box sx={{display:'flex',justifyContent:'center',margin:{xs:'20px',sm:'30px',md:'0px 200px'}}}>
         <Typography>{myData&&myData.sections&&myData.sections.length!==0&&myData.sections[0].text}</Typography>
      </Box>
  
    </Box>
 
    </>
   
  )
}

export default Block2
