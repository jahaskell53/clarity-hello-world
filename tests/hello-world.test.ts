import { principalCV, stringCV } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/clarinet/feature-guides/test-contract-with-clarinet-sdk
*/

describe("example tests", () => {
  it("ensures simnet is well initalised", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  it("ensures can call count-up", () => {
    const { result } = simnet.callPublicFn(
      "hello-world",
      "count-up",
      [],
      address1
    );
    // expect result to be ok
    expect(result).toBeTruthy();

    // then get the counter value
    // const argument = stringCV(address1, "utf8");
    const newArgument = principalCV(address1);
    const { result: counter } = simnet.callReadOnlyFn(
      "hello-world",
      "get-count",
      [newArgument],
      address1
    );
    // expect counter to be 1
    expect(counter).toBeUint(1);
  });

  // it("shows an example", () => {
  //   const { result } = simnet.callReadOnlyFn("counter", "get-counter", [], address1);
  //   expect(result).toBeUint(0);
  // });
});
