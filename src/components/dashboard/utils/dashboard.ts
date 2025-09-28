import {
  Home,
  Users,
  User,
  List,
  TrendingUp,
  Heart,
  CheckCircle,
  Trophy,
  Bookmark,
  Play,
  Plus,
  MessageCircle,
} from "lucide-react";
import {
  AnimeSlide,
  AnimeCard,
  Activity,
  Mission,
  Stat,
  Feature,
  Achievement,
  SidebarItem,
} from "../types";

export const animeSlides: AnimeSlide[] = [
  {
    id: "1",
    title: "One Piece",
    season: "Season 4",
    episodes: 38,
    image: "/one-piece.png",
    description:
      "Join Luffy and his crew on their epic adventure to find the One Piece treasure!",
  },
  {
    id: "2",
    title: "Naruto",
    season: "Final Season",
    episodes: 24,
    image: "/naruto.jpg",
    description: "The final battle for humanity's survival reaches its climax!",
  },
  {
    id: "3",
    title: "Demon Slayer",
    season: "Season 3",
    episodes: 12,
    image: "/demon-slayer.jpg",
    description:
      "Tanjiro continues his quest to turn his sister back to human!",
  },
  {
    id: "4",
    title: "Solo Leveling",
    season: "Season 3",
    episodes: 12,
    image: "/solo-leveling.jpg",
    description:
      "Sung Jin-Woo rises from the weakest hunter to the strongest through a mysterious leveling system!",
  },
];

export const recentActivities: Activity[] = [
  {
    id: 1,
    type: "avatar",
    text: "Chibi style Avatar Created",
    subtext: "Create an avatar using this image",
    time: "2mins ago",
    icon: User,
  },
  {
    id: 2,
    type: "mission",
    text: "Completed Daily Mission",
    subtext: "Create an avatar using this image",
    time: "2mins ago",
    icon: CheckCircle,
  },
  {
    id: 3,
    type: "watchlist",
    text: "Added an Anime to Watchlist",
    subtext: "Create an avatar using this image",
    time: "2mins ago",
    icon: Plus,
  },
  {
    id: 4,
    type: "avatar",
    text: "Chibi style Avatar Created",
    subtext: "Create an avatar using this image",
    time: "2mins ago",
    icon: User,
  },
  {
    id: 5,
    type: "avatar",
    text: "Chibi style Avatar Created",
    subtext: "Create an avatar using this image",
    time: "2mins ago",
    icon: User,
  },
  {
    id: 6,
    type: "avatar",
    text: "Chibi style Avatar Created",
    subtext: "Create an avatar using this image",
    time: "2mins ago",
    icon: User,
  },
];

export const dailyMissions: Mission[] = [
  {
    id: 1,
    text: "Chat with your AI Companion",
    subtext: "Have a conversation with LUNA",
    completed: true,
    xp: 20,
  },
  {
    id: 2,
    text: "Add to Watchlist",
    subtext: "Add a new anime to your watchlist",
    completed: false,
    xp: 20,
  },
  {
    id: 3,
    text: "Invite 1 friend to AniVerse",
    subtext: "Invite a friend to AniVerse",
    completed: false,
    xp: 20,
  },
];

export const journeyStats: Stat[] = [
  { label: "Total Messages", value: "699", icon: MessageCircle },
  { label: "Total Avatar Created", value: "699", icon: User },
  { label: "Anime Watch Time", value: "99hrs", icon: Play },
];

export const newFeatures: Feature[] = [
  {
    title: "Voice Chat",
    description:
      "Now your companion won't just text, voice messages now available for free.",
    status: "Get Notified",
    icon: "",
  },
  {
    title: "Community Hub",
    description: "Connect with fellow anime fans, share avatars and unleash.",
    status: "Get Notified",
    icon: "",
  },
  {
    title: "Manga Reader",
    description:
      "Dive into licensed manga and read your favorites with AI companion.",
    status: "Get Notified",
    icon: "",
  },
];

export const trendingAnime: AnimeCard[] = [
  {
    id: "1",
    title: "Hunter x Hunter",
    episodes: 79,
    rating: 4.5,
    image: "/hxh.jpg",
  },
  {
    id: "2",
    title: "Hunter x Hunter",
    episodes: 79,
    rating: 4.5,
    image: "/hxh.jpg",
  },
  {
    id: "3",
    title: "Hunter x Hunter",
    episodes: 79,
    rating: 4.5,
    image: "/hxh.jpg",
  },
];

export const lunaRecommended: AnimeCard[] = [
  {
    id: "1",
    title: "Hunter x Hunter",
    episodes: 79,
    rating: 4.5,
    image: "/hxh.jpg",
  },
  {
    id: "2",
    title: "Hunter x Hunter",
    episodes: 79,
    rating: 4.5,
    image: "/hxh.jpg",
  },
  {
    id: "3",
    title: "Hunter x Hunter",
    episodes: 79,
    rating: 4.5,
    image: "/hxh.jpg",
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Binge Watcher",
    subtitle: "Have a conversation with LUNA",
    status: "Rare",
    color: "bg-purple-600",
  },
  {
    id: 2,
    title: "Progress with LUNA",
    subtitle: "Have a conversation with LUNA",
    status: "",
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Binge Watcher",
    subtitle: "Have a conversation with LUNA",
    status: "Epic",
    color: "bg-purple-600",
  },
  {
    id: 4,
    title: "Have a conversation with LUNA",
    subtitle: "Have a conversation with LUNA",
    status: "Epic",
    color: "bg-emerald-600",
  },
  {
    id: 5,
    title: "LUNA's Best Friend",
    subtitle: "Have a conversation with LUNA",
    status: "Legendary",
    color: "bg-orange-500",
  },
];

export const sidebarItems: SidebarItem[] = [
  { name: "Home", icon: Home, path: "/dashboard", active: true },
  { name: "My Companion", icon: Users, path: "/dashboard/companion" },
  { name: "Avatars", icon: User, path: "/dashboard/avatars" },
  { name: "Watch List", icon: List, path: "/dashboard/watchlist" },
  { name: "Seasonal Tracker", icon: TrendingUp, path: "/dashboard/seasonal" },
  { name: "Watch Later", icon: Heart, path: "/dashboard/watchlater" },
  { name: "Watch Order", icon: List, path: "/dashboard/watchorder" },
  { name: "Completed", icon: CheckCircle, path: "/dashboard/completed" },
  { name: "Achievements", icon: Trophy, path: "/dashboard/achievements" },
  { name: "Manga (coming soon)", icon: Bookmark, path: "#", disabled: true }, // No path for disabled
];
