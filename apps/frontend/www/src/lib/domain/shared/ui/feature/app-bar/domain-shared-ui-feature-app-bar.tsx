import Link from "next/link";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { styled, config, keyframes } from "$stitches";

import { useAppBar } from "../../state";
import { useUntilDistinctScroll, hexToRgba } from "../../util";

const DomainSharedUiAppBarPrimitive = styled("nav", {
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

const DomainSharedUiAppBarLinkContainerPrimitive = styled("div", {
   display: "flex",
   alignItems: "center",
   justifyContent: "start",
   gap: "$4"
});

const DomainSharedUiAppBarLinkPrimitive = styled("a", {
   position: "relative",
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

const DomainSharedUiAppBarLinkPrimitiveBadge = styled("span", {
   position: "absolute",
   top: 0,
   right: -17
});

const DomainSharedUiAppBarLinkPrimitiveBadgeContent = styled("span", {
   fontFamily: "$mono",
   fontWeight: "$medium",
   fontSize: "$2xs",
   color: "$neutral100",
   backgroundColor: "$red700",
   borderRadius: "$full",
   height: "$2",
   width: "$2",
   padding: "$2",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   textAlign: "match-parent"
});

const DomainSharedUiAppBarAvatarContainerPrimitive = styled("div", {
   display: "flex",
   alignItems: "center",
   justifyContent: "end",
   position: "static"
});

const DomainSharedUiAppBarAvatarPrimitive = styled("img", {
   userSelect: "none",
   width: "$6",
   height: "$6",
   cursor: "pointer",
   borderRadius: "$full",
   shadow: "md",
   transitionProperty: "all",
   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
   transitionDuration: "350ms",
   "&:hover": {
      shadow: "sm"
   }
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

export const DomainSharedUiAppBar: React.FunctionComponent = () => {
   const [state] = useAppBar();

   const [isScrollPositive] = useUntilDistinctScroll();

   const shadow = isScrollPositive ? "sm" : "none";

   return (
      <DomainSharedUiAppBarPrimitive data-testid="DomainSharedUiAppBar" css={{ shadow }}>
         <DomainSharedUiAppBarLinkContainerPrimitive>
            <Link href="/" passHref>
               <DomainSharedUiAppBarLinkPrimitive>News</DomainSharedUiAppBarLinkPrimitive>
            </Link>

            <Link href="/archive" passHref>
               <DomainSharedUiAppBarLinkPrimitive>
                  Archive{" "}
                  {state.count ? (
                     <DomainSharedUiAppBarLinkPrimitiveBadge>
                        <DomainSharedUiAppBarLinkPrimitiveBadgeContent>
                           {state.count}
                        </DomainSharedUiAppBarLinkPrimitiveBadgeContent>
                     </DomainSharedUiAppBarLinkPrimitiveBadge>
                  ) : null}
               </DomainSharedUiAppBarLinkPrimitive>
            </Link>
         </DomainSharedUiAppBarLinkContainerPrimitive>

         <DomainSharedUiAppBarAvatarContainerPrimitive>
            <DropdownMenuPrimitive.Root>
               <DropdownMenuPrimitive.Trigger asChild>
                  <DomainSharedUiAppBarAvatarPrimitive src="/img/avatar.svg" />
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
         </DomainSharedUiAppBarAvatarContainerPrimitive>
      </DomainSharedUiAppBarPrimitive>
   );
};
