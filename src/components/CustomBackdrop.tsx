import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.5],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#a8b5eb",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View style={containerStyle} />;
};

export default CustomBackdrop;
// import React, { useMemo } from "react";
// import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
// import Animated, {
//   Extrapolation,
//   interpolate,
//   useAnimatedProps,
//   useAnimatedStyle,
//   useSharedValue,
// } from "react-native-reanimated";
// import { BlurView } from "expo-blur";

// const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

// const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
//   const containerAnimatedStyle = useAnimatedStyle(() => ({
//     backgroundColor: `rgba(0,0,0,${interpolate(
//       animatedIndex.value,
//       [-1, 0],
//       [0, 0.5],
//       Extrapolation.CLAMP
//     )})`,
//   }));

//   // styles
//   const containerStyle = useMemo(
//     () => [style, containerAnimatedStyle],
//     [style]
//   );

//   const blurViewProps = useAnimatedProps(() => {
//     return {
//       intensity: interpolate(
//         animatedIndex.value,
//         [-1, 0],
//         [0, 20],
//         Extrapolation.CLAMP
//       ),
//     };
//   });

//   return (
//     <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />
//   );
// };

// export default CustomBackdrop;
