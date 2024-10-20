declare module '@tabler/icons-react' {
  export interface TablerIconsProps {
    size?: number; // Size of the icon
    color?: string; // Color of the icon
    strokeWidth?: number; // Stroke width of the icon
    className?: string; // Additional CSS classes
  }

  // Generic export for any icon component
  export const IconMenu2: React.FC<TablerIconsProps>;
  export const IconBrandTwitter: React.FC<TablerIconsProps>;
  export const IconBolt: React.FC<TablerIconsProps>;
  export const IconCircleCheckFilled: React.FC<TablerIconsProps>;
  export const IconBrandLinkedin: React.FC<TablerIconsProps>;
  export const IconBrandFacebook: React.FC<TablerIconsProps>;
  export const IconArticle: React.FC<TablerIconsProps>;
  export const IconBriefcase2: React.FC<TablerIconsProps>;
  export const IconMail: React.FC<TablerIconsProps>;
  export const IconMessage2: React.FC<TablerIconsProps>;
  // Add other icons you plan to use in a similar manner
}
