import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Box } from "grommet";
import { chunk, sum } from "lodash";

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints = [1] }) => {
  const aspectRatios = images.map(image => image.aspectRatio);

  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  );

  return (
    <div>
      {images.map((image, i) => (
        <StyledBox
          as={Image}
          fluid={image}
          title={image.caption}
          width={rowAspectRatioSumsByBreakpoints.map(
            (rowAspectRatioSums, j) => {
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

              return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
            }
          )}
        />
      ))}
    </div>
  );
};

const StyledBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  transition: filter 0.3s;
  :hover {
    filter: brightness(87.5%);
  }
`;

export default Gallery;
