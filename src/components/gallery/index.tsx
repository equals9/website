import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
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
    <StyledGalleryWrapper>
      {images.map((image, i) => (
        <StyledBox
          key={image.src}
          title={image.caption}
          width={rowAspectRatioSumsByBreakpoints.map(
            // Return a value for each breakpoint
            (rowAspectRatioSums, j) => {
              // Find out which row the image is in and get its aspect ratio sum
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

              return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
            }
          )}
        >
          <Image fluid={image} />
        </StyledBox>
      ))}
    </StyledGalleryWrapper>
  );
};

const StyledBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  transition: filter 0.3s;
  border-radius: 6px;

  padding: 1em;
`;

const StyledGalleryWrapper = styled(Box)`
  margin: -1em;
`;

export default Gallery;
