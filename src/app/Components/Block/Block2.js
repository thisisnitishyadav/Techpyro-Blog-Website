import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Block2 = () => {
  return (
    <>
      <Box sx={{margin:{xs:'20px',sm:'30px',md:'100px 200px 0px 200px'}}}>
        <Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>PRODUCT REVIEWS</Typography>
        <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'20px',sm:'30px',md:'40px'},fontFamily:'fantasy'}}>I AM AN EDITOR AND KAY BEAUTY'S NEW LINE OF LIPSTICKS MAKE FOR THE PERFECT GALETINE’S DAY PRESENT</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography>by Rupesh Mandal</Typography>
            <Typography sx={{color:'#FC2779',fontSize:'14px',fontWeight:'600'}}>991 views</Typography>
        </Box>
      </Box>


      <Box sx={{display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',marginTop:'100px',padding:'20px'}}>
        <img src='https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue336/The-Kay-Beauty-Liquid-Lipstick-Makes-For-The-Perfect-Galentines-Present_OI.jpg'/>
      </Box>


      <Box sx={{display:'flex',justifyContent:'center',margin:{xs:'20px',sm:'30px',md:'0px 200px'}}}>
         <Typography>Love-themed cocktails, a list of ‘easy-breezy DIY gift tutorials for the better half ’ and the barrage of recommendations for a romantic getaway— the myriad of reels and posts popping on my Instagram feed, serve as the harbinger of the most awaited week of February. Yes, the world is only a few days shy of V- Day, and I am almost positive that exciting plans are shaping up in the light of celebrations (for all)—regardless of whether you are taken or unattached. As far as 'yours truly' is concerned, I haven't been hit by Cupid’s shiny old bow in many moons, nevertheless still gearing up for a night of partying with my girlfriends. After all, the loving scared bond of female adult friendship warrants a celebratory dinner and at least a few (ahem, a few too many) cosmos. So, I will be slipping into my best dress and dancing the night away on the floor.To crank up the celebrations, I have also been surveying the internet for little tokens of love for all my Galentine’s and landed on a product that made my heart sing out loud. My girlfriends and I are all ardent fans of the Kay Beauty line owing to its superior-quality, hybrid makeup formulations, so imagine my ecstasy when I stumbled upon the very first set of Matte Liquid Lipsticks by Kay! The debut offering in 12 crush-worthy shades was something I had to get my hands on, STAT! So, a series of tappity taps and I had a package shipped to my doorstep. I made the call to try and test the offering (a few shades I set aside for myself) before the big day and here’s what I think!</Typography>
      </Box>
    </>
  )
}

export default Block2
