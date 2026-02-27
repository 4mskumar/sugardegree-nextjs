'use client'

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Upload", ariaLabel: "Upload your cake designs", link: "/upload" },
  { label: "T&C", ariaLabel: "View terms and conditions", link: "/terms" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/sugardegree.in" },
];

export default function  Menu() {
    return (


        <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#e99099"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#A5CFC8"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#e23547"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        />

    )
}