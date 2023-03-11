import { Box, styled } from '@mui/material'
import React from 'react'




const SliderContainer = styled("div")({
  width:"100%",
  height:"350px",
  paddingRight:"0px",
  // background:'transparent',
  display:'flex',
  // justifyContent:'center',
  flexDirection:'column',
alignItems:'center',
// zIndex:"1",
// border:'1px solid black',
"@media (max-width: 480px)": {
    
     },

})
const ImageContainer = styled("div")({
    display:"flex",
    width:"400px",
    height:"200px",
   
    background:'#F2F2F2',
    // border:'1px solid rgba(0,0,0,0.9)',
    "@media (max-width: 480px)": {
       gap:'0px',
        width:'100%',
        marginLeft:'20px',
        boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
        },

})
const Image = styled("img")({
    width:"400px",
    height:"200px",
    objectFit:"cover",
    borderRadius:'0px',
    // "&:hover":{backgroundColor:'rgba(0,0,0,0.3)'},
    // margin:"10px",
    // zIndex:"1",
    // border:'1px solid black',
    "@media (max-width: 960px)": {
      width:'270px',
      height:'400px',
       
       },
     
        "@media (max-width: 600px)": {
          width:'270px',
          height:'400px',
            
            },
            "@media (max-width: 480px)": {
                width:'100%',
                height:'200px',
               
              
                
                },
})
const Head = styled("h6")({
    // fontSize: "10px",
    // fontWeight:"400",
    // textAlign:"center",
    marginBottom:"0px",
    "@media (max-width: 600px)": {
    //    fontSize: "23px",
       },
})
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const CrouselItem = ({posterLinks}) => {
    console.log(posterLinks)
  return (
    <>
      
    <SliderContainer>
     <ImageContainer>
         <Image src={posterLinks.image} />
         
         
         
         
          
     </ImageContainer>
     {/* <Box sx={{width:{xs:'280px',sm:'280px',md:'230px'},display:'flex',gap:{xs:'5px',sm:'10px',md:'20px'},flexDirection:'column'}}>
         <Head style={{fontWeight:{xs:'200',sm:'400',md:'400'},fontSize:'20px'}}>{posterLinks.price.mrp}</Head>
         <Head style={{fontSize:'15px'}}>{posterLinks.tagline}</Head>
         <Head style={{fontSize:'20px',textDecoration:'underline'}}>{posterLinks.rating}</Head>
         </Box> */}
    </SliderContainer>
    </>
  )
}

export default CrouselItem