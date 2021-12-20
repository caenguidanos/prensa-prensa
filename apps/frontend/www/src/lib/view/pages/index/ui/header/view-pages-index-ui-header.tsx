import { styled } from "$stitches";

const ViewPagesIndexUiHeaderContainer = styled("div", {
   display: "grid",
   gap: "$5"
});

const ViewPagesIndexUiHeaderImpactTitle = styled("h1", {
   textAlign: "center",
   fontFamily: "$pacifico",
   color: "$neutral800",
   fontSize: "$5xl",
   "@md": {
      fontSize: "$8xl"
   },
   "@lg": {
      fontSize: "120px"
   }
});

const ViewPagesIndexUiHeaderDetail = styled("div", {
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   color: "$neutral800",
   fontSize: "$sm",
   fontFamily: "$serif"
});

const locale = "es-ES";
const dateLocale = new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(new Date());
const priceLocale = new Intl.NumberFormat(locale, {
   style: "currency",
   currency: "EUR"
}).format(2.5);

export const ViewPagesIndexUiHeader: React.FunctionComponent = () => {
   return (
      <ViewPagesIndexUiHeaderContainer>
         <ViewPagesIndexUiHeaderDetail>
            <span>{"Nº341"}</span>
            <span>{dateLocale}</span>
            <span>{priceLocale}</span>
         </ViewPagesIndexUiHeaderDetail>

         <ViewPagesIndexUiHeaderImpactTitle>{"Terreta news!"}</ViewPagesIndexUiHeaderImpactTitle>
      </ViewPagesIndexUiHeaderContainer>
   );
};
