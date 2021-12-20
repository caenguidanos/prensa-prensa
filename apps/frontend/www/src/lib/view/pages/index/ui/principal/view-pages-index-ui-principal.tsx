import { styled } from "$stitches";

const ViewPagesIndexPrincipalContainer = styled("div", {
   display: "grid",
   borderBottom: "1px solid $neutral800",
   paddingBottom: "$10",
   "@lg": {
      gridCols: 4
   }
});

const ViewPagesIndexPrincipalImg = styled("img", {
   filter: "grayscale(100%)",
   float: "left",
   aspectRatio: "16 / 9",
   width: "$108",
   height: "$64",
   margin: "$5"
});

const ViewPagesIndexPrincipalFirstColumn = styled("p", {
   color: "$neutral800",
   fontFamily: "$serif",
   "&::first-letter": {
      textTransform: "uppercase",
      fontSize: "$5xl",
      fontWeight: "$bold",
      float: "left",
      marginRight: "$5"
   },
   "@lg": {
      gridColSpan: 3,
      borderRightWidth: "1px",
      borderRightColor: "$neutral700",
      paddingRight: "$5",
      paddingLeft: "$5"
   }
});

const ViewPagesIndexPrincipalSecondColumn = styled("div", {
   color: "$neutral800",
   fontFamily: "$serif",
   "@lg": {
      gridColSpan: 1,
      paddingLeft: "$5"
   }
});

const ViewPagesIndexPrincipalSecondColumnIntersection = styled("h5", {
   color: "$neutral800",
   fontFamily: "$serif",
   borderColor: "$neutral800",
   borderWidth: "3px 0 3px 0",
   borderStyle: "double none double none",
   textAlign: "center",
   fontSize: "$3xl",
   my: "$5",
   py: "$2"
});

export const ViewPagesIndexUiPrincipal: React.FunctionComponent = () => {
   return (
      <ViewPagesIndexPrincipalContainer>
         <ViewPagesIndexPrincipalFirstColumn>
            <ViewPagesIndexPrincipalImg
               src="http://www.quehacerenvalencia.es/wp-content/uploads/dia-mundial-guia-de-turismo-en-Valencia.jpg"
               alt="valencia"
            />

            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
            <br />
            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
         </ViewPagesIndexPrincipalFirstColumn>

         <ViewPagesIndexPrincipalSecondColumn>
            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
            <ViewPagesIndexPrincipalSecondColumnIntersection>
               {"¿Qui va fer aixó?"}
            </ViewPagesIndexPrincipalSecondColumnIntersection>
            {
               "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit quidem nemo magnam saepe quis reiciendis corporis recusandae iste ducimus architecto iure libero minus, exercitationem repellat numquam fuga quibusdam eveniet."
            }
         </ViewPagesIndexPrincipalSecondColumn>
      </ViewPagesIndexPrincipalContainer>
   );
};
