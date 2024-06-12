import { type ReactNode } from 'react'
import { type Author as NextAuthor } from 'next/dist/lib/metadata/types/metadata-types'

export interface Title {
  title: string
}

export interface Description {
  description: string
}

export type Header = Title & Description

export type Author = Required<NextAuthor> & Description

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface ImageData {
  image: ImageProps
}

export interface NavItem extends Title {
  href: string
}

export interface Nav {
  items: NavItem[]
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithChildren

export interface Item extends Header, Partial<ImageData> {
  slug?: string
}

export interface Article extends Item {
  items: string[]
}

export interface Section extends Item {
  items: Item[]
}

export type Subcategory = Item & Partial<Pick<Section, 'items'>>

export interface Category extends Item {
  items: Subcategory[]
}

export interface Product extends Item {
  author: string
}

export interface CardStackItem {
  name: string
  designation: string
  content: ReactNode
  image: ImageProps
}

export interface SiteConfig {
  name: string,
  slogan: string
  description: string,
  url: URL | string,
  author: NextAuthor,
  mainNav: MainNavItem[]
}

export type NavItemExternal = Pick<SiteConfig, 'name' | 'url'> & Partial<ImageData>

export interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

export interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
