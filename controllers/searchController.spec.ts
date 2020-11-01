import { getSearch } from "./searchController";

describe("Search Controller", () => {
  describe("getSearch", () => {
    const mockReq: any = (name = "farhan") => {
      return {
        params: {
          name,
        },
      };
    };

    const mockRes: any = {
      json: jest.fn(),
      status: jest.fn(() => mockRes),
    };

    const next = jest.fn();

    it("should execute getService successfully", async () => {
      await getSearch(mockReq(), mockRes, next);
    });
  });
});
