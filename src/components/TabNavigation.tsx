"use client";

import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Users,
  Calendar,
  Info,
  Heart,
} from "lucide-react";
import { TABS } from "@/app/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  "book-open": BookOpen,
  users: Users,
  calendar: Calendar,
  info: Info,
  heart: Heart,
};

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide py-2 gap-1">
          {TABS.map((tab) => {
            const Icon = iconMap[tab.icon] || Home;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  relative flex items-center gap-2 px-4 py-3 rounded-xl font-semibold
                  whitespace-nowrap transition-colors min-w-fit
                  ${
                    isActive
                      ? "text-ocean-700 bg-ocean-50"
                      : "text-ocean-600 hover:text-ocean-800 hover:bg-ocean-50/50"
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-coral-500" : ""}`} />
                <span>{tab.label}</span>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-coral-400 to-coral-600 rounded-full"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Hover effect */}
                {!isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-ocean-100/0 to-ocean-100/0 hover:from-ocean-100/30 hover:to-ocean-100/10 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
