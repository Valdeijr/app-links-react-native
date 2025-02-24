import { colors } from "@/constants/colors";
import { globalStyles } from "@/theme/global";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View style={globalStyles.container}>
			<Text style={{ color: colors.success }}>Bem vindo.</Text>
		</View>
	);
}
