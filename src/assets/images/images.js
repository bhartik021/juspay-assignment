// Image paths organized by theme
const imagePaths = {
  light: {
    // Brand
    ByeWind: '/images/light/ByeWind.png',
    
    // Navigation & UI
    ArrowLineRight: '/images/light/ArrowLineRight.png',
    ArrowLineLeft: '/images/light/ArrowLineLeft.png',
    Add: '/images/light/Add.png',
    FunnelSimple: '/images/light/FunnelSimple.png',
    ArrowsDownUp: '/images/light/ArrowsDownUp.png',
    CalendarBlank: '/images/light/CalendarBlank.png',
    Sun: '/images/light/Sun.png',
    ClockCounterClockwise: '/images/light/ClockCounterClockwise.png',
    Bell: '/images/light/Bell.png',
    Sidebar: '/images/light/Sidebar.png',
    Star: '/images/light/Star.png',
    Search: '/images/light/Search.png',
    DotsThreeOutlineVertical: '/images/light/DotsThreeOutlineVertical.png',
    
    // Trends & Analytics
    ArrowRise: '/images/light/ArrowRise.png',
    ArrowFall: '/images/light/ArrowFall.png',
    BarChart: '/images/light/BarChart.png',
    CurvChart: '/images/light/CurvChart.png',
    WorldMap: '/images/light/World Map.png',
    Chart01: '/images/light/01.png',
    
    // Dashboard Icons
    ChartPieSlice: '/images/light/ChartPieSlice.png',
    ShoppingBagOpen: '/images/light/ShoppingBagOpen.png',
    FolderNotch: '/images/light/FolderNotch.png',
    BookOpen: '/images/light/BookOpen.png',
    
    // Pages Icons
    IdentificationBadge: '/images/light/IdentificationBadge.png',
    IdentificationCard: '/images/light/IdentificationCard.png',
    UsersThree: '/images/light/UsersThree.png',
    Notebook: '/images/light/Notebook.png',
    ChatsTeardrop: '/images/light/ChatsTeardrop.png',
    
    // Notifications & Status
    BugBeetle: '/images/light/BugBeetle.png',
    User: '/images/light/User.png',
    Broadcast: '/images/light/Broadcast.png',
    
    // 3D Assets
    '3D03': '/images/light/3D03.png',
    '3D05': '/images/light/3D05.png',
    '3D08': '/images/light/3D08.png',
    
    // User Avatars
    Female05: '/images/light/Female05.png',
    Female08: '/images/light/Female08.png',
    Female09: '/images/light/Female09.png',
    Female15: '/images/light/Female15.png',
    Male06: '/images/light/Male06.png',
    Male07: '/images/light/Male07.png',
    Male08: '/images/light/Male08.png',
    Male11: '/images/light/Male11.png',
  },
  
  dark: {
    // Navigation & UI
    ArrowLineRight: '/images/dark/ArrowLineRight.png',
    ArrowLineLeft: '/images/dark/ArrowLineLeft.png',
    Sun: '/images/dark/Sun.png',
    ClockCounterClockwise: '/images/dark/ClockCounterClockwise.png',
    Bell: '/images/dark/Bell.png',
    Sidebar: '/images/dark/Sidebar.png',
    Star: '/images/dark/Star.png',
    Search: '/images/dark/Search.png',
    DotsThreeOutlineVertical: '/images/dark/DotsThreeOutlineVertical.png',
    
    // Trends & Analytics
    ArrowRise: '/images/dark/ArrowRise.png',
    ArrowFall: '/images/dark/ArrowFall.png',
    BarChart: '/images/dark/BarChart.png',
    CurvChart: '/images/dark/CurvChart.png',
    WorldMap: '/images/dark/World Map.png',
    Chart01: '/images/dark/01.png',
    
    // Dashboard Icons
    ChartPieSlice: '/images/dark/ChartPieSlice.png',
    ShoppingBagOpen: '/images/dark/ShoppingBagOpen.png',
    FolderNotch: '/images/dark/FolderNotch.png',
    BookOpen: '/images/dark/BookOpen.png',
    
    // Pages Icons
    IdentificationBadge: '/images/dark/IdentificationBadge.png',
    IdentificationCard: '/images/dark/IdentificationCard.png',
    UsersThree: '/images/dark/UsersThree.png',
    Notebook: '/images/dark/Notebook.png',
    ChatsTeardrop: '/images/dark/ChatsTeardrop.png',
  }
};

// Main images export
export const images = imagePaths;

// Helper function to get theme-appropriate image
export const getThemeImage = (imageName, theme = 'light') => {
  return images[theme]?.[imageName] || images.light[imageName];
};

// Export individual categories for easier access
export const lightImages = images.light;
export const darkImages = images.dark;

export default images;