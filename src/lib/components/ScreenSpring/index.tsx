// import React from 'react'
// import Box from '@mui/material/Box'
// import { animated, config, useSpring } from '@react-spring/web'

// import images from '@/assets/images'
// import useGlobalStore from '@/lib/hooks/useGlobalStore'
// import UsersService from '@/lib/services/users/users.service'

// const ScreenSpring: React.FC = () => {
//   const { isSuccess } = UsersService.GetBride.useQuery()
//   const [animate, setAnimate] = React.useState(false)
//   const { activeScreen } = useGlobalStore()
//   const getConfig = (ms = 900) => ({ ...config.molasses, duration: animate ? ms : 0 })
//   const baseStyle: React.CSSProperties = { position: 'absolute', backgroundSize: 'cover' }
//   const doorStyle: React.CSSProperties = { ...baseStyle, top: 0, bottom: 0 }
//   const wayangStyle: React.CSSProperties = { ...doorStyle, zIndex: 1, width: '50%' }
//   const flowerStyle: React.CSSProperties = { ...baseStyle, width: '50%', aspectRatio: '1.5/1' }
//   const wayangLeft = useSpring({
//     left: animate || activeScreen ? '-50%' : '0',
//     config: getConfig(900),
//   })
//   const wayangRight = useSpring({
//     right: animate || activeScreen ? '-50%' : '0',
//     config: getConfig(900),
//   })
//   const flowerTopLeft = useSpring({
//     top: animate ? '0' : `-${flowerStyle.width}`,
//     left: animate ? '0' : `-${flowerStyle.width}`,
//     config: getConfig(900),
//   })
//   const flowerTopRight = useSpring({
//     top: animate ? '0' : `-${flowerStyle.width}`,
//     right: animate ? '0' : `-${flowerStyle.width}`,
//     config: getConfig(900),
//   })
//   const flowerBottomLeft = useSpring({
//     bottom: animate ? '0' : `-${flowerStyle.width}`,
//     left: animate ? '0' : `-${flowerStyle.width}`,
//     config: getConfig(1200),
//   })
//   const flowerBottomRight = useSpring({
//     bottom: animate ? '0' : `-${flowerStyle.width}`,
//     right: animate ? '0' : `-${flowerStyle.width}`,
//     config: getConfig(1200),
//   })

//   React.useEffect(() => {
//     if (isSuccess) {
//       setAnimate(false)
//       setTimeout(() => setAnimate(true), 50)
//     }
//   }, [isSuccess, activeScreen])

//   return (
//     <Box width="100%" height="100%" position="absolute" zIndex={99}
//       sx={{ pointerEvents: 'none' }}>
//       <animated.div
//         style={{
//           background: `url('${images.wayangLeft.src}')`,
//           backgroundPosition: 'right',
//           ...wayangStyle,
//           ...wayangLeft,
//         }}
//       />
//       <animated.div
//         style={{
//           background: `url('${images.wayangRight.src}')`,
//           backgroundPosition: 'left',
//           ...wayangStyle,
//           ...wayangRight,
//         }}
//       />
//       <animated.div
//         style={{
//           background: `url('${images.flowerTopLeft.src}')`,
//           backgroundPosition: 'bottom right',
//           ...flowerStyle,
//           ...flowerTopLeft,
//         }}
//       />
//       <animated.div
//         style={{
//           background: `url('${images.flowerTopRight.src}')`,
//           backgroundPosition: 'bottom left',
//           ...flowerStyle,
//           ...flowerTopRight,
//         }}
//       />
//       <animated.div
//         style={{
//           background: `url('${images.flowerBottomLeft.src}')`,
//           backgroundPosition: 'top right',
//           ...flowerStyle,
//           ...flowerBottomLeft,
//         }}
//       />
//       <animated.div
//         style={{
//           background: `url('${images.flowerBottomRight.src}')`,
//           backgroundPosition: 'top left',
//           ...flowerStyle,
//           ...flowerBottomRight,
//         }}
//       />
//     </Box>
//   )
// }

// export default ScreenSpring
