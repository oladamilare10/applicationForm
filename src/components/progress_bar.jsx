import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = ({ bgcolor, progress, height }) => {
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 40,
		boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
		overflow: 'hidden',
		position: 'relative'
	}
	
	const progressVariants = {
		initial: { width: 0 },
		animate: { 
			width: `${progress}%`,
			transition: { duration: 0.5, ease: "easeOut" }
		}
	}
	
	return (
	<div style={Parentdiv}>
		<motion.div
			initial="initial"
			animate="animate"
			variants={progressVariants}
			style={{
				height: '100%',
				background: `linear-gradient(90deg, ${bgcolor} 0%, #ff5f6d 100%)`,
				borderRadius: 40,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				paddingRight: '10px'
			}}
		>
			<motion.span
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2 }}
				style={{
					color: 'white',
					fontWeight: 600,
					fontSize: '0.9rem',
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
				}}
			>
				{`${progress}%`}
			</motion.span>
		</motion.div>
	</div>
	)
}

export default ProgressBar;
