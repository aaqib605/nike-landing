import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    id: "1",
    sizes: [
      "UK 6 (EU 40)",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5",
      "UK 11",
    ],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. This AF-1's classic '80s construction pairs with bold details for style that tracks whether you're on the court or on the go.",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    id: "2",
    sizes: ["UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 11"],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. This AF-1's classic '80s construction pairs with bold details for style that tracks whether you're on the court or on the go.",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    id: "3",
    sizes: [
      "UK 6 (EU 40)",
      "UK 6.5",
      "UK 7",
      "UK 7.5",
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
    ],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. This AF-1's classic '80s construction pairs with bold details for style that tracks whether you're on the court or on the go.",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    id: "4",
    sizes: [
      "UK 6 (EU 40)",
      "UK 6.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
      "UK 10.5",
      "UK 11",
    ],
    description:
      "Comfortable, durable and timeless—it's number 1 for a reason. This AF-1's classic '80s construction pairs with bold details for style that tracks whether you're on the court or on the go.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
