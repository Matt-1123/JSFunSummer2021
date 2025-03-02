import { expect } from "chai";
global["window"] = { setTimeout };
import {
  getBooksApi,
  setData,
  getData,
} from "../../exercises/16-promises/promises.js";

describe("Promise", () => {
  describe("getBooksApi", () => {
    it("should be a promise that will resolve into the response that is like the instructions", async () => {
      const promise = getBooksApi();
      expect(promise).to.be.an.instanceOf(Promise);

      const response = await getBooksApi();
      expect(response).to.be.an("object");
      expect(response).to.deep.equal({
        category: "books",
        subCategory: "graphic novels",
        data: [
          {
            id: "0c8cb1b2",
            title: "Berlin",
            authors: ["Jason Lutes"],
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51DhbDeVIVL._SX388_BO1,204,203,200_.jpg",
          },
          {
            id: "cb195709",
            title: "Hey, Kiddo",
            authors: ["Jarrett J. Krosoczka"],
            image:
              "https://images-na.ssl-images-amazon.com/images/I/517I7YRvHBL._SX351_BO1,204,203,200_.jpg",
          },
          {
            id: "77ae31c1",
            title: "On a Sunbeam",
            authors: ["Tillie Walden"],
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51Ukxxbo-mL._SX359_BO1,204,203,200_.jpg",
          },
        ],
      });
    });
  });
  describe("data", () => {
    let testNum = 0;
    beforeEach((done) => {
      testNum++;
      if (testNum > 1) {
        setTimeout(() => {
          done();
        }, 60);
      } else done();
    });
    it("should not be set until getBooksApi() is called upon. NOTE that this will pass if you haven't completed the assignment yet.", () => {
      expect(getData()).to.be.undefined;
    });
    it("should equal to the array of graphic novels after getBooksApi() is called upon", async () => {
      await setData();
      expect(getData()).to.deep.equal([
        {
          id: "0c8cb1b2",
          title: "Berlin",
          authors: ["Jason Lutes"],
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51DhbDeVIVL._SX388_BO1,204,203,200_.jpg",
        },
        {
          id: "cb195709",
          title: "Hey, Kiddo",
          authors: ["Jarrett J. Krosoczka"],
          image:
            "https://images-na.ssl-images-amazon.com/images/I/517I7YRvHBL._SX351_BO1,204,203,200_.jpg",
        },
        {
          id: "77ae31c1",
          title: "On a Sunbeam",
          authors: ["Tillie Walden"],
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51Ukxxbo-mL._SX359_BO1,204,203,200_.jpg",
        },
      ]);
    });
  });
});
