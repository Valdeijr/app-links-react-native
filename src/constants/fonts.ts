import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const scaleFont = (size: number) => (width / 375) * size;

export const fonts = {
	style: {
		light: "Ubuntu_300Light",
		regular: "Ubuntu_400Regular",
		medium: "Ubuntu_500Medium",
		bold: "Ubuntu_700Bold",
	},
	size: {
		tiny: scaleFont(8),
		small: scaleFont(12),
		compact: scaleFont(16),
		regular: scaleFont(20),
		medium: scaleFont(24),
		large: scaleFont(28),
		immense: scaleFont(32),
	},
};
