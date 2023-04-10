import React from 'react'
import { motion } from 'framer-motion';
import img from '../../../../assets/special.png'
import img2 from '../../../../assets/delivery.png'
import './styles.scss'

const imgs = [
    img, img2
]

const Sliders = () => {
  return (
        <motion.div className='slider-container '>
            <motion.div className='slider  ' drag='x' dragConstraints={{right: 10, left:-400}}>
            {imgs.map((it, ind)=>(
                <motion.div  whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.8 }} key={ind} className='item'>
                    <img src={it} />
                </motion.div>
            ))}
            </motion.div>
        </motion.div>
  )
}

export default Sliders