import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage + 1)
        )
      : [];
  return (
    <Stack
      direction={["column", "row"]}
      spacing={6}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > siblingsCount + 1 && (
          <>
            <PaginationItem onChangePage={onChangePage} number={1} />
            {currentPage > Math.round(2 + siblingsCount) && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                onChangePage={onChangePage}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem
          onChangePage={onChangePage}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onChangePage={onChangePage}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage < lastPage - siblingsCount - 1 && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onChangePage={onChangePage} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
