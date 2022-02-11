import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Backdrop from './backdrop'
const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const Modal = (props, { showModal }) => {
    const handleClose = () => {

    }
    return (
        <Backdrop onClick={handleClose}>
            {showModal && (
                <motion.div className='backdrop' variants={backdropVariants} initial="hidden" animate="visible">
                    {/* {props.children} */}
                </motion.div>
            )}
        </Backdrop>
    )
}

export default Modal