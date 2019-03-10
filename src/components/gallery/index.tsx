import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Box } from "rebass";
import { Text } from "grommet";
import { chunk, sum } from "lodash";

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints = [1] }) => {
  const aspectRatios = images.map(image => {
    return image.mediaMetadata.width / image.mediaMetadata.height;
  });

  console.log("TCL: Gallery -> aspectRatios", aspectRatios);

  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  );

  return (
    <StyledGalleryWrapper>
      {images.map((image, i) => (
        <>
          <StyledBox
            width={rowAspectRatioSumsByBreakpoints.map(
              // Return a value for each breakpoint
              (rowAspectRatioSums, j) => {
                // Find out which row the image is in and get its aspect ratio sum
                const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
                const imgAspectRatio =
                  image.mediaMetadata.width / image.mediaMetadata.height;

                return `${(imgAspectRatio / rowAspectRatioSum) * 100}%`;
              }
            )}
          >
            <StyledImg src={image.baseUrl} />
            <Caption color="light-5" size="xsmall">
              {image.mediaMetadata.creationTime}
            </Caption>
          </StyledBox>
        </>
      ))}
    </StyledGalleryWrapper>
  );
};

const Caption = styled(Text)`
  font-family: "Inconsolata", monospace;
`;

const StyledBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  transition: filter 0.3s;
  border-radius: 6px;

  padding: 1rem;
`;

const StyledImg = styled.img`
  border-radius: 4px;
`;

const StyledGalleryWrapper = styled(Box)`
  margin: -1rem;
`;

export default Gallery;
