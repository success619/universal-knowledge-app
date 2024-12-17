import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UniversalKnowledgeBlog from "../layout/home/UniversalKnowledgeBlog";
import Library from "../pages/home/library/Library";
import Courses from "../pages/home/courses/Courses";
import Monietize from "../pages/home/monietize/Monietize";
import Notes from "../pages/home/notes/Notes";
import Notifications from "../pages/home/notifications/Notifications";
import PaymentMethod from "../pages/home/payments/PaymentMethod";
import Schools from "../pages/home/schools/Schools";
import Search from "../pages/home/search/Search";
import TextBooks from "../pages/home/text books/TextBooks";
import Topics from "../pages/home/topics/Topics";
import Trendings from "../pages/home/trendings/Trendings";
import Settings from "../pages/home/settings/Settings";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="UniversalKnowledgeBlog"
        component={UniversalKnowledgeBlog}
      />
      <HomeStack.Screen name="Library" component={Library} />
      <HomeStack.Screen name="Courses" component={Courses} />
      <HomeStack.Screen name="Trendings" component={Trendings} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="Monietize" component={Monietize} />
      <HomeStack.Screen name="Notes" component={Notes} />
      <HomeStack.Screen name="PaymentMethod" component={PaymentMethod} />
      <HomeStack.Screen name="Schools" component={Schools} />
      <HomeStack.Screen name="TextBooks" component={TextBooks} />
      <HomeStack.Screen name="Topics" component={Topics} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}
