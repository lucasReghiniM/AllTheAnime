export interface StylesProps {
  font?: any;
  color?: any;
  width?: any;
  height?: any;
  margin?: any;
  background?: any;
  radius?: any;
  position?: any;
  align?: any;
  justify?: any;
  zIndex?: any;
  tAlign?: any;
  custom?: any;
  maxWidth?: any;
  maxHeight?: any;
  marginLeft?: string;
}

export interface CardProps {
  title: string;
  description: string;
  rate: string;
  thumbnail: any;
}

export interface CarouselDataProps {
  data: any;
  title: string;
}

export interface LayoutProps  { 
  children: React.ReactNode
}