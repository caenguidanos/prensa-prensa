import Link from "next/link";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { GitHubLogoIcon, TwitterLogoIcon, GearIcon } from "@radix-ui/react-icons";

import { styled, config, keyframes } from "$stitches";

import { useScroll, useUntilDistinctScroll, hexToRgba } from "../../util";

const ViewComponentsAppBarPrimitive = styled("nav", {
   position: "sticky",
   top: "$0",
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   minHeight: "2rem",
   backdropFilter: "blur(10px)",
   backgroundColor: `rgba(${hexToRgba(config.theme.colors.amber100, 0.7)})`,
   zIndex: "1",
   px: "$2",
   py: "$2",
   shadow: "sm",
   transitionProperty: "box-shadow",
   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
   transitionDuration: "350ms"
});

const ViewComponentsAppBarLinkContainerPrimitive = styled("div", {
   display: "flex",
   alignItems: "center",
   justifyContent: "start",
   gap: "$4"
});

const ViewComponentsAppBarLinkPrimitive = styled("a", {
   fontFamily: "$serif",
   fontWeight: "$medium",
   fontSize: "$xl",
   color: "$neutral800",
   transitionProperty: "color",
   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
   transitionDuration: "350ms",
   "&:hover": {
      color: "$neutral900",
      textDecoration: "underline"
   }
});

const ViewComponentsAppBarAvatarContainerPrimitive = styled("div", {
   display: "flex",
   alignItems: "center",
   justifyContent: "end",
   position: "static"
});

const ViewComponentsAppBarGearPrimitive = styled(GearIcon, {
   userSelect: "none",
   width: "$6",
   height: "$6",
   color: "$neutral700",
   cursor: "pointer",
   transitionProperty: "all",
   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
   transitionDuration: "50ms"
});

const slideUpAndFade = keyframes({
   "0%": { opacity: 0, transform: "translateY(2px)" },
   "100%": { opacity: 1, transform: "translateY(0)" }
});

const slideRightAndFade = keyframes({
   "0%": { opacity: 0, transform: "translateX(-2px)" },
   "100%": { opacity: 1, transform: "translateX(0)" }
});

const slideDownAndFade = keyframes({
   "0%": { opacity: 0, transform: "translateY(-2px)" },
   "100%": { opacity: 1, transform: "translateY(0)" }
});

const slideLeftAndFade = keyframes({
   "0%": { opacity: 0, transform: "translateX(2px)" },
   "100%": { opacity: 1, transform: "translateX(0)" }
});

const PopoverContent = styled(DropdownMenuPrimitive.Content, {
   display: "grid",
   gap: "$3",
   borderRadius: "$sm",
   padding: "$4",
   width: "$60",
   color: "$neutral100",
   backgroundColor: "$neutral800",
   shadow: "md",
   "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
         '&[data-side="top"]': { animationName: slideDownAndFade },
         '&[data-side="right"]': { animationName: slideLeftAndFade },
         '&[data-side="bottom"]': { animationName: slideUpAndFade },
         '&[data-side="left"]': { animationName: slideRightAndFade }
      }
   },
   "&:focus": {
      shadow: "md"
   }
});

const PopoverArrow = styled(DropdownMenuPrimitive.Arrow, {
   fill: "$neutral800"
});

const PopoverContentTitle = styled("p", {
   fontFamily: "$serif",
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between"
});

const PopoverContentTitleIcons = styled("div", {
   display: "flex",
   alignItems: "center",
   justifyContent: "end",
   gap: "$2"
});

const PopoverContentSubtitle = styled("p", {
   fontFamily: "$serif",
   fontSize: "$sm"
});

export const ViewComponentsAppBar: React.FunctionComponent = () => {
   const [position] = useScroll();
   const [isScrollPositive] = useUntilDistinctScroll();

   const rotate = `rotate(${position}deg)`;
   const shadow = isScrollPositive ? "sm" : "none";

   return (
      <ViewComponentsAppBarPrimitive data-testid="ViewComponentsAppBar" css={{ shadow }}>
         <ViewComponentsAppBarLinkContainerPrimitive>
            <Link href="/" passHref>
               <ViewComponentsAppBarLinkPrimitive>News</ViewComponentsAppBarLinkPrimitive>
            </Link>

            <Link href="/archive" passHref>
               <ViewComponentsAppBarLinkPrimitive>Archive</ViewComponentsAppBarLinkPrimitive>
            </Link>
         </ViewComponentsAppBarLinkContainerPrimitive>

         <ViewComponentsAppBarAvatarContainerPrimitive>
            <DropdownMenuPrimitive.Root>
               <DropdownMenuPrimitive.Trigger asChild>
                  <ViewComponentsAppBarGearPrimitive
                     aria-label="Ver perfil"
                     style={{ transform: rotate }}
                  />
               </DropdownMenuPrimitive.Trigger>

               <PopoverContent sideOffset={0} alignOffset={7}>
                  <PopoverContentTitle>
                     <span>My profile</span>
                     <PopoverContentTitleIcons>
                        <a
                           href="https://github.com/caenguidanos"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           <GitHubLogoIcon></GitHubLogoIcon>
                        </a>

                        <a
                           href="https://www.linkedin.com/in/caenguidanos"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           <TwitterLogoIcon></TwitterLogoIcon>
                        </a>
                     </PopoverContentTitleIcons>
                  </PopoverContentTitle>
                  <hr />
                  <PopoverContentSubtitle>Software Engineer</PopoverContentSubtitle>

                  <PopoverArrow />
               </PopoverContent>
            </DropdownMenuPrimitive.Root>
         </ViewComponentsAppBarAvatarContainerPrimitive>
      </ViewComponentsAppBarPrimitive>
   );
};
